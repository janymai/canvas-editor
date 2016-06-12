var Action = {
  // Show textarea to input the text
  // Append content to the contain pppend
  // Reset value of textarea
  addText: function(tagInput, containAppend) {
    var contentAppend = document.createElement('div');
    if (tagInput.classList.contains('hide')) {
      tagInput.classList.remove('hide');
    } else {
      tagInput.classList.add('hide');
      if (tagInput.value != '') {
        contentAppend.innerHTML = "<div class='ele' style='z-index: 5;' onmousedown='moveItem(this);'>" + tagInput.value + "</div>";
        containAppend.appendChild(contentAppend);
        tagInput.value = '';
      }
    }
  },

  // Allow drop
  allowDrop: function(ev) {
    ev.preventDefault();
  },

  // Drag the tag
  dragTag: function(ev, dataTransfer) {
    ev.dataTransfer.setData(dataTransfer, ev.target.id);
  },

  // Drop the tag
  // If the child tag is img tag will add onmousedown action
  dropTag: function(ev, dataTransfer, dropTag) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData(dataTransfer);
    var childTargetTag = ev.target.appendChild(document.getElementById(data));
    if(childTargetTag.tagName.toLowerCase() == dropTag.toLowerCase()){
      childTargetTag.setAttribute("draggable", "false");
      childTargetTag.setAttribute("onmousedown", "moveItem(this);");
    }
  },

  // Get offset element
  getOffset: function(element) {
    var blockHeight = element.offsetHeight,
        blockWidth = element.offsetWidth,
        blockTop = element.offsetTop,
        blockLeft = element.offsetLeft,
        maxOffsetX = blockLeft + blockWidth,
        maxOffsetY = blockHeight + blockTop;
  }
}
