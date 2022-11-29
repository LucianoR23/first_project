let ver = JSON.parse(sessionStorage.getItem("carrito"))

ver.forEach((it) => {
    const carrito = document.getElementById("carrito")
    let div = document.createElement("div");
    div.innerHTML = `<img src="./public/img/${it.img}" alt="${it.nombre}">
                     <p>${it.nombre}</p>
                     <p>$${it.precio}</p>`;
  
      carrito.insertAdjacentElement("beforeend", div);
})

let carrito = document.getElementById("carrito")
const precios = ver.map((item) => item.precio);
const precioTotal = precios.reduce((acum, el) => acum + el, 0);
let h3 = document.createElement("h3");
h3.innerText = `Su total es $${precioTotal}`
carrito.insertAdjacentElement("beforeend", h3);
