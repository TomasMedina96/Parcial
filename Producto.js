export const Product = (nombre, precio, descripcion,categoria) =>{ 

    return ` 
    <div class="col-12 col-md-6">
    <div class="card mt-5">
        <div class="card-header">Producto Cargado</div>
        <div class="card-body">
            <ul class="list-group list-group-item-success rounded-3">
                <li class="list-group-item"><p class="text-secondary">HOLA HOLA</p>${nombre}</li>
                <li class="list-group-item"><p class="text-secondary">Septimebre 10</p>${precio}</li>
                <li class="list-group-item"><p class="text-secondary">Septimebre 12</p>Tu ${descripcion}</li>
                <li class="list-group-item"><p class="text-secondary">Septimebre 12</p>Tu ${categoria}</li>
            </ul>

        </div>
    </div>
    </div>
    `}