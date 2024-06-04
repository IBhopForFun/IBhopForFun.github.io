if(localStorage.length == 0){
    const utenteAttuale = null; //Non c'e un account
    localStorage.setItem("utenteAttuale", JSON.stringify(utenteAttuale));
}

const registerAndLog = document.getElementById("registerAndLog");
const utenteAttuale = JSON.parse(localStorage.getItem("utenteAttuale"));

if(registerAndLog != null && utenteAttuale != null) {
    const user = document.createElement("button");
    user.innerHTML = "Ciao! " + utenteAttuale.userName;
    user.classList.toggle("login");
    user.style.margin = "5px";

    const logout = document.createElement("button");
    logout.innerHTML = "Logout";
    logout.classList.toggle("login");
    logout.style.backgroundColor = "#00000000";
    logout.onclick= function() {
        localStorage.setItem("utenteAttuale", null);
        window.location.href = "index.html";
    };

    registerAndLog.innerHTML = "";
    registerAndLog.appendChild(user);
    registerAndLog.appendChild(logout);
}




// Effetto hover ai vari bottoni
const bottoni = document.getElementsByClassName("casella");
if(bottoni != null) {
    for(i = 0; i < bottoni.length; i++) {
        bottoni[i].addEventListener("mouseover", function() {
            this.style.transition = "0.6s";
            this.style.transform = "translateY(-5px)";
            this.style.color = "#FFFFFF";
            this.style.cursor = "pointer";
        });
    
        bottoni[i].addEventListener("mouseout", function() {
            this.style.color = "";
            this.style.transition = "";
            this.style.transform = "translateY(0px)";
        });
    }
}

// Menu a tendina
function apriMenu() {
    document.getElementById("generi").classList.toggle("mostra");
}
  
//Funzione che chiude il menu a tendina quando l'utente fa un click al di fuori del menu
window.onclick = function(e) {
    if (!e.target.matches(".bottoneLista")) {
        var myDropdown = document.getElementById("generi");
        if(myDropdown != null) {
            if (myDropdown.classList.contains("mostra")) {
                myDropdown.classList.remove("mostra");
            }
        }
    }
}

//Effetto hover alle immagini e generatore di utenti che consigliano un determinato gioco

const testi = document.getElementsByClassName("testoHover");
if(testi != null) {
    for(i = 0; i < testi.length; i++) {
        testi[i].addEventListener("mouseover", function() {
            this.style.opacity = "1";
        });
    
        testi[i].addEventListener("mouseout", function() {
            this.style.opacity = "0";
        });
    
        var nConsigli = parseInt((Math.random() * 1000) + 300);
        p = document.createElement("p");
        p.innerHTML = "Consigliato da " + nConsigli + " utenti";
        testi[i].appendChild(p);
    }
}

//Counter utenti
const aside = document.getElementById("aside");
if(aside !=null) {
    var userOnline = parseInt((Math.random() * 2000) + 500);
    p = document.createElement("p");
    p.innerHTML = "Utenti online: " + userOnline;
    p.style.marginTop = "250px";
    aside.appendChild(p);
}

//Creazione account utente
function register() {
    var varUserName = document.getElementById("userName").value;
    var varEmail = document.getElementById("email").value;
    var varPassword = document.getElementById("password").value;

    var nuovoUtente = {userName: varUserName, email: varEmail, password: varPassword};
    localStorage.setItem(localStorage.length - 1, JSON.stringify(nuovoUtente));
    localStorage.setItem("utenteAttuale", JSON.stringify(nuovoUtente));
    window.location.href = "index.html";
}

//Login utente
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    for(i = 0; i <= localStorage.length - 2; i++) {
        var account = JSON.parse(localStorage.getItem(i));
        if(email.localeCompare(account.email) == 0 && password.localeCompare(account.password) == 0) {
            localStorage.setItem("utenteAttuale", JSON.stringify(account));
            window.location.href = "index.html";
        }
    }
}