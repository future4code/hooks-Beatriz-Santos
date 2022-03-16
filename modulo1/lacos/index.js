/* ### EXERCICIOS DE INTERPRETAÇÃO ###

1 - O for está rodando 4 vezes e está somando o valor que está armazenado na variavel 'valor' mais o valor de 'i'
O valor exibido no console será 10.

2 - a) 19, 21, 23, 25, 27, 30 - Esses serão os valores impressos no console
    b) Tentei usar o (for of) para mostrar o indice, não consegui, porem pesquisando encontrei o (for in), que é utilizado para isso.

3 - a) Irá imprimir a seguinte linha ' * ** *** **** '
*/
// ### EXERCICIO DE ESCRITA ###
// --- 1 ---
const quantAnimais = prompt('Quantos bichinhos de estimação você tem? ');
    
if(quantAnimais == 0){
    console.log('Que pena! Você tem que adotar um pet');
}

else{ 
    let nomeAnimais = []
    for(let i = 0; i < quantAnimais; i++){
        nomeAnimais[i] = prompt('Digite o nome do seu bichinho');
    }
    console.log('Nomes bichinhos:', nomeAnimais);
}

// --- 2 ---
function imprimirValores(array){
    console.log('--------Valores--------');
    for(let valores of array){
        console.log('Valor: ', valores);
    }
}
function dividirValores(array){
    console.log('--------Divisão--------');
    for(let valores of array){
        console.log('Dividido por 10: ', valores / 10);
    }
}
function pares(array){
    console.log('--------Pares--------');
    let par = [];
    for(let i = 0; i < array.length; i++){
        if((array[i] % 2) == 0){
            par.push(array[i]);
        }
    }
    console.log('Pares:', par);
}
function strings(array){
    console.log('--------String--------');
    let valorString = []
    for(let i = 0; i < array.length; i++){
        valorString[i] = array[i];
        console.log(`O elemento do índex ${i} é: ${valorString[i]}`);
    }
}
function maiorMenor(array){
    console.log('--------Maior/Menos--------')
    let maior = 0;
    let menor = array[0];
    for(let i = 0; i < array.length; i++){
        if(maior < array[i]){
            maior = array[i];
        }
        else if (menor > array[i]){
            menor = array[i];
        }
    }
    console.log('O maior número é', maior);
    console.log('O menor número é', menor);
}

let arrayOriginal = [100, 200, 305, 17, 3758];

imprimirValores(arrayOriginal);
dividirValores(arrayOriginal);
pares(arrayOriginal);
strings(arrayOriginal);
maiorMenor(arrayOriginal);

// ### DESAFIOS ###
// --- 1 ---
const numero = Number(prompt('Escolha um número'));
let numeroChute = Number(prompt('Tente adivinhar'));
let chute = 1;

if(numeroChute != numero){
    for(let i = 1; numeroChute != numero; i++){
        console.log('O número chutado foi:', numeroChute);
        if(numeroChute > numero){
            console.log('Errrooouuuuu. O número escolhido é menor');
            numeroChute = prompt('Tenta de novo:');
        }
        else if(numeroChute < numero){
            console.log('Errrooouuuuu. O número escolhido é maior ');
            numeroChute = prompt('Tenta de novo: ')
        }
        chute = i;
    }
    console.log('Aleluiaaaa, até que enfim !!!');
    console.log('O número de tentativas foi: ', chute)
}
else{
    console.log('Carambaaaa tô chocadaaaa, de primeira. PARABÉNSSSS');
}

// --- 2 ---
 const numeroPc = (Math.random() * 100).toFixed(0); // Achei mais facil utilizar o toFixed, para deixar claro que queria um numero inteiro
let numeroChutado = Number(prompt('Tente adivinhar. Digite números de 0 a 100'));
let chutes = 1;
// console.log('numero sorteado', numeroPc);

if(numeroChutado != numeroPc){
    for(let i = 1; numeroChutado != numeroPc; i++){
        console.log('O número chutado foi:', numeroChutado);
        if(numeroChutado > numeroPc){
            console.log('Errrooouuuuu. O número escolhido é menor');
            numeroChutado = prompt('Tenta de novo. Digite números de 0 a 100');
        }
        else if(numeroChutado < numeroPc){
            console.log('Errrooouuuuu. O número escolhido é maior ');
            numeroChutado = prompt('Tenta de novo. Digite números de 0 a 100');
        }
        chutes = i;
    }
    console.log('Aleluiaaaa, até que enfim !!!');
    console.log('O número de tentativas foi: ', chutes)
}
else{
    console.log('Carambaaaa tô chocadaaaa, de primeira. PARABÉNSSSS');
}