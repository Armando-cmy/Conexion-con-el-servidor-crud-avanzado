const datos=[
    {
        pais: Bolivia,
        precio:200
        
    },
    {
        pais: Ecuador,
        precio:500
    },
    {
        pais:Brasil,
        precio:900
    },
    {
        pais: Venezuela,
        precio:100
    },
    {
        pais:Paraguay,
        precio:200
    },
];
const presupuesto=300;
let i=0;

let paisSelecionado=``;
do{
    if(datos [i].precio<=presupuesto){
        paisSelecionado=datos[i].pais;
    }
}while(i<datos.length && paisSelecionado==``)
    if (paisSelecionado==``)
        console.log(`no existe pasajes disponibles`)
    else
        console.log(`puedes comprar pasaje`)
    