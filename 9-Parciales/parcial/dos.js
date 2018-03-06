function Mostrar()
{
    var importe;
    var final;
    importe=prompt("Ingrese el importe del producto: ");
    importe=parseInt(importe);
    final=importe*1.21
    document.getElementById("importeFinal").value=final;
  
}
