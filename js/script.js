jQuery(document).ready(function() {

    jQuery("p").css("color", "blue");

    jQuery(".burger-menu").click(function() {
        console.log("tere tere, vana kere");
    });
    jQuery(".menu__dropdown").parent(".menu__list-item").click(function() {
        console.log("tere rippmenü");
        jQuery(this).children(".menu__dropdown").slideToggle();
    });
    jQuery(".back-to-the-top").click(function(event) {
        event.preventDefault();
        console.log("ei tea");
    });

    jQuery(window).scroll(function(event) {
        console.log("tere tere, vana kere");

    });

});