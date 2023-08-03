// obtengo ids del html
let cardNumber = document.getElementById("inputCard");
let cvc = document.getElementById("inputCVC");
let amount = document.getElementById("inputAmount");
let firstName = document.getElementById("inputFirstName");
let lastName = document.getElementById("inputLastName");
let city = document.getElementById("inputCity");
let state = document.getElementById("inputState");
let zipcode = document.getElementById("inputZip");
let message = document.getElementById("floatingTextarea");
let alert = document.getElementById("alert");


window.onload = function formValidation(event) {
    //para no recargar la página
    event.preventDefault();
    //mostrar alerta
    function displayAlert() {
        alert.className = "alert alert-danger fw-bold";
    }
    //esconder alerta
    function hideAlert() {
        alert.className = "alert alert-danger fw-bold visually-hidden";
    }
    let enviar = document.getElementById("send");
    enviar.addEventListener("click", chequeo);
    
    function chequeo() {
        //contra campo card#
        if(cardNumber.value == "") {
            console.log("Tarjeta vacía");
            cardNumber.className="form-control bg-danger bg-opacity-25";
            displayAlert();
        } else {
            cardNumber.className="form-control";
            hideAlert();
        }
        //controla campo cvc
        if(cvc.value == "") {
            console.log("cvc vacío");
            cvc.className="form-control bg-danger bg-opacity-25";
            displayAlert();
        } else {
            cvc.className="form-control";
            hideAlert();
        }
        //controla campo amount
        if(amount.value == "") {
            console.log("amount vacío");
            amount.className="form-control bg-danger bg-opacity-25";
            displayAlert();
        } else {
            amount.className="form-control";
            hideAlert();
        }
        //controla campo First Name
        if(firstName.value == "") {
            console.log("firstName vacío");
            firstName.className="form-control bg-danger bg-opacity-25";
            displayAlert();
        } else {
            firstName.className="form-control";
            hideAlert();
        }
        //controla campo Last Name
        if(lastName.value == "") {
            console.log("lastName vacío");
            lastName.className="form-control bg-danger bg-opacity-25";
            displayAlert();
        } else {
            lastName.className="form-control";
            hideAlert();
        }
        //controla campo city
        if(city.value == null) {
            console.log("city vacío");
            city.className="form-control bg-danger bg-opacity-25";
            displayAlert();
        } else {
            city.className="form-control";
            hideAlert();
        }
        //controla campo state
        if(state.value == "Pick a state...") {
            console.log("state vacío");
            state.className="form-control bg-danger bg-opacity-25";
            displayAlert();
        } else {
            state.className="form-control";
            hideAlert();
        }
        //controla postal code
        if(zipcode.value == "") {
            console.log("zipcode vacío");
            zipcode.className="form-control bg-danger bg-opacity-25";
            displayAlert();
        } else {
            zipcode.className="form-control";
            hideAlert();
        }
        //controla message
        if(message.value == "") {
            console.log("zipcode vacío");
            message.className="form-control bg-danger bg-opacity-25";
            displayAlert();
        } else {
            message.className="form-control";
            hideAlert();
        }
    }


}