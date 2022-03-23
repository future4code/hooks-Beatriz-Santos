// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => {
        return a - b;
    });
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPar = array.filter((item) => {
        return item = item % 2 == 0;
    });

    return arrayPar;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let pares = array.filter((item) => {
        return item = item % 2 == 0;
    });
    let elevadoADois = pares.map((item) => {
        return Math.pow(item, 2);
    });

    return elevadoADois;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0;
    for(let i = 0; i < array.length; i++){
        if(array [i] > maior){
            maior = array[i];
        }
    }
    return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let menorNumero = num1 < num2 ? num1 : num2;
    let maiorNumero = num1 > num2 ? num1 : num2;
    let maiorDivisivelPorMenor = maiorNumero % menorNumero == 0 ? true : false;
    let diferenca = Math.abs(num1 - num2);
    
    let objetoDosNumeros = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }
    return objetoDosNumeros;

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pares = [];
    for(let i = 0; i < n * 2; i++){
        if(i % 2 == 0){
            pares.push(i);
        }
    }
    
    return pares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA == ladoB && ladoA == ladoC){
        return 'Equilátero';
    }
    else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        return 'Isósceles'
    }
    else{
        return 'Escaleno'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let maior = Math.max(...array);
    let menor = Math.min(...array);
    let segundoMaior = 0;
    let segundoMenor = maior;
    let segundoMaiorEMenor = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] != maior && array[i] > segundoMaior){
            segundoMaior = array[i];
        }
    }
    for(let i = 0; i < array.length; i++){
        if(array[i] !=  menor && array[i] < segundoMenor){
            segundoMenor = array[i];
        }
    }
    segundoMaiorEMenor = [segundoMaior, segundoMenor];
    
    return segundoMaiorEMenor;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let pessoaAnonima = {
        ... pessoa,
        nome: 'ANÔNIMO'
    }
    return pessoaAnonima;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    function pessoasAutorizadas(dadosPessoas){
       let permissao = dadosPessoas.filter((item) => {
            if(item.altura > 1.5 && item.idade > 14 && item.idade < 60){
                return item;
            }
       });
        return permissao;
    }

    return pessoasAutorizadas(pessoas)
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    
    function pessoasNaoAutorizadas(dadosPessoas){
        let permissao = dadosPessoas.filter((item) => {
             if(item.altura <= 1.5 || item.idade <= 14 || item.idade >= 60){
                 return item;
             }
        });
         return permissao;
     }
  return pessoasNaoAutorizadas(pessoas)
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}