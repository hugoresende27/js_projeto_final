let segundos = 59;
let minutos = 1;

function segundo(){
    //incrementa os segundos
    segundos--;
    if(segundos==00){
        //incrementa os minutos
        minutos--;
        //Zerar os segundos
        segundos=60;
        //escreve os minutos
        document.getElementById('minuto').innerHTML=minutos
    }
    //escreve os segundos
    document.getElementById('segundo').innerHTML=segundos
    
}

setInterval(function(){ segundo() },1000)