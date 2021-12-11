const pixelCanvas = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
const sizePicker = document.getElementById('sizePicker');
const cells = document.getElementsByClassName('cell');

// make a grid

function makeGrid(height, width) {
  let grid = '';
  for (let i = 0; i < height; i++) {
    grid += '<tr class="row-' + i + '">';
    for (let j = 0; j < width; j++) { // fix this part of the code
      grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
    }
    grid += '</tr>';
  }
  // add grid into table element
  pixelCanvas.innerHTML = grid;

  // get colour onto cells
  colorClicker();
}

// submit form values

function submit() {
  event.preventDefault();
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;
  makeGrid(height,width);
}

// add colour to cells when clicked

function colorClicker() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function(event) {
      let cellClick = event.target;
      cellClick.style.backgroundColor = colorPicker.value;
    });
  }
}

// the call to submit values

sizePicker.onsubmit = function () {
  submit();
};
