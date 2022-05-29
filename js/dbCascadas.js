document.addEventListener("DOMContentLoaded", () => {
  const baseDeDatos = [
    {
      id: 1,
      nombre: "Caburga",
      precio: 60000,
      descripcion: "12 personas",
      imagen: "../images/caburgua.jpg",
      categoria: "Cascadas",
    },
    {
      id: 2,
      nombre: "Itata",
      precio: 60000,
      descripcion: "12 personas",
      imagen: "../images/itata.jpg",
      categoria: "Cascadas",
    },
    {
      id: 3,
      nombre: "Petrohue",
      precio: 70000,
      descripcion: "8 personas",
      imagen: "../images/petrohue.jpg",
      categoria: "Cascadas",
    },
    {
      id: 4,
      nombre: "Invertida",
      precio: 70000,
      descripcion: "8 personas",
      imagen: "../images/invertida.jpg",
      categoria: "Cascadas",
    },
    {
      id: 5,
      nombre: "Salto del Laja",
      precio: 75000,
      descripcion: "5 personas",
      imagen: "../images/saltolaja.jpg",
      categoria: "Cascadas",
    },
  ];

  const DOMitems3 = document.querySelector("#items3");
  renderizarProductos();

  /*
    Dibuja todos los productos a partir de la base de datos.
   */

  function renderizarProductos() {
    baseDeDatos.forEach((info) => {
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
      DOMitems3.appendChild(miNodo);
    });
  }
});
