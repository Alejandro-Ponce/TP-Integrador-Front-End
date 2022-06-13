// Valor del ticket
const precioTicket = 200;

// Descuentos
let descEstudiante = 80;
let descTrainee = 50;
let descJunior = 15

// Variables:

let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let mail = document.getElementById("mail")
let cantTickets = document.getElementById("cantidad")
let categoria = document.getElementById("categoriaSeleccionada")

// Funciones:

function quitarClaseInvalid() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

function total_pagar(){

    quitarClaseInvalid();

    //validar campos rellenos
    if (nombre.value === "") {
        alert("Por favor, escribí tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "") {
        alert("Por favor, escribí tu Apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Por favor, escribí tu Email.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Para determinar si el correo electronico en valido.
    const validaemail = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!validaemail(mail.value)) {
        alert("Por favor, escribí tu correo electronico válido.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Verifico si ingresa menos de un ticket o ingresa otro tipo de dato
    if ( (cantTickets.value == 0) || (isNaN(cantTickets.value))) {
        alert("Por favor, ingresar correctamente la cantidad de tickets.");
        cantTickets.classList.add("is-invalid");
        cantTickets.focus();
        return;
    }

    // Verifico que selecciono una categoria

    if (categoria.value === "") {
        alert("Por favor, escribí tu Email.");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

    //Calculos

    let valorTotalSinDesc = (cantTickets.value) * precioTicket;

    if (categoria.value == 0) {
        valorTotal = valorTotalSinDesc;
    }

    if (categoria.value == 1) {
        valorTotal = valorTotalSinDesc - (descEstudiante / 100 * valorTotalSinDesc);
    }

    if (categoria.value == 2) {
        valorTotal = valorTotalSinDesc - (descTrainee / 100 * valorTotalSinDesc);
    }

    if (categoria.value == 3) {
        valorTotal = valorTotalSinDesc - (descJunior / 100 * valorTotalSinDesc);
    }
    
    // Insertamos el valor en el html
    totalpagar.innerHTML = valorTotal;

}
// Boton resumen
btnResumen.addEventListener('click', total_pagar);

// Boton borrar para eliminar valores
function borrarcampos(){
    quitarClaseInvalid();
    totalpagar.innerHTML = "";
}

btnBorrar.addEventListener('click', borrarcampos);