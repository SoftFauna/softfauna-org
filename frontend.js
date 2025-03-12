
$(document).ready(function() {

    /* burger button toggle */
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    /* minimize menu after click */
    // $(".navbar-item").click(function() {
    //     $(".navbar-burger").removeClass("is-active");
    //     $(".navbar-menu").removeClass("is-active");
    // });

    /* dropdown items should be toggleable on click */
    // $(".has-dropdown").click(function() {
    //     $(this).children(".navbar-dropdown")[0].style.display = "none";
    // });
});
