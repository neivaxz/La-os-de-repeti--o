function mediaTurma() {
    var mediasPonderadas = [];
    var resposta = document.getElementById("resposta");
    var resultado = "";
    for (var aluno = 1; aluno <= 2; aluno++) {
        var nota1 = parseFloat(prompt(`Digite a primeira nota do aluno ${aluno}:`));
        var nota2 = parseFloat(prompt(`Digite a segunda nota do aluno ${aluno}:`));
        var nota3 = parseFloat(prompt(`Digite a terceira nota do aluno ${aluno}:`));
        if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
            var mp = (nota1 * + nota2 * 4 + nota3 * 3) / 9;
            mediasPonderadas.push(mp);
            resultado += `Média ponderada do aluno $(aluno):  = ${mp.toFixed(2)}<br/>`;

        } else {
            resultado += `Notas inválidas para o aluno $(aluno).`;
        }
    }
    if (mediasPonderadas.length > 0) {
        var somaMedias = mediasPonderadas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        var mediaGeral = somaMedias / mediasPonderadas.length;
        resultado += `\n Média geral da turma: ${mediaGeral.toFixed(2)}`;
    }
    else {
        resultado += `Não deu pra calcular a média da turma :c`;
    }
    resposta.innerHTML = resultado;
}
