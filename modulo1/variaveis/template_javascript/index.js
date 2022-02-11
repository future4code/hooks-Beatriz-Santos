// ### EXERCICIO INTERPRETAÇÃO DE CODIGO ###
/*
1 - A primeira impressão de b, será 10. A segunda impressão
    será de A = 10 e b = 5

2 - A = 10; B = 10; C = 10

3 - p = horasTrabalhadas
    t = salarioPorDia
*/
// ### ESCRITA DE CÓDIGO ###
//1
// let nome;
// let idade;

// console.log(typeof nome, typeof idade);
// Foram consideradas indefinidas por estarem vazias.

nome  = prompt("Qual seu nome? ");
idade = prompt("Qual sua idade?");

console.log(typeof nome, typeof idade);
// o navegador trata tanto o nome quanto a idade, como se fossem strings.

console.log("Olá", nome, "você tem", idade, "anos");

//2
const estudo   = prompt("Você estuda?");
const trabalho = prompt("Você trabalha?");
const filhos   = prompt("Você tem filhos?");

console.log("Suas respostas foram, respectivamente:", estudo, trabalho, filhos);

//3
let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);

// ### DESAFIO ###

let num1 = Number(prompt("Digite um numero:"));
let num1 = Number(prompt("Digite outro numero: "));
console.log("A soma dos números deu: ",a + b);


