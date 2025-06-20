document.addEventListener('DOMContentLoaded', () => {
  // Chistes
  const chistes = [
    "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
    "¿Qué le dice un gusano a otro gusano? Voy a dar una vuelta a la manzana.",
    "¿Cuál es el animal más antiguo? La cebra, porque está en blanco y negro.",
    "¿Qué le dice una impresora a otra? ¿Esa hoja es tuya o es una impresión mía?",
    "¿Cómo se despiden los químicos? Ácido un placer.",
    "¿Por qué está feliz la escoba? Porque ba-rriendo.",
    "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
    "¿Qué hace un pez? ¡Nada!",
    "¿Por qué los esqueletos no pelean entre ellos? Porque no tienen agallas.",
    "¿Qué le dijo el 0 al 8? ¡Bonito cinturón!"
  ];

  let actual = 0;
  const chisteContenedor = document.getElementById('chiste-container');
  const anterior = document.getElementById('anterior');
  const siguiente = document.getElementById('siguiente');

  function mostrarChiste(index) {
    if (chisteContenedor) {
      chisteContenedor.innerText = chistes[index];
    }
  }

  if (anterior && siguiente) {
    anterior.onclick = () => {
      actual = (actual - 1 + chistes.length) % chistes.length;
      mostrarChiste(actual);
    };

    siguiente.onclick = () => {
      actual = (actual + 1) % chistes.length;
      mostrarChiste(actual);
    };

    mostrarChiste(actual);
  }

  // Toggle menú
  const toggleBtn = document.querySelector('.toggle-menu');
  const menu = document.querySelector('.menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }

  // Navegación entre secciones
  const linksMenu = document.querySelectorAll('.menu a');
  const secciones = document.querySelectorAll('main section');

  linksMenu.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      linksMenu.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const targetId = link.getAttribute('href').substring(1);
      secciones.forEach(sec => {
        sec.classList.add('section-hidden');
        sec.classList.remove('section-active');
      });

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove('section-hidden');
        targetSection.classList.add('section-active');
      }
    });
  });
});
