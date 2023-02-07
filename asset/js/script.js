let tailleGrille = 500;
let root = document.documentElement;
let tailleCase = tailleGrille/20-(tailleGrille/20/2)

window.addEventListener("onload", e => {
  root.style.setProperty('--tailleGrille', tailleGrille + "px");
  root.style.setProperty('--tailleCase', tailleCase + "px");
  root.style.setProperty('--tailleMargin', tailleGrille/20/4 + "px");
});


let color = "#000000";
let nombreCase = 20;
let grille = document.querySelector(".grille")


for(let x = 0; x < nombreCase*nombreCase; x++){
    let Case = document.createElement('div');
    Case.addEventListener('click', ()=>{
        Case.style.backgroundColor = color;
    });
    Case.classList.add('case')
    grille.appendChild(Case)
}