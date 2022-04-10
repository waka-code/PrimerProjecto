/*MenuHamburguesa*/

let btnHamburguesa = document.getElementById('btnHamburguesa');
let navegarnavHamburguesa = document.getElementById('navegarnavHamburguesa');

btnHamburguesa.addEventListener("click", () =>{
    navegarnavHamburguesa.classList.toggle("menunavHamburguesa");
});


document.getElementById("menuli").onclick = remover;
function remover(){
    document.getElementById("navegarnavHamburguesa").classList.remove("menunavHamburguesa");
}

document.getElementById("menuli1").onclick = remover;
function remover(){
    document.getElementById("navegarnavHamburguesa").classList.remove("menunavHamburguesa");
}

document.getElementById("menuli2").onclick = remover;
function remover(){
    document.getElementById("navegarnavHamburguesa").classList.remove("menunavHamburguesa");
}

document.getElementById("menuli3").onclick = remover;
function remover(){
    document.getElementById("navegarnavHamburguesa").classList.remove("menunavHamburguesa");
}




/*
document.querySelector(".menuarticlenavHamburguesa").onclick = remover;
function remover() {
    document.getElementsByClassName('menunavHamburguesa').classList.remove("menunavHamburguesa");
}*/





