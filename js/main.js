// Mostrar u ocultar el botón "Volver arriba"
window.addEventListener("scroll", () => {
  const btn = document.getElementById("btn-arriba");
  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Acción al hacer clic en el botón
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-arriba");
  if (btn) {
    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const avisoCookies = document.getElementById("aviso-cookies");
  const fondoAviso = document.getElementById("fondo-aviso-cookies");
  const btnAceptar = document.getElementById("btn-aceptar-cookies");

  if (!localStorage.getItem("cookies-aceptadas")) {
    avisoCookies.style.display = "block";
    fondoAviso.style.display = "block";
  }

  btnAceptar.addEventListener("click", () => {
    avisoCookies.style.display = "none";
    fondoAviso.style.display = "none";
    localStorage.setItem("cookies-aceptadas", "true");
  });
});