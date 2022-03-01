$(document).ready(function() {

    var t;

    $('.side-menu').mouseleave(hide);
    $('.side-menu').mouseenter(menuShow);

    function menuShow() {
        clearTimeout(t);
        $('.side-menu').animate({ marginLeft: '0px' }, 500)
    }

    function menuHide() {
        $('.side-menu').animate({ marginLeft: '-160px' }, 400)
    }

    function hide() {
        t = setTimeout(menuHide, 1000);
    }


    $('.slide').click(function() {

        if ($(this).hasClass('open')) { // ("this" odnosi się do obiektu przekazanego przez selektor do wyrażenia nadrzędnego.) Jeżeli posiada klase open to:
            $(this).removeClass('open'); // usuń klasę 'open' w obiekcie this (obiekt na którym operuje to wyrażenie)
            $(this).find('.hidden').slideUp(); // w obiekcie this znajdź '.accordion-content' i wykonaj następujące instrukcje

        } else {
            $(this).addClass('open'); // utwórz i dodaj klasę 'open' w obiekcie this (obiekt na którym operuje to wyrażenie)
            $(this).find('.hidden').slideDown(); // w obiekcie this znajdź '.accordion-content' i wykonaj następujące instrukcje
        }

    });
});