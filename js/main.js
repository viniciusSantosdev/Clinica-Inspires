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
        alert("Preencha o E-mail");
        document.getElementById("createEmail").focus();
    } else if (password == "") {
        alert("Coloque a senha");
        document.getElementById("createPass").focus();
    } else if (confirmPassword == "") {
        alert("Coloque a confirmação de senha");
        document.getElementById("confirmPass").focus();
    } else if (confirmPassword != password) {
        alert("Suas senhas não correspondem")
    } else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (user) {
                alert("Cadastrado com sucesso!");
                auth = user;

            }).catch(function (error) {
                alert("Falha ao cadastrar")
            })
    }
}

function loginAccount() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let auth = null;

    // login validation
    if (email == "") {
        alert("Preencha o E-mail");
        document.getElementById("email").focus();
    } else if (password == "") {
        alert("Coloque a senha");
        document.getElementById("password").focus();
    } else {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (user) {
                alert("Logado com sucesso!");
                auth = user;
                window.location.replace("http://www.google.com.br");
            }).catch(function (error) {
                alert("Falha ao logar")
            })
    }
}