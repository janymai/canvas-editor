'use strict';
// Service for image

var Media = {
  getImages: function(url){
    return new Promise(function(succeed, fail) {
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.addEventListener("load", function() {
        if (req.status < 400)
          succeed(req.response);
        else
          fail(new Error(req.statusText));
      });
      req.addEventListener("error", function() {
        fail(new Error("Network error"));
      });
      req.send(null);
    });
  },

  getImagesSuccessful: function(response, elChild, elParent) {
    var images = JSON.parse(response),
        listImage = '';
    for (var i = 0, len = images.length; i < len; i++) {
      listImage += "<img id='drag"+ i +"' draggable='true' ondragstart='drag(event)' src='" + images[i] + "'class='img-rounded ele' style='z-index: 5;'/></li>";
      listImage
    }
    elChild.innerHTML = listImage;
    elParent.appendChild(elChild);
  },

  uploadImage: function(url, data){
    return new Promise(function(succeed, fail) {
      var req = new XMLHttpRequest();
      req.open("POST", url, true);
      req.addEventListener("load", function() {
       if (req.status < 400)
         succeed(req.response);
       else
         fail(new Error(req.statusText));
      });
      req.addEventListener("error", function() {
       fail(new Error("Network error"));
      });
      req.setRequestHeader("Content-Type", "multipart/form-data");
      req.send(data);
    });
  },

  uploadSuccessful: function(response, elChild, elParent) {
    var d = new Date(),
        listImage = '';
    imageHTML = "<img id='drag"+ d.getTime() +"' src='" + response + "'class='img-rounded ele' style='z-index: 5;' onmousedown=''/></li>";
    elChild.innerHTML = imageHTML;
    elParent.appendChild(elChild);
  }
}
