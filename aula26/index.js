//(condicao) ? 'valor para verdadeiro': 'valor para falso';

const pontuacaoUsuario = 1000;
const nivelUsuario =  pontuacaoUsuario >= 1000 ? 'usuario vip': 'usuario normal';

const corUsuario = 'pink';
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);