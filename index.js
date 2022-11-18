function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout (string) {
    console.log(string.toUpperCase());
}

function logWhisper (string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate (string){
    let cannot = "I can't hear you!";
    let heard = "YES INDEED!";
    if (string.toLowerCase(string) === string) {
      return cannot;
    }
    else if (string.toUpperCase(string) === string) {
        return heard;
    }
    else if ("Let\'s have dinner together!" === string)
        return ("I would love to!");
  
}