
$(document).ready( function() {

    //This code will run after your page loads

    $('#mercurybutton').click(function() {
        mercurymusic = new Audio("Gustav\ Holst\ -III.\ Mercury,\ The\ Winged\ Messenger\ www.myfreemp3.re\ .mp3");
        mercurymusic.play();
    });
    $('#venusbutton').click(function() {
        venusmusic = new Audio("Gustav\ Holst\ -II.\ Venus,\ The\ Bringer\ Of\ Peace\ www.myfreemp3.re\ .mp3");
        venusmusic.play();
    });
    $('#earthbutton').click(function() {
        alert('Earth does not have a movement in The Planets.');
    });
    $('#marsbutton').click(function() {
        marsmusic = new Audio("Gustav\ Holst\ -I.\ Mars,\ The\ Bringer\ Of\ War\ www.myfreemp3.re\ .mp3");
        marsmusic.play();
    });
    $('#jupiterbutton').click(function() {
        jupitermusic = new Audio("Holst\ Gustav-IV.\ Jupiter,\ The\ Bringer\ of\ Jollity\ www.myfreemp3.re\ .mp3");
        jupitermusic.play();
    });
    $('#saturnbutton').click(function() {
        saturnmusic = new Audio("Gustav\ Holst\ -V.\ Saturn,\ The\ Bringer\ Of\ Old\ Age\ www.myfreemp3.re\ .mp3");
        saturnmusic.play();
    });
    $('#uranusbutton').click(function() {
        uranusmusic = new Audio("Gustav\ Holst\ -VI.\ Uranus,\ The\ Magician\ www.myfreemp3.re\ .mp3");
        uranusmusic.play();
    });
    $('#neptunebutton').click(function() {
        neptunemusic = new Audio("Gustav\ Holst\ -VII.\ Neptune,\ The\ Mystic\ www.myfreemp3.re\ .mp3");
        neptunemusic.play();
    });
    $('#plutobutton').click(function() {
        plutomusic = new Audio("Gustav\ Holst-The\ Planets\ -\ VIII.\ Pluto,\ The\ Renewer\ www.myfreemp3.re\ .mp3");
        plutomusic.play();
        alert('Pluto was not part of the original suite because it had not been discovered at the time (1916). It was written later by Colin Matthews.');
    });
    $('#pause').click(function() {
        alert('Paused (may take a few seconds.)');
        mercurymusic.pause();
        venusmusic.pause();
        marsmusic.pause();
        jupitermusic.pause();
        saturnmusic.pause();
        uranusmusic.pause();
        neptunemusic.pause();
        plutomusic.pause();
    });
});
