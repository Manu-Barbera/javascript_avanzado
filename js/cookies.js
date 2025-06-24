// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  const aviso = document.getElementById("aviso-cookies");
  const fondo = document.getElementById("fondo-aviso-cookies");
  const btnAceptar = document.getElementById("btn-aceptar-cookies");

  // Mostrar aviso si no se ha aceptado antes
  if (!localStorage.getItem("cookies-aceptadas")) {
    aviso.classList.add("activo");
    fondo.classList.add("activo");
  }

  // Al hacer clic en aceptar
  btnAceptar.addEventListener("click", () => {
    aviso.classList.remove("activo");
    fondo.classList.remove("activo");
    localStorage.setItem("cookies-aceptadas", "true");
  });
});