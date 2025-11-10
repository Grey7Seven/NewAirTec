document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', () => {
        let navBar = document.querySelector('nav');

        if (window.scrollY > 150) {
            navBar.style.backgroundColor = 'rgba(4, 4, 41, 0.75)';
        }
        else {
            navBar.style.backgroundColor = 'transparent';
        }
    })
})