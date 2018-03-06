function Mostrar()
{
    var nota;
    var mayornota;
    var menornota;
    var primeranota=true;
    var acumNota=0;
    var contAlumn=0;
    var contV=0;
    while(contAlumn<=100)
    {
        console.log(contAlumn);
        nota=prompt("Ingrese una nota: ");
        nota=parseInt(nota);
        while(nota<=0||nota>10){
            nota=prompt("Ingrese una nota mayor a 0 y menor a 10. ");
            nota=parseInt(nota);
        }
        sexo=prompt("Ingrese un sexo (f o m)");
        while(sexo!="f" && sexo!="m")
        {
            sexo=prompt("Incorrecto. Ingrese f o m");
        }
        if(nota>=6 && sexo=="m")
        {
            contV= contV + 1 
        }
        if(primeranota)
        {
            primeranota=false;
            menornota=nota;
        }
        else if(nota<=menornota)
        {
            menornota=nota;
        }
        acumNota= acumNota + nota;
        contAlumn= contAlumn + 1;
        alert("El promedio de las notas totales es: "  + acumNota/contAlumn)
        alert("La menor nota fue " + menornota)
        alert("La cantidad de varones con nota mayor o igual a 6 es " + contV)
    }

}
