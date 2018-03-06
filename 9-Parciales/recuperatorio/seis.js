function Mostrar()
{
    var peso;
    var contContenedores=0;
    var primeravez=true;
    var pesoMax=0;
    var pesoMin=0;
    while(contContenedores<51){
        console.log(contContenedores)
        peso=prompt("Ingrese el peso de el contenedor");
        peso=parseInt(peso);
        while(peso<0)
        {
            peso=prompt("Ingrese un peso mayor a 0");
            peso=parseInt(peso);
        }
    if(primeravez){
        primeravez=false;
        pesoMax=peso;
        pesoMin=peso;
    }
    else
    {
        if(peso>pesoMax){
            pesoMax=peso;
        }
        else if(peso<pesoMin){
            pesoMin=peso;
        }
    } 
    contContenedores = contContenedores + 1;   

    }
    alert("El contendor mas pesado peso: " +pesoMax +"kg" + "Y el mas liviano peso: " +pesoMin +"kg");
    

}
