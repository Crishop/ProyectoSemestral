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
        correo: {
            required: true,
            email: true
        },
        contra: {
            required: true
        } 
    }
})
$("#iniciar").click(function(){
    if($("#login").valid() == false){
        return;
    }
    let correo = $("#correo").val()
    let contra = $("#contra").val()
});
