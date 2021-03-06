document.addEventListener("DOMContentLoaded", () => {
    const baseDeDatos = [
        {
            id: 1,
            nombre: "Short Rojo",
            precio: 60000,
            descripcion: "",
            imagen: "/carrito/images/shorts1.jpg",
            categoria: "Ropa",
          },
          {
            id: 2,
            nombre: "Short Rojo Oscuro",
            precio: 60000,
            descripcion: "",
            imagen: "/carrito/images/shorts2.jpg",
            categoria: "Ropa",
          },
          {
            id: 3,
            nombre: "Pantalon de Terno",
            precio: 50000,
            descripcion: "",
            imagen: "/carrito/images/shorts3.jpg",
            categoria: "Ropa",
          },
          {
            id: 4,
            nombre: "Short Verde",
            precio: 50000,
            descripcion: "",
            imagen: "/carrito/images/shorts4.jpg",
            categoria: "Ropa",
          },
          {
            id: 5,
            nombre: "Short Negro",
            precio: 45000,
            descripcion: "",
            imagen: "/carrito/images/shorts5.jpg",
            categoria: "Ropa",
          },
          {
            id: 6,
            nombre: "Short Mezclilla",
            precio: 45000,
            descripcion: "",
            imagen: "/carrito/images/shorts6.jpg",
            categoria: "Ropa",
          },
    ];
  
    const DOMitems4 = document.querySelector("#items4");
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
        DOMitems4.appendChild(miNodo);
      });
    }
  });