"use strict";
// ============= EXERCICIO 01 ===============
console.log("============= EXERCICIO 01 ===============");
const minhaString = 'Beatriz';
//Quando atribuido um valor diferente de string dá erro e o programa não roda.
const numero = 5;
// Para aceitar mais de um tipo utilizamos o pipe (|)
var corFavorita;
(function (corFavorita) {
    corFavorita["VERMELHO"] = "Vermelho";
    corFavorita["VIOLETA"] = "Violeta";
    corFavorita["LARANJA"] = "Laranja";
    corFavorita["AMARELO"] = "Amarelo";
    corFavorita["VERDE"] = "Verde";
    corFavorita["AZUL"] = "Azul";
    corFavorita["ANIL"] = "Anil";
})(corFavorita || (corFavorita = {}));
const pessoa01 = {
    nome: 'Beatriz',
    idade: 21,
    corFavorita: corFavorita.VIOLETA
};
console.log(pessoa01);
