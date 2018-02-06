function Mostrar()
{
    var importe;
    var final;
    var impdes;
    importe=prompt("importe");
    parseInt=importe;
    final=(importe*25)/100;
    impdes=importe-final;
    document.getElementById("importeFinal").value=impdes;


  
}
