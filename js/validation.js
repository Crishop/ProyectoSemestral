//Validacion de formulario de registro
$("#register").validate({
    rules: {
        firstname: {
            required: true
        },
        secondname: {
            required: true
        },
        lastname: {
            required: true
        },
        lastname2 : {
            required: true
        },
        email : {
            required: true,
            email: true
        },
        password : {
            required: true
        }
    }
});
$("#crearcuenta").click(function(){
    if($("#register").valid() == false){
        return;
    }
    let firstname = $("#firstname").val()
    let secondname = $("#secondname").val()
    let lastname = $("#lastname").val()
    let lastname2 = $("#lastname2").val()
    let email = $("#email").val()
    let password = $("#password").val()
});

//Validacion de formulario de login
$("#login").validate({
    rules: {
        correoLogin: {
            required: true,
            email: true
        },
        contraLogin: {
            required: true
        } 
    }
});

$("#iniciar").click(function(){
    if($("#login").valid() == false){
        return;
    }
    let correo = $("#correoLogin").val()
    let contra = $("#contraLogin").val()
});

// Validacion de formulario de donar
$("#donar").validate({
    rules: {
        nombres: {
            required: true
        },
        apellidos: {
            required: true
        },
        banco: {
            required: true
        },
        cuenta: {
            required: true
        }
    }
});
$("#suscribir").click(function(){
    if($("#donar").valid() == false){
        return;
    }
    let nombres = $("#nombres").val()
    let apellidos = $("#apellidos").val()
    let banco = $("#banco").val()
    let cuenta = $("#cuenta").val()
})