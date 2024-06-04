var carro = [];
var spTotal = document.getElementById("total");
var listaCarro = document.getElementById("carrito");

var carrosinrepetidos = JSON.parse(productos);

var productosXML = document.getElementById("productos");
mostrarProductos();
function mostrarProductos()
{
    for (var pro of carrosinrepetidos)
        {
            var unNodo= document.createElement('div');
            unNodo.classList.add('card', 'col-sm-4');

            var unNodoCardBody = document.createElement('div');
            unNodoCardBody.classList.add('card-body');

            var unNodoTitle = document.createElement('h5');
            unNodoTitle.classList.add('card-title');
            unNodoTitle.textContent = pro.nombre;

            var unNodoImagen = document.createElement('img');
            unNodoImagen.classList.add('img-fluid');
            unNodoImagen.setAttribute('src', pro.imagen);

            var unNodoPrecio = document.createElement('p');
            unNodoPrecio.classList.add('card-text');
            unNodoPrecio.textContent='$' + pro.precio;

            var unNodoBoton = document.createElement('button');
            unNodoBoton.classList.add('btn', 'btn-primary');
            unNodoBoton.textContent= '+';
            unNodoBoton.setAttribute('marcador', pro.id);
            unNodoBoton.addEventListener('click', agregarCarro)


            unNodoCardBody.appendChild(unNodoImagen);
            unNodoCardBody.appendChild(unNodoTitle);
            unNodoCardBody.appendChild(unNodoPrecio);
            unNodoCardBody.appendChild(unNodoBoton);

            unNodo.appendChild(unNodoCardBody);
            productosXML.appendChild(unNodo)

        }
}

function agregarCarro()
{
    carrosinrepetidos[(this.getAttribute("marcador")-1)].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}




function calcularTotal(){
    var elTotal = 0;
    for(var p of carrosinrepetidos)
    {
        elTotal+= p.precio*p.cantidad;
    }
    spTotal.textContent = elTotal;
}
function mostrarEnCarro(){
listaCarro.textContent="";
    for (var ObjP of carrosinrepetidos)
        {
            if(ObjP.cantidad > 0)
                {
                    var nodoProductoenCarro = document.createElement("li");
                    nodoProductoenCarro.classList.add("list-group-item" , "text-right" , "mx-2" );
                    nodoProductoenCarro.textContent = ObjP.cantidad + " - " + ObjP.nombre + " - $ " + ObjP.precio;
                    listaCarro.appendChild(nodoProductoenCarro);


                    //agregar boton para borrar
                    var elBoton = document.createElement('button');
                    elBoton.classList.add('btn','btn-danger','mx-5');
                    elBoton.textContent='X';
                    elBoton.setAttribute('item', ObjP.id);
                    elBoton.addEventListener('click', borrarProductodelCarro);
                    nodoProductoenCarro.appendChild(elBoton);

                    listaCarro.appendChild(nodoProductoenCarro);
                }
    }
}

function borrarProductodelCarro()
{
    carrosinrepetidos[(this.getAttribute("item")-1)].cantidad--;
    calcularTotal();
    mostrarEnCarro();
}