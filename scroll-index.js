var compteur_scroll = 0;
var is_animating = false;
var header = document.querySelector('header')
var pages = document.querySelectorAll('.pages')

var navbar = document.querySelector('#navbar')
var navbar_statut = false;

var popups = document.querySelectorAll('.pop-up')
var popup_active;
var block_scroll = false;

function from_bottom(page_active){
    pages[page_active].classList.remove('close')
    pages[page_active].classList.add('open')
}

function from_top(page_active){
    pages[page_active].classList.remove('open')
    pages[page_active].classList.add('close')
}

function intro_appear(){
    //header.classList.add('close')
    from_bottom(0);

}

function intro_disappear(){
    //header.classList.add('close')
    from_top(0);
    console.log('incorporation')
}

/* ———————————————————————————————————————————————————————————————————————————————————————— */

function animating(){
    is_animating = false;
}

window.addEventListener("mousewheel", function(event) {
    var scroll = event.deltaY;
    var scrollDown = scroll > 0;
    var scrollUp = scroll < 0;
    console.log(compteur_scroll)

    if (scrollDown) {
        if (!is_animating && !block_scroll) {
            navbardisappear()
            if (compteur_scroll == 0) {
                intro_appear()
                compteur_scroll++
                is_animating = true
                var intervalID = window.setTimeout(animating, 2000);
            }
        }
    } else if (scrollUp) {
        if(!is_animating && !block_scroll) {
            navbardisappear()
            if (compteur_scroll == 1) {
                intro_disappear()
                compteur_scroll--
                is_animating = true
                var intervalID = window.setTimeout(animating, 2000);
            }
        }
    }
})

/* Les fonctions suivantes concernent l'apparition de la navbar */

function nav_statut_evol(){
    navbar_statut = false;
}

function navbarappear() {
    navbar.classList.remove('closed-navbar')
    navbar.classList.add('open-navbar')
    navbar_statut = true;
    popup_disappear(popup_active);
    var intervalID = window.setTimeout(nav_statut_evol, 100);
}

function navbardisappear() {
    navbar.classList.remove('open-navbar')
    navbar.classList.add('closed-navbar')
    navbar_statut = true;
}

function navbar_hidden(){
    if(!navbar_statut){
        navbardisappear()
    }
}


/* ———————————————————————————————————————————————————————————————————————————————————————— */
/* Code JS pour l'apparition de la pop-up sur la page */

function popup_appear(selector) {
    popups[selector].classList.remove('hidden-pop-up')
    popups[selector].classList.add('visible-pop-up')
    block_scroll = true;
    popup_active = selector;
}

function popup_disappear(selector) {
    popups[selector].classList.remove('visible-pop-up')
    popups[selector].classList.add('hidden-pop-up')
    block_scroll = false;
}