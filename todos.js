var all_deck = "🐎";
var grupoCartas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺" ];
var grupoCartas2 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺" ];
var grupoCartas3 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺" ];

/// CONCATENAR ARRAYS array aninhado ////////////////////////////////////

var total_cartas = grupoCartas.concat(grupoCartas2,grupoCartas3);
var tot_cartas = grupoCartas.concat(grupoCartas);

// console.log(total_cartas);

var arr_aninhado = [ ["🌈", "👽"]
                    ,["👹", "👺"]
                    ,["🍦", "👽"]
                    ];


// console.log(arr_aninhado);




/// FOREACH DOCUMENTATION //////////////// ////////////////////////////////////

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));


/// FOREACH susana //////////////// ////////////////////////////////////


// grupoCartas.forEach((e,i) => console.log(e+"="+i));

grupoCartas.forEach(function(ele, index)
    {
        
        // console.log(index+"->"+ele)
    });




    
    cartas_baralhadas();





/// /////////////////////////////////// //////////////// ////////////////////////////////////
teste =  document.querySelectorAll('.carta');

teste.forEach( function (e){
    e.addEventListener("click", descobrir);
})
//    console.log(teste);


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

/// function certo /////////////// //////////////// ////////////////////////////////////
function acertar(m)
{
    m.forEach(function (ele){
        ele.classList.add('sucesso'); //classe sucesso  opacity: 0; vai fazer desaparecer as cartas se forem iguais
    })
    console.log("CERTO");
}
/// function errado /////////////// //////////////// ////////////////////////////////////
function errar(m)
{
    m.forEach(function (ele){
        ele.classList.remove('descoberta'); //se cartas diferentes remove classe descoberta 
    })
    console.log("ERRADO")
}

function descobrir(){
    var totalDescobertas=document.querySelectorAll(".descoberta");
   
    if(totalDescobertas.length>1){
        return;
    }
    
    this.classList.add("descoberta");
    
 var mostra=document.querySelectorAll(".descoberta");
     if(mostra.length<2){
     return;
     } 
 
    comparar(mostra);
 
 }

 function comparar(mostrar){
    
    if(mostrar[0].dataset.value===mostrar[1].dataset.value){
        certo(mostrar);
        }
        else{
           errado(mostrar);
        }
}