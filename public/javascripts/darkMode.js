let darkMode = document.querySelector('#dark-mode');
let headerDark = document.querySelector('#header-dark');
let mainDark = document.querySelector('#main-dark');

darkMode.addEventListener('click', () => {
    headerDark.classList.toggle('dark');
    document.body.classList.toggle('dark');
    mainDark.classList.toggle('dark');
    darkMode.classList.toggle('active');
});