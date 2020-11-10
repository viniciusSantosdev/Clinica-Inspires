// my web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCx9no4QQCMhQxPYml0VEaawwxOFg0vtzI",
    authDomain: "clinicainspires-272a2.firebaseapp.com",
    databaseURL: "https://clinicainspires-272a2.firebaseio.com",
    projectId: "clinicainspires-272a2",
    storageBucket: "clinicainspires-272a2.appspot.com",
    messagingSenderId: "658492934262",
    appId: "1:658492934262:web:e17e3c3e45ff58f8397757"
};
// initialize Firebase
firebase.initializeApp(firebaseConfig);

function createAccount() {

    let email = document.getElementById("createEmail").value;
    let password = document.getElementById("createPass").value;
    let confirmPassword = document.getElementById("confirmPass").value;

    let auth = null;

    // login validation
    if (email == "") {
        response.innerHTML = "Preencha o email";
        response.className = "error";
        document.getElementById("createEmail").focus();
    } else if (password == "") {
        response.innerHTML = "Preencha a senha";
        response.className = "error";
        document.getElementById("createPass").focus();
    } else if (confirmPassword == "") {
        response.innerHTML = "Preencha a confirmação de senha";
        response.className = "error";
        document.getElementById("confirmPass").focus();
    } else if (confirmPassword != password) {
        response.innerHTML = "Suas senhas não estão iguais";
        response.className = "error";
    } else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (user) {
                response.innerHTML = "Cadastrado com sucesso";
                response.className = "success";
                auth = user;

                // window.location.replace("");

            }).catch(function (error) {
                response.innerHTML = "Desculpe, ocorreu um erro ao cadastrar. Tente novamente mais tarde";
                response.className = "error";
            })
    }
}

function loginAccount() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let auth = null;

    // login validation
    if (email == "") {
        response.innerHTML = "Preencha o email";
        response.className = "error";
        document.getElementById("email").focus();
        return
    } else if (password == "") {
        response.innerHTML = "Prencha a senha"
        response.className = "error";
        document.getElementById("password").focus();
    } else {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (user) {
                response.innerHTML = "Logado com sucesso"
                response.className = "success";
                auth = user;
                // window.location.replace("http://www.google.com.br");
            }).catch(function (error) {
                response.innerHTML = "Login ou senha incorretos"
                response.className = "error";
            })
    }
}