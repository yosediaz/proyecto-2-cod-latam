
// Cambio de color al hacer click en el menú
const menuItems = document.querySelectorAll('.menu-item');


menuItems.forEach(item => {
  item.addEventListener('click', function() {
    
    menuItems.forEach(item => item.classList.remove('active'));

   
    this.classList.add('active');
  });

  var checkbox = document.getElementById('check');

menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        checkbox.checked = false;
    });
});
});



// Recorrer cada elemento y agregar los eventos
const section3Items = document.querySelectorAll('.section3');


section3Items.forEach(item => {
  item.addEventListener('mouseover', () => {
   
    item.style.transform = 'scale(1.1)';
  });

  item.addEventListener('mouseout', () => {
  
    item.style.transform = 'scale(1)';
  });
});







