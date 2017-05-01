/**
 * Created by
 * jaimemoncada on 5/1/17.
 */

$(document).ready(function () {
   "use strict";

var yellowBox = $("#nl-simon-yellow");
    $(yellowBox).click(function simonYellow() {
        $(yellowBox).fadeOut(25).fadeIn(25);
    });

var blueBox = $("#nl-simon-blue");
    $(blueBox).click(function () {
        $(blueBox).fadeOut(25).fadeIn(25);
    });

var redBox = $("#nl-simon-red");
    $(redBox).click(function simonBlink() {
        $(redBox).fadeOut(25).fadeIn(25);
    });

var greenBox = $("#nl-simon-green");
    $(greenBox).click(function () {
        $(greenBox).fadeOut(25).fadeIn(25);
    });
    
    function startSimon() {
        $("#start").on("click", startgame);
        $("input[name=mode]").on("change", changeMode);
    }

        // between 1 and 4
    function randomNumber() {
        return Math.floor((Math.random()*4)+1);
    }


});