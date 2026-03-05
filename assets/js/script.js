$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 80) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});



$(document).ready(function() {
    var typed6 = new Typed('#type-it', {
        strings: ['Nerd', 'Developer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 0,
        loop: true
    });
}

)