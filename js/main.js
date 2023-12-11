//Array de productos
let productos =[
    {
        id: 1,
        nombre:"Arroz Integral",
        precio:800,
        marca:"Dos Hermanos",
        categoria:"Almacén Saludable",
        stock:40,
        cantidad:"1kg",
        descuento:true,
        observacion:"Sin TACC"

    },
    {   id: 2,
        nombre:"Te Rojo Orgánico",
        precio:1400,
        marca:"Hierbas del Oasis",
        categoria:"Infusiones",
        stock:30,
        cantidad:"20 SAQ",
        descuento:false,
        observacion:"Libre de glutten y Sin TACC"

    },
    {   id: 3, 
        nombre:"Pan con Semillas",
        precio:600,
        marca:"Vida Veggie",
        categoria:"Panificados",
        stock:20,
        cantidad:"1 unidad",
        descuento:false,
        observacion:"Vegano"

    },
    {   id: 4,
        nombre:"Criollos Veganos",
        precio:550,
        marca:"Vida Veggie",
        categoria:"Panificados",
        stock:15,
        cantidad:"200 gr",
        descuento:false,
        observacion:"Vegano"

    },
    {   id: 5,
        nombre:"Pizzetas",
        precio:500,
        marca:"Vida Veggie",
        categoria:"Panificados",
        stock:20,
        cantidad:"2 unidades",
        descuento:false,
        observacion:"Vegano"

    },
    {   id: 6,
        nombre:"Pasta de Maní",
        precio:2027,
        marca:"ManiKing",
        categoria:"Almacén Saludable",
        stock:35,
        cantidad:"1 unidad",
        descuento:false,
        observacion:"Vegano, sin TACC"

    },
    {   id: 7,
        nombre:"Tortillas Integrales",
        precio:600,
        marca:"Orali",
        categoria:"Almacén Saludable",
        stock:34,
        cantidad:"6 unidades",
        descuento:true,
        observacion:"Vegano, con harina integral"

    },
    {   id: 8,
        nombre:"Hamburguesa de Hongos",
        precio:2460,
        marca:"Nutree",
        categoria:"Almacén Saludable",
        stock:15,
        cantidad:"4 unidades",
        descuento:false,
        observacion:"Vegano, sin TACC "

    },
    {   id: 9,
        nombre:"Hamburguesa de Espinaca",
        precio:2400,
        marca:"Nutree",
        categoria:"Almacén Saludable",
        stock:19,
        cantidad:"4 unidades",
        descuento:false,
        observacion:"Vegano, sin TACC "

    },
    {   id: 10,
        nombre:"Medallón de Espinaca",
        precio:1300,
        marca:"Vegetalex",
        categoria:"Almacén Saludable",
        stock:12,
        cantidad:"4 unidades",
        descuento:false,
        observacion:"Vegano, ingredientes 100% vegetales"

    },
    {   id: 11,
        nombre:"Medallón de Calabaza, avena y chia",
        precio:1300,
        marca:"Vegetalex",
        categoria:"Almacén Saludable",
        stock:10,
        cantidad:"4 unidades",
        descuento:false,
        observacion:"Vegano, ingredientes 100% vegetales"

    },
    {   id: 12,
        nombre:"Hamburguesa de Quinoa",
        precio:2460,
        marca:"Nutree",
        categoria:"Almacén Saludable",
        stock:8,
        cantidad:"4 unidades",
        descuento:false,
        observacion:"Vegano, sin TACC "

    },
    {   id: 13,
        nombre:"Te en Hebras, finas hierbas",
        precio:1500,
        marca:"Breaking Cups",
        categoria:"Infusiones",
        stock:5,
        cantidad:"1 unidad",
        descuento:false,
        observacion:"Te en hebras, finas hierbas"

    },
    {   id: 14,
        nombre:"Te en Hebras, coco",
        precio:1200,
        marca:"Breaking Cups",
        categoria:"Infusiones",
        stock:5,
        cantidad:"1 unidad",
        descuento:false,
        observacion:"Te en hebras, sabor a coco y frutas"

    },
    {   id: 15,
        nombre:"Detox frutos del bosque",
        precio:1700,
        marca:"Saint Gottard",
        categoria:"Infusiones",
        stock:12,
        cantidad:"20 SAQ",
        descuento:false,
        observacion:"Sabor frutos del bosque"

    },
    {   id: 16,
        nombre:"Infusión herbal mix",
        precio:2500,
        marca:"Inti Zen",
        categoria:"Infusiones",
        stock:8,
        cantidad:"15 SAQ",
        descuento:false,
        observacion:"Infusión 4 mezclas de Hierbas"

    },
    {   id: 17,
        nombre:"Granola castaña premium",
        precio:6300,
        marca:"Verde Diet",
        categoria:"Frutos secos y Cereales",
        stock:13,
        cantidad:"1KG",
        descuento:false,
        observacion:"Granola con castaña"

    },
    {   id: 18,
        nombre:"Granola Fitness",
        precio:4800,
        marca:"Croccanto",
        categoria:"Frutos secos y Cereales",
        stock:16,
        cantidad:"1KG",
        descuento:false,
        observacion:"Granola"

    },
    {   id: 19,
        nombre:"Maní con cáscara",
        precio:1280,
        marca:"Croppers",
        categoria:"Frutos secos y Cereales",
        stock:40,
        cantidad:"500 gr",
        descuento:false,
        observacion:"Sin TACC"

    },
    {   id: 20,
        nombre:"Copos Maíz sin Azucar",
        precio:1000,
        marca:"Croppers",
        categoria:"Frutos secos y Cereales",
        stock:50,
        cantidad:"500 gr",
        descuento:false,
        observacion:"sin azúcar y Sin TACC"

    },
    {   id: 21,
        nombre:"Almendras",
        precio:1876,
        marca:"California",
        categoria:"Frutos secos y Cereales",
        stock:40,
        cantidad:"100 gr",
        descuento:false,
        observacion:"Fraccionada"

    },
    {   id: 22,
        nombre:"Catañas de Cajú",
        precio:3000,
        marca:"California",
        categoria:"Frutos secos y Cereales",
        stock:10,
        cantidad:"100 gr",
        descuento:false,
        observacion:"Fraccionada"

    },
    {   id: 23,
        nombre:"Multimix Semillas Chia, Quinoa, Amaranto, Lino, Girasol, Sesamo",
        precio:298,
        marca:"Ying Yang",
        categoria:"Semillas",
        stock:18,
        cantidad:"100 gr",
        descuento:true,
        observacion:"Mix"

    },
    {   id: 24,
        nombre:"Semilla Girasol",
        precio:560,
        marca:"For Good",
        categoria:"Semillas",
        stock:37,
        cantidad:"125 gr",
        descuento:false,
        observacion:"Girasol tostado"

    },
    {   id: 25,
        nombre:"Semilla Quínoa",
        precio:914,
        marca:"For Good",
        categoria:"Semillas",
        stock:30,
        cantidad:"150 gr",
        descuento:false,
        observacion:"Sin TACC"

    },
    {   id: 26,
        nombre:"Sésamo molido",
        precio:1082,
        marca:"Natural Seed",
        categoria:"Semillas",
        stock:22,
        cantidad:"250 gr",
        descuento:true,
        observacion:"Sésamo integral molido"

    },
    {   id: 27,
        nombre:"Fideos de Arroz Natural",
        precio:2460,
        marca:"Soyarroz",
        categoria:"Almacén Saludable",
        stock:34,
        cantidad:"500 gr",
        descuento:false,
        observacion:"Vegano, sin TACC, sin gluten "

    },
    {   id: 28,
        nombre:"Cookies Vegan",
        precio:1093,
        marca:"Good Life",
        categoria:"Panificados",
        stock:15,
        cantidad:"150 gr",
        descuento:false,
        observacion:"Vegano, sin TACC, sin gluten, sabor limón"

    },
];


