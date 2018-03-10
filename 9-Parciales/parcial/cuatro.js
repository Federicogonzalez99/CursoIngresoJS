function Mostrar()
{
    var numero1=prompt("Ingrese el primer numero:");
    var numero2=prompt("Ingrese el segundo numero:");
    var multiplicar;
    var resta;
    var suma;
    var mensaje;
    if(numero1==numero2)
    {
        
        multiplicar=parseInt(numero1)*parseInt(numero2);
        mensaje=multiplicar
        
    }
    else 
    {
        if(numero1>numero2){
        
        resta=parseInt(numero1)-parseInt(numero2)
        mensaje=resta;
        
    }   
    
   
        
        

    
    alert(mensaje)

}
