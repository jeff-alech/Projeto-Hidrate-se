let nome = document.querySelector('input#nome');
let peso = document.querySelector("input#peso");
let c_dialogo = document.querySelector("p#ml_agua");
let resposta = document.querySelector("p#resposta");
let hidra = document.querySelector("p#letsGo");
let medida = {
cem: 100,
cent: 150,
duz: 250,
tre: 300,
qui: 500,
lit: 1000
}
nome.focus
function calcular(){
    
    if(nome.value == "" || peso.value == ""){
        hidra.innerHTML = ("Preencha todos os campos")
    }else{
        c_dialogo.style.color = '#333333'
        resposta.style.color = '#333333'
        c_dialogo.innerHTML = `<strong>${nome.value}</strong> pelos meus cálculos você precisa tomar <strong>${peso.value * 35} ml</strong> de água`
        resposta.innerHTML = peso.value * 35
    }
}
function ml100(){
    if(nome.value == "" || peso.value == ""){
        hidra.innerHTML = ("Preencha todos os campos")
    }else{
        resposta.innerHTML -= medida.cem
        if(resposta.innerHTML <= 0){
            resposta.innerHTML = "0"
                hidra.innerHTML = "Parabéns"
        }
    }
}
function ml150(){
    if(nome.value == "" || peso.value == ""){
        hidra.innerHTML = ("Preencha todos os campos")
    }else{
        resposta.innerHTML -= medida.cent
        if(resposta.innerHTML <= 0){
            resposta.innerHTML = "0"
                hidra.innerHTML = "Parabéns"
        }
    }
}
function ml250(){
    if(nome.value == "" || peso.value == ""){
        hidra.innerHTML = ("Preencha todos os campos")
    }else{
        resposta.innerHTML -= medida.duz
        if(resposta.innerHTML <= 0){
            resposta.innerHTML = "0"
                hidra.innerHTML = "Parabéns"
        }
    }
}
function ml300(){
    if(nome.value == "" || peso.value == ""){
        hidra.innerHTML = ("Preencha todos os campos")
    }else{
        resposta.innerHTML -= medida.tre
        if(resposta.innerHTML <= 0){
            resposta.innerHTML = "0"
                hidra.innerHTML = "Parabéns"
        }
    }
}
function ml500(){
    if(nome.value == "" || peso.value == ""){
        hidra.innerHTML = ("Preencha todos os campos")
    }else
        {resposta.innerHTML -= medida.qui
            if(resposta.innerHTML <= 0){
                resposta.innerHTML = "0"
                hidra.innerHTML = "Parabéns"
            }
    }
}
function ml1(){
    if(nome.value == "" || peso.value == ""){
        hidra.innerHTML = ("Preencha todos os campos")
    }else
        {resposta.innerHTML -= medida.lit
            if(resposta.innerHTML <= 0){
                resposta.innerHTML = "0"
                hidra.innerHTML = "Parabéns"
            }
    }
}

