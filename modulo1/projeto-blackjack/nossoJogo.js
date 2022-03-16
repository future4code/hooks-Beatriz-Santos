const vencedor = (valorUser, valorComputador) => {
   if(valorUser > valorComputador){
      return 'O usuário ganhou!';
   }
   else if(valorUser < valorComputador){
      return 'O computador ganhou!';
   }
   else{
      return 'Empate!';
   }
}

// --- UTILIZANDO OBJETO PARA ARMAZENAR AS CARTAS ---
const cartaUsuario = {
   carta1: comprarCarta(),
   carta2: comprarCarta()
}
const cartaComputer = {
   carta1: comprarCarta(),
   carta2: comprarCarta()
}
console.log("Boas vindas ao jogo de Blackjack!");
const jogo = confirm("Quer iniciar uma nova rodada?");

if(jogo){
   const valorUsuario  = cartaUsuario.carta1.valor  + cartaUsuario.carta2.valor;
   const valorComputer = cartaComputer.carta1.valor + cartaComputer.carta2.valor;

   console.log("Usuário - cartas:", cartaUsuario.carta1.texto,  cartaUsuario.carta2.texto,  "- pontuação:", valorUsuario);
   console.log("Usuário - cartas:", cartaComputer.carta1.texto, cartaComputer.carta2.texto, "- pontuação:", valorComputer);
   
   console.log(vencedor(valorUsuario, valorComputer));
}
else{
   console.log("O jogo acabou");
} 

// --- UTILIZANDO ARRAY PARA ARMAZENAR AS CARTAS ---

// const cartaUser = [comprarCarta(), comprarCarta()];
// const cartaPc   = [comprarCarta(), comprarCarta()];

// console.log("Boas vindas ao jogo de Blackjack!");
// const jogo = confirm("Quer iniciar uma nova rodada?");

// if(jogo){
//    const valorUser = cartaUser[0].valor + cartaUser[1].valor;
//    const valorPc   = cartaPc[0].valor   + cartaPc[1].valor;

//    console.log("Usuário - cartas:", cartaUser[0].texto, cartaUser[1].texto, "- pontuação:", valorUser);
//    console.log("Usuário - cartas:", cartaPc[0].texto,   cartaPc[1].texto,   "- pontuação:", valorPc);

//    console.log(vencedor(valorUser, valorPc));
// }
// else{
//    console.log("O jogo acabou");
// } 