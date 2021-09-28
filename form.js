function checkNombre(){
    var nombre = document.getElementById("nombre").value;
    //Campo nombre
    if(nombre==""){
     alert("El campo nombre es requerido");
      return false;
    }else if (nombre.length < 4 || nombre.length > 30){
     alert("El campo nombre debe ser mayor a 4 y menor que 30");
     return false;
    }else if (!(/[A-Za-z]+/g.test(nombre))){
     alert("Solo es permitido ingresar letras");
     return false;
    }else{
     return true;
    }
}
function checkCorreo() {
    var correo = document.getElementById('correo').value;
    if (correo == ""){
      alert('Ingrese correo');
      return false;
    }
    else if (!(/\w+@\w+\.+[a-z]/.test(correo))) {
      alert('El correo no es válido');
      return false;
    }
    else {
    return true;
    }
}
function checkTelefono(){
    const telefono = document.getElementById('telefono');
    //validar que sea de 7 digitos
    
    //Cuando el campo está vacío
    if(telefono.value==""){
        alert("El campo Teléfono es obligatorio");
        return false;
    }
    //Cuando el campo contiene letras
    if(isNaN(telefono.value)){
        alert("Por favor ingrese únicamente números");
        return false;
    }
    //Cuando el campo es diferente al patrón
    var patron_tel = /^\d{7}$/;
    if(!patron_tel.test(telefono.value)){
        alert("No es un número válido");
        return false;
    }
    else{
        return true;
    }
}
function checkDir(){
    const direccion = document.getElementById('direccion');
    //Cuando el campo está vacío
    var direccion_completa = direccion.value;
    if(direccion.value==""){
        alert("El campo 'Dirección' es obligatorio");
        return false;
    }
    if(direccion_completa.length>"50"){
        alert("La dirección no puede ser mayor a 50 caracteres");
        return false;
    }
    var patron_dir = /^[a-zA-Z\s0-9\s#-]*$/;
    if(!patron_dir.test(direccion.value)){
        alert("Dirección inválida");
        return false;
    }
    else{
        return true;
    }
}
module.exports = {checkDir, checkCorreo, checkTelefono, checkNombre};