function Mostrar()
{
    //si es de noche y son pasada las 24 debo sumarle el msj, me voy a un bar
    //si es de mañana con una hora >11 debemos sumar el msj, "a desayunar"
    //ingresar horas del dia (0-24)
    //12-20 mostrar msj "tarde de mate"
    //20-6  ""      "" "es de noche"
    //6-<12 "       "" "mañana"
    var hora=prompt("Ingrese una hora:");
    switch(hora){
        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
        case "17":
        case "18":
        case "19":
        case "20":
                alert("Tarde de mate!!!");
                break;
        case "21":
        case "22":
        case "23":
        case "24":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
                alert("Es de noche!!!");
                break;
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
                alert("Es de mañana!!!");
                break;                

    }
    
   
    var dia=prompt("Ingrese un dia de la semana: ");
    switch(dia)
    {
        case "Sabado":
        case "Domingo": 
                    alert("Es fin de semana!!!")
                    break;
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
                        alert("A trabajar!!!")
                        break;
        default:
                alert("No es un dia de la semana")                            
        
    }

}
