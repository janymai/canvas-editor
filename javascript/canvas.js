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
