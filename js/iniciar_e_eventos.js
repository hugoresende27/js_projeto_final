// var all_deck = "🐎";
// var grupoCartas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺" ];
// var grupoCartas2 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺" ];
// var grupoCartas3 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺" ];

// /// CONCATENAR ARRAYS array aninhado ////////////////////////////////////

// var total_cartas = grupoCartas.concat(grupoCartas2,grupoCartas3);
// var tot_cartas = grupoCartas.concat(grupoCartas);

// // console.log(total_cartas);

// var arr_aninhado = [ ["🌈", "👽"]
//                     ,["👹", "👺"]
//                     ,["🍦", "👽"]
//                     ];


// // console.log(arr_aninhado);




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


