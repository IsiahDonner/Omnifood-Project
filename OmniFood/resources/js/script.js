$(document).ready(function() {

    /*  For the 'Sticky Nav'    */
    $(".js--section-features").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        }
        else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: "60px;"
    });


    /*  Scroll on Button Click  */
    $(".js--scroll-to-plans").click(function() {
        $("html, body").animate({scrollTop: $(".js--section-plans").offset().top}, 1500);
    });

    $(".js--scroll-to-start").click(function() {
        $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1000);
    });

    /*  Navigation Scroll   */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /*  Animation on Scroll */
    $(".js--waypoint-1").waypoint(function(direction) {
        $(".js--waypoint-1").addClass("animated fadeIn");
    }, {
        offset: "55%"
    });

    $(".js--waypoint-2").waypoint(function(direction) {
        $(".js--waypoint-2").addClass("animated fadeInUp");
    }, {
        offset: "55%"
    });

    $(".js--waypoint-3").waypoint(function(direction) {
        $(".js--waypoint-3").addClass("animated fadeIn");
    }, {
        offset: "55%"
    });

    $(".js--waypoint-4").waypoint(function(direction) {
        $(".js--waypoint-4").addClass("animated lightSpeedIn");
    }, {
        offset: "55%"
    });

    /*  Mobile Nav  */
    $(".js--nav-icon").click(function() {
        var nav     =   $(".js--main-nav"),
            icon    =   $(".js--nav-icon i");
        nav.slideToggle(200);
        if (icon.hasClass("ion-navicon-round")) {
            icon.addClass("ion-close-round");
            icon.removeClass("ion-navicon-round");
        }
        else {
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-close-round");
        }
    });

    /*  Gmaps   */
    var map = new GMaps({
        div: '.map',
        lat: 41.49700,
        lng: -81.6,
        zoom: 12
    });

    map.addMarker({
        lat: 41.4979755,
        lng: -81.6967715,
        title: 'Cleveland',
        infoWindow: {
            content: '<p>Downtown Headquarters</p>'
        }
    });

});