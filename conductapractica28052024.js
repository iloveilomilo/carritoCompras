    var carro = [];
    var spTotal = document.getElementById("total");
    var listaCarro = document.getElementById("carrito");

    function agregarCarro1(){
        var objProducto = {
        id : 1,
        nombre:"Producto1",
        precio : 375,
        };
        carro.push(objProducto);
        calcularTotal();
        mostrarEnCarro();
    }
    function calcularTotal(){
        var elTotal = 0;
        for(var p of carro)
        {
            elTotal+= p.precio;
        }
        spTotal.textContent = elTotal;
    }
    function mostrarEnCarro(){
    listaCarro.textContent="";
    for (var ObjP of carro){
        var nodoProductoenCarro = document.createElement("li");
        nodoProductoenCarro.classList.add("list-group-item" , "text-right" , "mx-2");
        nodoProductoenCarro.textContent = ObjP.nombre + " - $ " + ObjP.precio;
        listaCarro.appendChild(nodoProductoenCarro);
    }
    }
