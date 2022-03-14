window.addEventListener('scroll', () => {
    let header = document.querySelector('header');

    header.classList.toggle('site-header-active', window.scrollY > 0);
});