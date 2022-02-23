// ### EXERCICIO DE INTERPRETAÇÃO ###
/* 1 - a)
PRIMEIRO CONSOLE = Matheus Nachtergaele
SEGUNDO  CONSOLE = Virginia Cavendish
TERCEIRO CONSOLE = Globo  14h

2 - a)
PRIMEIRO CONSOLE = nome: "Juca", idade: 3, raca: "SRD"
SEGUNDO  CONSOLE = nome: "Juba", idade: 3, raca: "SRC"
TERCEIRO CONSOLE = nome: "Jubo", idade: 3, raca: "SRD"

b) Os três pontos antes do nome do objeto serve para repeti-lo, assim conseguimos repetir as informações e adicionar ou alterar os dados

3 - a)
PRIMEIRO CONSOLE = false
SEGUNDO  CONSOLE = undefined - indefinido

b) A função irá procurar a propriedade dentro do objeto, se encontrá-la irá retornar o valor atribuido, caso não encontre irá retornar como indefinido.
*/
// ### EXERCICIO DE ESCRITA ###
// --- 1 ---
//a)
const exibirPessoa = objeto =>{
    return `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[2]}`;
}

const pessoa = {
    nome: 'Beatriz',
    apelido: ['Bia', 'Bea', 'Bibi']
}

console.log(exibirPessoa(pessoa));

//b)

const novoApelido = {
    ...pessoa,
    apelido: ['Bi', 'xuxu', 'meu bem']
}
console.log(exibirPessoa(novoApelido));

// --- 2 ---
//a)
const dadosPessoa = {
    nome: 'Heloisa',
    idade: 14,
    profissao: 'estudante'
}
//b)
const exibirDados = dados =>{
    const informações = [dados.nome, dados.nome.length, dados.idade, dados.profissao, dados.profissao.length];

    return informações;
}
console.log(exibirDados(dadosPessoa));

// --- 3 ---
const adicionarCarrinho = frutas =>{
    carrinho.push(fruta);
    return carrinho;
}

let carrinho = [];
const fruta = [
    {nome: 'maça',   disponibilidade: true},
    {nome: 'melao',  disponibilidade: true},
    {nome: 'banana', disponibilidade: true}
]

console.log(adicionarCarrinho(fruta));

// ### DESAFIOS ###
// --- 1 ---
const dados = () => {
    const nomeUsuario = prompt("Digite seu nome");
    const idadeUsuario = prompt("Digite sua idade");
    const profissaoUsuario = prompt("Digite sua profissao");

    const dadosUsuarios = {
        nome: nomeUsuario,
        idade: idadeUsuario,
        profissao: profissaoUsuario
    }
    
    return dadosUsuarios;
}
console.log(dados());

// --- 2 ---
const compararFilme = (filmes) => {
    const lancadoAntes = filmes[0].anolancamento <  filmes[1].anolancamento;
    const lancadoJunto = filmes[0].anolancamento == filmes[1].anolancamento;

    console.log("O primeiro filme foi lançado antes do segundo?", lancadoAntes);
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", lancadoJunto);
}

const filmes = [
    {nome: 'O amigo oculto', anolancamento: 2005},
    {nome: 'Uma chamada perdida', anolancamento: 2008}
]
compararFilme(filmes);

// --- 3 ---
const disponibilidadeFruta = (fruta) =>{
    const indisponivel = {
        ...fruta,
        disponibilidade: false
    }
    return indisponivel;
}
console.log(disponibilidadeFruta(fruta[2]));