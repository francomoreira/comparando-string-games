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

// div contenedor de la img
const divImagen = document.querySelector('.divImagen');

// el boton enviar y asociar el click a la funcion comparar
const boton = document.getElementById('boton-enviar');
boton.addEventListener('click', comparar);

//detectar presion boton enter
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        comparar();
    }
});

// Textos inyectados en html desde js
const verboDOM = document.getElementById('verbo'); // para la consigna
const respDOM = document.getElementById('resultado'); // para los resultados
const spanVidas = document.querySelector('span'); // contero de vidas


let vidas = 3; 
let dato = '';
let verboIrregular = '';

function opcionAleatoriaPara(a) { // obtengo un elemento random de mi array
    let i = Math.floor(Math.random() * a.length)
    return a[i]; 
}

function inyectarHtml(i, verboIrregularRandom) {
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

function comparar() { // con click, compara el input del player con el dato random
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

function playerIsDead() { // chekeo si el player esta vivo,
    if (vidas <= 0) {
        alert('game over');
    } else {
        run();
    }
}

function run () {
    dato = opcionAleatoriaPara(data);
    verboIrregular = opcionAleatoriaPara(dato.verbsIrregulars);
    inyectarHtml(dato, verboIrregular); // agrego al html con la data obtenida..
    // ... quedo esperando que Usuario apriete el boton, envie su palabra para comparar()
    
    console.log(verboIrregular)
    console.log(dato.verbsIrregulars)
}

run();