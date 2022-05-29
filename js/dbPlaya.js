document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const baseDeDatosPlaya = [
    {
      id: 1,
      nombre: "Algarrobo",
      precio: 20000,
      imagen: "../images/algarrobo.jpg",
      descripcion: "5 personas",
      categoria: "Playas",
    },
    {
      id: 2,
      nombre: "Cartagena",
      precio: 20000,
      descripcion: "5 personas",
      imagen: "../images/cartagena.jpg",
      categoria: "Playas",
    },
    {
      id: 3,
      nombre: "El tabo",
      precio: 34000,
      descripcion: "7 personas",
      imagen: "../images/tabo.jpg",
      categoria: "Playas",
    },
    {
      id: 4,
      nombre: "Isla Negra",
      precio: 34000,
      descripcion: "7 personas",
      imagen: "../images/negra.jpg",
      categoria: "Playas",
    },
    {
      id: 6,
      nombre: "Caburga",
      precio: 60000,
      descripcion: "12 personas",
      imagen: "../images/caburgua.jpg",
      categoria: "Cascadas",
    },
  ];

  const DOMitems2 = document.querySelector("#items2");
  renderizarProductos();

  /**
   * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
   */

  function renderizarProductos() {
    baseDeDatosPlaya.forEach((info) => {
      // Estructura
      const miNodo = document.createElement("div");
      miNodo.classList.add("card", "col-sm-4");
      // Body
      const miNodoCardBody = document.createElement("div");
      miNodoCardBody.classList.add("card-body");
      // Categorias 1
      const miNodoCategoriaBody = document.createElement("ul");
      miNodoCategoriaBody.classList.add("ul-categories");
      // Titulo
      const miNodoTitle = document.createElement("h5");
      miNodoTitle.classList.add("card-title");
      miNodoTitle.textContent = info.nombre;
      // Imagen
      const miNodoImagen = document.createElement("img");
      miNodoImagen.classList.add("img-fluid");
      miNodoImagen.style.width = "300px";
      miNodoImagen.style.height = "300px";
      miNodoImagen.setAttribute("src", info.imagen);

      // Insertamos
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);

      miNodo.appendChild(miNodoCardBody);
      miNodo.appendChild(miNodoCategoriaBody);
      DOMitems2.appendChild(miNodo);
    });
  }
});
