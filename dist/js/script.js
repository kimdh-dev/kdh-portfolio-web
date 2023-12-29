const btn_more = document.querySelector('.intro-more');
const btn_about_me = document.querySelector('.AboutMe');
const btn_skill = document.querySelector('.Skills');
const btn_project = document.querySelector('.Projects');
const btn_career = document.querySelector('.Career');
const btn_education = document.querySelector('.Education');

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

btn_more.addEventListener('click', function () {
    gsap.to(window, 0, {
        scrollTo: ".aboutme"
    });
});

btn_about_me.addEventListener('click', function () {
    gsap.to(window, 0, {
        scrollTo: ".aboutme"
    });
});

btn_skill.addEventListener('click', function () {
    gsap.to(window, 0, {
        scrollTo: ".skill"
    });
});

btn_project.addEventListener('click', function () {
    gsap.to(window, 0, {
        scrollTo: ".project"
    });
});

btn_career.addEventListener('click', function () {
    gsap.to(window, 0, {
        scrollTo: ".career"
    });
});

btn_education.addEventListener('click', function () {
    gsap.to(window, 0, {
        scrollTo: ".education"
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
const encoded_phone_num = 'KzgyJTIwMTAtNDMxOS0yMzc4';
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



