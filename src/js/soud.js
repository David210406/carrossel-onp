const btnPlay = document.getElementById("btn-play");
const btnPause = document.getElementById("btn-pause");

btnPlay.addEventListener("click", function () {

    let x = document.getElementById("myaudio");
    x.play();

});
btnPause.addEventListener("click", function () {

    let x = document.getElementById("myaudio");
    x.pause();

});