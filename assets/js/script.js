let btn = document.getElementById('btn-menu');
let x = document.getElementById('x');
let titulo =  document.querySelector('h2');
let nav =  document.querySelector('.cabecalho__navegacao');
let icones = document.querySelector('.icones');
let a = document.querySelector('.entreEmContato')

btn.addEventListener('click', () =>{
    nav.classList.toggle('ativado')
    titulo.classList.toggle('ativado')
    icones.classList.toggle('ativado')
    a.classList.toggle('ativado')
    x.classList.toggle('ativado')
})
