// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui

  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui

  const mensagem = prompt('Digite uma mensagem!');

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  const altura  = Number(prompt("Digite a altura do retângulo"));
  const largura = Number(prompt("Digite a largura do retângulo"));
  const area    = altura * largura;

  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Digite o ano atual"));
  const anoNascimento = Number(prompt("Digite o seu ano de nascimento"));
  const idade    =    anoAtual - anoNascimento;

  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const imc = peso / (altura * altura);

  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui

  const nome  = prompt("Digite seu nome");
  const idade = prompt("Digite sua idade");
  const email = prompt("Digite seu email");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const cor1 = prompt("Digite sua primeira cor favorita");
  const cor2 = prompt("Digite sua segunda cor favorita");
  const cor3 = prompt("Digite sua terceira cor favorita");
  const vetorCores = [cor1, cor2, cor3];

  console.log(vetorCores);

  /*  -- OUTRA MANEIRA DE FAZER, COM AS COISA QUE APRENDEMOS --
  const cores = prompt("Digite suas três cores favorita, separadas por espaços");
  const vetorCores = cores.split(" ");

  console.log(vetorCores);
   */
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const semPrejuizo = custo / valorIngresso;

  return semPrejuizo;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length == string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array.length - 1;

  return array[ultimoElemento];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const valor1 = array[0];
  array[0] = array[array.length - 1]; 
  array[array.length - 1] = valor1;

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const ano = Number(prompt("Digite o ano atual"));
  const nascimentoAno = Number(prompt("Digite o ano que você nasceu"));
  const anoEmissaoRg  = Number(prompt("Digite o ano de emissão do seu RG"));

  const idadeMotorista  = ano - nascimentoAno;
  const validade = ano - anoEmissaoRg;

  let a = (idadeMotorista <= 20) && (validade >= 5);
  let b = (idadeMotorista > 20   && idadeMotorista <=50) && (validade >= 10);
  let c = (idadeMotorista > 50)  && (validade >= 15);

  console.log(a || b || c);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  let a = ((ano % 400) == 0);
  let b =  ((ano % 4) == 0 && (ano % 100) != 0);

  return (a || b);

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  let maiorIdade = prompt("Você tem 18 anos ou mais? Responda com SIM e NAO");
  let estudos    = prompt("Você possui ensino médio completo? Responda com SIM e NAO");
  let horarios   = prompt("Você possui disponibilidade exclusiva durante os horários do curso? Responda com SIM e NAO");

  maiorIdade  =   maiorIdade.toLowerCase()  ===   "sim";
  estudos    =   estudos.toLowerCase()     ===   "sim";
  horarios    =   horarios.toLowerCase()    ===   "sim";

  console.log(maiorIdade && estudos && horarios);


}