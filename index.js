const productos = [
    {id: 0, nombre: "Fernet Branca", precio: 33, categoria: "fernet", img: "fernet.png"},
    {id: 1, nombre: "Two Hearted Ale 12pk", precio: 22, categoria: "cerveza", img: "cerveza.png"},
    {id: 2, nombre: "Tanqueray Nº10", precio: 30, categoria: "gin", img: "tanqueray.png"},
    {id: 3, nombre: "Macallan 12 Yr Double Cask", precio: 70, categoria: "scotch", img: "macallan.avif"},
    {id: 4, nombre: "Patron Añejo", precio: 50, categoria: "tequila", img: "patron.png"},
    {id: 5, nombre: "Coca de vidrio", precio: 5, categoria: "coca", img: "coca.png"},
    {id: 6, nombre: "Agua tonica", precio: 3, categoria: "tonica", img: "tonica.png"},
    {id: 7, nombre: "Hielo", precio: 3, categoria: "Hielo", img: "hielo.png"},
];
const agregar = (id) => {
    let carritoStorage = JSON.parse(sessionStorage.getItem("carrito"));
    let objeto = productos.find((item) => item.categoria === id);
    if (carritoStorage) {
      let nuevoCarrito = carritoStorage;
      nuevoCarrito.push(objeto);
      sessionStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    } else {
      let carrito = [objeto];
  
      sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }
  };


productos.forEach((producto) => {
    const main = document.getElementById("main");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<img src="./public/img/${producto.img}" alt="${producto.nombre}">
                            <p>${producto.nombre}</p>
                            <p>$${producto.precio}</p>
                            <button id="boton-${producto.categoria}">Agregar al carrito</button>`;
    main.insertAdjacentElement("beforeend", contenedor)

    let boton = document.getElementById(`boton-${producto.categoria}`);
    boton.addEventListener("click", () => agregar(producto.categoria));
});