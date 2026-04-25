//-----CON SUPABASE----//
const URL_SUPABASE='https://bfmmzrgtphzkfjaoqtta.supabase.co';
const SUPABASE_KEY='sb_publishable_H7W4rKGnMKQBWwUd6uB2pg_ChCCBhot';
const table = 'clientes';
const API_URL = `${URL_SUPABASE}/rest/v1/${table}`;


const URL_SUPABASE_MASCOTAS ='https://bfmmzrgtphzkfjaoqtta.supabase.co';
const URL_SUPABASE_KEY_MASCOTAS ='sb_publishable_H7W4rKGnMKQBWwUd6uB2pg_ChCCBhot';
const table_mascotas = 'mascotas';
const API_URL_=`${URL_SUPABASE_MASCOTAS}/rest/v1/${table_mascotas}`;

const URL_SUPABASE_PRODUCTOS ='https://bfmmzrgtphzkfjaoqtta.supabase.co';
const URL_SUPABASE_KEY_PRODUCTOS ='sb_publishable_H7W4rKGnMKQBWwUd6uB2pg_ChCCBhot';
const table_productos = 'productos';
const API_URL_PRODUCTOS=`${URL_SUPABASE_PRODUCTOS}/rest/v1/${table_productos}`;

const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
};

const request=async(url,option={})=>{
    const res=await fetch(url,{headers:HEADERS,...option});
    const text=await res.text();
    const data=text?JSON.parse(text):null;

    if(!res.ok){
    const mensaje =data?.message?? data?.error?? text??'Error';
    throw new Error(mensaje);
    }
    return data;
}


const listar_clientes=()=>{
    return request(`${API_URL}?select=id,nombre,email`);
}
const cliente=(id)=>{
    return request(`${API_URL}?id=eq.${id}&select=id,nombre,email`).then(data => data?.[0]);
}
const crearCliente=(nombre,email)=>{
    return request(API_URL,{
        method:'POST',
        body:JSON.stringify({nombre,email})
    }).then(data=>data?.[0]);
}
const actualizar_cliente=(id,nombre,email)=>{
    return request(`${API_URL}?id=eq.${id}`,{
        method:'PATCH',
        body:JSON.stringify({nombre,email})
    }).then(data=>data?.[0]?? Promise.reject(new Error('no se pudo actualizar')));
}
const eliminarCliente=(id)=>{
    return request(`${API_URL}?id=eq.${id}`,{
        method:'DELETE'
    }).then(data=>data?.[0]?? Promise.reject(new Error('no se pudo eliminar')));
}


const listar_mascotas=()=>{
    return request(`${API_URL_MASCOTAS}?select=*`);
}
const mascota=(id)=>{
    return request(`${API_URL_MASCOTAS}?id=eq.${id}&select=*`).then(data => data?.[0]);
}
const crearMascota=(nombre, tipo, cliente_id)=>{
    return request(API_URL_MASCOTAS,{
        method:'POST',
        body:JSON.stringify({nombre, tipo, cliente_id})
    }).then(data=>data?.[0]);
}
const actualizar_mascota=(id, nombre, tipo)=>{
    return request(`${API_URL_MASCOTAS}?id=eq.${id}`,{
        method:'PATCH',
        body:JSON.stringify({nombre, tipo})
    }).then(data=>data?.[0]);
}
const eliminarMascota=(id)=>{
    return request(`${API_URL_MASCOTAS}?id=eq.${id}`,{
        method:'DELETE'
    }).then(data=>data?.[0]);
}


const listar_productos=()=>{
    return request(`${API_URL_PRODUCTOS}?select=*`);
}
const producto=(id)=>{
    return request(`${API_URL_PRODUCTOS}?id=eq.${id}&select=*`).then(data => data?.[0]);
}
const crearProducto=(nombre, precio, stock)=>{
    return request(API_URL_PRODUCTOS,{
        method:'POST',
        body:JSON.stringify({nombre, precio, stock})
    }).then(data=>data?.[0]);
}
const actualizar_producto=(id, nombre, precio, stock)=>{
    return request(`${API_URL_PRODUCTOS}?id=eq.${id}`,{
        method:'PATCH',
        body:JSON.stringify({nombre, precio, stock})
    }).then(data=>data?.[0]);
}
const eliminarProducto=(id)=>{
    return request(`${API_URL_PRODUCTOS}?id=eq.${id}`,{
        method:'DELETE'
    }).then(data=>data?.[0]);
}

export const clienteService ={
    listar_clientes,
    crearCliente,
    actualizar_cliente,
    eliminarCliente,
    cliente,
    
    listar_mascotas,
    crearMascota,
    actualizar_mascota,
    eliminarMascota,
    mascota,
    listar_productos,
    crearProducto,
    actualizar_producto,
    eliminarProducto,
    producto
}