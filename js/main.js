function validateForm() {
    // remueve todos los span antes de cada validacion!
    document.querySelectorAll(".form-signup span").forEach(function(e) {
        e.remove()
    });
    // validaciones en contenedores 
    var letras = /^[A-Za-z]*$/; /*/^[a-zA-Z ]*$/;/^[0-9]$/*/
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // datos desde formulario
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var email = document.getElementById("input-email").value;
    var password = document.getElementById("input-password").value;

    var selectorIndex = document.getElementById("selector").selectedIndex;
    //console.log(selectorIndex);
    var selectorOpts = document.getElementById("selector").options;
    //console.log(selectorOpts);
    var selectorfinal = selectorOpts[selectorIndex].value;

    var tw = document.getElementById("input-social").value;

    if (nombre == null || nombre.length == 0) {
        var contenedor = document.getElementsByClassName("input-box")[0];
        var res = document.createElement("span");
        var texto = document.createTextNode("Contesta todos los campos");
        contenedor.appendChild(res);
        res.appendChild(texto);
        console.log(nombre + " Esta vacio");
    } else if (!letras.test(nombre)) {
        var contenedor = document.getElementsByClassName("input-box")[0];
        var res = document.createElement("span");
        var texto = document.createTextNode("Ingresa solo letras");
        contenedor.appendChild(res);
        res.appendChild(texto);
        console.log(nombre + " Son números");
    } else if (nombre.substring(0, 1) !== nombre.substring(0, 1).toUpperCase()) {
        var contenedor = document.getElementsByClassName("input-box")[0];
        var res = document.createElement("span");
        var texto = document.createTextNode("ingresa una Mayuscula al principio");
        contenedor.appendChild(res);
        res.appendChild(texto);
        console.log(nombre + " Falta mayusculas inicial");
    } else {
        console.log(nombre + " Valido");
    }
    if (apellido == null || apellido.length == 0) {
        var contenedor = document.getElementsByClassName("input-box")[1];
        var res = document.createElement("span");
        var texto = document.createTextNode("Contesta todos los campos");
        contenedor.appendChild(res);
        res.appendChild(texto);
        console.log(apellido + " Esta vacio");
    } else if (!letras.test(apellido)) {
        var contenedor = document.getElementsByClassName("input-box")[1];
        var res = document.createElement("span");
        var texto = document.createTextNode("Ingresa solo letras");
        contenedor.appendChild(res);
        res.appendChild(texto);
        console.log(apellido + " Son números");
    } else if (apellido.substring(0, 1) !== apellido.substring(0, 1).toUpperCase()) {
        var contenedor = document.getElementsByClassName("input-box")[1];
        var res = document.createElement("span");
        var texto = document.createTextNode("ingresa una Mayuscula al principio");
        contenedor.appendChild(res);
        res.appendChild(texto);
        console.log(apellido + " Falta mayusculas inicial");
    } else {
        console.log(apellido + " Valido");
    }
    if (email == null || email.length == 0) {
        var contenedor = document.getElementsByClassName("input-box")[2];
        var res = document.createElement("span");
        var texto = document.createTextNode("Contesta todos los campos");
        contenedor.appendChild(res);
        res.appendChild(texto);
        console.log(email + " Esta vacio");
    } else if (!correo.test(email)) {
        var contenedor = document.getElementsByClassName("input-box")[2];
        var res = document.createElement("span");
        var texto = document.createTextNode("Ingresa un correo Valido");
        contenedor.appendChild(res);
        res.appendChild(texto);
        console.log(email + " agregar @");
    } else {
        console.log(email + " Valido");
    }
    if (password == null || password.length == 0) {
        var contenedor = document.getElementsByClassName("input-box")[3];
        var res = document.createElement("span");
        var texto = document.createTextNode("Contesta todos los campos");
        contenedor.appendChild(res);
        res.appendChild(texto);
        console.log(password + " Esta vacio");
    } else if (password < 6 || password == "password" || password == "123456" || password == "098754") {
        var contenedor = document.getElementsByClassName("input-box")[3];
        var res = document.createElement("span");
        var texto = document.createTextNode("Son 6 caracteres, No usar: 'pasword', '123456','098754'");
        contenedor.appendChild(res);
        res.appendChild(texto);
        console.log(password + " es una de las limitantes del ejercicio");
    } else {
        console.log(password + " Valido");
    }
    // validaciones no obligatorias 
    console.log(selectorfinal + " opción del Select");
    console.log(tw + " contenido input twitter");

    // limpia value para seguir completando el formulario
    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("input-email").value = "";
    document.getElementById("input-password").value = "";
    document.getElementById("selector").value = "0";
    document.getElementById("input-social").value = "";
}