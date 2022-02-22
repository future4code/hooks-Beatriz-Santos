// ### EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO ###
/*
1 - a) O que vai ser impresso no console?
    No primeiro console será impresso o número 10, já que a multiplicação será de 2 * 5
    No segundo  console será impresso o número 50, já que a multiplicação será de 10 * 5

    b)O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
    Não iria aparecer nada, a função funcionaria normalmente, mas como não estamos a chamando ela não iria retornar o resultado da 
    multiplicação para o usuário ou o programador visualizar.

2 - a) Explique o que essa função faz e qual é sua utilidade 
    A função irá pegar um texto digitado pelo usuário e vai deixar todas as letras minusculas, através do toLoweCase() e depois
    irá ver se possui a palavra "cenoura" na frase, a partir do includes().

    b)true ; true; false.
*/
// ### EXERCICIOS DE ESCRITA DE CÓDIGO ###

// --- 1 ---
//a) 
const sobreMim = () =>{

    console.log ("Eu sou Beatriz, tenho 21 anos, moro em Londrina e sou atendente.");
}
sobreMim();

//b)
// const sobreUsuario = (nome, idade, cidade, profissao) => {
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
// }

// const nomeUsuario        =    prompt("Digite seu nome");
// const idadeUsuario       =    Number(prompt("Digite sua idade"));
// const cidadeUsuario      =    prompt("Digite sua cidade");
// const profissaoUsuario   =    prompt("Digite sua profissao");

// sobreUsuario(nomeUsuario, idadeUsuario, cidadeUsuario, profissaoUsuario);

// --- 2 ---
//a)
const soma = (num1, num2) => {
    return num1 + num2;
}
console.log(soma(5,7));

//b)
const comparar = (num1, num2) => {

    return num1 >= num2;
}
console.log(comparar(25, 7));

//c)
const par = (num1, num2) => {
    return (num1 % num2) == 0;
}
console.log(par(10, 5), "true = par | false = ímpar");

//d)
const sobreTexto = (texto) => {
    console.log(texto.toUpperCase())
    return texto.length;
}

console.log(sobreTexto("Beatriz de souza Santos"));

// --- 3 ---
function somar(num1, num2){ // primeira maneira de declarar uma função
    return num1 + num2;
}

const subtrair = function (num1, num2){ // segunda maneira de declarar uma função
    return num1 - num2;
}

const multiplicacao = (num1, num2) =>{ // terceira maneira de declarar uma função
    return num1 * num2;
}

const divisao = (num1, num2) => {
    return num1 / num2
}

const numero1 = Number(prompt("Digite o primeiro numero"));
const numero2 = Number(prompt("Digite o segundo numero"));

console.log(`Números inseridos ${numero1} e ${numero2}`);
console.log("Soma:", somar(numero1, numero2));
console.log("Diferença:", subtrair(numero1, numero2));
console.log("Multiplicacao:", multiplicacao(numero1, numero2));
console.log("Divisão:", divisao(numero1, numero2));

