

//Identification:

let elementoInput = document.querySelector(".program__input");
let elementoBtn = document.querySelector(".program__button");
let elementoResultado = document.querySelector(".program__resultado");


// Variables:

const URL = "https://api.agify.io?name=";


// Functions:

function pintarResultado(age){
    elementoResultado.textContent = age;
};

function adivinaNumero (nombre){
    let urlConcat = URL + nombre;
    fetch(urlConcat)
    .then(resp => resp.json())
    .then(resp =>{
        if (resp.age === null) {
            elementoResultado.textContent = '-';
            throw(Error('Lo sentimos no hemos podido adivinar tu edad'));
        }else{
            pintarResultado (resp.age);
        }
    } )
    .catch(error => console.log(error.message))  
};


//Events:

elementoBtn.addEventListener('click', function(){adivinaNumero(elementoInput.value)});



