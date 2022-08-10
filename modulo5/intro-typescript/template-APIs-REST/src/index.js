// ====== EXERCICIO 01 ========
/*A seguinte função em JavaScript recebe como parâmetro os tamanhos dos três lados do triângulo: ladoA, ladoB, ladoC e retorna se ele é equilátero, isósceles ou escaleno. Refatore a função para o Typescript. */
// function checaTriangulo(a: number, b: number, c: number) {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }
//   console.log(checaTriangulo(4, 5, 5))
// ====== EXERCICIO 02 ========
/*A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores. Refatore a função para o Typescript.*/
// function imprimeTresCoresFavoritas() {
//     const cor1: string = prompt("Insira sua primeira cor favorita");
//     const cor2: string = prompt("Insira sua segunda  cor favorita");
//     const cor3: string = prompt("Insira sua terceira cor favorita");
//     console.log([cor1, cor2, cor3])
//  }
// ====== EXERCICIO 03 ========
/* A função recebe um ano e retorna um booleano (true ou false) que indica se o ano é bissexto. Um ano é bissexto de acordo com as seguintes condições:
- São bissextos todos os anos múltiplos de 400
- São bissextos todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400
- Não são bissextos todos os demais anos.
Com isso em mente, refatore a função para o Typescript. */
// function checaAnoBissexto(ano: number) {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }
// console.log(checaAnoBissexto(2022))
// ================= OUTRO CODIGO =======================
// const ano: number = 2020;
// const calculoAno = (ano: number) => {
//     if((ano % 4 === 0) || (ano % 400 === 0) && (ano % 100 !== 0)){
//         return(`${ano} é um ano bissextos`);
//     }
//     else{
//         return('Não é bissextos');
//     }
// }
// console.log(calculoAno(ano));
// ======================================================
// ====== EXERCICIO 04 ========
/* A seguinte função recebe dois números como parâmetro e retorna a diferença entre o maior número e o menor. Dessa forma, refatore a função para o Typescript. */
// function comparaDoisNumeros(num1: number, num2: number) {
//     let maiorNumero;
//     let menorNumero;
// ========== OUTRO MANEIRA DE FAZER ===========
// maiorNumero = num1>num2? num1 : num2;
// menorNumero = num1>num2 ? num2 : num1;
// =============================================
// if (num1 > num2) {
//   maiorNumero = num1;
//   menorNumero = num2;
// } else {
//   maiorNumero = num2;
//   menorNumero = num1;
// }
//     const diferenca = maiorNumero - menorNumero;
//     return diferenca 
//   }
//   console.log(comparaDoisNumeros(10, 5))
// ====== EXERCICIO 05 ========
//   A função abaixo recebo por parâmetro  o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função retorna  uma string que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
function checaRenovacaoRG(anoAtual, anoNascimento, anoEmissao) {
    var idade = anoAtual - anoNascimento;
    var tempoCarteira = anoAtual - anoEmissao;
    if (idade <= 20) {
        return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos";
    }
    else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos";
    }
    else if (idade > 50) {
        return tempoCarteira >= 15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos";
    }
    else {
        return "error";
    }
}
console.log(checaRenovacaoRG(1996, 1984, 1990));
