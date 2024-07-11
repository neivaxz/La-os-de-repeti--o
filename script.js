function valores() {
    var resposta = document.getElementById('resposta');

    for (var i = 1; i <= 20; i++) {
        var numero = parseInt(prompt("Digite um número"));
        var maior = 0
        var menor = 0
        if (numero > maior) {
            maior = numero;
        }
        else if (numero < menor) {
            menor = numero;
        }
    }
    resposta.innerHTML = ("O maior é:"+ maior + ". E menor é: " + menor);
}
 
   

