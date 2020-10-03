// JavaScript Document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});



$(document).ready(function() {
    $('#autoWidth2').lightSlider({
        autoWidth: true,
        loop: true,
        autoplay: true,
        Speed: 100,
        onSliderLoad: function() {
            $('#autoWidth2').removeClass('cS-hidden2');
        }
    });
});

$(document).ready(function() {
    $('#autoWidth3').lightSlider({
        autoWidth: true,
        loop: true,
        autoplay: true,
        Speed: 100,
        onSliderLoad: function() {
            $('#autoWidth3').removeClass('cS-hidden3');
        }
    });
});

$(document).ready(function() {
    $('#autoWidth4').lightSlider({
        autoWidth: true,
        loop: true,
        autoplay: true,
        Speed: 100,
        onSliderLoad: function() {
            $('#autoWidth4').removeClass('cS-hidden4');
        }
    });
});
$(function() {
    $('a[href^="#"]').click(function() {
        var speed = 600;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});