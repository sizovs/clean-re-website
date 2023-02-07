import $ from "cash-dom";

$(window).on('pageshow', () => {
    $('.opacity-0').removeClass('opacity-0').addClass('opacity-100 duration-500');
})