import bezier from 'bezier-easing';

const csv = [
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "pro",
        "timecode": 0,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "duced",
        "timecode": 1,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "by",
        "timecode": 2,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "",
        "timecode": 3,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "dj",
        "timecode": 4,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "pre",
        "timecode": 5,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "1",
        "space": "1",
        "text": "mier",
        "timecode": 6,
        "shown": false
    },
    {
        "classed": 1,
        "linebreak": "0",
        "space": "0",
        "text": "in",
        "timecode": 0,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "tro",
        "timecode": 1,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "1",
        "text": "uh",
        "timecode": 2,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "1",
        "text": "huh",
        "timecode": 3,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "1",
        "text": "uh",
        "timecode": 4,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "the",
        "timecode": 5,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "sa",
        "timecode": 6,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "1",
        "text": "ga",
        "timecode": 7,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "con",
        "timecode": 8,
        "shown": false
    },
    {
        "classed": 1,
        "linebreak": "0",
        "space": "0",
        "text": "ti",
        "timecode": 9,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "1",
        "space": "1",
        "text": "nues",
        "timecode": 10,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "mo",
        "timecode": 11,
        "shown": false
    },
    {
        "classed": 1,
        "linebreak": "0",
        "space": "1",
        "text": "tion",
        "timecode": 12,
        "shown": false
    },
    {
        "classed": 1,
        "linebreak": "0",
        "space": "0",
        "text": "pic",
        "timecode": 13,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "1",
        "text": "ture",
        "timecode": 14,
        "shown": false
    },
    {
        "classed": 1,
        "linebreak": "1",
        "space": "1",
        "text": "shit",
        "timecode": 15,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "verse",
        "timecode": 0,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i'm",
        "timecode": 1,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "done",
        "timecode": 2,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "ta",
        "timecode": 3,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "1",
        "space": "1",
        "text": "lking",
        "timecode": 4,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "ran",
        "timecode": 5,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "up",
        "timecode": 6,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "in",
        "timecode": 7,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "the",
        "timecode": 8,
        "shown": false
    },
    {
        "classed": 1,
        "linebreak": "0",
        "space": "1",
        "text": "spot",
        "timecode": 9,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "gun",
        "timecode": 10,
        "shown": false
    },
    {
        "classed": 3,
        "linebreak": "0",
        "space": "0",
        "text": "smo",
        "timecode": 11,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "1",
        "space": "1",
        "text": "king",
        "timecode": 12,
        "shown": false
    },
    {
        "classed": 1,
        "linebreak": "0",
        "space": "1",
        "text": "shot",
        "timecode": 13,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "it",
        "timecode": 14,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "in",
        "timecode": 15,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "the",
        "timecode": 16,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "air",
        "timecode": 17,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "one",
        "timecode": 18,
        "shown": false
    },
    {
        "classed": 3,
        "linebreak": "0",
        "space": "1",
        "text": "woke",
        "timecode": 19,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "1",
        "space": "1",
        "text": "him",
        "timecode": 20,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "son",
        "timecode": 21,
        "shown": false
    },
    {
        "classed": 3,
        "linebreak": "0",
        "space": "0",
        "text": "soa",
        "timecode": 22,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "1",
        "text": "king",
        "timecode": 23,
        "shown": false
    },
    {
        "classed": 6,
        "linebreak": "0",
        "space": "0",
        "text": "swea",
        "timecode": 24,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "1",
        "text": "ting",
        "timecode": 25,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "in",
        "timecode": 26,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "his",
        "timecode": 27,
        "shown": false
    },
    {
        "classed": 6,
        "linebreak": "0",
        "space": "1",
        "text": "bed",
        "timecode": 28,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "like",
        "timecode": 29,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "dun'",
        "timecode": 30,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "0",
        "text": "thin",
        "timecode": 31,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "1",
        "text": "king",
        "timecode": 32,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "to",
        "timecode": 33,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "0",
        "text": "him",
        "timecode": 34,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "self",
        "timecode": 35,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "what",
        "timecode": 36,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "done",
        "timecode": 37,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "pro",
        "timecode": 38,
        "shown": false
    },
    {
        "classed": 3,
        "linebreak": "0",
        "space": "1",
        "text": "voked",
        "timecode": 39,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "1",
        "space": "1",
        "text": "him",
        "timecode": 40,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "his",
        "timecode": 41,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "thoughts",
        "timecode": 42,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "is",
        "timecode": 43,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "ra",
        "timecode": 44,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "1",
        "text": "cing",
        "timecode": 45,
        "shown": false
    },
    {
        "classed": 7,
        "linebreak": "0",
        "space": "1",
        "text": "like",
        "timecode": 46,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "a",
        "timecode": 47,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "vul",
        "timecode": 48,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "1",
        "space": "1",
        "text": "can",
        "timecode": 49,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i",
        "timecode": 50,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "swear",
        "timecode": 51,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i",
        "timecode": 52,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "saw",
        "timecode": 53,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "a",
        "timecode": 54,
        "shown": false
    },
    {
        "classed": 7,
        "linebreak": "0",
        "space": "1",
        "text": "light",
        "timecode": 55,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "bulb",
        "timecode": 56,
        "shown": false
    },
    {
        "classed": 6,
        "linebreak": "1",
        "space": "1",
        "text": "when",
        "timecode": 57,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "he",
        "timecode": 58,
        "shown": false
    },
    {
        "classed": 7,
        "linebreak": "0",
        "space": "0",
        "text": "fi",
        "timecode": 59,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "na",
        "timecode": 60,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "1",
        "text": "lly",
        "timecode": 61,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "0",
        "text": "re",
        "timecode": 62,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "a",
        "timecode": 63,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "lized",
        "timecode": 64,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "who",
        "timecode": 65,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "was",
        "timecode": 66,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "the",
        "timecode": 67,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "cul",
        "timecode": 68,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "1",
        "space": "1",
        "text": "prit",
        "timecode": 69,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i",
        "timecode": 70,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "said",
        "timecode": 71,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "yeah",
        "timecode": 72,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "0",
        "text": "re",
        "timecode": 73,
        "shown": false
    },
    {
        "classed": 6,
        "linebreak": "0",
        "space": "0",
        "text": "mem",
        "timecode": 74,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "ber",
        "timecode": 75,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "1",
        "text": "me",
        "timecode": 76,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "from",
        "timecode": 77,
        "shown": false
    },
    {
        "classed": 6,
        "linebreak": "0",
        "space": "1",
        "text": "friend",
        "timecode": 78,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "or",
        "timecode": 79,
        "shown": false
    },
    {
        "classed": 3,
        "linebreak": "0",
        "space": "1",
        "text": "foe",
        "timecode": 80,
        "shown": false
    },
    {
        "classed": 6,
        "linebreak": "1",
        "space": "1",
        "text": "when",
        "timecode": 81,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i",
        "timecode": 82,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "told",
        "timecode": 83,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "you",
        "timecode": 84,
        "shown": false
    },
    {
        "classed": 3,
        "linebreak": "0",
        "space": "1",
        "text": "don't",
        "timecode": 85,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "e",
        "timecode": 86,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "ver",
        "timecode": 87,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "e",
        "timecode": 88,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "ver",
        "timecode": 89,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "come",
        "timecode": 90,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "ar",
        "timecode": 91,
        "shown": false
    },
    {
        "classed": 8,
        "linebreak": "0",
        "space": "1",
        "text": "ound",
        "timecode": 92,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "here",
        "timecode": 93,
        "shown": false
    },
    {
        "classed": 3,
        "linebreak": "0",
        "space": "1",
        "text": "no",
        "timecode": 94,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "1",
        "space": "1",
        "text": "more",
        "timecode": 95,
        "shown": false
    },
    {
        "classed": 7,
        "linebreak": "0",
        "space": "1",
        "text": "time",
        "timecode": 96,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "to",
        "timecode": 97,
        "shown": false
    },
    {
        "classed": 9,
        "linebreak": "0",
        "space": "1",
        "text": "pay",
        "timecode": 98,
        "shown": false
    },
    {
        "classed": 8,
        "linebreak": "0",
        "space": "1",
        "text": "now",
        "timecode": 99,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "you",
        "timecode": 100,
        "shown": false
    },
    {
        "classed": 7,
        "linebreak": "0",
        "space": "1",
        "text": "try",
        "timecode": 101,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "to",
        "timecode": 102,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "rise",
        "timecode": 103,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i",
        "timecode": 104,
        "shown": false
    },
    {
        "classed": 9,
        "linebreak": "0",
        "space": "1",
        "text": "wave",
        "timecode": 105,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "the",
        "timecode": 106,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "gun",
        "timecode": 107,
        "shown": false
    },
    {
        "classed": 9,
        "linebreak": "0",
        "space": "1",
        "text": "lay",
        "timecode": 108,
        "shown": false
    },
    {
        "classed": 8,
        "linebreak": "1",
        "space": "1",
        "text": "down",
        "timecode": 109,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "this",
        "timecode": 110,
        "shown": false
    },
    {
        "classed": 7,
        "linebreak": "0",
        "space": "1",
        "text": "time",
        "timecode": 111,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "you're",
        "timecode": 112,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "0",
        "text": "rea",
        "timecode": 113,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "1",
        "text": "lly",
        "timecode": 114,
        "shown": false
    },
    {
        "classed": 3,
        "linebreak": "0",
        "space": "0",
        "text": "go",
        "timecode": 115,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "ing",
        "timecode": 116,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "to",
        "timecode": 117,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "li",
        "timecode": 118,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "sten",
        "timecode": 119,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "to",
        "timecode": 120,
        "shown": false
    },
    {
        "classed": 9,
        "linebreak": "0",
        "space": "1",
        "text": "jay",
        "timecode": 121,
        "shown": false
    },
    {
        "classed": 8,
        "linebreak": "1",
        "space": "1",
        "text": "now",
        "timecode": 122,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i",
        "timecode": 123,
        "shown": false
    },
    {
        "classed": 7,
        "linebreak": "0",
        "space": "1",
        "text": "try",
        "timecode": 124,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "to",
        "timecode": 125,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "talk",
        "timecode": 126,
        "shown": false
    },
    {
        "classed": 6,
        "linebreak": "0",
        "space": "0",
        "text": "sen",
        "timecode": 127,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "si",
        "timecode": 128,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "1",
        "text": "bly",
        "timecode": 129,
        "shown": false
    },
    {
        "classed": 3,
        "linebreak": "0",
        "space": "0",
        "text": "ho",
        "timecode": 130,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "ping",
        "timecode": 131,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "that",
        "timecode": 132,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "e",
        "timecode": 133,
        "shown": false
    },
    {
        "classed": 6,
        "linebreak": "0",
        "space": "0",
        "text": "ven",
        "timecode": 134,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "tually",
        "timecode": 135,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "",
        "timecode": 136,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "1",
        "text": "",
        "timecode": 137,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "you",
        "timecode": 138,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "0",
        "text": "re",
        "timecode": 139,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "a",
        "timecode": 140,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "1",
        "space": "1",
        "text": "lize",
        "timecode": 141,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i",
        "timecode": 142,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "had",
        "timecode": 143,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "this",
        "timecode": 144,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "locked",
        "timecode": 145,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "and",
        "timecode": 146,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "it",
        "timecode": 147,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "just",
        "timecode": 148,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "wa",
        "timecode": 149,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "sn't",
        "timecode": 150,
        "shown": false
    },
    {
        "classed": 6,
        "linebreak": "0",
        "space": "1",
        "text": "meant",
        "timecode": 151,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "to",
        "timecode": 152,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "1",
        "space": "1",
        "text": "be",
        "timecode": 153,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "plus",
        "timecode": 154,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i",
        "timecode": 155,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "had",
        "timecode": 156,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "0",
        "text": "sym",
        "timecode": 157,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "pa",
        "timecode": 158,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "1",
        "text": "thy",
        "timecode": 159,
        "shown": false
    },
    {
        "classed": 6,
        "linebreak": "0",
        "space": "1",
        "text": "when",
        "timecode": 160,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "we",
        "timecode": 161,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "all",
        "timecode": 162,
        "shown": false
    },
    {
        "classed": 1,
        "linebreak": "0",
        "space": "1",
        "text": "bought",
        "timecode": 163,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "1",
        "text": "rims",
        "timecode": 164,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "with",
        "timecode": 165,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "your",
        "timecode": 166,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "1",
        "space": "1",
        "text": "keys",
        "timecode": 167,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "and",
        "timecode": 168,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "it",
        "timecode": 169,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "was",
        "timecode": 170,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "an",
        "timecode": 171,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "af",
        "timecode": 172,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "ter",
        "timecode": 173,
        "shown": false
    },
    {
        "classed": 1,
        "linebreak": "0",
        "space": "1",
        "text": "thought",
        "timecode": 174,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "that",
        "timecode": 175,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "may",
        "timecode": 176,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "1",
        "text": "be",
        "timecode": 177,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "you'll",
        "timecode": 178,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "try",
        "timecode": 179,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "to",
        "timecode": 180,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "a",
        "timecode": 181,
        "shown": false
    },
    {
        "classed": 6,
        "linebreak": "0",
        "space": "1",
        "text": "venge",
        "timecode": 182,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "1",
        "space": "1",
        "text": "me",
        "timecode": 183,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "but",
        "timecode": 184,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i",
        "timecode": 185,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "was",
        "timecode": 186,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "like",
        "timecode": 187,
        "shown": false
    },
    {
        "classed": 1,
        "linebreak": "0",
        "space": "1",
        "text": "nah",
        "timecode": 188,
        "shown": false
    },
    {
        "classed": 3,
        "linebreak": "0",
        "space": "1",
        "text": "homes",
        "timecode": 189,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "had",
        "timecode": 190,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "to",
        "timecode": 191,
        "shown": false
    },
    {
        "classed": 3,
        "linebreak": "0",
        "space": "1",
        "text": "know",
        "timecode": 192,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "he",
        "timecode": 193,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "was",
        "timecode": 194,
        "shown": false
    },
    {
        "classed": 13,
        "linebreak": "1",
        "space": "1",
        "text": "wrong",
        "timecode": 195,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "and",
        "timecode": 196,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "if",
        "timecode": 197,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "you",
        "timecode": 198,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "caught",
        "timecode": 199,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "1",
        "text": "me",
        "timecode": 200,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "on",
        "timecode": 201,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "the",
        "timecode": 202,
        "shown": false
    },
    {
        "classed": 8,
        "linebreak": "0",
        "space": "1",
        "text": "foul",
        "timecode": 203,
        "shown": false
    },
    {
        "classed": 8,
        "linebreak": "0",
        "space": "1",
        "text": "now",
        "timecode": 204,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "you",
        "timecode": 205,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "sing",
        "timecode": 206,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "1",
        "text": "me",
        "timecode": 207,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "the",
        "timecode": 208,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "same",
        "timecode": 209,
        "shown": false
    },
    {
        "classed": 13,
        "linebreak": "1",
        "space": "1",
        "text": "song",
        "timecode": 210,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "plus",
        "timecode": 211,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "you",
        "timecode": 212,
        "shown": false
    },
    {
        "classed": 1,
        "linebreak": "0",
        "space": "0",
        "text": "pro",
        "timecode": 213,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "1",
        "space": "1",
        "text": "mised",
        "timecode": 214,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "and",
        "timecode": 215,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "that's",
        "timecode": 216,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "0",
        "text": "rea",
        "timecode": 217,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "1",
        "text": "lly",
        "timecode": 218,
        "shown": false
    },
    {
        "classed": 3,
        "linebreak": "0",
        "space": "1",
        "text": "no",
        "timecode": 219,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "1",
        "space": "1",
        "text": "fun",
        "timecode": 220,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "and",
        "timecode": 221,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "here",
        "timecode": 222,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i",
        "timecode": 223,
        "shown": false
    },
    {
        "classed": 7,
        "linebreak": "0",
        "space": "1",
        "text": "find",
        "timecode": 224,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "you",
        "timecode": 225,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "in",
        "timecode": 226,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "this",
        "timecode": 227,
        "shown": false
    },
    {
        "classed": 3,
        "linebreak": "0",
        "space": "0",
        "text": "mo",
        "timecode": 228,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "tel",
        "timecode": 229,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "6",
        "timecode": 230,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "with",
        "timecode": 231,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "all",
        "timecode": 232,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "these",
        "timecode": 233,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "1",
        "space": "1",
        "text": "guns",
        "timecode": 234,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "and",
        "timecode": 235,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "all",
        "timecode": 236,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "your",
        "timecode": 237,
        "shown": false
    },
    {
        "classed": 11,
        "linebreak": "0",
        "space": "1",
        "text": "goons",
        "timecode": 238,
        "shown": false
    },
    {
        "classed": 7,
        "linebreak": "0",
        "space": "1",
        "text": "lined",
        "timecode": 239,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "up",
        "timecode": 240,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "in",
        "timecode": 241,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "a",
        "timecode": 242,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "djoi",
        "timecode": 243,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "ning",
        "timecode": 244,
        "shown": false
    },
    {
        "classed": 11,
        "linebreak": "1",
        "space": "1",
        "text": "rooms",
        "timecode": 245,
        "shown": false
    },
    {
        "classed": 7,
        "linebreak": "0",
        "space": "1",
        "text": "like",
        "timecode": 246,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "some",
        "timecode": 247,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "wild",
        "timecode": 248,
        "shown": false
    },
    {
        "classed": 8,
        "linebreak": "0",
        "space": "0",
        "text": "co",
        "timecode": 249,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "wboys",
        "timecode": 250,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "co",
        "timecode": 251,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "ming",
        "timecode": 252,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "to",
        "timecode": 253,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "get",
        "timecode": 254,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "me",
        "timecode": 255,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "at",
        "timecode": 256,
        "shown": false
    },
    {
        "classed": 7,
        "linebreak": "0",
        "space": "1",
        "text": "high",
        "timecode": 257,
        "shown": false
    },
    {
        "classed": 11,
        "linebreak": "1",
        "space": "1",
        "text": "noon",
        "timecode": 258,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "but",
        "timecode": 259,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "my",
        "timecode": 260,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "mind's",
        "timecode": 261,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "like",
        "timecode": 262,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "a",
        "timecode": 263,
        "shown": false
    },
    {
        "classed": 8,
        "linebreak": "0",
        "space": "0",
        "text": "flow",
        "timecode": 264,
        "shown": false
    },
    {
        "classed": 10,
        "linebreak": "0",
        "space": "1",
        "text": "er",
        "timecode": 265,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "in",
        "timecode": 266,
        "shown": false
    },
    {
        "classed": 11,
        "linebreak": "1",
        "space": "1",
        "text": "bloom",
        "timecode": 267,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "peep",
        "timecode": 268,
        "shown": false
    },
    {
        "classed": 8,
        "linebreak": "0",
        "space": "1",
        "text": "how",
        "timecode": 269,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "my",
        "timecode": 270,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "eyes",
        "timecode": 271,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "just",
        "timecode": 272,
        "shown": false
    },
    {
        "classed": 8,
        "linebreak": "0",
        "space": "0",
        "text": "sco",
        "timecode": 273,
        "shown": false
    },
    {
        "classed": 10,
        "linebreak": "0",
        "space": "1",
        "text": "ur",
        "timecode": 274,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "the",
        "timecode": 275,
        "shown": false
    },
    {
        "classed": 11,
        "linebreak": "1",
        "space": "1",
        "text": "room",
        "timecode": 276,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i'm",
        "timecode": 277,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "a",
        "timecode": 278,
        "shown": false
    },
    {
        "classed": 10,
        "linebreak": "0",
        "space": "1",
        "text": "lert",
        "timecode": 279,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "plus",
        "timecode": 280,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i",
        "timecode": 281,
        "shown": false
    },
    {
        "classed": 9,
        "linebreak": "0",
        "space": "1",
        "text": "paid",
        "timecode": 282,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "the",
        "timecode": 283,
        "shown": false
    },
    {
        "classed": 10,
        "linebreak": "0",
        "space": "1",
        "text": "clerk",
        "timecode": 284,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i",
        "timecode": 285,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "got",
        "timecode": 286,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "it",
        "timecode": 287,
        "shown": false
    },
    {
        "classed": 9,
        "linebreak": "0",
        "space": "1",
        "text": "laid",
        "timecode": 288,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "1",
        "space": "1",
        "text": "out",
        "timecode": 289,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "you",
        "timecode": 290,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "think",
        "timecode": 291,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "you",
        "timecode": 292,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "the",
        "timecode": 293,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "first",
        "timecode": 294,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "ni",
        "timecode": 295,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "gga",
        "timecode": 296,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i",
        "timecode": 297,
        "shown": false
    },
    {
        "classed": 9,
        "linebreak": "0",
        "space": "1",
        "text": "played",
        "timecode": 298,
        "shown": false
    },
    {
        "classed": 8,
        "linebreak": "0",
        "space": "1",
        "text": "out",
        "timecode": 299,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "in",
        "timecode": 300,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "a",
        "timecode": 301,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "two",
        "timecode": 302,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "ho",
        "timecode": 303,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "tel",
        "timecode": 304,
        "shown": false
    },
    {
        "classed": 8,
        "linebreak": "1",
        "space": "1",
        "text": "town",
        "timecode": 305,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "come",
        "timecode": 306,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "on",
        "timecode": 307,
        "shown": false
    },
    {
        "classed": 8,
        "linebreak": "0",
        "space": "1",
        "text": "now",
        "timecode": 308,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i",
        "timecode": 309,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "peeped",
        "timecode": 310,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "your",
        "timecode": 311,
        "shown": false
    },
    {
        "classed": 6,
        "linebreak": "0",
        "space": "0",
        "text": "lexu",
        "timecode": 312,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "s",
        "timecode": 313,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "as",
        "timecode": 314,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "1",
        "space": "1",
        "text": "you",
        "timecode": 315,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "left",
        "timecode": 316,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "the",
        "timecode": 317,
        "shown": false
    },
    {
        "classed": 6,
        "linebreak": "0",
        "space": "0",
        "text": "exi",
        "timecode": 318,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "t",
        "timecode": 319,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "got",
        "timecode": 320,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "some",
        "timecode": 321,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "ni",
        "timecode": 322,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "ggas",
        "timecode": 323,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "on",
        "timecode": 324,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "that",
        "timecode": 325,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "side",
        "timecode": 326,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "of",
        "timecode": 327,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "the",
        "timecode": 328,
        "shown": false
    },
    {
        "classed": 8,
        "linebreak": "1",
        "space": "1",
        "text": "town",
        "timecode": 329,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "mo",
        "timecode": 330,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "ney",
        "timecode": 331,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "well",
        "timecode": 332,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "0",
        "text": "in",
        "timecode": 333,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "ve",
        "timecode": 334,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "sted",
        "timecode": 335,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "rude",
        "timecode": 336,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "ly",
        "timecode": 337,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "0",
        "text": "in",
        "timecode": 338,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "terr",
        "timecode": 339,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "up",
        "timecode": 340,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "1",
        "space": "1",
        "text": "ted",
        "timecode": 341,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "ja",
        "timecode": 342,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "mai",
        "timecode": 343,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "can",
        "timecode": 344,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "ac",
        "timecode": 345,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "cent",
        "timecode": 346,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "boy",
        "timecode": 347,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "you",
        "timecode": 348,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "know",
        "timecode": 349,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "who",
        "timecode": 350,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "you",
        "timecode": 351,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "dun",
        "timecode": 352,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "fucked",
        "timecode": 353,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "1",
        "space": "1",
        "text": "with",
        "timecode": 354,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "a",
        "timecode": 355,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "gun",
        "timecode": 356,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "in",
        "timecode": 357,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "your",
        "timecode": 358,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "face",
        "timecode": 359,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "and",
        "timecode": 360,
        "shown": false
    },
    {
        "classed": 12,
        "linebreak": "0",
        "space": "1",
        "text": "that's",
        "timecode": 361,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "all",
        "timecode": 362,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "you",
        "timecode": 363,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "can",
        "timecode": 364,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "come",
        "timecode": 365,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "up",
        "timecode": 366,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "1",
        "space": "1",
        "text": "with",
        "timecode": 367,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i'm",
        "timecode": 368,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "done",
        "timecode": 369,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "ta",
        "timecode": 370,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "lking",
        "timecode": 371,
        "shown": false
    },
    {
        "classed": 12,
        "linebreak": "0",
        "space": "1",
        "text": "back",
        "timecode": 372,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "up",
        "timecode": 373,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "and",
        "timecode": 374,
        "shown": false
    },
    {
        "classed": 12,
        "linebreak": "0",
        "space": "1",
        "text": "clap",
        "timecode": 375,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "him",
        "timecode": 376,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "one",
        "timecode": 377,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "in",
        "timecode": 378,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "the",
        "timecode": 379,
        "shown": false
    },
    {
        "classed": 12,
        "linebreak": "0",
        "space": "0",
        "text": "ab",
        "timecode": 380,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "do",
        "timecode": 381,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "1",
        "space": "1",
        "text": "men",
        "timecode": 382,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "do",
        "timecode": 383,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "1",
        "text": "me",
        "timecode": 384,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "a",
        "timecode": 385,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "fa",
        "timecode": 386,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "vor",
        "timecode": 387,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "duke",
        "timecode": 388,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "get",
        "timecode": 389,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "two",
        "timecode": 390,
        "shown": false
    },
    {
        "classed": 7,
        "linebreak": "0",
        "space": "1",
        "text": "ice",
        "timecode": 391,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "cubes",
        "timecode": 392,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "i",
        "timecode": 393,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "pass",
        "timecode": 394,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "1",
        "space": "1",
        "text": "them",
        "timecode": 395,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "take",
        "timecode": 396,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "that",
        "timecode": 397,
        "shown": false
    },
    {
        "classed": 7,
        "linebreak": "0",
        "space": "1",
        "text": "ice",
        "timecode": 398,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "up",
        "timecode": 399,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "for",
        "timecode": 400,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "the",
        "timecode": 401,
        "shown": false
    },
    {
        "classed": 7,
        "linebreak": "0",
        "space": "0",
        "text": "ni",
        "timecode": 402,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "cest",
        "timecode": 403,
        "shown": false
    },
    {
        "classed": 6,
        "linebreak": "0",
        "space": "0",
        "text": "m",
        "timecode": 404,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "1",
        "space": "1",
        "text": "c",
        "timecode": 405,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "and",
        "timecode": 406,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "1",
        "text": "please",
        "timecode": 407,
        "shown": false
    },
    {
        "classed": 3,
        "linebreak": "0",
        "space": "1",
        "text": "yo",
        "timecode": 408,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "tell",
        "timecode": 409,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "1",
        "text": "big",
        "timecode": 410,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "1",
        "text": "he's",
        "timecode": 411,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "un",
        "timecode": 412,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "be",
        "timecode": 413,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "0",
        "text": "lie",
        "timecode": 414,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "va",
        "timecode": 415,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "1",
        "space": "1",
        "text": "ble",
        "timecode": 416,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "friend",
        "timecode": 417,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "or",
        "timecode": 418,
        "shown": false
    },
    {
        "classed": 3,
        "linebreak": "0",
        "space": "1",
        "text": "foe",
        "timecode": 419,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "1",
        "text": "biotch",
        "timecode": 420,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "7e",
        "timecode": 421,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "mbed",
        "timecode": 422,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "sha",
        "timecode": 423,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "re",
        "timecode": 424,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "1",
        "text": "",
        "timecode": 425,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "ur",
        "timecode": 426,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "lcop",
        "timecode": 427,
        "shown": false
    },
    {
        "classed": 0,
        "linebreak": "0",
        "space": "0",
        "text": "ye",
        "timecode": 428,
        "shown": false
    },
    {
        "classed": 2,
        "linebreak": "0",
        "space": "0",
        "text": "mbe",
        "timecode": 429,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "0",
        "space": "0",
        "text": "dcop",
        "timecode": 430,
        "shown": false
    },
    {
        "classed": 5,
        "linebreak": "0",
        "space": "0",
        "text": "y",
        "timecode": 431,
        "shown": false
    },
    {
        "classed": 4,
        "linebreak": "1",
        "space": "1",
        "text": "",
        "timecode": 432,
        "shown": false
    }
]

