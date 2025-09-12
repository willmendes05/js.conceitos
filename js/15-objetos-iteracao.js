const filme = { nome: "Matrix", ano: 1999 };

for (const key in filme) {
  console.log(key);

  console.log(filme[key]);
}

const filmes = [
  { titulo: "Matrix", ano: 1999 },
  { titulo: "O Senhor dos Anéis", ano: 2001 },
  { titulo: "Interestelar", ano: 2014 },
];

filmes.forEach((filme) => {
  console.log(`O filme ${filme.titulo} foi lançado em ${filme.ano}`);
});