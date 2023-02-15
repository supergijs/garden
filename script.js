// Make the DIV element draggable:
dragElement(document.getElementById("signs"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } 

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function clarity() {
    var element = document.body;
    element.classList.toggle("black");
    var ground = document.getElementById('ground');
    ground.classList.toggle("groundless");
    var nav = document.getElementById('signs');
    nav.classList.toggle("green");
    var btn = document.getElementById('clarity');
    btn.classList.toggle("on");
}

window.onload = function() {
    var box = document.getElementById('signs');  
    box.addEventListener('touchmove', function(e) {
      // grab the location of touch
      var touchLocation = e.targetTouches[0];
      // assign box new coordinates based on the touch.
      box.style.left = touchLocation.pageX + 'px';
      box.style.top = touchLocation.pageY + 'py';
    })
    box.addEventListener('touchend', function(e) {
      // current box position.
      var x = parseInt(box.style.left);
      var y = parseInt(box.style.top);
    })
    
  }

function toggle(clicked_id) {
    var checkBox = document.getElementById(clicked_id); 
    var famId = new String(clicked_id+"s");
    var div = document.getElementById(famId);
    if (checkBox.checked == true) {
        div.style.display = 'block';
        div.style.zIndex = '3';
    }
    else {
        div.style.display = 'none';
        div.style.zIndex = '1';
    }
};