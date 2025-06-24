document.addEventListener("DOMContentLoaded", () => {
  fetch("data/noticias.json")
    .then(response => response.json())
    .then(noticias => {
      const contenedor = document.getElementById("contenedor-noticias");

      if (!contenedor) {
        console.error("No se encontró el contenedor de noticias.");
        return;
      }

      noticias.forEach(noticia => {
        const div = document.createElement("div");
        div.classList.add("noticia");

        const titulo = document.createElement("h3");
        titulo.textContent = noticia.titulo;

        const contenido = document.createElement("p");
        contenido.textContent = noticia.contenido;

        div.appendChild(titulo);
        div.appendChild(contenido);
        contenedor.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Error al cargar las noticias:", error);
    });
});
