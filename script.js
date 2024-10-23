// const bar = document.getElementById('bar');
// const nav = document.getElementById('navbar');

// if (bar) {
//     bar.addEventListener('click', () => {
//         nav.classList.add('active');
//     })
// }

// Ensure DOM is fully loaded before executing script
document.addEventListener('DOMContentLoaded', function () {
    const bar = document.getElementById('bar');
    const navbar = document.getElementById('navbar');

    bar.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});