console.log("Lyrcis.ts startup");

let initialised = false;

const lerp = (x: number, min: number, max: number) => min * (1 - x) + max * x;
const unlerp = (x: number, min: number, max: number) => (x - min) / (max - min);
const clamp = (x: number, min?: number, max?: number) => Math.min(Math.max(x, min || 0), max || 1);

let lyricsAst: AST;
let renderedLyrics: RenderedLyrics;
function init() {
    const playerPromise = initialisePlayer();

    const lyricsFile = (document.querySelector<HTMLAnchorElement>("link.lyricsFile")).href;

    fetch(lyricsFile).then(response => {
        if (!response.ok) {
            console.error("Failed to load lyrics", response);
        }

        response.text().then(responseText => {
            lyricsAst = parseLyrics(responseText);
            renderedLyrics = renderLyrics();
            layoutLyrics();
            playerPromise.then(player => {
                initialised = true;
                const start = document.querySelector<HTMLDivElement>(".start");
                start.style.display = "block";
                const begin = () => {
                    const duration = player.duration();
                    start.style.display = "none";
                    window['player'] = player; //// useful for debugging
                    const container = document.querySelector<HTMLDivElement>(".container");
                    container.style.opacity = '1';

                    // Set up controls
                    const controls = document.querySelector<HTMLDivElement>(".controls");
                    const timeline = document.querySelector<HTMLDivElement>(".timeline");
                    const playPause = controls.querySelector<HTMLButtonElement>("button.playPause");
                    const volume = controls.querySelector<HTMLButtonElement>("button.volume");
                    const volumeSliderContainer = controls.querySelector<HTMLButtonElement>("button.volume .volumeSliderContainer");
                    const volumeSlider = controls.querySelector<HTMLButtonElement>("button.volume .volumeSlider");
                    const fullscreenToggle = controls.querySelector<HTMLButtonElement>("button.fullscreen");

                    let playing = false;
                    let muted = player.muted();
                    let hideControlsTimeout = null;
                    volumeSlider.style.setProperty("--volume", player.volume());

                    playPause.addEventListener("click", () => {
                        playing ? player.pause() : player.play();
                    });
                    container.addEventListener("click", () => {
                        playing ? player.pause() : player.play();
                    });

                    controls.addEventListener("click", (evt) => {
                        evt.stopPropagation();
                    });
                    volumeSliderContainer.addEventListener("click", (evt) => {
                        evt.stopPropagation();
                    });
                    let adjustingVolume = false;
                    volumeSlider.addEventListener("mousedown", (evt) => {
                        adjustingVolume = true;
                        adjustVolume(evt);
                        volume.classList.add("adjusting");
                    });

                    const adjustVolume = (evt: MouseEvent) => {
                        const volumeSliderLocation = volumeSlider.getBoundingClientRect();
                        const desiredVolume = clamp(unlerp(evt.clientY, volumeSliderLocation.top + volumeSliderLocation.height, volumeSliderLocation.top));
                        player.volume(desiredVolume);
                    }

                    volume.addEventListener("click", () => {
                        muted ? player.unmute() : player.mute();
                    });

                    fullscreenToggle.addEventListener("click", () => {
                        document.fullscreenElement === container ? document.exitFullscreen() : container.requestFullscreen({ navigationUI: "hide" });
                    });

                    let seeking = false;
                    let playingBeforeSeek = false;
                    timeline.addEventListener("mousedown", (evt) => {
                        controls.classList.add("seeking");
                        playingBeforeSeek = playing;
                        seeking = true;
                        seek(evt);
                    });

                    container.addEventListener("mouseup", (evt) => {
                        if (seeking) {
                            seek(evt);
                            seeking = false;
                            if (playingBeforeSeek) {
                                player.play();
                                playPause.classList.add("playing");
                                playing = true;

                                // Sometimes Popcorn.js doesn't realise the video is playing again, I think it's a race condition.
                                // If this happens, the currentTime() function loses accuracy. In order to prevent this, we'll remind Popcorn that it's playing after a little bit.
                                window.setTimeout(() => {
                                    if (playing) {
                                        player.play();
                                    }
                                }, 500);
                            }
                            controls.classList.remove("seeking");
                        }
                        if (adjustingVolume) {
                            adjustVolume(evt);
                            adjustingVolume = false;
                            volume.classList.remove("adjusting");
                        }
                    });

                    const seek = (evt: MouseEvent) => {
                        const timelineLocation = timeline.getBoundingClientRect();
                        const desiredTime = lerp(clamp(unlerp(evt.clientX, timelineLocation.left, timelineLocation.left + timelineLocation.width)), 0, duration);
                        player.pause(desiredTime);
                    }

                    const updateTimeline = () => {
                        timeline.style.setProperty("--progress", "" + (currentTime / player.duration()));
                        window.requestAnimationFrame(updateTimeline);
                    }
                    window.requestAnimationFrame(updateTimeline);

                    container.addEventListener("mousemove", (evt) => {
                        controls.classList.add("active");
                        if (hideControlsTimeout) {
                            window.clearTimeout(hideControlsTimeout);
                        }
                        hideControlsTimeout = window.setTimeout(() => {
                            controls.classList.remove("active");
                            hideControlsTimeout = null;
                        }, 1000);

                        if (seeking) {
                            seek(evt);
                        }
                        if (adjustingVolume) {
                            adjustVolume(evt);
                        }
                    })

                    player.on("play", () => {
                        playPause.classList.add("playing");
                        playing = true;
                    });
                    player.on("pause", () => {
                        playPause.classList.remove("playing");
                        playing = false;
                    });

                    player.on("volumechange", () => {
                        muted = player.muted();
                        volume.classList.toggle("muted", muted);
                        volumeSlider.style.setProperty("--volume", player.volume());
                    });

                    document.addEventListener("fullscreenchange", () => {
                        fullscreenToggle.classList.toggle("active", document.fullscreenElement === container);
                    });

                    document.addEventListener("keydown", (evt) => {
                        switch (evt.key) {
                            case "ArrowLeft":
                            case "ArrowRight":
                                const direction = evt.key == "ArrowRight" ? 1 : -1;
                                const magnitude = evt.ctrlKey ? 10 : 5;
                                const desiredTime = clamp(player.currentTime() + direction * magnitude, 0, duration);
                                playing ? player.play(desiredTime) : player.pause(desiredTime);
                                evt.preventDefault();
                                evt.stopPropagation();
                                break;
                            case "ArrowUp":
                            case "ArrowDown":
                                player.volume(clamp(player.volume() + 0.05 * (evt.key == "ArrowUp" ? 1 : -1)));
                                break;
                            case " ":
                                playing ? player.pause() : player.play();
                                evt.preventDefault();
                                evt.stopPropagation();
                                break;
                            default:
                                break;
                        }
                    });

                    player.play();
                };
                start.addEventListener("click", begin);
                const startKeyListener = (evt) => {
                    if (evt.key === " ") {
                        window.removeEventListener("keydown", startKeyListener);
                        begin();
                    }
                };
                window.addEventListener("keydown", startKeyListener);
            });
        }, err => {
            console.error("Failed to retrieve lyrics", err);
        });
    });
}
init();

