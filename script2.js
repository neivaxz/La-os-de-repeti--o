

function impares(){
    var resposta = document.getElementById("resposta");
    var resultado = "";
    for(var contador=150; contador<=300; contador++){
        if(contador% 2!=0){ 
            resultado += contador+" / ";
        }        
    }
    resposta.innerHTML=resultado;

}
