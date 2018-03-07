//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroP;
	var contNumPares=0;
	var contNumeros=0;
	var acumNumeros=0;
	var numeroMax=0;
	var numeroMin=0;
	var primeravez=true;
	
	numeroP=prompt("Ingrese un numero positivo o precione cancelar");
	while(numeroP!=null){
		while(numeroP<0&&numeroP!=null){
		numeroP=prompt("ERROR. Ingrese un numero mayor a 0");
		}
		numeroP=parseInt(numeroP);
		if(numeroP%2==0){
			contNumPares=contNumPares+1
		}
		if(primeravez){
			primeravez=false;
			numeroMax=numeroP;
			numeroMin=numeroP;
		}
		else if (numeroP>numeroMax){
			numeroMax=numeroP;
		}
		else if (numeroP<numeroMin){
			numeroMin=numeroP
		}
		contNumeros=contNumeros+1;
		acumNumeros=acumNumeros+numeroP;
		numeroP=prompt("Ingrese un numero positivo o precione cancelar");
	}
	document.write("La cantidad de numeros pares es: " + contNumPares);
	document.write("El promedio de todos los numeros ingresados es: " + acumNumeros/contNumeros);
	document.write("La suma de todos los numeros es: " + acumNumeros);
	document.write("El numero maximo es: " + numeroMax +" y el numero minimo es: " + numeroMin)


	
	
}

