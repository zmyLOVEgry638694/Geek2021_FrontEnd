let MucList = ["YYZT/Rain.mp3", "YYZT/sea.mp3", "YYZT/YYZT.mp3", "SWHX/02-LYCX.mp3", "SWHX/03-ZDS.mp3", "SWHX/04-GX.mp3", "SWHX/06-HS.mp3"];
let num = 0;

let playMusic = () => {
    if (audioZ.paused) {
        audioZ.play();
    } else {
        audioZ.pause();
    }
}

let nextMusic = () => {
    num = (num + 1) % MucList.length;
    if (audioZ.paused) {
        audioZ.src = `./_media/audio/${MucList[num]}`;
    } else {
        audioZ.src = `./_media/audio/${MucList[num]}`
        audioZ.play();
    }
}

let initPlayer = () => {
    document.getElementById("musicM").addEventListener("click", () => {
        playMusic();
    });
    document.getElementById("nextM").addEventListener("click", () => {
        nextMusic();
    });

    // document.getElementById("backgroundV").addEventListener("dblclick", (event) => {
    //     audioZ.pause();
    //     event.currentTarget.removeAttribute("muted");
    // })
}