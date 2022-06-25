// let nota = Math.random()*5;

// console.log("Nota obtenida: " + nota);

// if(nota <= 3)
// {
//     console.log("Pierde la materia");
// } else if (nota <= 4){
//     console.log("Muy bien");
// } else {
//     console.log("Excelente");
// }

// console.log("--------------------------------")

// let fruta = prompt("Ingrese el nombre de la fruta");
// // if (fruta == "Manzana")
// // {
// //     console.log("La manzana vale $10.000");
// // }else if (fruta == "Pera"){
// //     console.log("La pera vale $15.000");
// // } else if (fruta == "Limón"){
// //     console.log("La limón vale $6.000");
// // }else if (fruta == "Mango"){
// //     console.log("El mango vale $8.000");
// // }else{
// //     console.log("Se nos agotó la fruta");
// // }

// switch(fruta){
//     case "Manzana":
//         alert("La manzana vale $10.000");
//         break;
//     case "Pera":
//         alert("La pera vale $15.000");
//         break;
//     case "Limón":
//         alert("El limón vale $6.000");
//         break;
//     case "Mango":
//         alert("El mango vale $8.000")
//         break;
//     default:
//         alert("Se nos agotó la fruta");
// }

// for(let i = 1; i < 30; i++)
// {
//     console.log(i);
// }

// let contarp = 0 
// let dineroEnCaja = Number(prompt("Ingrese el monto de dinero"));

// while(dineroEnCaja > 0)
// {
//     alert("Dinero Disponible: " + dineroEnCaja);
//     let presupuestoProyecto = Number(prompt("Ingrese el monto del proyecto"))
//     if(dineroEnCaja >= presupuestoProyecto)
//     {
//         dineroEnCaja -= presupuestoProyecto;
//         contarp ++;
//         alert("Se asignaron recursos para su proyecto");
//     } else{
//         alert("No se asignan recursos para su proyecto");
//     }
// }
// alert("Se han acabado los recursos. la cantidad de proyestos aprovados son: " + contarp);

const numVoto = document.getElementById("numVoto");
const btnVotar =document.getElementById("btnVotar");
const mensaje = document.getElementById("mensaje");
const ganador = document.getElementById("ganador");

numVoto.vale = " "

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let candidato4 = 0;

let voto;
for (let i = 1; i < 30; i++) 
{
    switch (voto) {
        case "1":
            candidato1++;
            break;
        case "2":
            candidato2++;
            break;
        case "3":
            candidato3++;
            break;
        case "4":
            candidato4++;
            break;
    }
}

mensaje.textContent = "El vocero del curso es: ";
if (candidato1 > candidato2 && candidato1 > candidato3 && candidato1 > candidato4) {
    ganador.textContent += "Mateo";
}
else if (candidato2 > candidato1 && candidato2 > candidato3 && candidato2 > candidato4) {
    ganador.textContent += "Marcos";
}
else if (candidato3 > candidato1 && candidato3 > candidato2 && candidato3 > candidato4) {
    ganador.textContent += "Lucas";
}
else if (candidato4 > candidato1 && candidato4 > candidato2 && candidato4 > candidato3) {
    ganador.textContent += "Juan";
}
else {
    alert( "No hay gandador")
}

function finalizarVoto()
{
    btnVotar.disabled = true;
}

function reiniciarVoto()
{
    cantidadIntentos = 1;
    btnVotar.disabled = false;
}
btnVotar.addEventListener("click", voto)
