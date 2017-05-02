/**
 * Created by
 * jaimemoncada on 5/1/17.
 */

$(document).ready(function () {
   "use strict";

var yellowBox = $("#nl-simon-yellow");
    $(yellowBox).click(function simonYellow() {
        $(yellowBox).fadeOut(200).fadeIn(200);
    });

var blueBox = $("#nl-simon-blue");
    $(blueBox).click(function () {
        $(blueBox).fadeOut(200).fadeIn(200);
    });

var redBox = $("#nl-simon-red");
    $(redBox).click(function simonBlink() {
        $(redBox).fadeOut(200).fadeIn(200);
    });

var greenBox = $("#nl-simon-green");
    $(greenBox).click(function () {
        $(greenBox).fadeOut(200).fadeIn(200);
    });

    var sequence, copy, round;
    var active = true;
    var mode = "normal";
    
    function startSimon() {
        $("#start").on("click", startgame);
        $("input[name=mode-select]").on("change", changeMode);
    }
    
    function startGame() {
        sequence= [];
        copy = [];
        round = 0;
    }

        // between 1 and 4
    function randomNumber() {
        return Math.floor((Math.random()*4)+1);
    }


});