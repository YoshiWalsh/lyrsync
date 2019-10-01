# lyrsync

lyrsync is a project to display immersive synchronised lyrics in a browser.

## How does it work?

Lyrics are provided in files based on the [Enhanced LRC format](https://en.wikipedia.org/wiki/LRC_(file_format)#Enhanced_format). Some extensions have been made to this format:

 - "Lines" from the LRC format are now referred to as "cards". Each card can span multiple lines in the text file.
 - Each card can contain multiple "voices". For example, you could have separate voices for the lead vocalist & backing vocalists, or you could use one voice for a song's original lyrics and another voice for a translation.
 - Compressed/deduplicated LRC files (ones where a single line in the file might have multiple Line Time Tags) are no longer supported. (They didn't make much sense if you were using Word Time Tags anyway)

## How do the animations work?

Typically if you want to allow styling animations from CSS, you would use either transitions or animations. However when it comes to synchronising those animations with music, neither approach is very reliable. The main reason for this is that it's impossible for JavaScript to 'seek' through an animation or transition. You'd need to start the transition/animation at the exact right moment, which means it would be framerate-dependant. Additionally, if the user quickly seeked through the song the animations would go haywire.

In previous web-based lyrics synchronisation projects I made, (e.g. [LyrTube](https://github.com/JoshuaWalsh/LyrTube) or [etoile et toi](http://sandbox.ymindustries.com/etoile-et-toi/)) I handled the animations purely in JavaScript. But this approach meant that in order to change any styling, you would have to change the JavaScript code. I wanted to style different songs in different ways, but I didn't want to have to maintain separate JavaScript for each song. Thanks to [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) I have managed to achieve CSS-based animations that are completely controllable via JavaScript.

### Timers

The core concept this library introduces is timers. Timers allow lyrics.js to provide a song's CSS with timing information. The stylesheet uses the custom properties to request certain timers from the script, and the script uses custom properties to continuously update the values of those timers.

Different types of timers are available on different elements:

`.lyricsContainer` element:
 - cue-timers (not yet implemented)
`.card` elements:
 - card-timers
 - word-timers (not yet implemented)
`.word` elements:
 - word-timers

Each timer has the following arguments:
 - name
 - fromReference
 - fromOffset
 - toReference
 - toOffset
 - forwardTimingFunction (optional, defaults to "linear")
 - reverseTimingFunction (optional, defaults to "none")
 - postprocessingFunction (optional, defaults to "none")

You can add multiple timers of the same type to a single element by comma separating them.

Let's look at a simple timer as an example:

```scss
.card {
    --card-timers: --fade-in start -0.5 start 0 linear none none;

    opacity: var(--fade-in);
}
```

This timer is named `--fade-in`, so the value of this timer will be given in the `--fade-in` property. You can see that this property is used for the opacity value.

Next, look at `start -0.5`. This is the "from" time of the timer, and it's made up of a reference and an offset. This timer starts 0.5 seconds before the `start` time of the card.  
The `start 0` after that is the "to" time of the timer. In this case there's no offset, so the timer will end at the `start` time of the card.

`linear` represents the forward timing function for this timer. Linear is the most basic one, the value of the timer will increase at a constant rate between the from and end times of the timer. So 0.5 seconds before the start of the card, it will be 0, 0.4 seconds before the start of the card it will be 0.2, 0.3 seconds before the start of the card it will be 0.4, and at the start of the card it will be 1. You can use CSS easing functions such as `easeInOut` to control the way the animation progresses. (Note that `cubic-bezier(w, x, y, z)` is not currently supported)

The first `none` specifies that we don't want a reverse timing function here. This is because we want the card to fade in, but not out again. If a reverse timing function is specified then for the first half of the timer the value will go from 0 to 1 according to the forward timing function, and for the second half of the timer the value will go from 1 to 0 according to the reverse timing function.

The second `none` specifies that we don't want to use post-processing function. Post-processing functions can be used for more complex effects, such as making an element shake.

During the initial `render` phase (after the .lrc file has been parsed and while the HTML elements are being created) the requested timers are read by the JavaScript and stored. After this point the timers cannot be modified.

Every frame in the `redraw` phase the value for each timer will be computed and the associated custom property will be updated.

### Performance

I don't think the designers of CSS expected for someone to change custom property values every single frame, and if you aren't careful this can have an adverse effect on performance. The JavaScript takes some steps to minimise performance impact, for example it only updates a timer's custom property if the value of the timer has changed.

But the real key for performance is avoiding [CSS Triggers](https://csstriggers.com/). The stylesheet should avoid having timers cause trigger paints and should REALLY avoid having timers trigger layouts.

## Getting started

```bash
yarn install
yarn dev
```

## Todo

 - Use [Popcorn.js](https://github.com/menismu/popcorn-js) instead of Youtube API, will allow media from other sources
 - Add support for offset ID Tag
 - Add support for cue tags, which will allow triggering extra animations/effects at arbitrary times
 - Add some more songs!