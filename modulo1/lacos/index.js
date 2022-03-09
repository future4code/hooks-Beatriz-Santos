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
            par[i] = array[i];
        }
    }
    console.log('Pares:', par);
}
function strings(array){let par = [];
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

let arrayOriginal = [100, 200, 305, 17, 50];

imprimirValores(arrayOriginal);
dividirValores(arrayOriginal);
pares(arrayOriginal);
strings(arrayOriginal);
maiorMenor(arrayOriginal);