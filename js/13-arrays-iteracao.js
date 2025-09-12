// iterando sobre o array - ou seja, percorrendo os elementos de forma dinâmica usando um loop/laço de repetição

const filmes = [
  "O Poderoso Chefão",
  "Pulp Fiction: Tempo de Violência",
  "Interestelar",
  "A Origem",
  "Clube da Luta",
  "Forrest Gump: O Contador de Histórias",
  "Os Vingadores: Ultimato",
  "Matrix",
  "O Senhor dos Anéis: O Retorno do Rei",
  "Parasita",
];

console.log(filmes);

// iterando com o laço for
// comparamos com o i pois ele tem o valor dinamico, ou seja, seu valor muda a cada comparação
let arrayLength = filmes.length;
for (let i = 0; i < arrayLength; i++) {
  console.log(`Filme ${i}:`, filmes[i]);
}

/*  outras formas de iterar sobre o array */
// For of - Geralmente usamos esse loop quando não precisamos do indice
console.log("--------sep--------");

for (let filme of filmes) {
  console.log(filme);
}

// o foreach, e outros motodos trabalham com o conceito de callback
// callback function -
// forEach - for(para) each(cada), ou seja, para cada item, faça algo. Usamos esse metodo quando queremos acessar o valor e a posição.
console.log("--------sep ()=>--------");

filmes.forEach((filme, index) => {
  console.log(`Filme ${index}:`, filme);
});

// let texto = "olá cassiano seja bem vindo";
// for (const char of texto) {
//   console.log(char);
// }

const tudoMisturado = [
  42,
  "teste",
  true,
  null,
  undefined,
  [1, 2, 3, [12, 123, 1151]],
  function () {
    return "oi";
  },
  { nome: "João" },
];

console.log("--------sep ()=>--------");

const arrayNoArray = ["html", "css", ["JavaScript", "Java", ["Cobol"]]];
console.log(arrayNoArray);
console.log(arrayNoArray[2][1]);
console.log(arrayNoArray[2][2][0]);