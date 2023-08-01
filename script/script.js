
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
const barra1 = document.getElementById('barra1');
const barra2 = document.getElementById('barra2');
const barra3 = document.getElementById('barra3');

function  ativarMenu() {
    if (navMenu.style.display == '' ) {
        navMenu.style.display = 'block';
    } else {
        navMenu.style.display = '';
    }
    console.log('click feito menu')
}

function animacao() {
    if (barra1.style.transform == '' && barra2.style.opacity == '' && barra3.style.transform == '') {
        barra1.style.transform = 'translateY(8px) rotate(45deg)';
        barra2.style.opacity = '0';
        barra3.style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
        barra1.style.transform = '';
        barra2.style.opacity = '';
        barra3.style.transform = '';

    }
}


menu.addEventListener('click', () =>{
    ativarMenu();

    animacao();
})