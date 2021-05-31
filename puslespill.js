
//model
let appen = document.getElementById("app");
Counter = 0;

//view
view();
function view(){
let html =`
<div class="title"><h1>Puslespill - Dra og dropp brikkene i øverste rad ned i riktig plass i boksen. ☺</h1></div>

<div class="flexcontainer">
<img id="5" draggable="true" ondragstart="onDragStart(event)" src="image_part_005.jpg"/>
<img id="8" draggable="true" ondragstart="onDragStart(event)" src="image_part_008.jpg"/>
<img id="7" draggable="true" ondragstart="onDragStart(event)" src="image_part_007.jpg"/>
<img id="1" draggable="true" ondragstart="onDragStart(event)" src="image_part_006.jpg"/>
<img id="9" draggable="true" ondragstart="onDragStart(event)" src="image_part_001.jpg"/>
<img id="3" draggable="true" ondragstart="onDragStart(event)" src="image_part_009.jpg"/>
<img id="6" draggable="true" ondragstart="onDragStart(event)" src="image_part_003.jpg"/>
<img id="2" draggable="true" ondragstart="onDragStart(event)" src="image_part_002.jpg"/>
<img id="4" draggable="true" ondragstart="onDragStart(event)" src="image_part_004.jpg"/>
</div>
<br>
<div class="brett">
<div id="first" class="box" ondragover="onDragOver(event)" ondrop="onDrop(event)"></div>
<div id="second" class="box" ondragover="onDragOver(event)" ondrop="onDrop(event)"></div>
<div id="third" class="box" ondragover="onDragOver(event)" ondrop="onDrop(event)"></div>
<div id="fourth" class="box" ondragover="onDragOver(event)" ondrop="onDrop(event)"></div>
<div id="fifth" class="box" ondragover="onDragOver(event)" ondrop="onDrop(event)"></div>
<div id="sixth" class="box" ondragover="onDragOver(event)" ondrop="onDrop(event)"></div>
<div id="seventh" class="box" ondragover="onDragOver(event)" ondrop="onDrop(event)"></div>
<div id="eighth"class="box" ondragover="onDragOver(event)" ondrop="onDrop(event)"></div>
<div id="ninth" class="box" ondragover="onDragOver(event)" ondrop="onDrop(event)"></div>
</div>
`;

appen.innerHTML = html;
}

//controller

function onDragStart(event) {
  event
  .dataTransfer
  .setData('text', event.target.id);

  }

  function onDragOver(event) {
    event.preventDefault();


  }

  function onDrop(event) {

    const id = event
      .dataTransfer
      .getData('text', event.target.id);

      const draggableElement = document.getElementById(id);
      const dropzone = event.target;

      dropzone.appendChild(draggableElement)
    if (id == "1" && dropzone == "first" ||
        id == "2" && dropzone == "second" ||
        id == "3" && dropzone == "third" ||
        id == "4" && dropzone == "fourth" ||
        id == "5" && dropzone == "fifth" ||
        id == "6" && dropzone == "sixth" ||
        id == "7" && dropzone == "seventh" ||
        id == "8" && dropzone == "eighth" ||
        id == "9" && dropzone == "ninth") Counter += 1;

    if (Counter == 9) alert('Du fullførte puslespillet!')

      event
      .dataTransfer
      .clearData();

  }
