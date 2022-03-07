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