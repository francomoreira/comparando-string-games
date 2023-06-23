const data = [
    {
        preg : './data/audio/1.ogg',
        resp : 'Hello. How are you?'
    },
    {
        preg : './data/audio/2.ogg',
        resp : `Hey, Kathy. I'm well. And you?`
    }
]

// para obtener el src de la etiqueta audio, al final no la use, pero que placer encontrarla.
let audioSrc = document.getElementById('audio').attributes[3].value;

// el div que contiene el audio
const divAudio = document.querySelector('.divAudio');

// el boton enviar y asociar el click a la funcion comparar
const boton = document.getElementById('boton-enviar');
boton.addEventListener('click', comparar);

// para poner el resultado en el dom
const respDOM = document.getElementById('resultado');
// contero de vidas 
const spanVidas = document.querySelector('span');

let dato;
let vidas = 3; 
spanVidas.innerText = vidas;


function inyectarHtml(i) {
    divAudio.innerHTML = `  <audio id='audio' controls autoplay src="${i}">
                                Tu navegador no soporta la etiqueta de audio.
                            </audio>`
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
    respDOM.innerHTML = `Lo siento incorrecto la respuesta era: <br> ${res}`;
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
    inyectarHtml(dato.preg); // agrego al html el audio correcto con la data obtenida..
    // ... quedo esperando que Usuario apriete el boton, para comparar()
}


start();