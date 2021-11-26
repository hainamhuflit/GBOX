//Footer Back to top
const backToTop = document.querySelector('.back-toT');

backToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
    })
})


//Nav Open
const hambuber = document.querySelector('header .hambuger'),
    nav = document.querySelector('.nav');

hambuber.addEventListener('click', function () {
    this.classList.toggle('active')
    nav.classList.toggle('active')
})



//Home Tag
const tagH = document.querySelectorAll('.gbox .tag__list .tag-item'),
    boxListH = document.querySelectorAll('.gbox .box__list');


tagH.forEach(function (item, index) {
    item.addEventListener('click', function () {
        const tagID = index + 1;
        tagH.forEach(function (tag) {
            tag.classList.remove('active')
        })
        boxListH.forEach(function (box) {
            box.classList.remove('active')
        })
        this.classList.add('active')
        let a = document.querySelector('.gbox .b_' + tagID).classList.add('active')

    })
})


//Work Tag
const tagW = document.querySelectorAll('.gbox-works .tag__list .tag-item'),
    boxListW = document.querySelectorAll('.gbox-works .box__list');


tagW.forEach(function (item, index) {
    item.addEventListener('click', function () {
        const tagID = index + 1;
        tagW.forEach(function (tag) {
            tag.classList.remove('active')
        })
        boxListW.forEach(function (box) {
            box.classList.remove('active')
        })
        this.classList.add('active')
        document.querySelector('.works .b_' + tagID).classList.add('active')
    })
})


//Rental Options
const studioBtn = document.querySelectorAll('.booking-form .studio-options a');

studioBtn.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        studioBtn.forEach(function (btn) {
            btn.classList.remove('active')
        })

        this.classList.add('active')
    })
})


//Slider Studio Detail
let $carousel = $('.slider__list');

$carousel.flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    wrapAround: true,
    prevNextButtons: false,
    on: {
        change: function (index) {
            let sliderNumber = index + 1;
            $('.studio-detail .bot .number span').text(sliderNumber.toString().padStart(2, 0))
        },
    },
    off: {
        change: function (index) {
            let slidNum = index + 1;
        }
    }
})

$('.btn .prev').on('click', function (e) {
    e.preventDefault()
    $carousel.flickity('previous')
})

$('.btn .next').on('click', function (e) {
    e.preventDefault()
    $carousel.flickity('next')
})


//Slider Gallery
const $gallery = $('.gal__list').flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    wrapAround: true,
    prevNextButtons: false,
});

$('.gal__slider-btn .btn .prev').on('click', function (e) {
    e.preventDefault()
    $gallery.flickity('previous')
})

$('.gal__slider-btn .btn .next').on('click', function (e) {
    e.preventDefault()
    $gallery.flickity('next')
})


//Download Btn
const downloadBtn = document.querySelector('.detail__slider .bot .download'),
    currentImg = document.querySelector('.detail__slider .slider__list .is-selected img');

downloadBtn?.addEventListener('click', function () {
    let imgPath = currentImg.getAttribute('src')
    let fileName = getFileName(imgPath)

    saveAs(imgPath, fileName);
})

function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1);
}

//Project img popUp
const projectImg = document.querySelector('.project .project-img img'),
    pjZoomBtn = document.querySelector('.project .project-top .right .zoom-btn'),
    popUp = document?.querySelector('.popup'),
    closeBtn = document.querySelector('.popup .close-btn');

closeBtn?.addEventListener('click', function (e) {
    e.stopPropagation();
    popUp.classList.remove('active');
})

projectImg?.addEventListener('click', function (e) {
    e.stopPropagation();
    popUp.classList.add('active');
})

pjZoomBtn?.addEventListener('click', function (e) {
    e.stopPropagation();
    popUp.classList.add('active');
})

document.addEventListener('click', function (e) {
    e.stopPropagation();
    popUp?.classList.remove('active');
})

