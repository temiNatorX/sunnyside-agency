const btn = document.querySelector('.hamburger');
const nav_menu = document.querySelector('.nav-bar > nav');


btn.onclick =()=>{
    if(nav_menu.style.display !== 'flex'){
        nav_menu.style.display = 'flex';
    }
    else if(nav_menu.style.display !== 'none'){
        nav_menu.style.display = 'none';
    }
}