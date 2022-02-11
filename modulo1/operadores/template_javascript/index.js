/* ### INTERPRETAÇÃO DE CÓDIGO ###

1 - A) resultado = false
    B) resultado = false
    C) resultado = true
    D) resultado = boolean

2 - Quando pegamos uma informação do prompt, ela é considerada do tipo STRING,
então antes de fazermos qualquer tipo de operação numérica, precisamos converter
o tipo para o NUMERICO.

3 - SOLUÇÃO
let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero  = Number(prompt("Digite outro numero!"));

const soma = primeiroNumero + segundoNumero;

console.log(soma);
*/

// ### ESCRITA DE CÓDIGO ###
// 1 - IDADE
const idadeUsuario = Number(prompt("Digite sua idade: "));
const idadeAmigx = Number(prompt("Digite a idade do(a) seu(sua) amigo(a)"));

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigx);
console.log("A diferença entre vocês é de", idadeUsuario - idadeAmigx, "anos");

// 2 - NÚMERO PAR

const numeroPar = Number(prompt("Digite um número par"));
console.log(numeroPar % 2);

// b) Qualquer numero par dividido por 2 terá o resto da divisão zerado.
// c) Se inserir um numero ímpar o resto da divisão sempre será 1.

// 3 - CONVERTENDO IDADE 
const idade = Number(prompt("Digite sua idade"));

const idadeMeses = idade * 12;
console.log("Você tem ", idadeMeses, "meses de idade");

const idadeDias = idade * 365;
console.log("Você tem", idadeDias, "dias de idade");

const idadeHoras = idade * 8760; //8760 é a quantidade de horas em um ano
console.log("Você tem", idadeHoras, "horas de idade");

// 4 - COMPARAÇÃO DE DOIS NUMEROS
const numero1 = Number(prompt("Digite o primeiro número"));
const numero2 = Number(prompt("Digite o segundo número"));

console.log("O primeiro número é maior que segundo?", numero1 > numero2);
console.log("O primeiro número é igual ao segundo?", numero1 == numero2);
console.log("O primeiro número é divisível pelo segundo?", (numero1 % numero2) === 0 );
console.log("O segundo número é divisível pelo primeiro", (numero2 % numero1) == 0);







