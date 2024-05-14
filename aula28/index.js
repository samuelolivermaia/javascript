const data = new Date();
const diaSemana = data.getDate();
let diaSemanatexto;

switch (diaSemana){
    case 0: 
    diaSemanatexto = 'Domingo'
    break;
    case 1: 
    diaSemanatexto = 'Segunda'
    break;
    case 2: 
    diaSemanatexto = 'Terça'
    break;
    case 3: 
    diaSemanatexto = 'Quarta'
    break;
    case 4: 
    diaSemanatexto = 'Quinta'
    break;
    case 5: 
    diaSemanatexto = 'Sexta'
    break;
    case 6: 
    diaSemanatexto = 'Sabado'
    break;
}

/* if(diaSemana === 0){
    diaSemanatexto = 'Domingo';
}
else if(diaSemana === 1){
    diaSemanatexto = 'Segunda';
}
else if(diaSemana === 2){
    diaSemanatexto = 'Terça';
}
else if(diaSemana === 3){
    diaSemanatexto = 'Quarta';
}
else if(diaSemana === 4){
    diaSemanatexto = 'Quinta';
}
else if(diaSemana === 5){
    diaSemanatexto = 'Sexta';
}
else if(diaSemana === 6){
    diaSemanatexto = 'Sabado';
}
*/

console.log(diaSemana, diaSemanatexto);

