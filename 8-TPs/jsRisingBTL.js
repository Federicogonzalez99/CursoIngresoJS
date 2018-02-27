/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var ecivil;
    var sueldo=8000;
    var legajo;
    var nacionalidad;
    var sueldomaxnac;
     
    edad=prompt("Ingrese su edad");
    if (edad>=18&&edad<=90)
    {
         
        while (edad<18||edad>90||isNaN(edad))
        {
            edad=prompt("Error.Ingrese una edad entre 18 y 90 años")
            edad=parseInt(edad) 
        }
        
    }
    
    sexo=prompt("Ingrese su sexo. “M” para masculino y “F” para femenino");
    
    switch (sexo) {
        case "M":
                sexo="Masculino"
                break;
        case "F":
                sexo="Femenino"
                break;
        case "m":
               sexo="Masculino"
               break;
        case "f":
               sexo="Femenino"
               break;                
                
    }
    
    ecivil=prompt("Ingrese su estado Civil.1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
    switch(ecivil)
    {
        case "1":
              ecivil="Soltero"
              break;

        case "2":
              ecivil="Casado"
              break;
        case "3":
              ecivil="Divorciado"
              break;
        case "4":
              ecivil="Viudos"
              break;
    }                        
          
    sueldo=prompt("Ingrese su sueldo");
    if(sueldo>=8000)
    {
         while(sueldo<8000||isNaN(sueldo))
        {
            sueldo=prompt("Error.El sueldo debe ser mayor a $8000")
            sueldo=parseInt(sueldo)
        }
    }

    legajo=prompt("Ingrese su legajo");
    if(legajo>=1000&&legajo<=9999)
    {
       while(isNaN(legajo))
       {
           legajo=prompt("Error.Ingrese su legajo nuevamente")
           legajo=parseInt(legajo)
       }
       
       
    }
    
    nacionalidad=prompt("Ingrese su nacionalidad. “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.")
    switch(nacionalidad)
    {
        case "A":
                nacionalidad="Argentino/a"
                break;
        case "E":
                nacionalidad="Extranjero/a"
                break;
        case "N":
                nacionalidad="Nacionalizado/a"
                break;
        case "a":
                nacionalidad="Argentitno/a"
                break;
        case "e":
                nacionalidad="Extranjero/a"
                break;

        case "n":
                nacionalidad="Nacionalizado/a"
                         
    }
    document.getElementById("Edad").value=edad;
    document.getElementById("Sexo").value=sexo;
    document.getElementById("EstadoCivil").value=ecivil;
    document.getElementById("Sueldo").value=sueldo;
    document.getElementById("Legajo").value=legajo;
    document.getElementById("Nacionalidad").value=nacionalidad;
    if(nacionalidad=="N")
    {
        if(sueldo>sueldomaxnac)
        {
            sueldomaxnac=sueldo;
            console.log(+sueldo)
        }
    }

    
 
    
}
