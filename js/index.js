// Obtener todos los elementos <a> dentro de la barra de navegación
const elementosA = document.querySelectorAll(".barra-ul li a");

// Agregar el evento click a cada enlace
elementosA.forEach((enlace) => {
  enlace.addEventListener("click", function (event) {
    // Remover la clase "activo" de todos los elementos <a>
    elementosA.forEach((enlace) => {
      enlace.classList.remove("activo");
    });

    // Agregar la clase "activo" al enlace seleccionado
    this.classList.add("activo");
  });
});

// Obtener la barra de navegación
const barra = document.querySelector('.barra');

// Obtener la posición inicial de la barra de navegación
const barraOffsetTop = barra.offsetTop;

// Función para agregar o quitar la clase "scroll" en la barra de navegación
function toggleBarraScroll() {
  if (window.pageYOffset >= barraOffsetTop) {
    barra.classList.add('scroll');
  } else {
    barra.classList.remove('scroll');
  }
}

// Agregar el evento scroll al documento
document.addEventListener('scroll', toggleBarraScroll);

const bottom = document.querySelector('.bottom');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  bottom.style.transform = `translateY(${scrollY}px)`;
});

// Obtener todos los elementos con la clase "section3"
const section3Items = document.querySelectorAll('.section3');

// Recorrer cada elemento y agregar los eventos
section3Items.forEach(item => {
  item.addEventListener('mouseover', () => {
    // Al pasar el mouse por encima, aumentar el tamaño de las letras
    item.style.transform = 'scale(1.1)';
  });

  item.addEventListener('mouseout', () => {
    // Al sacar el mouse, volver al tamaño original de las letras
    item.style.transform = 'scale(1)';
  });
});