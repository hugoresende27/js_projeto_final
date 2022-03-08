
let segundos ;
let minutos ;

if (nivel == 0){

     segundos = 59;
     minutos = 0;
        
} 
if (nivel == 1){

     segundos = 29;
     minutos = 0;
        
} 
if (nivel == 2){

     segundos = 15;
     minutos = 0;
        
} 



function segundo(){
    //incrementa os segundos
    document.getElementById('minuto').innerHTML=minutos
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
    if ( minutos <0){
        
       
        document.getElementById('msg2').style.visibility="visible"
    }
    
}

setInterval(function(){ segundo() },1000)