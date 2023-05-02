function clicar () {
    var ispan = document.getElementById ("span1")
    var btnoperador = document.getElementById ("operador")
    var btnoperador = prompt("Digite o operador")
    switch (btnoperador) {
        case "+":
        ispan.innerHTML = "+"
        operador.value = "Somar" 
        break;
        case "-":
        ispan.innerHTML = "-"
        operador.value = "Subtrair"
        break;
        case "x":
        ispan.innerHTML = "x"
        operador.value = "Multiplicar"
        break;
        case "/":
        ispan.innerHTML = "/"
        operador.value = "Dividir"
        break;
        default:
        confirm("Digite um operador numérico!!!")
    }
    
}