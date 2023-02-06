import $ from "cash-dom";

$(window).on('pageshow', () => {
    $('body').removeClass('opacity-0').addClass('opacity-100 duration-500');
})