window.addEventListener("resize", () => {
    if (initialised) {
        layoutLyrics();
    }
});


let currentTime = 0;
function initialisePlayer() {
    return new Promise<any>((resolve) => {
        const playerElement = document.querySelector<HTMLDivElement>(".playerContainer .player");
        const mediaUrl = playerElement.dataset.mediaUrl;
        const player = Popcorn.smart(playerElement, mediaUrl);

        player.on("canplay", () => {
            function update() {
                if (lyricsAst) {
                    currentTime = player.currentTime() + lyricsAst.metadata.offset;
                }
                window.requestAnimationFrame(update);
            }
            window.requestAnimationFrame(update);
            resolve(player);
        });
    });
}

interface AST {
    metadata: ASTMetadata;
    cards: Array<ASTCard>;
    cues: {
        [cueName: string]: Array<ASTCue>
    }
}
interface ASTMetadata {
    offset: number;
}
interface ASTCard {
    timecode: number;
    voices: { [voice: string]: Array<ASTWord> };
    classes: Array<string>;
}
interface ASTWord {
    timecode: number;
    contents: string;
    classes: Array<string>;
}
interface ASTCue {
    start: number;
    end: number;
}
const timecodeRegex = /^([+-]?)(\d{2})\:(\d{2})\.(\d{2})$/;
const tagRegex = /^([a-z]+)\:(.*)$/;
function parseTimecode(regexMatch: Array<string>, relativeTo: number) {
    const [, relativeSign, minutes, seconds, centiseconds] = regexMatch;
    const raw = parseInt(minutes) * 60 + parseInt(seconds, 10) + parseInt(centiseconds, 10) / 100;

    switch (relativeSign) {
        case "":
            return raw;
        case "+":
            return relativeTo + raw;
        case "-":
            return relativeTo - raw;
    }
}
function parseLyrics(lyricsFile): AST {
    const cards: Array<ASTCard> = [];
    const cues: { [cueName: string]: Array<ASTCue> } = {};
    const metadata = {
        offset: 0
    };

    let isEscaped = false;
    let currentCard = {
        timecode: null,
        voices: {},
        classes: []
    };
    let currentWord = {
        timecode: null,
        contents: "",
        classes: []
    };
    let currentVoice = null;
    for (let i = 0; i < lyricsFile.length; i++) {
        const char = lyricsFile[i];
        if (isEscaped) {
            switch (char) {
                case "n":
                    currentWord.contents += "\n";
                    break;
                default:
                    currentWord.contents += char;
                    break;
            }
            isEscaped = false;
            continue;
        }

        switch (char) {
            case "\n":
                break;
            case "\\":
                isEscaped = true;
                break;
            case "[":
            case "<":
                const isCardTag = char === "[";
                const tagEnd = lyricsFile.indexOf(isCardTag ? "]" : ">", i + 1);
                if (tagEnd === -1) {
                    throw new Error("Lyrics parsing error: Expected ], reached EOF");
                }
                const tagContents = lyricsFile.slice(i + 1, tagEnd);
                console.log('tagContents:', tagContents)
                i = tagEnd;

                const timecodeMatch = tagContents.match(timecodeRegex);
                if (timecodeMatch) {
                    const timecode = parseTimecode(timecodeMatch, currentCard.timecode);
                    // Start new word
                    if (currentWord.timecode !== null && currentWord.contents) {
                        if (!currentCard.voices[currentVoice]) {
                            currentCard.voices[currentVoice] = [];
                        }
                        currentCard.voices[currentVoice].push(currentWord);
                    }
                    currentWord = {
                        timecode,
                        contents: "",
                        classes: []
                    };
                    if (isCardTag) {
                        // Start new card
                        if (currentCard.timecode !== null) {
                            cards.push(currentCard);
                        }
                        currentCard = {
                            timecode,
                            voices: [],
                            classes: []
                        };
                    }
                } else {
                    const tagMatches = tagContents.match(tagRegex);
                    const [, tagType, tagValue] = tagMatches;

                    if (isCardTag) {
                        switch (tagType) {
                            case "offset":
                                metadata.offset = parseInt(tagValue, 10) / 1000;
                            case "voice":
                                // Start new word and change voice
                                if (currentWord.timecode !== null && currentWord.contents) {
                                    currentCard.voices[currentVoice].push(currentWord);
                                }
                                currentWord = {
                                    timecode: null,
                                    contents: "",
                                    classes: []
                                };
                                currentVoice = tagValue;
                                if (!currentCard.voices[currentVoice]) {
                                    currentCard.voices[currentVoice] = [];
                                }
                                break;
                            case "class":
                                currentCard.classes.push(tagValue);
                                break;
                            case "cue":
                                const [cueName, startString, endString] = tagValue.split("|");
                                const startMatch = startString.match(timecodeRegex);
                                const endMatch = endString && endString.match(timecodeRegex);

                                if (!cues[cueName]) {
                                    cues[cueName] = [];
                                }

                                if (startMatch) {
                                    // If the cue has a start time, we create a new cue at that time
                                    const start = parseTimecode(startMatch, currentCard.timecode);

                                    // If the cue also has an end time, store that. Otherwise, default to just using the start time
                                    // The cue end time is relative to the cue start time
                                    const end = endMatch ? parseTimecode(endMatch, start) : start;

                                    cues[cueName].push({
                                        start,
                                        end,
                                    });
                                } else if (endMatch) {
                                    // If the cue has no start time but does have an end time, we update the previous cue with this end time
                                    // This allows for easily making cues that span a certain range. E.g.
                                    // [00:05.23][cue:range|+00:00.00]
                                    // [00:25.22][cue:range||+00:00.00]
                                    // This will create a cue going from 00:05.23 to 00:25.22
                                    // With this syntax, the cue end time is relative to the current card's start time

                                    const previousCue = cues[cueName][cues[cueName].length - 1];
                                    if (!previousCue) {
                                        console.warn("Attempt to use range cue syntax, but the starting cue doesn't exist");
                                    } else {
                                        previousCue.end = parseTimecode(endMatch, currentCard.timecode);
                                    }
                                } else {
                                    console.warn("Attempt to create a cue of type '" + cueName + "' with no start/end time");
                                }
                                break;
                            default:
                                // Unrecognised tag
                                break;
                        }
                    } else {
                        switch (tagType) {
                            case "class":
                                currentWord.classes.push(tagValue);
                                break;
                            default:
                                // Unrecognised tag
                                break;
                        }
                    }
                }

                break;
            default:
                // console.log('char 2:', char)
                currentWord.contents += char;
                break;
        }
    }

    if (currentWord.timecode !== null && currentWord.contents) {
        currentCard.voices[currentVoice].push(currentWord);
    }

    if (currentCard.timecode !== null) {
        cards.push(currentCard);
    }

    for (let cueName in cues) {
        const currentCues = cues[cueName];

        currentCues.sort((a, b) => a.start - b.start);

        let currentTime = 0;
        for (let cue of currentCues) {
            if (cue.start < currentTime) {
                console.warn("Overlapping cues! Cue type '" + cueName + "' has a cue ending at", currentTime, "seconds but the next starts at", cue.start, "seconds.");
            }
            currentTime = cue.end;
        }
    }

    return {
        metadata,
        cards,
        cues
    };
}

interface RenderedLyrics {
    cards: Array<RenderedCard>;
    cueTimers?: Array<Timer>;
}

interface RenderedCard {
    cardAst: ASTCard;
    cardElm: HTMLDivElement;
    contentsElm: HTMLDivElement;
    voices: Array<RenderedVoice>;
    cardTimers?: Array<Timer>;
}
interface RenderedVoice {
    name: string;
    voiceElm: HTMLDivElement;
    contentsElm: HTMLDivElement;
    words: Array<RenderedWord>;
}
interface RenderedWord {
    wordAst: ASTWord;
    wordElm: HTMLSpanElement;
    wordTimers?: Array<Timer>;
}
const container = document.querySelector<HTMLDivElement>(".lyricsContainer");
function renderLyrics(): RenderedLyrics {
    const cards = lyricsAst.cards.map<RenderedCard>((cardAst, cardIdx) => {
        const cardElm = document.createElement("div");
        cardElm.classList.add("card");
        for (const currentClass of cardAst.classes) {
            cardElm.classList.add(currentClass);
        }

        const contentsElm = document.createElement("div");
        contentsElm.classList.add("contents");

        cardElm.appendChild(contentsElm);
        container.appendChild(cardElm);

        const voices: Array<RenderedVoice> = [];
        for (let voice in cardAst.voices) {
            const voiceElm = document.createElement("div");
            voiceElm.classList.add("voice");
            voiceElm.classList.add(voice);

            contentsElm.appendChild(voiceElm);

            const voiceContentsElm = document.createElement("div");
            voiceContentsElm.classList.add("voiceContents");
            voiceElm.appendChild(voiceContentsElm);

            const words = cardAst.voices[voice].map<RenderedWord>((wordAst, idx) => {

                const wordElm = document.createElement("span");
                wordElm.classList.add("word");
                for (const currentClass of wordAst.classes) {
                    wordElm.classList.add(currentClass);
                }
                wordElm.innerHTML = wordAst.contents
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;")
                    .replace(/ /g, "&nbsp;")
                    .replace(/\n/g, "<br />")

                const newClasses = wordElm.innerHTML.split('&nbsp;').map((syll, syllIdx) => {
                    return `<span data-classed=${cardAst.classes[syllIdx]}>${syll}</span>`
                }).join(`&nbsp;`)

                wordElm.innerHTML = newClasses

                voiceContentsElm.appendChild(wordElm);

                return {
                    wordAst,
                    wordElm,
                };
            });

            voices.push({
                name: voice,
                voiceElm,
                contentsElm: voiceContentsElm,
                words
            });
        }

        return {
            cardAst,
            cardElm,
            contentsElm,
            voices,
        };
    });

    // Attach timers
    const cueTimers = parseTimers(getComputedStyle(container).getPropertyValue("--cue-timers"));
    for (let card of cards) {
        card.cardTimers = parseTimers(getComputedStyle(card.cardElm).getPropertyValue("--card-timers"));

        for (let voice of card.voices) {
            for (let word of voice.words) {
                word.wordTimers = parseTimers(getComputedStyle(word.wordElm).getPropertyValue("--word-timers"));
            }
        }
    }

    return {
        cards,
        cueTimers,
    };
}

const oscillateFunctionGenerator = (numberOfOscillations) => (magnitude, t) => Math.sin(t * Math.PI * 2 * numberOfOscillations);

const timingFunctions: { [name: string]: (x: number) => number } = {
    instant: x => x > 0 ? 1 : 0,
    instantOut: x => x < 1 ? 0 : 1,
    linear: x => x,
    ease: bezier(0.25, 0.1, 0.25, 1),
    easeIn: bezier(0.42, 0, 1, 1),
    easeOut: bezier(0, 0, 0.58, 1),
    easeInOut: bezier(0.42, 0, 0.58, 1),
};
const postprocessingFunctions: { [name: string]: (timedProgress: number, linearProgress: number) => number } = {
    none: x => x,
    oscillate1: oscillateFunctionGenerator(1),
    oscillate2: oscillateFunctionGenerator(2),
    oscillate4: oscillateFunctionGenerator(4),
};
interface Timer {
    name: string,
    fromReference: string,
    fromOffset: number,
    toReference: string,
    toOffset: number,
    timingFunction: (x: number) => number,
    lastValue?: number
};
function parseTimers(timersString: string): Array<Timer> {
    return timersString.split(",").filter(s => s).map(timerString => {
        let [name, fromReference, fromOffset, toReference, toOffset, forwardTimingFunctionName, reverseTimingFunctionName, postprocessingFunctionName] = timerString.trim().split(" ");

        if (!forwardTimingFunctionName) {
            forwardTimingFunctionName = "linear";
        }
        if (!timingFunctions[forwardTimingFunctionName]) {
            throw new Error("Attempt to use non-existent timing function " + forwardTimingFunctionName);
        }

        if (reverseTimingFunctionName == "none") {
            reverseTimingFunctionName = null;
        }
        if (reverseTimingFunctionName && !timingFunctions[reverseTimingFunctionName]) {
            throw new Error("Attempt to use non-existent reverse timing function " + reverseTimingFunctionName);
        }

        if (!postprocessingFunctionName) {
            postprocessingFunctionName = "none";
        }
        if (!postprocessingFunctions[postprocessingFunctionName]) {
            throw new Error("Attempt to use non-existent postprocessing function " + postprocessingFunctionName);
        }

        const forwardTimingFunction = timingFunctions[forwardTimingFunctionName];
        const reverseTimingFunction = reverseTimingFunctionName ? timingFunctions[reverseTimingFunctionName] : null;
        const postprocessingFunction = postprocessingFunctions[postprocessingFunctionName];

        const timingFunction = (linearProgress) => {
            const timedProgress = reverseTimingFunction ?
                (
                    linearProgress < 0.5 ?
                        forwardTimingFunction(unlerp(linearProgress, 0, 0.5)) :
                        lerp(reverseTimingFunction(unlerp(linearProgress, 0.5, 1)), 1, 0)
                ) :
                forwardTimingFunction(linearProgress);

            const postprocessed = postprocessingFunction ? postprocessingFunction(timedProgress, linearProgress) : timedProgress;

            return postprocessed;
        }

        return {
            name,
            fromReference,
            fromOffset: parseFloat(fromOffset),
            toReference,
            toOffset: parseFloat(toOffset),
            timingFunction
        };
    });
}

