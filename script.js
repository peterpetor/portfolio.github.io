$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Designer", "Digital Artist", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Designer", "Digital Artist", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

/*
Portfolio links
 */

function raklikkelt1() {
    window.open("https://www.petor.net/gallery.html", "_self");
}

function raklikkelt2() {
    window.open("https://www.petor.net/video.html", "_self");
}

function raklikkelt3() {
    window.open("https://play.google.com/store/apps/dev?id=4710023491977711195", "_blank");
}

function raklikkelt4() {
    window.open("https://apps.apple.com/us/developer/peter-petor/id1168436849#see-all/i-phonei-pad-apps", "_blank");
}

function raklikkelt5() {
    window.open("https://www.petor.net/#home", "_self");
}
function raklikkelt6() {
    window.open("https://www.petor.net/#about", "_self");
}

/*Up Sound*/
window.addEventListener('load', function() {
    fixEmbedHeight();
    createCountUps();
    a();
});

window.addEventListener('resize', function() {
    fixEmbedHeight();
});

function fixEmbedHeight() {
    document.querySelectorAll('.streamable-embeds iframe, .streamable-embeds .clip-placeholder').forEach(function (embed) {
        embed.style.height = (Math.ceil(embed.clientWidth * 9 / 16)) + 'px';
    });
}

function createCountUps() {
    var elements = document.querySelectorAll('.countup');
    setInterval(function() {
        elements.forEach(function (el) {
            var diff = Date.now() - new Date(parseInt(el.attributes['data-timestamp'].value));
            el.innerHTML = formatDateDif(diff);
        }, 0);
    })
}

function padNumber(number) {
    number = number + '';
    if (number.length === 1) {
        return '0' + number;
    }
    return number;
}


function a() {
    var elem = document.getElementById('musicplay');
    var audio = document.getElementById('music');
    var playing = false;
    elem.addEventListener('click', function () {
        if (playing) {
            audio.play();
        } else {
            audio.play();
        }
        playing = !playing;
    });
}
