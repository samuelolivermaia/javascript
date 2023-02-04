const h1 = document.querySelector('.container h1');
const data = new Date();
function getDiaSemanaTexto(diaSemana) {
    let diaSemanatexto;

    switch (diaSemana) {
        case 0:
            diaSemanatexto = 'domingo'
            return diaSemanatexto;
        case 1:
            diaSemanatexto = 'segunda'
            return diaSemanatexto;
        case 2:
            diaSemanatexto = 'terça'
            return diaSemanatexto;
        case 3:
            diaSemanatexto = 'quarta'
            return diaSemanatexto;
        case 4:
            diaSemanatexto = 'quinta'
            return diaSemanatexto;
        case 5:
            diaSemanatexto = 'sexta'
           return diaSemanatexto;
        case 6:
            diaSemanatexto = 'sabado'
            return diaSemanatexto;     
    }
}
function getNomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
        case 0:
            nomeMes = 'janeiro'
            return nomeMes;
        case 1:
            nomeMes = 'fevereiro'
            return nomeMes;

        case 2:
            nomeMes = 'março'
            return nomeMes;

        case 3:
            nomeMes = 'abril'
            return nomeMes;
        case 4:
            nomeMes = 'maio'
            return nomeMes;

        case 5:
            nomeMes = 'junho'
            return nomeMes;

        case 6:
            nomeMes = 'julho'
            return nomeMes;

        case 7:
            nomeMes = 'agosto'
            return nomeMes;

        case 8:
            nomeMes = 'setembro'
            return nomeMes;

        case 9:
            nomeMes = 'outubro'
            return nomeMes;

        case 10:
            nomeMes = 'novembro'
            return nomeMes;

        case 11:
            nomeMes = 'dezembro'
            return nomeMes;  
    }
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);
    const segundos = data.getSeconds(); 
    return(
    ` ${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()}` +
    ` ${data.getHours()}:${data.getMinutes()}:${segundos}`
    );
}

h1.innerHTML = criaData(data);