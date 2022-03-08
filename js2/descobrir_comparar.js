

function descobrir(){

    

    var totalDescobertas=document.querySelectorAll(".descoberta:not(.sucesso)");
    
    if(totalDescobertas.length>1){
        return;
    }
    
    this.classList.add("descoberta");
    
    var mostra=document.querySelectorAll(".descoberta:not(.sucesso)");
    if(mostra.length<2)
    {
        return;
    } 

    // console.log("ronda")
    
   
    comparar(mostra);
 
 }

 function comparar(mostrar){

    
    
    if(mostrar[0].dataset.value===mostrar[1].dataset.value)
    {
        
        total +=1;
        document.getElementById('total').innerHTML = total;
        
        certo(mostrar);
        document.getElementById('msg').style.color = 'green';
        document.getElementById('msg').innerHTML = "Acertou";
        if (total == 1){
            document.getElementById('msg').innerHTML = "Parabéns nível completo!";
            nivel =10;
            
            document.getElementById('button_next').style.visibility="visible"
        }
        
    }
    else
    {

        errado(mostrar);
        document.getElementById('msg').style.color = 'red';
        document.getElementById('msg').innerHTML = "Falhou";
    }
}