function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si" , msj;
	var msjOk= "Ingrese un numero o cancelar para salir";
	var msjError= "Error: El valor ingresado tiene que ser un numero";
	msj=msjOk;
	while(true)
	{
    //pido numero
	rta=prompt(msj);
	//seteo msj
	msj=msjOk;
	//Verifico boton cancelar
	if(rta==null) break;

	rta=parseInt(rta);
	//verifico que sea numero
	if(isNaN(rta))
	{

		msj=msjError;
		continue;

	}
    //Hago las operaciones
	acumulador+=rta;
	contador++; 
}
    

	
	

	

	
	
		
	
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN