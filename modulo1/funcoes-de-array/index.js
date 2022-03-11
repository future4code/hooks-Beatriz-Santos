// ### EXERCICIOS DE INTERPRETACAO ###
/*
1 - Irá retornar o valor do primeiro item do array, em seguida o indice desse objeto e por ultimo irá imprimir o array inteiro. Isso irá se repetir com todos os itens do array

2 - Irá imprimir somente os valores armazenados na chave de nome 'nome'.

3 - No console aparecerá os valores: 'Mandi' e 'Laura', já que a condição do filtro é que o apelido tenha que ser diferente de Chijo
 */

// ### EXERCICIOS DE ESCRITA ###
// --- 1 ---
const pets = [
    { nome: "Lupin",      raca: "Salsicha"},
    { nome: "Polly",      raca: "Lhasa Apso"},
    { nome: "Madame",     raca: "Poodle"},
    { nome: "Quentinho",  raca: "Salsicha"},
    { nome: "Fluffy",     raca: "Poodle"},
    { nome: "Caramelo",   raca: "Vira-lata"}
 ];
// ITEM A
 const nomePets = pets.map( (item) => {
    return item.nome;
 });
 console.log(nomePets);

 //ITEM B
 const salasichaPet = pets.filter( (item) => {
     return item.raca == 'Salsicha';
 });
 console.log(salasichaPet);

 //ITEM C
 const desconto = pets.filter( (item) => {
     return item.raca == 'Poodle';
 });
 const enviarDesconto = desconto.map( (item, indice) => { 
     console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", desconto[indice].nome, '!');
 });
 
// --- 2 ---
const produtos = [
    { nome: "Alface Lavada",    categoria: "Hortifruti",    preco: 2.5 },   
    { nome: "Guaraná 2l",       categoria: "Bebidas",       preco: 7.8 },   
    { nome: "Veja Multiuso",    categoria: "Limpeza",       preco: 12.6 },   
    { nome: "Dúzia de Banana",  categoria: "Hortifruti",    preco: 5.7 },   
    { nome: "Leite",            categoria: "Bebidas",       preco: 2.99 },   
    { nome: "Cândida",          categoria: "Limpeza",       preco: 3.30 },   
    { nome: "Detergente Ypê",   categoria: "Limpeza",       preco: 2.2 },   
    { nome: "Vinho Tinto",      categoria: "Bebidas",       preco: 55 },   
    { nome: "Berinjela kg",     categoria: "Hortifruti",    preco: 8.99 },   
    { nome: "Sabão em Pó Ypê",  categoria: "Limpeza",       preco: 10.80 }      
 ];

//ITEM A
const nomeProdutos = produtos.map( (item) => {
    return item.nome
});
console.log(nomeProdutos);

//ITEM B
const descontoProduto = produtos.map( (item) => {
    let valor = item.preco - (item.preco * 0.05);
    return 'nome: ' + item.nome + ', Preço: ' + valor.toFixed(2);
});
console.log(descontoProduto);

//ITEM C
const bebidas = produtos.filter( (item) => {
    return item.categoria == 'Bebidas';
});
console.log(bebidas);

//ITEM D
const produtosYpe = produtos.filter( (item) => {
    return item.nome.includes('Ypê');
});
console.log(produtosYpe);

//ITEM E
const propagandaYpe = produtosYpe.map( (item, indice) => {
    return 'Compre ' + item.nome + ' por R$' + item.preco.toFixed(2);
});
console.log(propagandaYpe);