//alert("altonella es la michi mas bonita del mundo");
//canvas
var tap = document.getElementById("Tablero");
var lienzo = tap.getContext("2d");
//boton limpiar
var clean = document.getElementById("limpieza")
clean.addEventListener("click", limpiar)
//boton dibujar
var draw = document.getElementById("dibujar")
draw.addEventListener("click", startDraw)
//solisitar cantidad de lineas 
var lineas = document.getElementById("cantidadlineas");

dibujarLinea("Black", 0, 0, 300, 0);
dibujarLinea("Black", 0, 0, 0, 300);
dibujarLinea("Black", 300, 0, 300, 300);
dibujarLinea("Black", 0, 300, 300, 300);

function dibujarLinea(color, xi, yi, xf, yf)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xi, yi);
lienzo.lineTo(xf, yf);
lienzo.stroke();
lienzo.closePath();
}

function startDraw()
{
    var lin = lineas.value
    var espacio = 300/lin 
    var color1 = document.getElementById("color1").value
    var color2 = document.getElementById("color2").value
    var color3 = document.getElementById("color3").value
    var color4 = document.getElementById("color4").value


for(l = 0; l < lin; l++) 
{
    dibujarLinea(color2, espacio*l, 0, 300, espacio*(l+1));
    dibujarLinea(color3, 0, espacio*l, espacio*(l+1), 300);
    dibujarLinea(color4, espacio*l, 300 ,300, 300-espacio*(l+1));
    dibujarLinea(color1, 300-espacio*l, -l*0 ,0 , espacio*(l+1));
}

}

function limpiar()
{
    lienzo.clearRect(1, 1, 298, 298)
}