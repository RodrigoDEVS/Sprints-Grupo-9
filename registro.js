var registros =[];
function agregarRegistro(){
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    
    let usuario ={
        nombre: nombre,
        telefono: telefono,
        direccion: direccion,
        correo: correo,
        contrasena: contrasena
    }
    registros.push(usuario);
    console.log(registros);
}
function ordenarArreglo(){
    registros.sort(function(a, b) {
        if (a.nombre > b.nombre){
            return 1;
        }
        if (a.nombre < b.nombre){
            return -1;
        }
        return 0;
    });  
    console.log(registros);
    return registros;
}
function filtrarCorreo(arreglo){
    let filtrando = registros.filter(function(filtro) {
        if (/^[\w.\-]{0,25}@(gmail)\.com$/.test(filtro.correo)){
            return true;
        }else{
            return false;
        }
    });
    console.log(filtrando);
    return filtrando;
}
module.exports={registros, agregarRegistro, ordenarArreglo, filtrarCorreo};