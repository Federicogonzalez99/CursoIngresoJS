function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	numero=prompt("Ingrese 5 numeros");

	while(contador<5)
	{
		contador++;
	    numero=parseInt(numero);
		acumulador+=numero;
	}
	acumulador/contador




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN