const saludar=()=>{
    console.log("funcion felcha" );

};
saludar();
const duplicar= numero=>{
    return numero*2;
};
console.log(duplicar(5));

const suma =(a,b)=>{
    return a+b;
};
console.log(suma(2,3));
/////////
const crearUsuario=(nombre, edad)=>({nombre:nombre,edad:edad});
console.log(crearUsuario("Juan",28));
/////////
const numeros=[3,2,4,5,6,20]
//funcion para filtrar 

const  procesarNumeros=(numero)=>{
    return numeros
        .filter(numero=> 10)
        .map(numero=>numero*2)
};

const resultado= procesarNumeros(numero);
console.log(resultado);

const usuarios=[
    {nombre:"Juan",edad:23},
    {nombre:"luis",edad: 23},
    {nombre:"Maria",edad:25},
    {mombre:"Santy",edad:90},
    {nombre:"Felipe",edad:43},
];
const procesarUsuarios=(usuarios)=>{
    return usuarios
    .filter(usuarios=> usuarios.edad>18)// filtramos que la edad sea mayores de 18
    .map(usuarios=>{ // transformamos los datos
        const{nombre}=usuarios;//restrucutrar  para obtener  el nombre
        return nombre, length>5 ? nombre.toUpperCase() :nombre.toLowerCase();
    });
};
const result2=procesarUsuarios(usuarios);
console.log(result2);