const input = document.querySelector('#texto');
const resultado = document.querySelector('#resultado');
input.addEventListener('input', function() {
    const texto = input.value.toUpperCase();
    resultado.textContent = texto;
  });
const button = document.querySelector('.btn')
const buttonresul = document.querySelector('#buttonresul')
button.addEventListener('click', function(){
    const escrito = input.value.toUpperCase();
    buttonresul.textContent = escrito;
})