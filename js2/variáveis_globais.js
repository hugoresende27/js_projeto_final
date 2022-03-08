// var grupoCartas = [
// // "🦄", 
// // "🍦",
// //  "🌈", 
//  "👽", 
//  "👾", 
// //  "🤖", 
// //  "👹", 
// //  "👺",
//  "🍇",
//  "🕴️",
//  "🙈",
//  "🐖"];

 
// var totalCartas=grupoCartas.concat(grupoCartas);

var car1 = 'images/car1.jpg';
var car2 = 'images/car2.jpg';
var car3 = 'images/car3.jpg';
var car4 = 'images/car4.jpg';
var car5 = 'images/car5.jpg';
var car6 = 'images/car6.jpg';
var car7 = 'images/car7.jpg';
var car8 = 'images/car8.jpg';

var grupoCartas = [
car1,
car2,
car3,
car4,
car5,
car6,
car7,
car8,];

 
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