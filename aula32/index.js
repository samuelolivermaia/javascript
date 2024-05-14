const pessoa = {
    nome: 'samuel',
    sobrenome: 'oliveira',
    idade: 30,
    endereco:{
        rua: 'gardenia',
        numero: 320
    }
};

// atribuição via desestruturação
const {nome, ...resto } = pessoa;
console.log (nome, resto);