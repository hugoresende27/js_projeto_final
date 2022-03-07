/// function  cartas baralhadas //////////////// ////////////////////////////////////


function cartas_baralhadas(){
    var baralho;
    baralho = tot_cartas.sort(function()
        {
            return 0.5-Math.random();
        }
    );
    return baralho;
}

/// function distribuir cartas //////////////// ////////////////////////////////////
function distribuir_cartas(){

    var baralhar = cartas_baralhadas();

    var mesa = document.querySelector('#mesa');
    mesa.innerHTML =  "";
    
    baralhar.forEach(function(ele, index)
    {
        var carta = document.createElement('div');
        // carta.innerHTML = ele;
        carta.innerHTML = 
        
       " <div class='carta' data-value="+ele+"> "+
            " <div class='carta__conteudo'> "+
             ele+ 
          "  </div>"+
         "</div>"
     
        ;
        mesa.appendChild(carta);       
        // console.log(index+"->"+ele)
    });

   

}