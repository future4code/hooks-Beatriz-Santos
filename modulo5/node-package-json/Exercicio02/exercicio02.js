const operacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

switch (operacao) {
    case 'soma':
        console.log(`A soma dos numeros é igual a ${num1 + num2}`)
        break;

    case 'mult':
        console.log(`A multiplicação dos numeros é igual a ${num1 * num2}`)
        break;

    case 'sub':
        console.log(`A subtração dos numeros é igual a ${num1 - num2}`)
        break;

    case 'div':
        console.log(`A divisão dos numeros é igual a ${num1 / num2}`)
        break;

    default:
        console.log('Operação inválida')
        break;
}