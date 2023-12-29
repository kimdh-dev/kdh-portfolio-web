const btn_more = document.querySelector('.intro-more');

const btn_about_me = document.querySelectorAll('.AboutMe');
const btn_skill = document.querySelectorAll('.Skills');
const btn_project = document.querySelectorAll('.Projects');
const btn_career = document.querySelectorAll('.Career');
const btn_education = document.querySelectorAll('.Education');

const height_intro = document.querySelector('.intro').offsetHeight;
const div_header = document.querySelector('.header');
const div_title = document.querySelector('.maintitle');
const div_menu = document.querySelectorAll('ul.menu li a');

const div_name = document.querySelector('.name');
const div_birth = document.querySelector('.birth');
const div_address = document.querySelector('.address');
const div_phone_num = document.querySelector('.phone-num');
const div_email = document.querySelector('.email');
const div_edu = document.querySelector('.edu');

const header = document.querySelector('header');

let menu_state = false;
let is_mobile = false;
let win_width = 0;

function win_resized(w_size) {
    if(w_size < 950) {
        is_mobile = true;
        header.classList.add('mobile');
        div_title.classList.add('mobile');
    } else {
        is_mobile = false;
        $('.sub-menu-mobile').css('display', 'none');
        header.classList.remove('mobile');
        div_title.classList.remove('mobile');
    }
}

function menu_animation(state) {
    if(state) {
        $('.sub-menu-mobile').slideDown(200);
        menu_state = true;
    } else {
        $('.sub-menu-mobile').slideUp(200);
        menu_state = false;
    }
}

$(document).ready(function () {
    win_width = $(window).width();
    win_resized(win_width);


    $(window).on('resize', function () {
        win_width = $(window).width();
        win_resized(win_width);
    });

    $('.open-menu').click(function () {
        menu_animation(!menu_state);
    });
});

btn_more.addEventListener('click', function () {
    gsap.to(window, 0, {
        scrollTo: ".aboutme"
    });
});

btn_about_me.forEach(menu_item => {
    menu_item.addEventListener('click', function () {
        gsap.to(window, 0, {
            scrollTo: ".aboutme"
        });
        if(is_mobile) {
            menu_animation(false);
        }
    });
});

btn_skill.forEach(menu_item => {
    menu_item.addEventListener('click', function () {
        gsap.to(window, 0, {
            scrollTo: ".skill"
        });
        if(is_mobile) {
            menu_animation(false);
        }
    });
});

btn_project.forEach(menu_item => {
    menu_item.addEventListener('click', function () {
        gsap.to(window, 0, {
            scrollTo: ".project"
        });
        if(is_mobile) {
            menu_animation(false);
        }
    });
});

btn_career.forEach(menu_item => {
    menu_item.addEventListener('click', function () {
        gsap.to(window, 0, {
            scrollTo: ".career"
        });
        if(is_mobile) {
            menu_animation(false);
        }
    });
});

btn_education.forEach(menu_item => {
    menu_item.addEventListener('click', function () {
        gsap.to(window, 0, {
            scrollTo: ".education"
        });
        if(is_mobile) {
            menu_animation(false);
        }
    });
});

window.addEventListener('scroll', _.throttle(
    () => {
        if (window.scrollY > height_intro) {
            div_header.classList.add('moved');
            div_title.classList.add('moved');
            div_menu.forEach(menu_item => {
                menu_item.classList.add('moved');
            });
        }
        else {
            div_header.classList.remove('moved');
            div_title.classList.remove('moved');
            div_menu.forEach(menu_item => {
                menu_item.classList.remove('moved');
            });
        }
    }
), 300);

// base64 인코딩된 것
const encoded_name = 'JUVBJUI5JTgwJUVCJThGJTk5JUVEJTlDJTk4';
const encoded_birth = 'MDMuMDguMzA=';
const encoded_address = 'JUVBJUIyJUJEJUVBJUI4JUIwJUVCJThGJTg0JTIwJUVCJUI2JTgwJUVDJUIyJTlDJUVDJThCJTlD';
const encoded_phone_num = 'MDEwLTQzMTktMjM3OA==';
const encoded_email = 'a2RoLmRldnNAZ21haWwuY29t';
const encoded_edu = 'JUVDJTlEJUI4JUVDJUIyJTlDJUVDJUEwJTg0JUVDJTlFJTkwJUVCJUE3JTg4JUVDJTlEJUI0JUVDJThBJUE0JUVEJTg0JUIwJUVBJUIzJUEwJTIwKCVFQyVBMCU4NCVFQyU5RSU5MCVFQyVBMCU5QyVFQyU5NiVCNCVFQSVCMyVCQyk=';

// base64 디코딩
const decoded_name = decodeURI(atob(encoded_name));
const decoded_birth = decodeURI(atob(encoded_birth));
const decoded_address = decodeURI(atob(encoded_address));
const decoded_phone_num = decodeURI(atob(encoded_phone_num));
const decoded_email = decodeURI(atob(encoded_email));
const decoded_edu = decodeURI(atob(encoded_edu));

div_name.textContent = decoded_name;
div_birth.textContent = decoded_birth;
div_address.textContent = decoded_address;
div_phone_num.textContent = decoded_phone_num;
div_email.textContent = decoded_email;
div_edu.textContent = decoded_edu;

div_phone_num.setAttribute('href',`tel:${decoded_phone_num}`);
div_email.setAttribute('href',`mailto:${decoded_email}`);