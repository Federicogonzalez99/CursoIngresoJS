function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num;
	var msj="Ingrese un numero o cancelar para salir";
	var msjError="Error. Ingrese un numero";
	
	
	var respuesta='si';
	while(respuesta=="si")
	{
	//pido numero
	contador++;
	num=prompt(msj);
	num=parseInt(num);

	while(isNaN(num));
	{
		num=prompt("Error. Ingrese un numero");
		num=parseInt(num);
	}
	
	if(num>0)
	{
		positivo+=num;
	}
	else 
	{
		if(num!=0)
		negativo*=num;
		else
		contador--;
	}
	



	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN