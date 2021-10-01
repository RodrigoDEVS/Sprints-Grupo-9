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
/*registros.sort((a, b) => {
    if (a.nombre > b.nombre) return 1;
    if (a.nombre < b.nombre) return -1;
    
    return 0;
});  
console.log(registros);
return registros;*/
function filtrarCorreo(){
    registros.filter(function(filtro){
        return filtro.correo;
    })
    console.log(registros);
    return registros;
}
module.exports={registros, agregarRegistro, ordenarArreglo, filtrarCorreo};