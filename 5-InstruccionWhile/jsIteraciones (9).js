function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var min=0;
	var max=0;
	var num;
	var primera=true
	var respuesta='si' , msj;
	var msjOk="Ingre un numero o cancelar para salir";
	var msjError="Error. Ingrese un numero";
	msj=msjOk;
    while(true)
	{
		//pido numero
		rta=prompt(msj);
		//seteo msj
		msj=msjOk;
		//verifico boton cancelar
		if(rta==null)break;


		rta=parseInt(rta);
		//verifico que sea numero
		if(isNaN(rta))
		{
			msj=msjError
			continue;		
		}

		
	
	if(primera)
	{
		primera=false;
		max=num;
		mix=num;
	}
	else
	{

	}

	while(respuesta!='no')
	{
		
	
	}
	
	}




}//FIN DE LA FUNCIÓN