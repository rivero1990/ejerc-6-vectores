const palabras = ["Manzana", "Banana", "Naranja", "Pera", "Uva"];

const lista = document.querySelector("#frutas");

let palabrasHtml = "";

for (let i = 0; i < palabras.length; i++) {
    lista.innerHTML += `<li>${palabras[i]}</li>`;
}

