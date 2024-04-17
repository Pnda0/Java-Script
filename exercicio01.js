document.getElementById('page-title').innerText = 'Vanilla Sky';

document.getElementById('first-paragraph').innerText =
  'Melhor filme de romance que existe';

document.getElementById('subtitle').innerText = 'Romance e Drama'

const fonteStyle = document.getElementsByTagName('p');

for (let i = 0; i < fonteStyle.length; i++) {
  fonteStyle[i].style.fontStyle = 'italic';
}

const subtitulo = document.getElementsByTagName('h2');
console.log(subtitulo[0])

subtitulo[0].style.color = 'blue'
