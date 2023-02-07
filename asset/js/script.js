let tailleGrille = 800;
let nombreCase = 10;
let root = document.documentElement;
let tailleCase = tailleGrille/nombreCase-tailleGrille/nombreCase/6;
let color = "#FFF";
const grille = document.querySelector(".grille");
let color_list = [["Bleu", "#0064DA", true], ["Vert", "#089305"], ["Jaune", "#D1BB14"], ["Orange", "#CB670F"], ["Rose", "#E522B6"], ["Rouge", "#E70B11"], ["Violet", "#6A1BCE", true],["Noir", "#010001", true], ["Blanc", "#FFF"]];
const BUTTON_CONTAINER = document.getElementById('buttons');
const ADDCOLOR_FORM = document.querySelector('#addColorForm');
const PREIEW_COLOR = document.getElementById('color-preview');
const RED_RANGE = document.querySelector('#red')
const GREEN_RANGE = document.querySelector('#green')
const BLUE_RANGE = document.querySelector('#blue')
let green = 100;
let red = 100;
let blue = 100;
window.addEventListener("load", e => {
  root.style.setProperty('--tailleGrille', tailleGrille + "px");
  root.style.setProperty('--tailleCase', tailleCase + "px");
  root.style.setProperty('--tailleMargin', tailleGrille/nombreCase/12 + "px");
  root.style.setProperty('--red', red);
  root.style.setProperty('--green', green);
  root.style.setProperty('--blue', blue);
});

RED_RANGE.addEventListener('input', () => {
    red = RED_RANGE.value;
    root.style.setProperty('--red', red);
});
GREEN_RANGE.addEventListener('input', () => {
  green = GREEN_RANGE.value;
  root.style.setProperty('--green', green);
});
BLUE_RANGE.addEventListener('input', () => {
  blue = BLUE_RANGE.value;
  root.style.setProperty('--blue', blue);
});

function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function addColor(e) {
  e.preventDefault();
  color_list.push([ADDCOLOR_FORM.querySelector('input[type="text"]').value, rgbToHex(red, green, blue)]);
  console.log(color_list); 
  displayColors();
  ADDCOLOR_FORM.classList.remove('active');
}

function handleButtonClick(e) {
  if (e.target.id !== 'add-color-button') {
    document.querySelector(`button[data-color="${color}"`).classList.remove('active');
    color = e.target.attributes[0].value;
    document.querySelector(`button[data-color="${color}"`).classList.add('active');
  } else {
    ADDCOLOR_FORM.classList.add('active');
  }
}
function displayColors() {
  BUTTON_CONTAINER.innerHTML="";
  color_list.forEach((color) => {
      BUTTON_CONTAINER.innerHTML += `<button data-color="${color[1]}" style="background-color: ${color[1]}" ${color[0]==="Blanc" ? 'id="blanc"' : false} ${color[2] ? 'class="fw button"' : 'class="button"'}>${color[0]}</button>`;
  });
  BUTTON_CONTAINER.innerHTML += '<button id="add-color-button" class="button">+</button>';
  [...document.getElementsByClassName('button')].forEach(button => button.addEventListener('click', handleButtonClick));
}

for(let x = 0; x < nombreCase*nombreCase; x++){
    let Case = document.createElement('div');
    Case.addEventListener('click', ()=>{
        Case.style.backgroundColor = color;
    });
    Case.addEventListener('contextmenu', (ev) => {
        ev.preventDefault
        Case.style.backgroundColor = "#FFFFFF";
    });
    Case.classList.add('case')
    grille.appendChild(Case)
}
ADDCOLOR_FORM.querySelector('form').addEventListener('submit', addColor);
displayColors();