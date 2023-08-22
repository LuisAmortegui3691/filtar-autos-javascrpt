// Variables 
const resultado = document.querySelector('#resultado');
const marca = document.querySelector('#marca');
const year = document.querySelector('#year'); 
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const max = new Date().getFullYear();
const min = max - 10;

// Generar objto de la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    precioMinimo: '',
    precioMaximo: '',
    puertas: '',
    transmision: '',
    color: ''
};


// Eveventos 
document.addEventListener('DOMContentLoaded', () =>{
    // Funcion para mostrar autos
    mostrarAutos(autos);

    // Funcion llena las opciones de years
    llenarSelectYear();
})

// Eventos para los select de las busquedas 
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;

    // Llamada funcion busqueda por marca
    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;

    // Llamando funcion busuqeda por fecha
    filtrarAuto();
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;

    // Llamada funcion busqueda por precio minimo
    filtrarAuto();
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    
    // Llamada funcion busqueda por precio maximo
    filtrarAuto();
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;

    // Llamada funcion busqueda por puertas
    filtrarAuto();
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;

    // Llamada funcion busqueda por transmision
    filtrarAuto();
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    // Llamada funcion busqueda por color
    filtrarAuto();
    console.log(datosBusqueda);
})

// Funcion para mostrar los autos 
function mostrarAutos(autos) {

    limppiarHTML(); // Elmina el HTM previo

    // Recorrido a cada uno de los objetos
    autos.forEach(auto => {
        // Destructuring para el objeto
        const {marca, modelo, year, puertas, transmision,  precio, color} = auto;
        // crear HTML
        const autoHTML = document.createElement('p');
            
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} - ${transmision} - ${precio} - ${color}
        `;

        // Insertar en el HTML
        resultado.appendChild(autoHTML);
    });
}

// Limpiar HTML
function limppiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Genera los years del select 
function llenarSelectYear() {
    for(let i = max; i >+ min; i--) {
        const opciones = document.createElement('option');
        opciones.value = i;
        opciones.textContent = i;
        year.appendChild(opciones); // Agrega las opciones de year al select
    }
}

// Funcion que filtra en base a la busqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtraColor);

    //console.log(resultado);
    mostrarAutos(resultado);
}

// Filtrar por marca
function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if(marca) {
        return auto.marca === marca;
    } 
    return auto;
}

// Filtar por fecha
function filtrarYear(auto) {
    const {year} = datosBusqueda;
    if(year) {
        return auto.year === parseInt(year);
    }
    return auto;
}

// Filtar por precio minimo
function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;
    if(minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

// Filtar por precio maximo
function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    if(maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

// Filtrar por puertas 
function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda;
    if(puertas) {
        return auto.puertas == puertas;
    }
    return auto;
}

// Filtrar por transmision
function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;
    if(transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

// Filtrar por color
function filtraColor(auto) {
    const {color} = datosBusqueda;
    if(color) {
        return auto.color === color;
    }
    return auto;
}
