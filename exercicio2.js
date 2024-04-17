console.log('Hello!');

const cabecalho = document.getElementById('header-container');

cabecalho.style.color = 'rgb(0, 176, 105)';

// Urgente
const urgenteEImportante = document.querySelector('.emergency-tasks');

urgenteEImportante.style.backgroundColor = 'rgb(255, 159, 132)';

const alterandoCorTitulo = document.querySelector('.emergency-tasks');

alterandoCorTitulo.style.color = 'rgb(165, 0, 243)';

// Não Urgente
const urgenteEnaoImportante = document.querySelector('.no-emergency-tasks');

urgenteEnaoImportante.style.backgroundColor = 'rgb(249, 219, 94)';

const alterandoCorTituloNaoUrgente = document.querySelector(
  '.no-emergency-tasks'
);

alterandoCorTituloNaoUrgente.style.color = 'rgb(35, 37, 37)';

// Rodapé
const footer = document.getElementById('footer-container');

footer.style.color = 'rgb(0, 53, 51)';
