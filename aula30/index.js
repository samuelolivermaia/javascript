/* 
const verdadeira = true;

// let tem escopo de bloco { ... bloco}
// var so tem escopo de função

let nome = 'luiz'; // criando
var nome2 = 'samuel'; // criando

if(verdadeira){
    let nome = 'otávio'; // criando
    var nome2 = 'rogério'; // redeclarando

    if(verdadeira){
        var nome2 = 'ronaldo'; 
        let nome = 'samuel';

    }
}
*/

console.log(nome, nome2);

function falaOi(){

    if(verdadeira){
        let nome = 'luiz';
        var sobrenome = 'miranda';
    }
    console.log(sobrenome);
}