//Carrito de compras vacío   
let carritoCompras=[];


alert("Bienvenidos a Vida Natural - productos saludables")

let seleccion = prompt("Desea ver el catálogo de productos en stock?\n Indique por favor si o no");

while(seleccion!="si" && seleccion!="no"){
    alert("Ingresa por favor si o no");
    seleccion = prompt("Desea ver el catálogo de productos en stock?\n Indique por favor si o no");
}

if(seleccion=="si"){
    alert("A continuación se mostraran los productos por categoría")
}else{
    alert("Muchas gracias, vuelva pronto")
};

let compra=true;
//inicializo opción para utilizarlo en el switch
let opcion; 

let seleccionCategoria;
//inicializo descuento de los productos
let descuento=50; 

//mientras que opcion sea distinto de cero se puedo realizar la compra de los productos del menu
do{
opcion=prompt("Detalle Productos por Categoría:\n\n1. Almacén Saludable\n2. Panificados\n3. Infusiones\n4. Frutos secos y Cereales\n5. Semillas\n0. Para salir ");
    
    switch(opcion){
        case"1":
        //se muestran los productos por categoría
        seleccionCategoria=mostrarProductos("Almacén Saludable");
        alert("Detalle del producto " + seleccionCategoria.nombre + "\n" + mostrarDetalleDeProducto(seleccionCategoria));
        //se agrega producto al carrito de compras
        agregarProductosAlCarrito(seleccionCategoria);
        //pregunta si se va a agregar otro producto al carrito
            compra=confirm("Desea agregar otro producto?\n Indique 'Aceptar' para seguir comprando  o 'Cancelar' para confirmar la compra");
        //si es verdadero (aceptar) se puede seguir comprando
            if(compra==true){
            continue;
            }else{
                //si se elije cancelar se confirma la compra y se muestra el detalle de la misma
                alert("Compra realizada exitosamente"  + mostrarCarrito());
                //se vacía el carrito de compras
                vaciarCarrito();
            };    
            
        
        break;
        case"2":
        seleccionCategoria=mostrarProductos("Panificados");
        alert("Detalle del producto " + seleccionCategoria.nombre + "\n" + mostrarDetalleDeProducto(seleccionCategoria));
        //se agrega producto al carrito de compras
        agregarProductosAlCarrito(seleccionCategoria);
        //pregunta si se va a agregar otro producto al carrito
            compra=confirm("Desea agregar otro producto?\n Indique 'Aceptar' para seguir comprando  o 'Cancelar' para confirmar la compra");
        //si es verdadero (aceptar) se puede seguir comprando
            if(compra==true){
            continue;
            }else{
                //si se elije cancelar se confirma la compra y se muestra el detalle de la misma
                alert("Compra realizada exitosamente"  + mostrarCarrito());
                //se vacía el carrito de compras
                vaciarCarrito();
            };  
        

        break;
        case"3":

        seleccionCategoria=mostrarProductos("Infusiones");
        alert("Detalle del producto " + seleccionCategoria.nombre + "\n" + mostrarDetalleDeProducto(seleccionCategoria));
        //se agrega producto al carrito de compras
        agregarProductosAlCarrito(seleccionCategoria);
        //pregunta si se va a agregar otro producto al carrito
            compra=confirm("Desea agregar otro producto?\n Indique 'Aceptar' para seguir comprando  o 'Cancelar' para confirmar la compra");
        //si es verdadero (aceptar) se puede seguir comprando
            if(compra==true){
            continue;
            }else{
                //si se elije cancelar se confirma la compra y se muestra el detalle de la misma
                alert("Compra realizada exitosamente"  + mostrarCarrito());
                //se vacía el carrito de compras
                vaciarCarrito();
            };


        break;
        case"4":
        
        seleccionCategoria=mostrarProductos("Frutos secos y Cereales");
        alert("Detalle del producto " + seleccionCategoria.nombre + "\n" + mostrarDetalleDeProducto(seleccionCategoria));
        //se agrega producto al carrito de compras
        agregarProductosAlCarrito(seleccionCategoria);
        //pregunta si se va a agregar otro producto al carrito
            compra=confirm("Desea agregar otro producto?\n Indique 'Aceptar' para seguir comprando  o 'Cancelar' para confirmar la compra");
        //si es verdadero (aceptar) se puede seguir comprando
            if(compra==true){
            continue;
            }else{
                //si se elije cancelar se confirma la compra y se muestra el detalle de la misma
                alert("Compra realizada exitosamente"  + mostrarCarrito());
                //se vacía el carrito de compras
                vaciarCarrito();
            }; 

        break;
        case"5":
        seleccionCategoria=mostrarProductos("Semillas");
        alert("Detalle del producto " + seleccionCategoria.nombre + "\n" + mostrarDetalleDeProducto(seleccionCategoria));
        //se agrega producto al carrito de compras
        agregarProductosAlCarrito(seleccionCategoria);
        //pregunta si se va a agregar otro producto al carrito
            compra=confirm("Desea agregar otro producto?\n Indique 'Aceptar' para seguir comprando  o 'Cancelar' para confirmar la compra");
        //si es verdadero (aceptar) se puede seguir comprando
            if(compra==true){
            continue;
            }else{
                //si se elije cancelar se confirma la compra y se muestra el detalle de la misma
                alert("Compra realizada exitosamente"  + mostrarCarrito());
                //se vacía el carrito de compras
                vaciarCarrito();
            }; 

        break;
        case"0":
        alert("Muchas gracias");
        break;
        default:
        alert("Ingresaste un valor no valido");    
        break;    
    }
}while (opcion!=="0");

