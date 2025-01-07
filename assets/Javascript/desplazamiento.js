document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start' // Alinear con el inicio de la sección
      });
    });
  });