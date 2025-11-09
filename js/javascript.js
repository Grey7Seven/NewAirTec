document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', () => {
        let navBar = document.querySelector('nav');
        let navLinks = document.querySelector('navbar-text a');

        if (window.scrollY > 150) {
            navBar.style.backgroundColor = 'rgba(4, 4, 41, 0.75)';
            navBar.style('boxShadow') = '0 2px 10px rgba(0, 0, 0, 0.50)'
        }
        else {
            navBar.style.backgroundColor = 'transparent';
        }
    })
})