const data = [
    {
        preg : './data/img/bike.jpg',
        resp : "bike"
    },
    {
        preg : './data/img/awake.jpg',
        resp : "awake"
    }
]

// para obtener el src de la etiqueta audio, al final no la use, pero que placer encontrarla.
//let audioSrc = document.getElementById('audio').attributes[3].value;

// el div que contiene el audio
const divImagen = document.querySelector('.divImagen');

// el boton enviar y asociar el click a la funcion comparar
const boton = document.getElementById('boton-enviar');
boton.addEventListener('click', comparar);

// para poner el resultado en el dom
const respDOM = document.getElementById('resultado');
const verboDOM = document.getElementById('verbo');
// contero de vidas 
const spanVidas = document.querySelector('span');

let dato;
let vidas = 3; 
spanVidas.innerText = vidas;


function inyectarHtml(i) {
    divImagen.innerHTML = `<img src="${i.preg}" alt="bike">`
    verboDOM.innerHTML = `${i.resp}`
    console.log(i);
}

function comparar() {
  const respuestaUsuario = String(document.getElementById('input-user').value);
  if (respuestaUsuario == dato.resp) {
    isTrue();
  } else {
    isFalse(dato.resp);
  }
}

function isTrue() {
    respDOM.innerHTML = "Correcto!";  
    return playerIsDead();
};

function isFalse(res) {
    respDOM.innerHTML = `Lo siento, la respuesta era: <br> ${res}`;
    vidas = vidas - 1;
    spanVidas.innerText = vidas;
    return playerIsDead();
};

function playerIsDead() {
    if (vidas <= 0) {
        alert('game over');
    } else {
        start();
    }
}

function start () {
    dato = data[Math.floor(Math.random() * 2)]; // obtengo un dato random de mi objeto Data
    inyectarHtml(dato); // agrego al html el audio correcto con la data obtenida..
    // ... quedo esperando que Usuario apriete el boton, para comparar()
}

start();