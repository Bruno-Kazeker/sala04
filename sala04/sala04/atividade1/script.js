function soma(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    document.getElementById('resposta').textContent = numero1 + numero2
}
function sub(){
    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)
    document.getElementById('resposta').textContent = numero1 - numero2
}
function div(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
    document.getElementById('resposta').textContent = numero1 / numero2
    if (numero1 !==0){
        resposta.innerHTML = numero1 / numero2
    }else {
        resposta.textContent = "Não se divide por 0"
    }
}
function mult(){
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value)
    document.getElementById('resposta').textContent = numero1 * numero2
}

// arrow