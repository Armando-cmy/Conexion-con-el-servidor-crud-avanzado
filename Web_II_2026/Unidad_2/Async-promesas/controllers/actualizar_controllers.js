import { clientService } from "../service/client-service.js";
const formulario=document.querySelector('[data-form]');
const obInfo=async()=>{
    const url= new URL(window.location);
    const id=url.searchParams.get("id");
    if(id==null){
        window.location.href="/screeens/error.html"
    }
    document.querySelector('[data-nombre]').value=cliente.nombre;
    document.querySelector('[data-email]').value=cliente.email;
    try{
        const perfil=await clientService.detalleCliente(id);
        document.querySelector('[data-nombre]').value=perfil.nombre;
        document.querySelector('[data-email]').value=perfil.email;
        if(perfil.nombre && perfil.email){
            nombre.value=perfil.nombre;
            email.value=perfil.email;
        }else{
            throw new Error();
        }
    }catch(error){
        window.location.href="/screeens/error.html"
    }
};
obInfo();

formulario.addEventListener("submit",async(evento)=>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id =url.searchParams.get("id");
    const nombre=document.querySelector('[data-nombre]').value;
    const email=document.querySelector('[data-email]').value;
    clientService.acutalizarCliente(nombre,email,id).then(()=>{
        window.location.href="/screens/edicion_concluida.html"
    });
})