const data = [
    {
        img : './data/img/arise.jpeg',
        infinitive : "arise",
        simplePast: "arose",
        pastParticiple: "arisen",
        spanish: "surgir",
    },
    {
        img : './data/img/awake.jpg',
        infinitive : "awake",
        simplePast: "awoke",
        pastParticiple: "awoken",
        spanish: "despierta",
    },
    {
        img : './data/img/beat.jpg',
        infinitive : "beat",
        simplePast: "beat",
        pastParticiple: "beaten",
        spanish: "golpear",
    },
]

// el div que contiene la img
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

function opcionAleatoria() {
    let i = Math.floor(Math.random() * data.length)
    dato = data[i]; // obtengo un dato random de mi objeto Data
}


function inyectarHtml(i) {
    divImagen.innerHTML = `<img src="${i.img}" alt="bike">`
    verboDOM.innerHTML = `${i.infinitive}`
    console.log(i);
}

function comparar() {
  const respuestaUsuario = String(document.getElementById('input-user').value);
  if (respuestaUsuario == dato.infinitive) {
    isTrue();
  } else {
    isFalse(dato.infinitive);
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
    opcionAleatoria();
    inyectarHtml(dato); // agrego al html el audio correcto con la data obtenida..
    // ... quedo esperando que Usuario apriete el boton, para comparar()
}

start();