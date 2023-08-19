const toggle_menu = document.getElementById("toggle_menu");
const main_flex = document.getElementById("main_flex");
toggle_menu.addEventListener("click",()=>{
    main_flex.classList.toggle("menu_show");
})