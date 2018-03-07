function Mostrar()
{
    var numero;
    var contNum=0;
    var contNumPares=0;
    var acumNumeros=0;
    var numMax=0;
    var numMin=0;
    var primeravez=true;

    numero=prompt("Ingrese un numero positivo o precione cancelar");
    while(numero!=null)
    {
        numero=parseInt(numero);
        while(numero<0 && numero !=null)
        {
            numero=prompt("Error.Ingrese un numero mayor a 0 o precione cancelar");
            numero=parseInt(numero);
        }
        if(numero%2 == 0)
        {
            contNumPares= contNumPares + 1;            
        }
        if(primeravez)
        {
            primeravez=false;
            numMax=numero;
            numMin=numero;
        }
        else if(numero>numMax){           
                numMax=numero;
            }
        else if(numero<numMin){
            numMin=numero;
        }    
       acumNumeros=acumNumeros+numero;
       contNum= contNum + 1  
       numero=prompt("Ingrese un numero positivo o precione cancelar")

    }
    alert("La cantidad de numeros pares es: " + contNumPares);
    alert("El promedio de todos los numeros ingresados es: " + acumNumeros/contNum);
    alert("La suma de todos los numeros es: " + acumNumeros);
    alert("El numero maximo es: " + numMax + " y el numero minimo es: " + numMin);


    
        
    


}
