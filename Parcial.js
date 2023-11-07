    import { Product } from "./Producto";

    const producto = {
        id: ProductoId,
        name: "TOMAS MEDINA",
        description: document.getElementById("inputDescripcion"),
        price:document.getElementById("inputPrecio"),
        cat: document.getElementById("inputNCategoria")
    }
 
    let cardContainer = document.getElementById('c-container');

    let btnCargar = document.getElementById("CargProd")
    btnCargar.addEventListener('onclick', () =>{

    const Cprod = producto.map(e=>{

        return Product(e.name,e.price,e.description,e.cat)
       
        
    }).join('')
    cardContainer.innerHTML = Cprod;

    });




