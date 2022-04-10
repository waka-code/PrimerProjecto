window.onload = inicio;

/*menuSroll*/
function inicio(){
      window.addEventListener("scroll", function(){
       let navegar = document.getElementById("navegar");
       navegar.classList.toggle("abajo",window.scrollY>0);
   })
   
}
/*Repositorio Git*/

document.getElementById("git1").onclick = git1;
function git1(url) {
    window.open("https://github.com/waka-code/blorg-proyect");
}
document.getElementById("git2").onclick = git2;
function git2(url) {
    window.open("https://github.com/waka-code/loops-proyect");
}
document.getElementById("git3").onclick = git3;
function git3(url) {
    window.open("https://github.com/waka-code/wakaCokeFB");
}
document.getElementById("git4").onclick = git4;
function git4(url) {
    window.open("https://github.com/waka-code/primer-projecto");
}
/*Contacto*/

document.getElementById("facebook").onclick = Facebook;
function Facebook(url) {
    window.open("https://www.facebook.com/vladimi.saintlouis/");
}
document.getElementById("linkedln").onclick = linkedln;
function linkedln(url) {
    window.open("https://www.linkedin.com/in/waddimi-saint-louis-b49424230/");
}
document.getElementById("instagram").onclick = instagram;
function instagram(url) {
    window.open("https://www.instagram.com/henryvladimil29/?hl=es");
}
document.getElementById("whatsapp").onclick = whatsapp;
function whatsapp(url) {
    window.open("https://chat.whatsapp.com/DeW61pkbSFT4s2GZ28HuJA");
}
document.getElementById("Gmail").onclick = Gmail;
function Gmail(url) {
    window.open("https://mail.google.com/mail/u/0/?tab=km#inbox?compose=new");
}
