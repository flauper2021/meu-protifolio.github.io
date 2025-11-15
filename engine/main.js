const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement;


function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");
    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");}

toggleTheme.addEventListener("click", changeTheme);


const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(item => {
    item.addEventListener('click', () => {
        menuLinks.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    })
} 
);


/*-- Accordions --*/

const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        accordionItem.classList.toggle('active');
    })
})