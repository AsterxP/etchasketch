const container = document.querySelector(`.container`);
let gridNo = 16
createGrid();
hover();

function createGrid() {
  for(let i = 0; i <= (gridNo*gridNo-1); i++){
    const square1 = document.createElement(`div`);
    square1.classList.add('square');
    container.appendChild(square1)
  }
}

function hover () {
  const square = document.querySelectorAll(`.square`);
  for (let i = 0; i < square.length; i++) {
  square[i].addEventListener('mouseenter', function() {
    square[i].style.backgroundColor = generateRandomColor();
  }, {once : true});
  }
}

const button = document.querySelector('button')
button.addEventListener('click', () => {
  container.innerHTML = " ";
  gridNo = prompt(`Grid Number?`, 16);
  createGrid(gridNo);
  hover();
});

function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var randomColor=generateRandomColor();
