// ============= EXERCICIO 01 ===============
console.log("============= EXERCICIO 01 ===============")
const minhaString: string = 'Beatriz';
//Quando atribuido um valor diferente de string dá erro e o programa não roda.

const numero: number | string = 5;
// Para aceitar mais de um tipo utilizamos o pipe (|)

enum corFavorita{
    VERMELHO = "Vermelho",
    VIOLETA = "Violeta",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: corFavorita
}
const pessoa01: Pessoa = {
    nome: 'Beatriz',
    idade: 21,
    corFavorita: corFavorita.VIOLETA
}
console.log(pessoa01)

// ============= EXERCICIO 02 ===============
console.log('============= EXERCICIO 02 ===============')

const obterEstatisticas = (numeros: Array<number>) => {

    const numerosOrdenados = numeros.sort (
        (a: number, b:number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([7, 8, 5, 3]))

// ============= EXERCICIO 03 ===============
console.log('============= EXERCICIO 03 ===============')
