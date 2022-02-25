// ### EXERCICIO DE INTERPRETAÇÃO ###
/* --- 1 --
a) O código irá pegar um número digitado pelo usuário e dividir por dois, e verificar se o resto da divisão é igual a 0(zero), ou seja,
   é um código para verificar se um número é PAR ou ÍMPAR.
b) Caso imprima 'Passou no teste' o número é PAR, já que o resto da divisão é ZERO
c) Caso imprima 'Não passou no teste' o número é ÍMPAR, já que o resto da divisão é diferente de ZERO

--- 2 ---
a) O código irá pedir o nome de uma fruta para o usuário e devolver o nome da fruta e o valor dela no console
b) Se o usuário digitar MAÇA o resultado será, "O preço da fruta Maça é R$ 2.25"
c) Ele irá retorna o valor R$ 5, já que irá atribuir o valor do default ao preço

--- 3 ---
a) A primeira linha está atribuindo o valor digitado pelo usuário a uma variavel chamada 'numero' e a declarando como um NUMBER (tipo númerico)
b) Caso o numero digitado seja 10 ele irá retornar a mensagem 'Este número passou no teste' e criar uma variavel chamada mensagem. 
   Caso o número digitado seja -10 ele irá retornar um erro.
c) Sim daria erro, pois a variavel mensagem foi declarada dentro do IF e só pode ser utilizada dentro daquele bloco ou nos blocos 'filhos' do mesmo,
   então quando chamada fora do IF irá retornar um erro, já que não é uma váriavel global e sim local.
*/
// ### EXERCICIO DE ESCRITA ###
// --- 1 ---

const idade = Number(prompt("Digite sua idade"));

if(idade >= 18){
   console.log("Você pode dirigir");
}
else{
    console.log("Você não pode dirigir");
}

// --- 2 ---
const horario = prompt("Digite o horário que você estuda, sendo M (Matutino) V (Vespertino) N (Noturno)");
 
if(horario.toUpperCase() == 'M'){
    console.log("Bom dia!");
}
else if(horario.toUpperCase() == 'V'){
    console.log("Boa tarde!");
}
else if(horario.toUpperCase() == 'N'){
    console.log("Boa noite!");
}
else{
    console.log("Valor digitado inválido");
}

// --- 3 ---
switch (horario.toUpperCase()) {
    case 'M':
        console.log("Bom dia!");
        break;
    case 'V':
        console.log("Boa tarde!");
        break;
    case 'N':
        console.log("Boa noite!");
        break;
    default:
        console.log("Valor digitado inválido");
        break;
}

// --- 4 ---
const genero = prompt("Digite o genero do filme");
const valor  = Number(prompt("Digite o valor do ingresso"));

if(genero.toLowerCase() == 'fantasia' && valor < 15){
    console.log("Bom filme!");
}
else{
    console.log("Escolha outro filme :(");
}
