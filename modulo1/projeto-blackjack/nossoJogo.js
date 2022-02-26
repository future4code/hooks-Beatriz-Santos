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
   console.log("Não");
} 