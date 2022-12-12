const numero = Number(prompt('digite um numero:'));
const numerotitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numerotitulo.innerHTML = numero;

texto.innerHTML = ' ';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`; 