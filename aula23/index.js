/* const hora = 10;

if (hora <= 12){
    console.log('bom dia!');
}
*/

/*
entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

const hora = 12;
if(hora >= 0 && hora <= 11){
    console.log('Bom dia');
}
else if(hora >= 12 && hora <= 17){
    console.log('Boa tarde');
}
else if(hora >= 18 && hora <= 23){
    console.log('Boa noite'); 
}
