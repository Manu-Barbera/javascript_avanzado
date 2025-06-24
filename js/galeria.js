document.addEventListener("DOMContentLoaded", () => {
  const imagenes = [
    "https://picsum.photos/id/1011/600/400",
    "https://picsum.photos/id/1025/600/400",
    "https://picsum.photos/id/1040/600/400",
    "https://picsum.photos/id/1050/600/400",
    "https://picsum.photos/id/1062/600/400",
    "https://picsum.photos/id/1070/600/400"
  ];

  const contenedor = document.querySelector("#contenedor-galeria");

  if (!contenedor) {
    console.error("No se encontró el contenedor de la galería.");
    return;
  }

  imagenes.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Proyecto";
    img.classList.add("miniatura");

    img.width = 250;
    img.height = 250;

    img.style.width = "250px";
    img.style.height = "250px";

    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "overlay";

      const imgGrande = document.createElement("img");
      imgGrande.src = src;
      imgGrande.className = "imagen-grande";

      overlay.appendChild(imgGrande);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        overlay.remove();
      });
    });

    contenedor.appendChild(img);
  });
});
