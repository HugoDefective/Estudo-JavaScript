
 
let paciente = document.querySelector("#primeiro-paciente");

let tdPeso = paciente.querySelector(".info-peso");
let peso = tdPeso.textContent;

let tdAltura = paciente.querySelector(".info-altura");
let altura = tdAltura.textContent;

let tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;

if(peso < 0 ){ 
    console.log("peso inválido");
}   pesoValido = false;
if(peso > 1000 ){ 
    console.log("peso inválido");
    pesoValido = false;
}
if( pesoValido){ 
let imc = peso / (altura * altura);
tdImc.textContent = imc;
}

