const container = document.querySelector(`.container`);

for(let i = 0; i <= (16*16-1); i++){
  const square1 = document.createElement(`div`);
  square1.classList.add('square');
  square1.textContent = i;
  container.appendChild(square1)
}

const square = document.querySelectorAll(`.square`);
console.log(square)

for (let i = 0; i < square.length; i++) {
square[i].addEventListener('mouseenter', function() {
  square[i].classList.add('hover');
}, {once : true});
}

