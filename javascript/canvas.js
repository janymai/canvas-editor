getImages();

// Add text
function addText() {
  var elTextCanvas = document.getElementById('textCanvas');
  var elCanvasBlock = document.getElementById('blockCanvas');

  Action.addText(elTextCanvas, elCanvasBlock);
}

// Get images
function getImages() {
  Media.getImages("/images")
    .then(function(response) {
      var elParent = document.getElementById('listImage');
      var elChild = document.createElement('div');
      Media.getImagesSuccessful(response, elChild, elParent);
    }, function(error) {
      alert(error);
    });
}

// Upload image
function startUploading() {
  var imgFile = document.getElementById('image_file').files[0];
  var data = new FormData(imgFile);
  data.append('file', data);

  Media.uploadImage('/uploads', data)
    .then(function(response) {
      var elParent = document.getElementById('listImage');
      var elChild = document.createElement('div');
      Media.uploadSuccessful(response, elChild, elParent);
    }, function(error) {
      alert(error);
    });
}

// Drag image to block
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  Action.dragTag(ev, 'draimg');
}

// Drop img tag
function drop(ev) {
  Action.dropTag(ev, 'draimg', 'img');
}

// Move element

// Object of the element to be moved
item = null;

// Stores x & y coordinates of the mouse pointer
mouseX = 0;
mouseY = 0;

// stores top, left of the element
elementX = 0;
elementY = 0;

// The moveInit function
function moveInit(){
  document.onmousemove = move;
  document.onmouseup = stop;
}

//destroy the object when we are done
function stop(){
  item = null;
}

// Moving the element
function move(ev){
  var blockCanvas = document.getElementById('blockCanvas');
  Action.getOffset(blockCanvas);

  mouseX = document.all ? window.event.clientX : ev.pageX;
  mouseY = document.all ? window.event.clientY : ev.pageY;
  limitX = mouseX > blockLeft && mouseX < maxOffsetX,
  limitY = mouseY > blockTop && mouseY < maxOffsetY;

  if(item != null && limitX  && limitY) {
    item.style.left = (mouseX - elementX) + "px";
    item.style.top = (mouseY - elementY) + "px";
  }
}

// When use starts move the element will trigger
// Store the object of the element which needs to be moved
function moveItem(element){
  item = element;
  elementX = mouseX - item.offsetLeft;
  elementY = mouseY - item.offsetTop;
}
