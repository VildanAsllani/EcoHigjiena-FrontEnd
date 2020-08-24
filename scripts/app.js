var Butoni = document.getElementById("hidden");
window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        Butoni.style.display = "block";
    } 
    else {
        Butoni.style.display = "none";
    }
}


function openNav() {
    var width = window.innerWidth;
    if(width > 768){
        document.getElementById("mobile-menu").style.width = "500px";
    }
    else{
        document.getElementById("mobile-menu").style.width = "100%";
    }
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0";
}



var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
});









$("#first-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#first-div").offset().top
    }, 1000);
    });

    $("#second-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#second-div").offset().top
    }, 1000);
    });

    $("#third-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#third-div").offset().top
    }, 1500);
    });

    $("#fourth-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#fourth-div").offset().top
    }, 1500);
    });




    var elements = document.querySelectorAll( '.demo-image' );
    Intense( elements );