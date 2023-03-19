// Make the DIV element draggable:
// var dragElements = document.getElementsByClassName('dragable');
// for(dragThing of dragElements){
// dragElement(dragThing);
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
// Drag with touch? Still doesn't work
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

// High contrast button;
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

// MOVE PLANT WITH SLIDERS

  // cardSliders.addEventListener('change', e =>)
  var plants = document.getElementsByClassName("plant");

  for(plant of plants){
    var card = plant.nextElementSibling;
    var careSlider = card.querySelector("input[name=care]");
    var controlSlider = card.querySelector("input[name=control]");

    if (careSlider && careSlider.value){
      var careValue = careSlider.value;
      plant.style.left = careValue + "vw";

      careSlider.addEventListener('input', e => {
        var careValue = e.target.value;    
        var movePlant = e.target.parentElement.parentElement.previousElementSibling;
        movePlant.style.left = careValue + "vw";
      });    

    }
    if (controlSlider && controlSlider.value){
      var controlValue = controlSlider.value;
      plant.style.top = controlValue + "vh";

      controlSlider.addEventListener('input', e => {
        var controlValue = e.target.value;    
        var movePlant = e.target.parentElement.parentElement.previousElementSibling;
        movePlant.style.top = controlValue + "vh";
      });    

    }

  }    


  // style plant

// FAMILY HIGHLIGHT & TOGGLE
var famToggles = document.getElementById("toggles");
var toggles = famToggles.getElementsByTagName("label"); 
var families = document.getElementsByClassName("plants");

for(toggle of toggles) {

  toggle.addEventListener('mouseover', e => {
    var toggleId = e.target.children[0].id;
    var focusFam = document.getElementById(toggleId + 's');
    var focusPlants = focusFam.getElementsByClassName('plant');
    
    for(focusPlant of focusPlants) {
      focusPlant.classList.add("highlight");
    }
  });
  
  toggle.addEventListener('mouseout', e => {
    var toggleId = e.target.children[0].id;
    var focusFam = document.getElementById(toggleId + 's');
    var focusPlants = focusFam.getElementsByClassName('plant');

    for(focusPlant of focusPlants) {
      focusPlant.classList.remove("highlight");
    }
  });

  var checkBox = toggle.children[0];
  checkBox.addEventListener('change', (e) => {
    var checkId = e.target.id;
    var clickedFam = document.getElementById(checkId + 's');

    if (e.target.checked == true) {
      clickedFam.style.display = 'block';

      for(family of families){
        var plants = family.getElementsByClassName('plant');
        if(family == clickedFam){
          for(plant of plants){
            plant.style.zIndex = '3';
          }
        }
        else{
          for(plant of plants){
            plant.style.zIndex = '1';
          }
        }
      }
    }
    else{
      clickedFam.style.display = 'none';
    };
  });
}

// Lines between plants

// function getOffset( el ) {
//   var rect = el.getBoundingClientRect();
//   return {
//       left: rect.left + window.pageXOffset,
//       top: rect.top + window.pageYOffset,
//       width: rect.width || el.offsetWidth,
//       height: rect.height || el.offsetHeight
//   };
// }

// function connect(div1, div2, color, thickness) { // draw a line connecting elements
//   var off1 = getOffset(div1);
//   var off2 = getOffset(div2);
//   // bottom right
//   var x1 = off1.left + off1.width;
//   var y1 = off1.top + off1.height;
//   // top right
//   var x2 = off2.left + off2.width;
//   var y2 = off2.top;
//   // distance
//   var length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
//   // center
//   var cx = ((x1 + x2) / 2) - (length / 2);
//   var cy = ((y1 + y2) / 2) - (thickness / 2);
//   // angle
//   var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
//   // make hr
//   var htmlLine = "<div style='padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);' />";
//   //
//   // alert(htmlLine);
//   document.body.innerHTML += htmlLine;
// }