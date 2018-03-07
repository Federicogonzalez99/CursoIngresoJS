//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ventas;
	var contDias=0;
	var impMayor=0;
	var impMenor=0;
	var primeravez=true;

	while(contDias<8){
		console.log(contDias);
		ventas=prompt("Ingrese el valor de la venta");
		ventas=parseInt(ventas);
		while(ventas<0){
			ventas=prompt("Error.Ingrese un valor mayore a 0");
			ventas=parseInt(ventas);
		}
		if(primeravez){
			primeravez=false
			impMayor=ventas;
			impMenor=ventas;
		}
		else{
			if(ventas>impMayor){
				impMayor=ventas;
			}
			else if(ventas<impMenor){
				impMenor=ventas;
			}
		}
		contDias = contDias + 1;
	}
	alert("El importe mayor fue: " +impMayor +" y el importe menor fue: " +impMenor);
	



	
}

