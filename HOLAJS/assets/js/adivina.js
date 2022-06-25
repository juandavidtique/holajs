const numIntento = document.getElementById("numIntento");
const btnAdivinar = document.getElementById("btnAdivinar");
const intentos = document.getElementById("intentos");
const ultimoResultado = document.getElementById("ultimoResultado");
const altoBajo = document.getElementById("altoBajo");

let numeroAleatrorio = Math.floor(Math.random() * 100 +1);

numIntento.value = "";
let cantidadIntentos  = 1;
let btnReset;

function verificarIntento()
{
    let intentoUsuario = Number(numIntento.value);

    if(cantidadIntentos === 1)
      intentos.textContent = "Intentos anteriores: ";

    intentos.textContent += intentoUsuario + " ";

    if(intentoUsuario === numeroAleatrorio)
    {
        ultimoResultado.textContent = "¡Felicidades! ¡lo adivinaste!";
        ultimoResultado.style.backgroundColor = "green";
        altoBajo.textContent = ""
        finalizarJuego();
    } else if (cantidadIntentos === 10){
        ultimoResultado.textContent = "¡Fin del juego!"
        finalizarJuego();
    } else {
        ultimoResultado.textContent= "¡Incorrecto!";
        ultimoResultado.style.backgroundColor = "red";
        if(intentoUsuario < numeroAleatrorio)
        {
            altoBajo.textContent="El número  es muy bajo";
        } else {
            altoBajo.textContent="El número es muy alto";
        }
    }

    cantidadIntentos ++;
    numIntento.value = "";
    numIntento.focus();
}

function finalizarJuego()
{
    numIntento.disabled = true;
    btnAdivinar.disabled = true;

    btnReset = document.createElement("button");
    btnReset.textContent = "Iniciar el juego de nuevo";
    document.body.append(btnReset);
    btnReset.addEventListener("click", reiniciar);
    elemento.appendChild(btnReset);
}

function reiniciar()
{
    cantidadIntentos = 1;
    intentos.textContent = "";
    ultimoResultado.textContent = "";
    altoBajo.textContent = "";
    btnReset.parentNode.removeChild(btnReset);
    numIntento.disabled = false;
    btnAdivinar.disabled = false;
    ultimoResultado.style.backgroundColor = "withe";
    numeroAleatrorio = Math.floor(Math.random() * 100 +1);
}

btnAdivinar.addEventListener("click", verificarIntento);