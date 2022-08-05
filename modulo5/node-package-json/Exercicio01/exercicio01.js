// 1 - a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?

// 1 - b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura: 

const nome  = process.argv[2];
const idade = process.argv[3];

// 1 - c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

const seteAnosDepois = Number(idade) + 7;

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${seteAnosDepois}`);
