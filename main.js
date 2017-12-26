// detect IE
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
    // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}
        
function adjustIEMargin() {
    var margin = ($("html").width() - $("body").width())/2;
    $("#nav").css("margin-left", margin + 'px');
    $("#nav").css("margin-right", margin + 'px');
}

// makes it harder to crawl mail
$(window).load(function() {
    $('.hide-mail').on("click", function(event) {
        var uname = "suzanne.schuetz";
        var domain = "gmail.com"
        $(this).attr("href", "mailto:" + uname + "@" + domain)
    });
});

/*
//adjust navbar manually for ie/edge < 14
var ie = detectIE();
if (ie && ie < 14) {
    adjustIEMargin();
    var resizeTimeout;
    var cachedWidth = $(window).width();
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout( function() {
            var newWidth = $(window).width();
            if(newWidth !== cachedWidth)
                adjustIEMargin();
                cachedWidth = newWidth;
        }, 100);
    });
}
*/
        
$.material.init();

        
//adjust stroke settings of font for safari
$(document).ready(function () {
    is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
    is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    is_safari = navigator.userAgent.indexOf("Safari") > -1;
    is_opera = navigator.userAgent.indexOf("Presto") > -1;
    is_mac = (navigator.userAgent.indexOf('Mac OS') != -1);
    is_windows = !is_mac;

    if (is_chrome && is_safari){
        is_safari=false;
    }

    if (is_safari){
        $('#side').css('-webkit-text-stroke', '0.7px');
    }
});

/*
//hide navbar on click outside of navbar
jQuery('body').bind('click', function(e) {
    if(jQuery(e.target).closest('.navbar').length == 0) {
        // click happened outside of .navbar, so hide
        var opened = jQuery('.navbar-collapse').hasClass('collapse in');
        if ( opened === true ) {
            jQuery('.navbar-collapse').collapse('hide');
        }
    }
}); 
*/        
        
//defines scroll to functionality
var nachhilfe = document.getElementById("nachhilfe");
var kombinationstherapie = document.getElementById("kombinationstherapie");
var preise = document.getElementById("preise");
var kontakt = document.getElementById("kontakt");
var details = document.getElementById("details");
var adTiles = document.getElementById("adTiles");

function toTop(){
    zenscroll.toY(0);
}

function toNachhilfe() {
    zenscroll.center(nachhilfe, 500, 200);
}

function toKombTherapie() {
    zenscroll.center(kombinationstherapie, 500, 200);
}

function toPreise() {
    zenscroll.center(preise, 500, 200);
}

function toKontakt() {
    zenscroll.center(kontakt, 500, 200);
}

function toDetails() {
    zenscroll.center(details, 500, 200);
}

function toAdTiles() {
    zenscroll.center(adTiles, 500, 200);
}
        
        var didScroll;
        var lastPosition = 0;
        var delta = 0;
        
        $(window).scroll(function(event){
          didScroll = true;
        });

        setInterval(function() {
          if (didScroll) {
            hasScrolled();
            didScroll = false;
          }
        }, 500);
        
        function hasScrolled() {
            thisPosition = $(this).scrollTop();
            if ((thisPosition + delta) < lastPosition) {
                $("#page-up-sticky-button").css('visibility', "visible");
            }
            else {
                $("#page-up-sticky-button").css('visibility', "hidden");
            }
            lastPosition = $(this).scrollTop();
        }