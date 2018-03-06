function Mostrar()
{
    var numero1=prompt("Ingrese el primer numero:");
    var numero2=prompt("Ingrese el segundo numero:");
    var multiplicar;
    var resta;
    var suma;
    if(numero1==numero2)
    {
        numero1=parseInt(numero1);
        numero2=parseInt(numero2);
        multiplicar=parseInt(numero1)*parseInt(numero2);
        document.write(+multiplicar);
    }
    else if(numero1>numero2)
    {
        numero1=parseInt(numero1);
        numero2=parseInt(numero2);
        resta=parseInt(numero1)-parseInt(numero2)
        document.write(+resta)
    }   
    else
    {
        numero1=parseInt(numero1);
        numero2=parseInt(numero2);
        suma=parseInt(numero1)+parseInt(numero2)
        document.write(+suma)

    }


}
