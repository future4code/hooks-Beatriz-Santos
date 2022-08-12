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