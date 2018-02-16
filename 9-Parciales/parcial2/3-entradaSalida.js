//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	ancho=document.getElementById("ancho").value;
	largo=document.getElementById("largo").value;
	parseInt=ancho;
	parseInt=largo;
	perimetro=(largo*2+ancho*2)*3;


	alert("Se necesitan: " +perimetro +"metros de alambre");
	
}

