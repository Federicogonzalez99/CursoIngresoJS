//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var notas;
	var sexo;
	var contAlumnos=0;
	var acumNota=0;
	var contVarones=0;
	var notaMin=0;
	var primeravez=true		

	while(contAlumnos<7){
		console.log(contAlumnos);
		 notas=prompt("Ingrese una nota");
		 notas=parseInt(notas);
		while(notas<=0||notas>10){
			notas=prompt("Error. Ingrese una nota entre 1 y 10");
			notas=parseInt(notas);
		}
	 sexo=prompt("Ingrese el sexo (f o m)");
	 while(sexo!="f" && sexo!="m"){
		sexo=prompt("Sexo incorrecto. Ingrese (f o m)");
	 }
	 if(notas>=6 && sexo=="m"){
		contVarones=contVarones+1;
	 } 
	 if(primeravez){
		 primeravez=false;
		 notaMin=notas;
	 }
	 else if(notas<notaMin){
		 notaMin=notas;
	 }
	 contAlumnos= contAlumnos + 1;
	 acumNota=acumNota+notas;
	}
	alert("El promedio de las notas totales es de: " +acumNota/contAlumnos);
	alert("La nota mas baja es: " +notaMin);
	alert("Los cantidad de varones que su nota fue mayor o igual a 6 fueron: " +contVarones)
	
}

