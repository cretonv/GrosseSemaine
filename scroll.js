var compteur_scroll = 0;
var is_animating = false;
var header = document.querySelector('header')
var pages = document.querySelectorAll('.pages')

function intro_appear(){
    //header.classList.add('close')
    from_bottom(0);

}

function articles_appear(){
    //header.classList.add('close')
    from_bottom(1);
    console.log('dub')
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
                var intervalID = window.setTimeout(animating, 3000);
            } else if (compteur_scroll == 1) {
                articles_appear()
                compteur_scroll++
                is_animating = true
                var intervalID = window.setTimeout(animating, 3000);
            }
        }
    } else if (scrollUp) {
        if(!is_animating) {
            if (compteur_scroll == 1) {
                intro_disappear()
                compteur_scroll--
                is_animating = true
                var intervalID = window.setTimeout(animating, 3000);
            } else if (compteur_scroll == 2) {
                articles_disappear()
                compteur_scroll--
                is_animating = true
                var intervalID = window.setTimeout(animating, 3000);
            }
        }
    }
})