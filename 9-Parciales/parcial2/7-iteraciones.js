//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var acum=0,cont=0,contv=0;
	var nota;
	var num;
	var sexo;
	nota=prompt("Ingrese las notas");
	while(nota<0||nota>10)
	{
		num=prompt("Error.Ingrese las notas");
		num=parseInt(num);
	}
	while(sexo!="F"&&sexo!="M")
	{
		sexo=prompt("Ingrese el sexo nuevamente");

	}
	cont++
	acum+=nota;
	if(cont==1)
	{
		min=nota
	}
	else
	{
		if(nota<min)
		{
			min=nota;
		}
	}
	if(sexo=="M"&&nota>6)
	{
		contv++;
	}
	console.log ("contador de varones" +contv)
	console.log("nota"+nota)
	console.log("baja"+min)
	
}

