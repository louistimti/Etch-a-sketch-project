//to get some html doms onto javascript
let divContainer = document.querySelector('.container-div');
let btn = document.querySelector('#reset');

function makeDivs() {
  let divSquares = prompt(
    'How many squares do you want per side for your grid? (should be from 1 to 100)',
    '',
  );

  if (divSquares <= 100 && divSquares >= 0) {
    divContainer.style.gridTemplateColumns = `repeat(${divSquares}, 1fr)`;

    let i;
    for (i = 1; i <= divSquares ** 2; i++) {
      let newDiv = document.createElement('div');
      newDiv.className = `${i}`;
      newDiv.addEventListener('mouseover', changeColor);
      divContainer.appendChild(newDiv);
    }

    function changeColor(e) {
      const randomR = Math.floor(Math.random() * 256);
      const randomG = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
  } else {
    divSquares = alert('refresh the page!');
  }
}

btn.onclick = function () {
  divContainer.textContent = '';
  makeDivs();
};
