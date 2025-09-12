// Arrays representam listas ordenadas de valores.
// Pensa nele como uma prateleira numerada em que cada espaço(posição) pode guardar algum tipo de dado.

// os arrays são representados por []

// a ideia de lista ordenada é por conta da ordem númerica que os elementos ocupam. Geralmente o primeiro elemento está na posição/indice 0.

// Sixtaxe mais comum de array no js
let frutas = ["maçã", "Banana", "Laranja"];

// imprimindo o array no console
console.log(frutas);

// acessando os dados individuais do array no console por meio do indice/posição
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

// se tentarmos acessar uma posição sem valor, temos a resposta de undefined
console.log(frutas[3]);

// é possivel criar arrays/listas vazias
let carros = [];
console.log("array de carros", carros);

// inserindo informações em um array por meio do indice/posição
carros[0] = "celta";
carros[1] = "gol";
console.log("array de carros", carros);

carros[0] = "Monza 93";
console.log("array de carros", carros);

// metodos são funções
// propriedades são atributos

/* metodos mais comuns para adicionar elementos */
// push() - Adiciona o elemento ao FINAL do array
carros.push("t-cross");
console.log("array de carros", carros);

// unshift() - Adiciona o elemento ao INICIO do array
carros.unshift("Mobi");
console.log("array de carros", carros);

/* metodos mais comuns para remover elementos */
// pop() - Remove o ÚLTIMO elemento do array
carros.pop();
console.log("array de carros", carros);

// shift() - Remove o PRIMEIRO elemento do array
carros.shift();
console.log("array de carros", carros);
