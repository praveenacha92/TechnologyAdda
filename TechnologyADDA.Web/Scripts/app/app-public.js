$(document).ready(function () {
    $('.list-group li').click(function () {
        $('li.list-group-item.active').removeClass("active");
        $(this).addClass("active");
    });

    $('.navbar-nav-right li').click(function () {
        $('li.nav-item.navbar-li-active').removeClass("navbar-li-active");
        $(this).addClass("navbar-li-active");
    });
});