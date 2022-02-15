// ### EXERCÍCIO DE INTERPRETAÇÃO ###
/*
1 - 
a. undefined - vai ser dado como indefindo, pois nada foi atribuido
b. null
c. 11 - possui 11 itens no array
d. 3 - O indice 0 possui o numero 3 armazenado
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] - o 4 foi substituido pelo 19
f. 9 - o valor 9 está armazenado na posição 6

2 - Subi num ônibus em Marrocos
Resposta:
SUBI NUM ÔNIBUS EM MIRROCOS , 27
*/

// ### EXERCÍCIO DE ESCRITA ###
// 1 - Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
const nome  = prompt("Digite seu nome");
const email = prompt("Digite seu email");

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`);

// 2 - Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
let comidas = ["yakisoba", "Sushi", "Sashimi", "Vatapá", "Baião de dois"];

/* a - */console.log("Array completo:", comidas);


//b
console.log("Essas são minhas comidas favoritas: ");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

//c
const comidaUsuario = prompt("Digite sua comida favorita:");
comidas [1] = comidaUsuario;

console.log("USUARIO", comidas);

// 3 - Faça um programa, seguindo os passos:
let listaDeTarefas = [];

listaDeTarefas[0] = prompt("Digite uma tarefa:");
listaDeTarefas[1] = prompt("Digite uma tarefa:");
listaDeTarefas[2] = prompt("Digite uma tarefa:");

console.log("Array: ", listaDeTarefas);

let indice = Number(prompt("Digite um numero de 0 a 3"));
indice = indice - 1;

console.log("O item foi apagado com sucesso", listaDeTarefas.splice(indice, 1));
console.log("Array final: ", listaDeTarefas);

// --- DESAFIOS ---
//1 - Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

const frase = prompt("Digite uma frase: ");
const arrayfrase = frase.split(" ");

console.log("A frase separada em array é ", arrayfrase);

// 2 - Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra
// Abacaxi e imprime tanto o índice quanto o tamanho do array

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
const posicao = frutas.indexOf("Abacaxi");

console.log("O abacaxi está no índice", posicao, "e o array possui", frutas.length, "posições");





