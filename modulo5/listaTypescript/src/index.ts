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

console.log("================== EXERCICIO 05 ==================")

type user = {
    nome: string,
    email: string,
    role: 'admin' | 'user'
}

const usuarios: Array<user> = [
	{nome: "Rogério", email: "roger@email.com",   role: "user" },
	{nome: "Ademir",  email: "ademir@email.com",  role: "admin"},
	{nome: "Aline" ,  email: "aline@email.com",   role: "user" },
	{nome: "Jéssica", email: "jessica@email.com", role: "user" },  
	{nome: "Adilson", email: "adilson@email.com", role: "user" },  
	{nome: "Carina",  email: "carina@email.com",  role: "admin"}      
] 
const usuarioAdmin = usuarios.filter((usuario) => {
    return usuario.role === 'admin'
})
const emailAdmin = usuarioAdmin.map((admin) => {
    return admin.email
})
console.log(emailAdmin)

console.log("================== EXERCICIO 06 ==================")

type cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: Array<number>
}

const clientes: Array<cliente> = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [0] }
]
const debitos = clientes.map((cliente) => {
    const debito = cliente.debitos.reduce((soma, i)  => {
        return soma + i
    })
    const valorAtulizado = cliente.saldoTotal - debito

    if(valorAtulizado < 0){
        return cliente
    }
    else{
        return false
    }
})
const devedores = debitos.filter((devedor) => {
    return devedor !== false
})

console.log(devedores)
