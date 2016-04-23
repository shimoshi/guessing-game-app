var app = angular.module('myApp', []);

app.service('myService', function() {
    var self = this;
    this.realNum = Math.floor((Math.random() * 10) + 1);
    this.compareNum = function(guessNum) {
        if (guessNum == self.realNum) {
            console.log("same");
        }
        else {
            console.log("different");
        }
    }
});

app.controller('myController', function(myService) {
    this.compareNum = myService.compareNum;
});







//var the_number = null;
//
//function pick_number() {
//    var random_number = Math.floor((Math.random() * 10) + 1);
//    return random_number;
//}
//function make_guess() {
//    var the_guess = $("#guess_input").val();
//    if (the_guess >= 1 && the_guess <= 10) {
//        if (Math.abs(the_guess - the_number) >= 2) {
//            if ($("body").attr('class') == 'cold') {
//                if (the_guess - the_number > 1) {
//                    $("#response_div").text('You\'re still too high!');
//                }
//                else {
//                    $("#response_div").text('You\'re still too low!');
//                }
//            }
//            else {
//                if (the_guess - the_number > 1) {
//                    $("#response_div").text('You\'re too high!');
//                    $("body").removeClass().addClass("cold");
//                }
//                else {
//                    $("#response_div").text('You\'re too low!');
//                    $("body").removeClass().addClass("cold");
//                }
//            }
//        }
//        else if (Math.abs(the_guess - the_number) == 1) {
//            if ($("body").attr('class') != "warm") {
//                $("#response_div").text('You\'re close!');
//                $("body").removeClass().addClass("warm");
//            }
//            else {
//                $("#response_div").text('You\'re still close!');
//            }
//        }
//        else {
//            $("#response_div").text('WOOHOO! You guessed it!');
//            $("body").removeClass().addClass('hot');
//        }
//    }
//    else {
//        $("#response_div").text('Try a CORRECT input...');
//    }
//}
//
//$(document).ready(function () {
//    the_number = pick_number();
//    console.log('Cheater! The answer is ' + the_number);
//    $("#submit_button").click(function () {
//        make_guess();
//    });
//});