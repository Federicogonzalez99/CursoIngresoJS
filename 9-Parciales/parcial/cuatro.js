function Mostrar()
{
    var numero1=prompt("Ingrese el primer numero:");
    var numero2=prompt("Ingrese el segundo numero:");
    var mensaje;
    
    
    if(numero1==numero2)
    {
        mensaje= numero1+numero2;
    }
    else
    {
            numero1=parseInt(numero1);
            numero2=parseInt(numero2);
        if(numero1>numero2){
            mensaje=numero1-numero2;
        }
        else{
            mensaje=mensaje*2;
        }
    }  
    alert(mensaje);
    
    
    
}
