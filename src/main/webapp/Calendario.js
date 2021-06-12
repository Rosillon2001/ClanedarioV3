/**
 * 
 */
var username=document.getElementById('username');
var userdiv=document.getElementById('userCont');
var usertxt=username.innerHTML;
var div=document.createElement('div');
div.setAttribute("id", "NombreUsuario");
div.textContent=`${usertxt}`;
userdiv.appendChild(div);


//-----------------------------------------------------RELOJ----------------------------------------------------------
//funcion de creacion del reloj
function Reloj(){
var tiempo=document.getElementById('hora');
var fecha=document.getElementById('date');
//dias y meses
let dias=['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
let meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

var f=new Date();
let hora=f.getHours();
let min=f.getMinutes();
let sec=f.getSeconds();
let dia=f.getDate();
let mes=f.getMonth();
let ano=f.getFullYear();
let diasemana=f.getDay();

let m=meses[mes];
let d=dias[diasemana-1];
let hr=(hora>12) ? hora-12: hora;
var ampm;
if(hora>12){
	ampm='PM';
}
else{
	ampm='AM';
}
if(hr==0){
	hr=12;
}
if(min<10){
	min='0'+min;
}
if(sec<10){
	sec='0'+sec;
}

tiempo.textContent=`${hr}:${min}:${sec} ${ampm}`;
fecha.textContent=`${d}, ${dia} de ${m} del ${ano} `;
}
setInterval(Reloj, 1000);

