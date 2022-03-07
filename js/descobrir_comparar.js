/// function descobrir /////////////// //////////////// ////////////////////////////////////
function descobrir()
    {
        //totalDescobertas vai buscar todas as divs com classe .descoberta
        var totalDescobertas = document.querySelectorAll('.descoberta');
    
        //para apenas permitir virar 1 carta
        if (totalDescobertas.length > 1){
            return;     //para sair da função se comprimento maior do que 1
        }

        this.classList.add('descoberta');

        //vai criar o array mostra com as 2 classes viradas
        var mostra = document.querySelectorAll('.descoberta');
        if (mostra.length<2){
            return;
        }

        comparar(mostra);
 
    }

/// function comparar /////////////// //////////////// ////////////////////////////////////
function comparar(m){
        if(m[0].dataset.value === m[1].dataset.value){ //vai comparar se textContent(emoji) iguais se sim certo         
            acertar(m);
        } else {          
            errar(m);
        }
         
    }
