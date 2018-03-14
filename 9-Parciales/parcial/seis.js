function Mostrar()
{
    var importe;
    var mayorimp;
    var minimp;
    var primerimp=true
    var contdias=0

    while(contdias<=24)
    {
        console.log(contdias)
        importe=prompt("Ingrese un importe:");
        importe=parseInt(importe);
        while(importe<0||isNaN(importe))
        {
            importe=prompt("Ingrese un importe mayor a 0");
            importe=parseInt(importe);
        }
        if (primerimp)
        {
            primerimp=false;
            mayorimp=importe;
            minimp=importe;
        }
        else
        {
            if(importe<=minimp)
            {
                
                minimp=importe;
                nombremin=nombre;
            }
            else if(importe>mayorimp)
            {
                
                mayorimp=importe;
                mayornombre=nombre;
            }
        }
        contdias=contdias + 1
        //if(numero%2==0 && !=0){
        //contnumeropar=contnumeropar+1
        //}else{
        // if(numero!=0)    
        // contnumeroimpar=contnumeroimpar+1
        //}
        

    }
    alert("El mayor importe fue"  +mayorimp  +" y el menor importe fue " +minimp);

}
