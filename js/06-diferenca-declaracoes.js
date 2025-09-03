// a ideia aqui é tentar entender a diferença entre let, const e var diretamente no codigo.

if (true){
    var x = 10;
    let y = 20;
    const z = 30;

    console.log("Dentro do if:")
    console.log("x (var):", x)
    console.log("y (let):", y)
    console.log("z (const):", z)
}
    console.log ("-------------")
    console.log ("Fora do if:")
    console.log("x (var):", x)
    console.log("y (let):", y)
    console.log("z (const):", z)
