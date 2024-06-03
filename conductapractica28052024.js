var carro = [];
var spTotal = document.getElementById("total");
var listaCarro = document.getElementById("carrito");

var carrosinrepetidos = [];
productos();

alert ("sin error");

function productos(){
    var objProducto = {
        id : 1,
        nombre:"Producto 1",
        precio : 375,
        cantidad: 0 ,
    };
    carrosinrepetidos.push(objProducto);
    var objProducto = {
        id : 2,
        nombre:"Producto 2",
        precio : 475,
        cantidad: 0,
    };
    carrosinrepetidos.push(objProducto);
    var objProducto = {
        id : 3,
        nombre:"Producto 3",
        precio : 575,
        cantidad: 0,
    };
    carrosinrepetidos.push(objProducto);
}

function agregarCarro1(){
    carrosinrepetidos[0].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}

function agregarCarro2(){
    carrosinrepetidos[1].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}

function agregarCarro3(){
    carrosinrepetidos[2].cantidad++
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
                }
    }
}

