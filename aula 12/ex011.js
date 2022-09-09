var salário = 1000
var pensão = 700
var s = n1 + n2
console.log (`A soma entre ${n1} e ${n2} é igual a ${s}`)
s = s.toLocaleString ('pt-BR', {style: 'currency' , currency: 'BRL'})
console.log (` O seu salário vai ser de ${s} reais!`)
if (s <= 1200,00) {
  console.log (`Você recebe menos que um salário mínimo`)
} else {
  console.log ('Você recebe mais que um salário mínimo!')
}