//función que muestra los productos por categoria y retorna el producto seleccionado
function mostrarProductos(categoria)
{  
    let productoSeleccionado="Seleccione el producto por número de ID de " + categoria + ":";
    for (let i = 0; i < productos.length; i++)
    {
        if(productos[i].categoria == categoria)
            productoSeleccionado += "\n" + productos[i].id + "-" +  productos[i].nombre;
       
    }
   let seleccion=prompt(productoSeleccionado);
   return productos[seleccion-1];
   
};

//función que retorna el detalle de los productos
function mostrarDetalleDeProducto(producto){
    let detalleProducto = "\nDetalle de Producto: " + producto.categoria +  
    "\nProcucto: " + producto.nombre + "\nMarca: " + producto.marca + "\nPrecio: " + producto.precio +  "\nDescripción: " + producto.observacion;
return detalleProducto;

};

//función para agregar productos al carrito de compras
function agregarProductosAlCarrito(producto){

    let condicion=  prompt("Desea agregar"  + producto.nombre + " al carrito de compras?\n Indique por favor si o no");
    if(condicion=="si"){
        if(mostrarStock(producto)>=1){
            carritoCompras.push(producto);
            actualizarStock(producto);
            alert("Se seleccionó el producto:  " + producto.nombre);
        
        }else
        {
            alert("El producto seleccionado no se encuentra en stock");
    }
   
}else{

    alert("No se seleccionó ningún producto \n Se canceló la compra");
    
}

};

