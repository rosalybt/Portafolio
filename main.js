const botonAbrirhamburguesa = document.querySelector(".menu-hamburguesa")
const listaMenuHambuerguesa = document.querySelector('.lista-menu-hamburguesa')
let cont = 0;

const abrirMenuHambuerguesa = () => {
  
    if (cont == 0) {
        listaMenuHambuerguesa.classList.remove('hidden');
        cont++;
    } else {
        listaMenuHambuerguesa.classList.add('hidden');
        cont=0;
    }

}
botonAbrirhamburguesa.onclick = () => {
    abrirMenuHambuerguesa();

}


