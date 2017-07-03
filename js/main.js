function validateForm() {
    // remueve todos los span antes de cada validacion!
    //document.querySelectorAll("span").forEach(function(e) {
    //alert("limpiar inputs");
    //e.remove()
    //});
$(function() {
    var letras = /^[A-Za-z]*$/;
    var correo = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    // datos desde formulario validacion vacios
    $("span").fadeOut().remove();
        if ($("#name").val() == ""|| !letras.test($("#name").val())) {
            $("#name").focus().after("<span>Contesta todos los campos correctamente</span>");  
            return false;
        }
        if ($("#lastname").val() == ""|| !letras.test($("#lastname").val())) {
            $("#lastname").focus().after("<span>Contesta todos los campos correctamente</span>");  
            return false;
        }
        if ($("#input-email").val() == "" || !correo.test($("#input-email").val())) {
            $("#input-email").focus().after("<span>Ingrese un email correcto</span>");  
            return false;  
        }  
        if ($("#input-password").val() == "") {
            $("#input-password").focus().after("<span>Ingrese un password</span>");  
            return false;  
        }
        alert("datos enviados");
    });
    // desaparece el mensaje cuando el usuario esta escribiendo información en el input
    $("#name, #lastname, #input-email, #input-password").bind("blur keyup", function(){  
        if ($(this).val() != "") {
            $("span").fadeOut();
            return false;  
        }
    });
}