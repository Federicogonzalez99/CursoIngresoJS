function Mostrar()
{
    var precio;
    var porcentaje;
    var descuento;
    var preciodescontado;
    var precioMasIva;
    var iva;
    precio=document.getElementById("alrgo").value;
    porcentaje=document.getElementById("ancho").value;
    precio=parseInt(precio);
    porcentaje=parseInt(porcentaje);   
    descuento=(precio*2+porcentaje*2);
    alert("El periemtro es: " +descuento);
    //perimetro=largo*2+ancho*2

    precio=document.getElementById("alrgo").value;
    precio=parseInt(precio);
    porcentaje=document.getElementById("ancho").value;
    porcentaje=parseInt(porcentaje);
    descuento=parseInt(precio)*parseInt(porcentaje)/100;
    preciodescontado=parseInt(precio)-parseInt(descuento);
    alert(+preciodescontado);
    //sacar un descuento que ingresa el usuario
    iva=parseInt(preciodescontado)*0.21;
    precioMasIva=parseInt(preciodescontado)+iva;
    alert(+precioMasIva);
    //sumar el iva a ese preciodescontado
    
    
    //sacar porecentaje





}
