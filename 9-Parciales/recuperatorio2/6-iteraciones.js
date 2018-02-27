//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	var contador=0
	var primera="si"
	var importemax
	var importemin

	while(contador>=6)
	{
		importe=prompt("Ingrese el importe")
		importe=parseInt(importe)
		contador++
	
	while(importe<=0) 
	{
		importe=prompt("Ingrese el importe")
	    importe=parseInt(importe)
		contador++
	}
	
	
		if(primera=="si")
		{
			primera="no"
			importemax=importe
			importemin=importe
		}
	

		
		if(importemax<importe)
		{
			importemax=importe
		}
		else if(importemin>importe)
		{
			importemin=importe
		}
	}
	
	alert("El importe mayor es " +importemax + " y el menor es " +importemin);
	
}

