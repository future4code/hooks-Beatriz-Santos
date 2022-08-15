console.log("================== EXERCICIO 01 ==================")
const nome: string = 'Beatriz';
const dtNascimento: string = '25/01/2000';
let mes: string;

console.log(`Olá me chamo ${nome}, nasci no dia ${dtNascimento.substring(0, 2)} do mês ${dtNascimento.substring(3, 5)} do ano de ${dtNascimento.substring(6)}`);

console.log("================== EXERCICIO 02 ==================")
const str: string = 'Beatriz';
const num: number = 21;
const arr: Array<string> = ['João', 'Heloísa', 'Nathalia']

const showType = (value: any): void => {
    console.log(typeof value)
}
showType(str)
showType(num)
showType(arr)

console.log("================== EXERCICIO 03 ==================")
enum GENERO{
    ACAO = 'Ação',
    DRAMA = 'Drama',
    Terror = 'Terror',
    COMEDIA = 'Comedia',
    ROMANCE = 'Romance',
}
type filme = {
    nome: string,
    anoLancamento: number,
    generoFilme: GENERO,
    pontuacao?: number
}
const filmes: Array<filme> = [
    {nome: 'Duna', anoLancamento: 2021, generoFilme: GENERO.ACAO, pontuacao: 74},
    {nome: 'Era do gelo', anoLancamento: 2016, generoFilme: GENERO.COMEDIA},
    {nome: 'Como eu era antes de você', anoLancamento: 2016, generoFilme: GENERO.ROMANCE, pontuacao: 100}
]
console.log(filmes)

console.log("================== EXERCICIO 04 ==================")

enum SETOR{
    FINANCEIRO = 'Financeiro',
    MARKETING = 'Marketing',
    VENDAS = 'Vendas'
}
type dadosColaborador = {
    nome: string,
    salario: number,
    setor: SETOR,
    presencial: boolean
}
const colaboradores: Array<dadosColaborador> = [
    { nome: "Marcos",  salario: 2500,   setor:SETOR.MARKETING,    presencial: true },
	{ nome: "Maria" ,  salario: 1500,   setor: SETOR.VENDAS,      presencial: false},
	{ nome: "Salete",  salario: 2200,   setor: SETOR.FINANCEIRO,  presencial: true },
	{ nome: "João"  ,  salario: 2800,   setor:SETOR.MARKETING,    presencial: false},
	{ nome: "Josué" ,  salario: 5500,   setor: SETOR.FINANCEIRO,  presencial: true },
	{ nome: "Natalia", salario: 4700,   setor: SETOR.VENDAS,      presencial: true },
	{ nome: "Paola" ,  salario: 3500,   setor:SETOR.MARKETING,    presencial: true }
]

const pessoaMarketing = colaboradores.filter((colaborador) => {
    return colaborador.setor === 'Marketing' && colaborador.presencial === true
})
console.log(pessoaMarketing)