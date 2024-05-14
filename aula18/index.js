const pessoa1 = {
    nome: 'Samuel',
    sobrenome: 'Oliveira',
    idade: 19,

    fala(){
        console.log(`A minha idade é ${this.idade}.`);
    },

    incrementoIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementoIdade();
pessoa1.fala();
pessoa1.incrementoIdade();
pessoa1.fala();