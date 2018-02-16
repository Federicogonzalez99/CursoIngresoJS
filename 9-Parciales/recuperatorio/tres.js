function Mostrar()
{
    var precio1;
    var precio2;
    var precio3;
    var promedio;
    var suma;
    precio1=document.getElementById("precioUno").value;
    precio2=document.getElementById("precioDos").value;
    precio3=document.getElementById("precioTres").value;
    suma=parseInt(precio1)+parseInt(precio2)+parseInt(precio3);
    promedio=suma/3;
    alert("La suma de los precios es: " +suma +"Y el promedio de los mismos es: " +promedio);




}
