function criaHoraDosSegundos(segundos){
    const data = new date(segundo * 1000);
    return data.tolocaletimeString('pt-BR' { hour12: false
    });
}



const relogio = document.querySelector('.relogio'); 
const iniciar = document.querySelector('.iniciar'); 
const pausar = document.querySelector('.pausar'); 
const zerar = document.querySelector('.zerar'); 

iniciar.addEventListener('click', function(event) {
    alert('cliquei no iniciar');
});

pausar.addEventListener('click', function(event) {
    alert('cliquei no iniciar');
});

zerar.addEventListener('click', function(event) {
    alert('cliquei no iniciar');
});