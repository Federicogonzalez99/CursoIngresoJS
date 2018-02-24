function Mostrar()
{
    var rep=prompt("Ingrese un numero");
    var contpares=0;
    for(i=1;i<rep;i++)
    {
        if(i%2==0)
        {
            console.log(i);
            contpares++;
            console.log("La cantidad de par es" +contpares);
        }
        
        while(isNaN(rep))
        {
            
            rep=prompt("Error.Ingrese un numero")
            rep=parseInt(rep)
        }
          
    
        
    }





}//FIN DE LA FUNCIÓN