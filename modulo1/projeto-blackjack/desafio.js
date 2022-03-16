const imprimirCarta = (carta) =>{ 
   let cartasNaipe = [];
   for(let i = 0; i < carta.length; i++){
      cartasNaipe[i] = carta[i].texto;
   }
   return (cartasNaipe);
}
const somarCarta = (cartas) =>{
   let valor = 0;
   for(let i = 0; i < cartas.length; i++){
      valor += cartas[i].valor;
   }
   return valor;
}
const vencedor = (valorComputer, valorUsuario) => {
   if(valorComputer < valorUsuario || valorComputer == 21){
      return 'O computador venceu!'
   }
   else if(valorComputer > valorUsuario || (valorComputer > 21 && valorUser < 21)){
      return 'O usuário venceu!'
   }
   else if(valorComputer == valorUser){
      return 'Empate!'
   }
}

let cartaUser =  [comprarCarta(), comprarCarta()];
let cartaPc   =  [comprarCarta(), comprarCarta()];
let valorUser =  somarCarta(cartaUser);
let valorPc   =  somarCarta(cartaPc);

if((cartaUser[0] != 'A' || cartaUser[1] != 'A') && (cartaPc[0] != 'A' || cartaPc[1] != 'A')){
   
   let continuar = confirm(`Suas cartas são: ${imprimirCarta(cartaUser)}. A carta revelada do computador é ${cartaPc[0].texto}.` + '\n' + 'Deseja comprar mais uma carta??');

   while(continuar && valorUser <= 21){
      cartaUser.push(comprarCarta());
      valorUser = somarCarta(cartaUser);
      continuar = confirm(`Suas cartas são: ${imprimirCarta(cartaUser)}. A carta revelada do computador é ${cartaPc[0].texto}.` + '\n' + 'Deseja comprar mais uma carta??')
   }
   while(valorPc <= valorUser && valorPc < 21){
      cartaPc.push(comprarCarta());
      valorPc = somarCarta(cartaPc);
   }
   alert(`Suas cartas são: ${imprimirCarta(cartaUser)}. Sua pontuação é: ${valorUser}` + '\n' +
   `As cartas do computador são: ${imprimirCarta(cartaPc)}. Sua pontuação é: ${valorPc}` + '\n' + vencedor(valorPc, valorUser));
}
else{
   alert("Recarregue para sortear novas cartas!");
   console.log("Fim de jogo");
}