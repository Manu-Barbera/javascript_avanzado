document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario-presupuesto");
  const totalSpan = document.getElementById("total");

  const precios = {
    web: 500,
    tienda: 900,
    seo: 300
  };

  // Calcular el total dinámicamente
  const calcularTotal = () => {
    const producto = document.getElementById("producto").value;
    const plazo = parseInt(document.getElementById("plazo").value);
    const extras = document.querySelectorAll(".extra:checked");

    let total = precios[producto];

    extras.forEach(extra => {
      total += parseInt(extra.value);
    });

    // Descuento según plazo (cuanto más largo, más descuento)
    if (plazo >= 60) {
      total *= 0.9; // 10% descuento
    } else if (plazo >= 30) {
      total *= 0.95; // 5% descuento
    }

    totalSpan.textContent = total.toFixed(2);
  };

  // Eventos para recalcular en cada cambio
  document.getElementById("producto").addEventListener("change", calcularTotal);
  document.getElementById("plazo").addEventListener("input", calcularTotal);
  document.querySelectorAll(".extra").forEach(extra =>
    extra.addEventListener("change", calcularTotal)
  );

  // Validación del formulario al enviar
  formulario.addEventListener("submit", (e) => {
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const condiciones = document.getElementById("condiciones").checked;

    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const soloNumeros = /^[0-9]{9}$/;
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errores = [];

    if (!soloLetras.test(nombre) || nombre.length > 15) {
      errores.push("Nombre inválido (solo letras, máx. 15 caracteres).");
    }

    if (!soloLetras.test(apellidos) || apellidos.length > 40) {
      errores.push("Apellidos inválidos (solo letras, máx. 40 caracteres).");
    }

    if (!soloNumeros.test(telefono)) {
      errores.push("Teléfono inválido (solo números, exactamente 9 dígitos).");
    }

    if (!correoValido.test(correo)) {
      errores.push("Correo electrónico no válido.");
    }

    if (!condiciones) {
      errores.push("Debes aceptar las condiciones.");
    }

    if (errores.length > 0) {
      e.preventDefault();
      alert("Corrige los siguientes errores:\n\n" + errores.join("\n"));
    }
  });

  // Calcular total inicial al cargar
  calcularTotal();
});