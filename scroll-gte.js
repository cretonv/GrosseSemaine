var compteur_scroll = 0;
var is_animating = false;
var header = document.querySelector('header')
var pages = document.querySelectorAll('.pages')

var navbar = document.querySelector('#navbar')
var navbar_statut = false;


function intro_appear(){
    //header.classList.add('close')
    from_bottom(0);

}

function articles_appear(){
    //header.classList.add('close')
    from_bottom(1);
    console.log('dub')
}

function videos_appear(){
    from_bottom(2);
    console.log('jtm')
}

function infos_appear(){
    from_bottom(3);
    console.log('jtm')
}

function intro_disappear(){
    //header.classList.add('close')
    from_top(0);
    console.log('incorporation')
}

function articles_disappear(){
    //header.classList.add('close')
    from_top(1);
    console.log('dub')
}

function videos_disappear(){
    //header.classList.add('close')
    from_top(2);
}

function infos_disappear(){
    from_top(3);
}

function from_bottom(page_active){
    pages[page_active].classList.remove('close')
    pages[page_active].classList.add('open')
}

function from_top(page_active){
    pages[page_active].classList.remove('open')
    pages[page_active].classList.add('close')
}

function animating(){
    is_animating = false;
}

window.addEventListener("mousewheel", function(event) {
    var scroll = event.deltaY;
    var scrollDown = scroll > 0;
    var scrollUp = scroll < 0;
    console.log(compteur_scroll)

    if (scrollDown) {
        if (!is_animating) {
            if (compteur_scroll == 0) {
                intro_appear()
                compteur_scroll++
                is_animating = true
                var intervalID = window.setTimeout(animating, 2000);
            } else if (compteur_scroll == 1) {
                articles_appear()
                compteur_scroll++
                is_animating = true
                var intervalID = window.setTimeout(animating, 2000);
            } else if (compteur_scroll == 2) {
                videos_appear()
                compteur_scroll++
                is_animating = true
                var intervalID = window.setTimeout(animating, 2000);
            } else if (compteur_scroll == 3) {
                infos_appear()
                compteur_scroll++
                is_animating = true
                var intervalID = window.setTimeout(animating, 2000);
            }
        }
    } else if (scrollUp) {
        if(!is_animating) {
            if (compteur_scroll == 1) {
                intro_disappear()
                compteur_scroll--
                is_animating = true
                var intervalID = window.setTimeout(animating, 2000);
            } else if (compteur_scroll == 2) {
                articles_disappear()
                compteur_scroll--
                is_animating = true
                var intervalID = window.setTimeout(animating, 2000);
            } else if (compteur_scroll == 3) {
                videos_disappear()
                compteur_scroll--
                is_animating = true
                var intervalID = window.setTimeout(animating, 2000);
            } else if (compteur_scroll == 4) {
                infos_disappear()
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
    console.log('littleton')
    navbar.classList.remove('closed-navbar')
    navbar.classList.add('open-navbar')
    navbar_statut = true;
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

/* Les fonctions suivantes concernent les changements de pages depuis la navbar */

function nav_accueil() {
    navbardisappear();
    compteur_scroll = 0;
    for(var i = pages.length - 1; i >= 0; i--) {
        from_top(i);
    }
}

function nav_first_element() {
    console.log('2k17')
    navbardisappear();
    compteur_scroll = 1;
    for(var i = pages.length - 1; i >= 1; i--) {
        from_top(i);
    }
    from_bottom(0);
}

function nav_second_element() {
    navbardisappear();
    compteur_scroll = 2;
    for(var i = pages.length - 1; i >= 2; i--) {
        from_top(i);
    }
    from_bottom(1);
}

function nav_third_element() {
    navbardisappear();
    compteur_scroll = 3;
    for(var i = pages.length - 1; i >= 3; i--) {
        from_top(i);
    }
    from_bottom(1)
    from_bottom(2);
}

function nav_fourth_element() {
    navbardisappear();
    compteur_scroll = 4;
    from_bottom(1)
    from_bottom(2);
    from_bottom(3);
}

