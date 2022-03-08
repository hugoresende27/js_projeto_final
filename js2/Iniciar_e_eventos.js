localStorage.setItem("attempts", "0")



var nivel = parseInt(localStorage.getItem("attempts"));
// localStorage.setItem("attempts",`${++nivel}`);
localStorage.setItem('attempts', (nivel + 1).toString())

console.log(nivel);

DistribuirCartas();


document.querySelectorAll(".carta").forEach(function (element){
element.addEventListener("click", descobrir);
}
)





