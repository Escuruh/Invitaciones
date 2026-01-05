async function cargarInvitacion() {
  // 1. Leer el parámetro "id" de la URL (ej: index.html?id=0)
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id === null) return; // Si no hay ID en la URL, mostramos el texto por defecto

  const res = await fetch("/api/invitaciones");
  const invitaciones = await res.json();

  // 2. Buscar la invitación específica usando el ID (índice del array)
  if (invitaciones[id]) {
    document.getElementById("nombre-invitado").innerText = invitaciones[id].nombre;
    document.getElementById("mensaje-invitacion").innerText = invitaciones[id].mensaje;
  }
}

cargarInvitacion();

// Lógica para el efecto "Scroll Reveal"
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // Agrega la clase cuando es visible
    }
  });
});

// Seleccionamos todos los elementos con la clase 'hidden' para observarlos
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
