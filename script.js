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

  // link card to plant

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

    // var controlValue = controlSlider.value;

    // careSlider.addEventListener('input', e => {
    //     var careLevel = e.target.value;
    //     // console.log(careLevel);

    //     // plant.style.left = careLevel;
    //   });    

    // for(slider of cardSliders){

    // }
    // var care = cardSliders[];
    // console.log(care);

    // cardSliders[0].addEventListener('change', e => {
    //   // console.log(cardSliders[0]);

    //   var careLevel = e.target.value;
      
    //   plant.style.left = careLevel;
    // });    

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
