jQuery(document).ready(function() {

    // kas burgermenüüd klikitakse?

    jQuery(".burger-menu").click(function() {
        jQuery(this).siblings(".fixed-sidebar").addClass("fixed-sidebar--active")


    });

    jQuery(".close-button").click(function() {

        jQuery(this).closest(".fixed-sidebar--active").removeClass("fixed-sidebar--active")
    })

    // menu dropdown parentit .menu__list-item klikitakse?
    jQuery(".menu__has-sub a").click(function(event) {
        event.preventDefault();
        console.log("tere rippmenü");
        //see element kui klikitakse siis kuva selle menu__dropdown nimelised alamelemendid
        jQuery(this).siblings(".menu__dropdown").stop().slideToggle();
    });


    jQuery(".back-to-the-top").click(function(event) {
        // ära tee default tegevust
        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, "fast");
    });


    var kuikorgel;
    var scrolltarget = jQuery("#scrollto").offset().top;

    console.log(scrolltarget);

    jQuery(window).scroll(function(event) {
        //kui akent keritakse siis näitame consolis

        if (jQuery(window).width() > 800) {
            kuikorgel = jQuery(window).scrollTop();
            console.log(kuikorgel);
            if (kuikorgel > scrolltarget) {
                jQuery(".header--fixed").slideDown("slow");
            } else {
                jQuery(".header--fixed").slideUp("fast");

            }

        }



    });

});