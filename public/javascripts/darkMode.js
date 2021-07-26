let darkMode = document.querySelector('#dark-mode');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkMode.classList.toggle('active');
})