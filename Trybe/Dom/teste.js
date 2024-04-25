const ondeVoceEsta = document.querySelector('#where-are-you')

const parente = ondeVoceEsta.parentElement
parente.style.color = 'red'

const firstChildOfChild = whereAreYou.firstElementChild;

firstChildOfChild.innerText = 'First child of child';

const firstChild = parent.firstElementChild;

const primeiroFilho2 = whereAreYou.previousElementSibling;

const textElement = whereAreYou.nextSibling;

const thirdChild = whereAreYou.nextElementSibling;

const thirdChild2 = parent.lastElementChild.previousElementSibling;