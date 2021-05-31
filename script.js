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
document.getElementById("casuale-pc").innerHTML ="Numero casuale del Computer " + num;
numPlayer = Math.round(Math.random() * 5) + 1;
document.getElementById("casuale-giocatore").innerHTML ="Numero casuale del Giocatore " + numPlayer;

if (numPlayer > num){
    document.getElementById("winner").innerHTML ="the Winner is the Player";
}else (num > numPlayer){
    document.getElementById("winner").innerHTML ="the Winner is the Computer";
}