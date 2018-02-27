//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1;
	var numero2;
	var multiplicacion;
	var resta;
	var suma;
	
	numero1=prompt("Ingrese un numero");
	numero2=prompt("Ingrese otro numero");
	if(numero1==numero2)
	{
		numero1=parseInt(numero1);
		numero2=parseInt(numero2);
		multiplicacion=parseInt(numero1)*parseInt(numero2);
		document.write(+multiplicacion);
	}
	
		else if(numero1>numero2)
		{
		numero1=parseInt(numero1);
		numero2=parseInt(numero2);
		resta=parseInt(numero1)-parseInt(numero2);
		document.write(+resta);
		}
		else if(numero2>numero1)
		{
			numero2=parseInt(numero2);
			numero1=parseInt(numero1);
			suma=parseInt(numero2)+parseInt(numero1);
			document.write(+suma);

		}
		
	}
	

	






	