function getTimerValue(timer: Timer, time: number, referenceValues: { [name: string]: number }): number {
    const from = referenceValues[timer.fromReference] + timer.fromOffset;
    const to = referenceValues[timer.toReference] + timer.toOffset;
    const linearProgress = clamp(unlerp(time, from, to));
    return timer.timingFunction(linearProgress);
}

function layoutLyrics() {
    let previousVoiceWidths = [];

    for (let card of renderedLyrics.cards) {
        // It's important to ensure that all voices have the same height, otherwise the separator will move and it will look bad
        const voiceElms = card.voices.map(v => v.voiceElm);
        const voiceContentsElms = card.voices.map(v => v.contentsElm);
        card.cardElm.style.setProperty("--max-voice-height", "0");
        const maxVoiceHeight = Math.max(...voiceContentsElms.map(voiceElm => voiceElm.getBoundingClientRect().height));
        card.cardElm.style.setProperty("--max-voice-height", "" + maxVoiceHeight);

        // Here's some extra data that's used for separator sizing (e.g. etoile et toi)
        const voiceWidths = voiceContentsElms.map(contentsElm => contentsElm.getBoundingClientRect().width);
        voiceElms.forEach((voiceElm, i) => {
            voiceElm.style.setProperty("--voice-width", "" + voiceWidths[i]);
            voiceElm.style.setProperty("--next-voice-width", "" + (voiceWidths[i + 1] || 0));
            voiceElm.style.setProperty("--previous-card-voice-width", "" + (previousVoiceWidths[i] || voiceWidths[i]));
            voiceElm.style.setProperty("--previous-card-next-voice-width", "" + (previousVoiceWidths[i + 1] || (voiceWidths[i + 1] || 0)));
        });
        previousVoiceWidths = voiceWidths;
    }
}

