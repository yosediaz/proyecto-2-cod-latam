
// Cambio de color al hacer click en el menú
const menuItems = document.querySelectorAll('.menu-item');

// Agregar el evento de clic a cada elemento
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // Quitar la clase "active" de todos los elementos del menú
    menuItems.forEach(item => item.classList.remove('active'));

    // Agregar la clase "active" al elemento del menú clicado
    this.classList.add('active');
  });
});


// Evento scroll al documento
document.addEventListener('scroll', toggleBarraScroll);

const bottom = document.querySelector('.bottom');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  bottom.style.transform = `translateY(${scrollY}px)`;
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




