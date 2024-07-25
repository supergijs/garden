// High contrast button;
function clarity() {
  var element = document.body;
  element.classList.toggle("black");
  var ground = document.getElementById('ground');
  ground.classList.toggle("groundless");
  var plants = document.getElementByClassName('plant');
  for(plant of plants){plant.classList.toggle("green");}
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
var famToggles = document.getElementById("signs");
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

document.addEventListener('DOMContentLoaded', function() {
  const tagLinks = document.querySelectorAll('a.tag');
  const plantLinks = document.querySelectorAll('a.plant');

  tagLinks.forEach(tagLink => {
      tagLink.addEventListener('mouseenter', function() {
          const href = tagLink.getAttribute('href');
          plantLinks.forEach(plantLink => {
              if (plantLink.getAttribute('href') === href) {
                if (plantLink.getAttribute('href') === href) {
                  plantLink.classList.add('highlight');
              }
              }
          });
      });

      tagLink.addEventListener('mouseleave', function() {
          const href = tagLink.getAttribute('href');
          plantLinks.forEach(plantLink => {
              if (plantLink.getAttribute('href') === href) {
                if (plantLink.getAttribute('href') === href) {
                  plantLink.classList.remove('highlight');
                }
              }
          });
      });
  });

  const tags = document.querySelectorAll('a.tag');
  const faminfoElements = document.querySelectorAll('.faminfo');

  // Function to hide all faminfo elements
  const hideAllFaminfo = () => {
      faminfoElements.forEach(faminfo => {
          faminfo.style.display = 'none';
      });
  };

  // Function to show the closest faminfo element
     const showFaminfo = (element) => {
        const parentFaminfo = element.closest('.faminfo');
        if (parentFaminfo) {
            parentFaminfo.classList.add('visible');
            // parentFaminfo.style.display = 'block'; // Ensure it is visible
        }
    };

  tags.forEach(tag => {
      tag.addEventListener('click', (event) => {
          const href = tag.getAttribute('href');
          const targetElement = document.querySelector(href);

          if (targetElement && targetElement.classList.contains('card')) {
              // Hide all faminfo elements first
              // hideAllFaminfo();

              // Find the parent .faminfo and make it visible
              let parentFaminfo = tag.closest('.faminfo');
              if (parentFaminfo) {
                  parentFaminfo.classList.add('visible');
                  // parentFaminfo.style.display = 'block';
              }
              
              // Update the URL hash to target the .card element
              window.location.hash = href;

                // Add the 'shadow' class to the targeted .card element
                targetElement.classList.add('shadow');              

              const closestFaminfo = tag.closest('.faminfo');
              if (closestFaminfo) {
                  // Update the href of .back link in the targeted .card
                  const backLink = targetElement.querySelector('a.back');
                  if (backLink) {
                    // Set the href to navigate back to the closest faminfo
                    const faminfoId = closestFaminfo.id;
                    backLink.setAttribute('href', `#${faminfoId}`);

                    // Add click event handler to the backLink to hide parentFaminfo
                    backLink.addEventListener('click', (event) => {
                      parentFaminfo.classList.remove('visible');

                        // // Force a reload to ensure proper handling of faminfo visibility
                        // window.location.hash = `#${faminfoId}`;
                        // location.reload();
                        // parentFaminfo.style.display = 'none';

                    });
                  }
              }
              
              // Prevent the default link behavior
              event.preventDefault();
          }
          // else{
          //   hideAllFaminfo();
          // }
      });
  });
    

});


   // Add event listener for .back links to handle hiding faminfo elements
   document.body.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.classList.contains('back')) {
        // Get the ID of the faminfo to navigate to
        const href = event.target.getAttribute('href');
        const targetFaminfo = document.querySelector(href);
        
        if (targetFaminfo && targetFaminfo.classList.contains('faminfo')) {
            // Hide all faminfo elements
            hideAllFaminfo();
            
            // Update the URL hash to target the faminfo
            window.location.hash = href;

            // Ensure the parent faminfo is hidden (additional handling)
            targetFaminfo.style.display = 'none';
        }
        
        // Prevent the default link behavior initially
        event.preventDefault();
    }
});




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