function redraw(now) {
    if (!initialised) {
        window.requestAnimationFrame(redraw);
        return;
    }

    for (let cardIndex = 0; cardIndex < renderedLyrics.cards.length; cardIndex++) {
        const card = renderedLyrics.cards[cardIndex];
        const nextCard = renderedLyrics.cards[cardIndex + 1];
        const cardEnd = (nextCard || card).cardAst.timecode;
        card.cardTimers.forEach(timer => {
            const value = getTimerValue(timer, currentTime, { start: card.cardAst.timecode, end: cardEnd });
            if (value != timer.lastValue) {
                card.cardElm.style.setProperty(timer.name, "" + value);
                timer.lastValue = value;
            }
        });

        for (let voice of card.voices) {
            for (let wordIndex = 0; wordIndex < voice.words.length; wordIndex++) {
                const word = voice.words[wordIndex];
                const nextWord = voice.words[wordIndex + 1];
                word.wordTimers.forEach(timer => {
                    const value = getTimerValue(timer, currentTime, { start: word.wordAst.timecode, end: nextWord ? nextWord.wordAst.timecode : cardEnd });
                    if (value != timer.lastValue) {
                        word.wordElm.style.setProperty(timer.name, "" + value);
                        timer.lastValue = value;
                    }
                });
            }
        }
    }

    const cueReferences = {};
    for (let cueName in lyricsAst.cues) {
        const cues = lyricsAst.cues[cueName];

        let firstUnstartedCueIndex = cues.findIndex(cue => cue.start >= currentTime);
        if (firstUnstartedCueIndex === -1) {
            firstUnstartedCueIndex = cues.length;
        }
        const firstUnstartedCue = cues[firstUnstartedCueIndex];
        const lastStartedCue = cues[firstUnstartedCueIndex - 1];

        const distanceToFirstUnstartedCue = firstUnstartedCue ? firstUnstartedCue.start - currentTime : Infinity;
        const distanceToLastStartedCue = lastStartedCue ? currentTime - lastStartedCue.end : Infinity;

        const referenceCue = distanceToFirstUnstartedCue < distanceToLastStartedCue ? firstUnstartedCue : lastStartedCue;

        if (referenceCue) {
            cueReferences[cueName + "." + "start"] = referenceCue.start;
            cueReferences[cueName + "." + "end"] = referenceCue.end;
        }
    }
    renderedLyrics.cueTimers.forEach(timer => {
        const value = getTimerValue(timer, currentTime, cueReferences);
        if (value != timer.lastValue) {
            container.style.setProperty(timer.name, "" + value);
            timer.lastValue = value;
        }
    });

    window.requestAnimationFrame(redraw);
}
redraw(window.performance.now());
