/**
 * Created by
 * jaimemoncada on 5/1/17.
 */

$(document).ready(function () {
    "use strict";

    var sequence = [];
    var round = 0;
    var i = 0;
    var blinkTimer = 0;
    var active = false;
    var colors = ["yellow", "blue", "red", "green"];

//===============================================================================================================================

    function toggleStart() {
        active = true;
    }

    // $("#start-game").on("click", toggleStart);

    function nextRound() {
        $("#round-lose").hide();
        if (active == true) {
            sequence.push(colors[randomNumber()]);
            round = sequence.length;
            $("#round").html(round);
            masterAnimate();
            console.log("AI " + sequence);
            console.log("<=========>");
        }

        // sequence.forEach(function (el, ind) {
        //     var idTimer = setTimeout(function () {
        //         masterAnimate("#" +el);
        //     }, (1000 * ind));
        //     console.log(ind);
        //     console.log(sequence.length);
        //
        // });


    }


    function match(idTag) {
        console.log(sequence[i]);
        console.log(idTag);
        if (sequence[i] == idTag) {
            ++i;
            if (i == sequence.length) {
                console.log("Round Complete");
                i = 0;
                nextRound();
            }
        } else {
            $("#round-lose").show();
            console.log("Game Over");
            i = 0;
        }
    }

    //===============================================================================================================================

    function masterAnimate() {
        blinkTimer++;
        $("#" + sequence[blinkTimer-1]).animate({
            opacity: .2
        }, 500).animate({
            opacity: 1
        }, 500, function () {
            if (blinkTimer < sequence.length) {
                console.log("animating " + sequence[blinkTimer-1]);
                console.log("Keep going");
                masterAnimate();
            }else {
                console.log("Finished");
                blinkTimer = 0;
            }
        });

    }


    $(".nl-simon-boxes").on("click", function () {
        $(this).animate({
            opacity: .2
        }, 500).animate({
            opacity: 1
        }, 500);
        match($(this).attr("id"));
    });


    // $("#start-game").click("click", nextRound);
    //
    // // function arClass() {
    // //     $(".nl-simon-boxes").addClass("blink").removeClass("blink");
    // //     return false;
    // // }
    //
    // $("#start-game").on("click", function () {
    // //     // $(".nl-simon-boxes").removeClass("blink");
    // //     // $(".nl-simon-boxes").addClass("blink");
    //     return false;
    // });


    $("#start-game").click(function () {
        toggleStart();
        nextRound();
    });

    function randomNumber() {
        return Math.floor((Math.random() * 3) );
    }

});