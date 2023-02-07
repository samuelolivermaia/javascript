const nome = 'samuel oliveira';

//for clássico
for(let i = 0; i < nome.length; i++){
    console.log(nomes[i]);
}

// for in
for (let i in nome){
    console.log(nome[i]);
}

// for of
for (let valor of nome){
    console.log(valor);
}

// for clássico - geralmente com iteráveis (array ou strings)
// for in - retorna o índice ou chave (string, array, ou objetos)
// for of - retorna o valor em si (iteráveis, arrays ou strings)