//función que retorna si un producto esta en stock
function mostrarStock(producto){
    return producto.stock;
};

//función para actualizar el stock de un producto
function actualizarStock(producto){
    producto.stock = (mostrarStock(producto) - 1);
    console.log("El stock del producto: " + producto.nombre + "es: " + mostrarStock(producto));
};

//función que muestra el detalle de la compra realizada
function mostrarDetalleDeCompra(producto){
    alert("Detalle de compra realizada: \n"  + 
    "Producto: " + producto.nombre  + "\nMarca: " + producto.marca + "\nPrecio: $ " + producto.precio);
};

//función para calcular el monto total de la compra
function sumaMontoTotal(){
    let sumaTotal=0;

    for (const item of carritoCompras){
        sumaTotal+=item.precio
    }
    return sumaTotal;
};

//función para sumar el descuento de los productos
function sumaDescuentoTotal(){
    let sumaDescuento=0;
    for(const item2 of carritoCompras){
        if(item2.descuento==true){
            sumaDescuento+=descuento;
    
        }
    }
    return sumaDescuento;
};

//función que retorna el precio de la compra sin descuento, la suma de los descuentos por producto (si los productos seleccionados tienen descuento=true) y el total de la compra (restando los descuentos)
function mostrarCarrito(){
    let detalleCompra="";
    for(let i =0 ; i< carritoCompras.length; i ++){
        detalleCompra+= "\n Producto: " + carritoCompras[i].nombre + " Valor: $" + carritoCompras[i].precio;
    }
    detalleCompra += "\n Total compra sin descuento: $" + sumaMontoTotal() +
    "\n Total descuentos: $ " + sumaDescuentoTotal() +
    "\n Total compra: $ " + (sumaMontoTotal() - sumaDescuentoTotal()); 
    return detalleCompra;
 
};

//función para vaciar carrito de compras
function vaciarCarrito(){
    carritoCompras=[];
};











