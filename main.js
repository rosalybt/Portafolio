const botonAbrirhamburguesa = document.querySelector(".menu-hamburguesa")
const listaMenuHambuerguesa = document.querySelector('.lista-menu-hamburguesa')
const itemsMenuHamburguesa = document.querySelectorAll('ul.lista-menu-hamburguesa a')
let cont = 0;

const accionarMenuHambuerguesa = () => {
    listaMenuHambuerguesa.classList.toggle('mostrar-menu-hamburguesa');

}

//verificar cuando se le hace click a un item del menu y al hacerlo cerrarlo
for (let item of itemsMenuHamburguesa) {
    item.onclick = () => {
        listaMenuHambuerguesa.classList.remove('mostrar-menu-hamburguesa');
    };

}

botonAbrirhamburguesa.onclick = () => {
    accionarMenuHambuerguesa();

}


