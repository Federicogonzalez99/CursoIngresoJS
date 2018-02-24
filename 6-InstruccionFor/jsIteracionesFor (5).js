function Mostrar()
{
    var num;
    for(;num!=9;)
    {
        num=prompt("Ingrese numero");
        num=parseInt(num);
        while(isNaN(num))
        {
            num=prompt("Error.Ingrese un numero")
            num=parseInt(num)
        }
    }




}//FIN DE LA FUNCIÓN