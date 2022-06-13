function criaHora(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'utc'
    })
}

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const relogio = document.querySelector('#timer');
let segundos = 0;
let timer;

function iniciarRelogio(){
     timer = setInterval( function(){
        segundos++;
        relogio.innerHTML = criaHora(segundos);
    }, 1000);
}


iniciar.addEventListener('click', function(event){
    clearInterval(timer);
    iniciarRelogio();
})

pausar.addEventListener('click', function(event){
    clearInterval(timer);
})

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;

})

//foi um exercicio deveras dificil de compreender, não entendi nada e ainda me senti burra e desmotivada perderndo meu dia todo apenas nesse exercicio. Espero um dia poder voltar aqui e enderder tudo o que escrevi.

