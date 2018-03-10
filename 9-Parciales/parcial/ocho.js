function Mostrar()
{
   var contador=0;
   var respuesta="continuar";
   var temperatura;
   var nombre;
   var superficie;
    while(respuesta!="no"){//inicio del while
        temperatura=prompt("Ingrese una temperatura: ");
        temperatura=parseInt(temperatura);
    while(temperatura<-100||temperatura>100||isNaN(temperatura)){
            temperatura=prompt("Error.Ingrese una temperatura: ");
            temperatura=parseInt(temperatura);
            }
    /*nombre=prompt("Ingrese nombre");
        while(! isNaN (nombre) ){
            nombre=prompt("Error.Ingrese nombre");
        }     
    superficie=prompt("Ingrese una superficie");
        while(superficie)
        
       








    respuesta=prompt("Ingrese no para salir");
    }//fin del while


}
