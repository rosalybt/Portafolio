const botonAbrirhamburguesa = document.querySelector(".menu-hamburguesa")
const listaMenuHambuerguesa = document.querySelector('.lista-menu-hamburguesa')
let cont = 0;

const abrirMenuHambuerguesa = () => {

        listaMenuHambuerguesa.classList.toggle('hidden');
}
botonAbrirhamburguesa.onclick = () => {
    abrirMenuHambuerguesa();

}


