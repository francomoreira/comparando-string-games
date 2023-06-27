const data = [
    {
        img: './data/img/arise.jpeg',
        infinitive : "arise",
        spanish: "surgir",
        verbsIrregulars : [
            "arose",
            "arisen",
        ]
    },
    {
        img: './data/img/awake.jpg',
        infinitive: "awake",
        spanish: "despierta",
        verbsIrregulars: [
            "awoke",
            "awoken",
        ]
    },
    {
        img: './data/img/beat.jpg',
        infinitive: "beat",
        spanish: "golpear",
        verbsIrregulars: [
            "beat",
            "beaten",
        ]
    }
]

// boton enviar y llama a la funcion comparar()
const boton = document.getElementById('boton-enviar');
boton.addEventListener('click', comparar);

//detectar presion boton enter y llama a comparar()
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        comparar();
    }
});

// Textos inyectados en html desde js
const verboDOM = document.getElementById('verbo'); // para la consigna
const respDOM = document.getElementById('resultado'); // para los resultados
const spanVidas = document.querySelector('span'); // contero de vidas

// div contenedor de la img
const divImagen = document.querySelector('.divImagen');

let vidas = 3; 
let dato = '';
let verboIrregular = '';


function opcionAleatoriaPara(a) { // obtengo un elemento random de mi array
    let i = Math.floor(Math.random() * a.length)
    return a[i]; 
}

function inyectarHtml(i, verboIrregularRandom) { // agrego al html la data obtenida..
    // insertando imagen
    divImagen.innerHTML = `<img src="${i.img}" alt="img ${i.infinitive}">`

    // insertando textos
    if (verboIrregularRandom == i.verbsIrregulars[0]) {
        // SIMPLE PAST
        verboDOM.innerHTML = `Escribe el Simple Past del verbo ${i.infinitive}`
    } else if (verboIrregularRandom == i.verbsIrregulars[1]) {
        // past participle
        verboDOM.innerHTML = `Escribe el Past Participle del verbo ${i.infinitive}`
    }
    spanVidas.innerText = vidas;
    //console.log(i);
}

function comparar() { // compara el input del player con el dato random
    const respuestaUsuario = String(document.getElementById('input-user').value);
    if (respuestaUsuario == verboIrregular) {
      isTrue();
    } else {
      isFalse(verboIrregular);
    }
}

function isTrue() { // si la comparacion es true, cae aca
    respDOM.innerHTML = "Correcto!";  
    return playerIsDead();
};

function isFalse(res) { // si la comparacion es false, cae aca
    respDOM.innerHTML = `Lo siento, la respuesta era: <br> ${res}`;
    vidas = vidas - 1;
    spanVidas.innerText = vidas;
    return playerIsDead();
};

function playerIsDead() { // chekeo si el player esta vivo, llamo a comparar() 
    if (vidas <= 0) {
        alert('game over');
    } else {
        run();
    }
}

function run () {
    dato = opcionAleatoriaPara(data);
    verboIrregular = opcionAleatoriaPara(dato.verbsIrregulars);
    inyectarHtml(dato, verboIrregular); 
    // ... quedo esperando que el player juegue para comparar()
}

run();