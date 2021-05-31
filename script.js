var userMail = prompt("Inserisci la tua email");
var email = ["ncesecrede@hotmail.com", "xdpikkolettaxd@yahoo.com", "deborahcolacca@yahoo.com"];
var checkMail = false;

for (var i = 0; i < email.length; i++) {
    if (userMail === email[i]) {
        checkMail = true;
    }
}
if (checkMail) {
    alert("Accesso Consentito");
} else {
    alert ("Email Sbagliata");
}

// ------------ dadi
num = Math.round(Math.random() * 5) + 1;
document.getElementById("casuale").innerHTML ="Numero casuale " + num;

