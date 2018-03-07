//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var preciof;
	importe=prompt("Ingrese un importe");
	importe=parseInt(importe);
	preciof=importe*1.21;
	document.getElementById("importe").value=preciof;

	
}

