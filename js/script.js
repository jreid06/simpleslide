function controlSlide(slide_ctrl) {
    if (slide_ctrl.classList.length < 1) {
        // remove class from old active slide
        for (var k = 0; k < slideControl.length; k++) {

            if (slideControl[k].classList.length >= 1 && slideControl[k].classList[0] === 'active') {

                slideControl[k].children[0].classList.remove('slide-dot-active');
                slideControl[k].classList.remove('active')
            }
        }

        // add class to clicked slide

        slide_ctrl.classList.add('active')
        slide_ctrl.children[0].classList.add('slide-dot-active');
    }

}


let slideControl = document.querySelectorAll('.slider-ctrls a');

// add click event to slide controls
for (var i = 0; i < slideControl.length; i++) {
    slideControl[i].addEventListener('click', function(e) {

        let slide_ctrl = e.target;

        controlSlide(slide_ctrl);

    })
}

function positionDot(slideControl) {
    let hash = window.location.hash;

    if (hash) {
        for (var i = 0; i < slideControl.length; i++) {

            if (slideControl[i].classList[0] === 'active' && slideControl[i].attributes['href'].value !== hash) {
                slideControl[i].classList.remove('active');
                slideControl[i].children[0].classList.remove('slide-dot-active');
            }else if (slideControl[i].attributes['href'].value === hash) {
                slideControl[i].classList.add('active');
                slideControl[i].children[0].classList.add('slide-dot-active');
            }
        }
    }

}

positionDot(slideControl);
