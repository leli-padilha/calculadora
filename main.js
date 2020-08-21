var inputValor1 = document.getElementById("valor1");
var inputValor2 = document.getElementById("valor2");

function pegarValores() {
    return [parseInt(inputValor1.value), parseInt(inputValor2.value)];
}

function add(){
    document.getElementById("resultado").innerHTML = pegarValores()[0] + pegarValores()[1];
}

function subtrair() {

    document.getElementById("resultado").innerHTML = pegarValores()[0] - pegarValores()[1];
}

function multiplicar() {
    document.getElementById("resultado").innerHTML = pegarValores()[0] * pegarValores()[1];
}

function dividir() {
    if(valor2 == 0){
        document.getElementById("resultado").innerHTML = "não rola";
    } else {
        document.getElementById("resultado").innerHTML = pegarValores()[0] / pegarValores()[1];
    }
}

document.getElementById("btnAdd").onclick = add;
document.getElementById("btnSub").onclick = subtrair;
document.getElementById("btnMult").onclick = multiplicar;
document.getElementById("btnDivi").onclick = dividir;