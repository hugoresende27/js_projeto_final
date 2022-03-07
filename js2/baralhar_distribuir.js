function cartasBaralhadas()
{
    var baralho;
    baralho=totalCartas.sort(function(){
        return 0.5-Math.random();
    }
    );
    return baralho;
    }

function DistribuirCartas()
{

    var baralhar=cartasBaralhadas();
    var mesa=document.querySelector("#mesa");
    mesa.innerHTML= "";
    document.getElementById('nivel').innerHTML = nivel;
    
    baralhar.forEach(
    function (element){
        var carta=document.createElement("div");
        carta.innerHTML=
        "<div class='carta' data-value="+element+">"+
                "<div class='carta__conteudo'>"+
                element+
            "</div>"+
            " </div>";
        
    mesa.appendChild(carta);
});
}