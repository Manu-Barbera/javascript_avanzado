document.addEventListener("DOMContentLoaded", () => {
  fetch("/data/noticias.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON.");
      }
      return response.json();
    })
    .then(noticias => {
      const contenedor = document.getElementById("contenedor-noticias");

      noticias.forEach(noticia => {
        const articulo = document.createElement("article");
        const titulo = document.createElement("h3");
        const contenido = document.createElement("p");

        titulo.textContent = noticia.titulo;
        contenido.textContent = noticia.contenido;

        articulo.appendChild(titulo);
        articulo.appendChild(contenido);
        contenedor.appendChild(articulo);
      });
    })
    .catch(error => {
      console.error("Hubo un problema al cargar las noticias:", error);
    });
});