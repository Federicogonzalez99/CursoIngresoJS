function Mostrar()
{
    var acumEdad=0;
    var contPersonas=0;
    var contVarones=0;
    var edadMin=0
    var edad;
    var sexo;
    var primeravez=true
    
    while(contPersonas<101){
        console.log(contPersonas)
        edad=prompt("Ingrese la edad");
        edad=parseInt(edad);
        while(edad<0||edad>100||isNaN(edad)){
            edad=prompt("Ingrese una edad entre 1 y 100");
            edad=parseInt(edad);
        }
    sexo=prompt("Ingrese sexo (f o m)")
    while(sexo!="f" && sexo!="m"){
        sexo=prompt("Error. Ingrese sexo (f o m)");
    }
    if(primeravez){
        primeravez=false;
        edadMin=edad;
    }
    else if(edad<=edadMin){
        edadMin=edad;
    }
    if(edad>=20 && sexo == "m"){
        contVarones = contVarones + 1;
    }
    acumEdad= acumEdad + edad;
    contPersonas= contPersonas + 1;    
    }
    alert("El promedio de la edad es " + acumEdad/contPersonas)
    alert("La edad mas baja es " + edadMin);
    alert("Cantidad de varones con su edad mayor o igual a 20: " + contVarones);


}
