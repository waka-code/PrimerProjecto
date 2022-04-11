document.querySelector(' .menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new',{ DELAY: 500});
ScrollReveal().reveal('.card-b',{ DELAY: 500});
ScrollReveal().reveal('.card-b2',{ DELAY: 500});
