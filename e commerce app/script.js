// JavaScript to toggle active state on click
document.addEventListener('DOMContentLoaded', function() {
    const featureBoxes = document.querySelectorAll('.fe-box');
  
    featureBoxes.forEach(function(box) {
      box.addEventListener('click', function() {
        // Remove active class from all boxes
        featureBoxes.forEach(function(box) {
          box.classList.remove('active');
        });
  
        // Add active class to the clicked box
        box.classList.add('active');
      });
    });
  });
  