function agregarRegistro(){
    var nombre = document.getElementById("nombre").value;
    var genero = document.formulario.Genero.value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var correo = document.getElementById("correo").value;
    var pass = document.getElementById("pass").value;
    console.log("Nombre: "+nombre+" Genero: "+genero+" Telefono: "+telefono+" Direccion: "+direccion+" Correo: "+correo+" Password: "+pass);
}