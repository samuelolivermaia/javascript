const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++){
    let numero = numeros[i];

    if (numero === 2){
        console.log('pulei o número dois');
        i++;
        continue;
    }
    console.log(numero);
    
}