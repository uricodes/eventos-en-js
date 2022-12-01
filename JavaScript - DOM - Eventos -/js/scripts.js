//Seleccionar contenido HTML desde Java
//1.- querySelector
const heading = document.querySelector('.header__texto h2'); //Selecciona 0 o 1 Elementos
    //Modificar heading
    heading.textContent = "Nuevo Heading ";
console.log(heading);
//2.- querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces); 
console.log(enlaces[0]); 
    //Modificar con textContent
    enlaces[0].textContent = "Nosotres";
        // //Crear una clase nueva del hmtl
        // enlaces[0].classList.add('nueva__clase');
        // //Eliminar una clase del html
        // enlaces[0].classList.remove('nueva__clase');
//3.- getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);


//CREAR CODIGO CON HTML

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');
//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
//Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual'
//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
//Agregarlo al código html
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//EVENTOS

// console.log(1);

// window.addEventListener('load', function(){ //load espera a que el js y los archivos que dependen den html estén listos 
//     console.log(2);    
// })

// window.onload = function(){ //Otra forma de mostrar los load y los addEventListener
//     console.log(3);    
// }

// document.addEventListener('DOMContentLoaded', function(){ //Solo espera por el HTML, pero no espera CSS o imagenes
//     console.log(4);
// })
// console.log(5);

//SELECCIONAR ELEMENTOS Y ASOCIARLES UN EVENTO

// window.onscroll = function(evento){
//     console.log(evento);
// }

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();
//     console.log('Enviando Formulario');
// });

//EVENTOS DE LOS INPUTS Y LOS TEXT AREA

const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//EL EVENTO DE SUBMIT
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //Validar el formulario
    const {nombre, email, mensaje} = datos;
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; //Corta la ejecucion del código
    }
    //Enviar el formulario
    mostrarAlerta('Mensaje Enviado');
});

function leerTexto(e){
    datos[e.target.id] = e.target.value;
}

//Mostrar alertas en general
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('enviado')
    }
    formulario.appendChild(alerta);
        //Hacer que desaparezca el mensaje despues de 5 segundos
        setTimeout(() => {
            alerta.remove();
        }, 5000);
}
