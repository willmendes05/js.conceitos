// Os objetos eles são como caixa organizadoras, onde você guarda várias coisas relacionadas
// Exemplo: caixa de informações de uma pessoa
// nome, idade, profissão
// Cada um dessas coisas guardadas na caixa tem um nome(chave) e um valor

// Definição técnica
// Um objeto no JS é uma estrutura que armazena pares de chave e valor

// Os objetos são identificados por {}

const pessoa = {
  //chave : valor
  nome: "Ana Clara",
  idade: 18,
  profissao: "Estudante",
};

// acessando chaves para exibir os valores do objeto
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);
console.log(
  `Esta é a ${pessoa.nome}. Ela tem ${pessoa.idade} anos e é ${pessoa.profissao}`
);

// redeclarando valores
pessoa.profissao = "Desenvolvedora FrontEnd";
console.log(pessoa.profissao);

// visualizando informações separadas - chave/valor
console.log(Object.keys(pessoa));

// visualizando somente os valores
console.log(Object.values(pessoa));

// visualizando as informações agrupadas - cria um array com vários arrays dentro
console.log(Object.entries(pessoa));

