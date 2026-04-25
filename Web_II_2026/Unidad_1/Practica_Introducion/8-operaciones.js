
//definicion de Array
const ciudades=new Array("Sucre","La Paz","Santa Cruz","Pando","Oruro");
console.log(ciudades);
//definir un array abreviada
const paises=["bolivia","ecuador","brasil","Venezuela","Italia", "Francia",];
let conteoCiudades=ciudades.length;
console.log(`el conteo total de la ciudades es${conteoCiudades}`);
//ejercicios con arrays
ciudades.shift();//elimina mi primer elemto
console.log(ciudades);
ciudades.pop();// elimina el ultimo elemento 
ciudades.log(ciudades);
console.log(paises.join("-"))//unificar los elementos en una cadena de caracteres
console.log(paises.sort());