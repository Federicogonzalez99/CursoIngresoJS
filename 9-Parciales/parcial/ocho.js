function Mostrar()
{
    var numero;
    var contpares=0;
    var acumNum=0;
    var contNum=0;
    var numMax=0;
    var numMin=0;
    var primerNum=true;
    
    numero=prompt("Ingrese un numero positivo o precione cancelar");
    while(numero!=null){
        while(numero<0 && numero!=null){
            numero=prompt("Ingrese un numero mayor a 0 o precione cancelar");
            numero=parseInt(numero);
        }
        numero=parseInt(numero);
        if(numero%2==0){
            contpares= contpares + 1;
        }
        if(primerNum=true)
        {
            primerNum = false
            numMax = numero;
            numMin = numero;
        }
        else if (numero > numMax)
        {
            numMax = numero;
        }
        else if (numero < numMin)
        {
            numMin = numero;
        }
        acumNum = acumNum + numero;
        contNum = contNum + 1;
        numero=prompt("Ingrese un numero positivo o precione cancelar ")
    }
    document.write("La cantidad de numeros pares es: " + contpares);

    document.write("El promedio de todos los numeros ingresados es: " +acumNum/contNum); 

    document.write("La suma de todos los numeros es: " +acumNum);
    
    document.write("El numero maximo es: " + numMax + "Y el numero minimo es: " +numMin);


}
