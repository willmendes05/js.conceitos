



// exewmplo de switch 

let dia = 3;

switch (dia){
    case 1:
        console.log ("domingo")
        // é sempre necessario usar um BREAK quando se tem um case.
        break;

    case 2:
        console.log ("segunda-feira")
        break;

    case 3:
        console.log ("terça-feira")
        break;

    case 4:
        console.log ("quarta-feira")
        break;


    default:
        console.log ("Dia inválido")

}

// exemplo de switch com operações matematicas

let operacao = "*";
let a = 10;
let b = 5; 

switch (operacao) {
    case '+':
        console.log (a + b);
        break;
    case '-':
        console.log (a - b);
        break;
    case '*':
        console.log (a * b);
        break;
    case '/':
        console.log (a / b);
        break;
    
    
    default:
        console.log ("operação inválida")
}