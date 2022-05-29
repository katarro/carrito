document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const baseDeDatos = [
    {
      id: 1,
      nombre: "Algarrobo",
      precio: 20000,
      imagen: "/images/algarrobo.jpg",
      descripcion: "5 personas",
      categoria: "Playas",
    },
    {
      id: 2,
      nombre: "Cartagena",
      precio: 20000,
      descripcion: "5 personas",
      imagen: "/images/cartagena.jpg",
      categoria: "Playas",
    },
    {
      id: 3,
      nombre: "El tabo",
      precio: 34000,
      descripcion: "7 personas",
      imagen: "/images/tabo.jpg",
      categoria: "Playas",
    },
    {
      id: 4,
      nombre: "Isla Negra",
      precio: 34000,
      descripcion: "7 personas",
      imagen: "/images/negra.jpg",
      categoria: "Playas",
    },
    {
      id: 6,
      nombre: "Caburga",
      precio: 60000,
      descripcion: "12 personas",
      imagen: "/images/caburgua.jpg",
      categoria: "Cascadas",
    },
    {
      id: 7,
      nombre: "Itata",
      precio: 60000,
      descripcion: "12 personas",
      imagen: "/images/itata.jpg",
      categoria: "Cascadas",
    },
    {
      id: 8,
      nombre: "Petrohue",
      precio: 70000,
      descripcion: "8 personas",
      imagen: "/images/petrohue.jpg",
      categoria: "Cascadas",
    },
    {
      id: 9,
      nombre: "Invertida",
      precio: 70000,
      descripcion: "8 personas",
      imagen: "/images/invertida.jpg",
      categoria: "Cascadas",
    },
    {
      id: 10,
      nombre: "Salto del Laja",
      precio: 75000,
      descripcion: "5 personas",
      imagen: "/images/saltolaja.jpg",
      categoria: "Cascadas",
    },
    {
      id: 11,
      nombre: "Short Rojo",
      precio: 60000,
      descripcion: "",
      imagen: "/images/shorts1.jpg",
      categoria: "Ropa",
    },
    {
      id: 12,
      nombre: "Short Rojo Oscuro",
      precio: 60000,
      descripcion: "",
      imagen: "/images/shorts2.jpg",
      categoria: "Ropa",
    },
    {
      id: 13,
      nombre: "Pantalon de Terno",
      precio: 50000,
      descripcion: "",
      imagen: "/images/shorts3.jpg",
      categoria: "Ropa",
    },
    {
      id: 14,
      nombre: "Short Verde",
      precio: 50000,
      descripcion: "",
      imagen: "/images/shorts4.jpg",
      categoria: "Ropa",
    },
    {
      id: 15,
      nombre: "Short Negro",
      precio: 45000,
      descripcion: "",
      imagen: "/images/shorts5.jpg",
      categoria: "Ropa",
    },
    {
      id: 16,
      nombre: "Short Mezclilla",
      precio: 45000,
      descripcion: "",
      imagen: "/images/shorts6.jpg",
      categoria: "Ropa",
    },
  ];

  var contador = 0;
  let carrito = [];
  var baseDeDatosFiltrada = [];
  var toFilter = null;
  const divisa = "CLP";
  const DOMitems = document.querySelector("#items");

  const DOMcarrito = document.querySelector("#carrito");
  const DOMtotal = document.querySelector("#total");
  const DOMbotonVaciar = document.querySelector("#boton-vaciar");

  // Funciones
 
  document.querySelectorAll(".filterSec").forEach((info) => {

    info.addEventListener("click", () => {
      toFilter = info.textContent.replace(/[\n]|[ ]/g, "");
      DOMitems.textContent = "";
      baseDeDatosFiltrada = baseDeDatos.filter(
        (info) => info.categoria === toFilter
      );
      document.getElementById('titulo').innerHTML = toFilter;



      if (toFilter.toLowerCase() === null) return renderizarProductos();
      renderizarProductos(baseDeDatosFiltrada);
    });
  });

  /**
   * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
   */

  function renderizarProductos() {
    baseDeDatosFiltrada.forEach((info) => {
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
      // Precio
      const miNodoPrecio = document.createElement("p");
      miNodoPrecio.classList.add("card-text");
      miNodoPrecio.textContent = `${info.precio}${divisa}`; //Extraemos el precio de un label
      // Boton
      const miNodoBoton = document.createElement("button");
      miNodoBoton.classList.add("btn", "btn-primary");
      miNodoBoton.textContent = "Comprar";
      miNodoBoton.setAttribute("marcador", info.id);
      miNodoBoton.addEventListener("click", anyadirProductoAlCarrito);

      //Categorias
      const miNodoCategoria = document.createElement("p");
      miNodoCategoria.classList.add("categories");
      miNodoCategoria.textContent = info.categoria;

      // Insertamos
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      // miNodoCardBody.appendChild(miNodoCategoria); -> ESTE ELEMENTO LO UBICAMOS EN EL LA IZQUIERDA DE LA PAG
      miNodoCategoriaBody.appendChild(miNodoCategoria);

      miNodo.appendChild(miNodoCardBody);
      miNodo.appendChild(miNodoCategoriaBody);
      DOMitems.appendChild(miNodo);
    });
  }

  /**
   * Evento para añadir un producto al carrito de la compra
   */
  function anyadirProductoAlCarrito(evento) {
    // Añadimos el Nodo a nuestro carrito
    contador++;
    // document.getElementById('contador').innerHTML = contador;

    carrito.push(evento.target.getAttribute("marcador"));
    console.log(contador);
    
    // Actualizamos el carrito
    renderizarCarrito();
  }

  // Dibuja todos los productos guardados en el carrito   
  function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = "";
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
      // Obtenemos el item que necesitamos de la variable base de datos
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
        // ¿Coincide las id? Solo puede existir un caso
        return itemBaseDatos.id === parseInt(item);
      });
      // Cuenta el número de veces que se repite el producto
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
        // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
        return itemId === item ? (total += 1) : total;
      }, 0);
      // Creamos el nodo del item del carrito
      const miNodo = document.createElement("li");
      miNodo.classList.add("list-group-item", "text-right", "mx-2");
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
    
      // Boton de borrar
      const miBoton = document.createElement("button");
      miBoton.classList.add("btn", "btn-danger", "mx-5");
      miBoton.textContent = "X";
      miBoton.style.marginLeft = "1rem";
      miBoton.dataset.item = item;
      miBoton.addEventListener("click", borrarItemCarrito);
      // Mezclamos nodos
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
  }

  /**
   * Evento para borrar un elemento del carrito
   */
  function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
  }

  /**
   * Calcula el precio total teniendo en cuenta los productos repetidos
   */
  function calcularTotal() {
    // Recorremos el array del carrito
    return carrito
      .reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
      }, 0)
      .toFixed(2);
  }

  // Varia el carrito y vuelve a dibujarlo
  function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
  }

  // Eventos
  DOMbotonVaciar.addEventListener("click", vaciarCarrito);

  // Inicio
  renderizarProductos();
  renderizarCarrito();
  

});
