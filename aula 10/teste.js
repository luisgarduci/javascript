var number = 80000
var numero = 70000
number = number.toLocaleString ('pt-BR', {style: 'currency' , currency: 'BRL'})
console.log (number)
numero = numero.toFixed(2).replace('.' , ',')
console.log (numero)