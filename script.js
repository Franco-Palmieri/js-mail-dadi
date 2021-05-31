var userMail = prompt("Inserisci la tua email");
var email = ["ncesecrede@hotmail.com", "xdpikkolettaxd@yahoo.com", "deborahcolacca@yahoo.com"];
var checkMail = false;

for (var i = 0; i < email.length; i++) {
    if (userMail === email[i]) {
        checkMail = true;
    }
}
if (checkMail) {
    document.getElementById("check-email").innerHTML = "Accesso Consentito";
} else {
    document.getElementById("check-email").innerHTML = "Email Sbagliata";
}