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
  }
}
