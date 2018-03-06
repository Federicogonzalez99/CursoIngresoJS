function Mostrar()
{
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
