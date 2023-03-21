// Escreva um programa que verifique se um número é positivo ou negativo e exiba a mensagem no console.

function verificar(){

    let numero = parseInt(document.getElementById("numero").value)

    if(numero < 0){
        document.getElementById("resultado").innerHTML = `O número ${numero} é negativo`
    } else {
        document.getElementById("resultado").innerHTML =  `O número ${numero} é positivo`
    }

}
