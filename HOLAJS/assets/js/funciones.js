const numClicDom = document.getElementById("numClic");

let numeroClic = 0;
function contadorDeClic()
{
    numeroClic += 1;
    numClicDom.textContent = numeroClic;
}
// function reiniciarClic()
// {
//     numeroClic = 0;
//     numClicDom.textContent = numeroClic;
// }

const btnRestablecer = document.getElementById("btnRestablecer");

function restablecer()
{
    numClicDom.textContent = 0;
}

btnRestablecer.addEventListener("click", restablecer);
