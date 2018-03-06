function Mostrar()
{
    var importe;
    var impFinal;
    var impDes;
    importe=prompt("Ingrese un importe: ");
    importe=parseInt(importe);
    impFinal=parseInt(importe)*0.25;
    impDes=parseInt(importe)-parseInt(impFinal)
    document.getElementById("importeFinal").value=impDes;



  
}
