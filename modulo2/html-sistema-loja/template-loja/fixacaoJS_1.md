```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let comissao = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05);
  let salario = 2000 + comissao;
  
  return salario;
}
```