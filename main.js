const botonAbrirhamburguesa = document.querySelector(".menu-hamburguesa")
const listaMenuHambuerguesa = document.querySelector('.lista-menu-hamburguesa')
const itemsMenuHamburguesa = document.querySelectorAll('ul.lista-menu-hamburguesa a')
const overlay = document.querySelector('.overlay')

const botonesFiltro = document.querySelectorAll(".filtro-boton")
const tarjetasProyectos = document.querySelectorAll(".tarjeta-proyecto")
console.log(botonesFiltro)



//========funciones

const accionarMenuHambuerguesa = () => {
    overlay.classList.toggle('hidden')
    listaMenuHambuerguesa.classList.toggle('mostrar-menu-hamburguesa');

}

//verificar cuando se le hace click a un item del menu y al hacerlo cerrarlo
for (let item of itemsMenuHamburguesa) {
    item.onclick = () => {
        accionarMenuHambuerguesa();

    };

}

/// ==========eventos
//====================
botonAbrirhamburguesa.onclick = () => {
    accionarMenuHambuerguesa();

}

for (let boton of botonesFiltro) {


    boton.onclick = () => {
     removerClase();
        boton.classList.add('boton-principal')
        boton.classList.remove('boton')
        for (let tarjeta of tarjetasProyectos) {
            if (boton.dataset.tecnologia === tarjeta.dataset.tecnologia) {
                tarjeta.classList.remove('hidden')
            } else if (boton.dataset.tecnologia === "todos") {
                tarjeta.classList.remove('hidden')
            }
            else {
                tarjeta.classList.add('hidden')
            }
        }
    }
}
//elimina la clase del boton-principal a los botones
const removerClase = () => {
    for (let boton of botonesFiltro) {
        boton.classList.remove('boton-principal')
        boton.classList.add('boton')

    }
}