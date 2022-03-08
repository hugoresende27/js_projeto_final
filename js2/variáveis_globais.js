var grupoCartas = [
// "🦄", 
// "🍦",
//  "🌈", 
 "👽", 
 "👾", 
//  "🤖", 
//  "👹", 
//  "👺",
 "🍇",
 "🕴️",
 "🙈",
 "🐖"];


var totalCartas=grupoCartas.concat(grupoCartas);
var total = Number(0);

document.getElementById('total').innerHTML = total;



var nivel = Number(localStorage.getItem('nivel'));

console.log(nivel)


/*
Aplicar um cronometro e um contador
Níveis de jogo
Efeitos sonoros
Completar as interfaces (se perder o jogo mostrar uma mensagem ou imagem, se ganhar mostrar outra mensagem ou imagem e passar para o próximo nível)

*/


function reset()
{
    localStorage.clear();
    window.location.reload()
    
}



function PlaySound(melody) {
    // alert("On Press of "+melody);
    var path = "video"
    var snd = new Audio(path + melody + ".mp4");
    snd.play();
}