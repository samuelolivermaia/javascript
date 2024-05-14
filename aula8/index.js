/*
samuel oliveira maia tem 18 anos,
pesa 78 kg, tem 1.85 de altura e seu
IMC é de 25.925925925925924,
samuel nasceu em 2003.
*/
const nome = 'Samuel Oliveira';
const sobrenome = 'maia';
const idade = 19;
const peso = 78;
const altura = 1.85;
let IMC; // peso / (altura * altura) //
let anoNascimento;

IMC = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'de altura e seu IMC é de', IMC);
console.log(nome, 'nasceu em', anoNascimento, '.');