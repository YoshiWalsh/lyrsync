terraform {
    backend "s3" {
        bucket = "me-yoshiwalsh-tfstate"
        key = "lyrsync"
        region = "us-east-1"
    }
}