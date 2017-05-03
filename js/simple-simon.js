/**
 * Created by
 * jaimemoncada on 5/1/17.
 */

$(document).ready(function () {
    "use strict";

    var AiCurrent = [];
    var round = 0;
    var i = 0;
    var active = false;
    var colors = ["yellow", "blue", "red", "green"];

    function toggleStart() {
        active = true;
    }

    $("#start-game").click("click", toggleStart);

    function nextRound() {
        $("#round-lose").hide();
        if (active == true) {
            AiCurrent.push(colors[randomNumber()]);
            console.log("AI " + AiCurrent);
            console.log("<=========>");
        }

        AiCurrent.forEach(function (el, ind) {
            var idTimer = setTimeout(function () {
                aniClick("#" +el);
            }, (1000 * ind));

            console.log(ind);
            console.log(AiCurrent.length);

        });


    }

    function match(idTag) {
        console.log(AiCurrent[i]);
        console.log(idTag);
        if (AiCurrent[i] == idTag) {
            ++i;
            if (i == AiCurrent.length) {
                console.log("Round Complete");
                i = 0;
                nextRound();
            }
        } else {
            console.log("Game Over");
            i = 0;
        }
    }

    function ani(element) {
        $(element).animate({
            opacity: .5
        }, 500).animate({
            opacity: 1
        }, 500)
    }

    function aniClick(element) {
        $(element).animate({
            width: 125,
            height: 125
        }, 500).animate({
            width: 250,
            height: 250
        }, 500)
    }

    $(".nl-simon-boxes").on("click", function () {
        ani($(this));
        match($(this).attr("id"));
    });


    $("#start-game").click("click", nextRound);

    // function arClass() {
    //     $(".nl-simon-boxes").addClass("blink").removeClass("blink");
    //     return false;
    // }

    $("#start-game").on("click", function () {
        // $(".nl-simon-boxes").removeClass("blink");
        // $(".nl-simon-boxes").addClass("blink");
        return false;
    });

    function randomNumber() {
        return Math.floor((Math.random() * 3) );
    }

});