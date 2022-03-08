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

 
// var totalCartas=grupoCartas.concat(grupoCartas);

// var car1 = '<img src="images/car1.jpg" style="max-width:110px; max-height:110px"';
// var car22 = '<img src="images/car22.jpg" style="max-width:110px; max-height:110px"';
// var car3 = '<img src="images/car3.jpg" style="max-width:110px; max-height:110px"';
// var car4 = '<img src="images/car4.jpg" style="max-width:110px; max-height:110px"';
// var car5 = '<img src="images/car5.jpg" style="max-width:110px; max-height:110px"';
// var car6 = '<img src="images/car6.jpg" style="max-width:110px; max-height:110px"';

// var grupoCartas = [
// car1,
// car22,
// car3,
// car4,
// car5,
// car6,
//  "🐖",
//  "🐖",];

 
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

function duplica(){
    // var totalCartas=grupoCartas.concat(grupoCartas,grupoCartas);
    window.location.reload()
}