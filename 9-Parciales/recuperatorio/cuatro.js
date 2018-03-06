function Mostrar()
{
    var numero1;
    var numero2;
    var suma;
    numero1=prompt("Ingrese un numero");
    numero2=prompt("Ingrese el segundo numero");
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    suma=parseInt(numero1)+parseInt(numero2);
    if(suma > 0){
        document.write("positivo");
    }
    else if(suma<0){
        document.write("Negativo");
    }
    else{
        document.write("Cero");
    }
    
    

}
