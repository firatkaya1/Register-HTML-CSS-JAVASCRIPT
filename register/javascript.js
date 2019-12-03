var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);


function usernameChange() {
    multiBlock("username-verify", "password-verify", "securityquestion-verify");

    var username = document.getElementById("username").value;

    if (username.length < 8) {
        doDisable();
        doBlock("username-verify");
        doRed("minimum8");
    }

    if (username.length > 8) {
        doEnabled();
        doBlock("username-verify");
        doGreen("minimum8");
        doGreen("maximum20");

    }
    if (username.length > 21) {
        doDisable();
        doBlock("username-verify");
        doRed("maximum20");
    }

    if (Uppercasecontroll(username)) {
        doEnabled();
        doBlock("username-verify");
        doGreen("uppercaseU");
    } else {
        doDisable();
        doBlock("username-verify");
        doRed("uppercaseU");
    }

    if (Lowercasecontroll(username)) {
        doEnabled();
        doBlock("username-verify");
        doGreen("lowercaseU");
    } else {
        doDisable();
        doBlock("username-verify");
        doRed("lowercaseU");
    }
    if (pattern.test(username)) {
        doDisable();
        doBlock("username-verify");
        doRed("specialCharacterU");
    } else {
        doEnabled();
        doBlock("username-verify");
        doGreen("specialCharacterU");
    }

}

function passwordChange() {
    multiBlock("password-verify", "username-verify", "securityquestion-verify");

    var password = document.getElementById("password").value;

    if (password.length > 8) {
        doEnabled();
        doBlock("password-verify");
        doGreen("minumum8P");
        doGreen("maximum20P");
    }
    if (password.length > 21) {
        doDisable();
        doBlock("password-verify");
        doRed("maximum20P");
    }

    if (Uppercasecontroll(password)) {
        doEnabled();
        doBlock("password-verify");
        doGreen("uppercaseP");
    } else {
        doDisable();
        doBlock("password-verify");
        doRed("uppercaseP");
    }

    if (Lowercasecontroll(password)) {
        doEnabled();
        doBlock("password-verify");
        doGreen("lowercaseP");
    } else {
        doDisable();
        doBlock("password-verify");
        doRed("lowercaseP");
    }
    if (pattern.test(password)) {
        doDisable();
        doBlock("password-verify");
        doRed("specialCharacterP");
    } else {
        doEnabled();
        doBlock("password-verify");
        doGreen("specialCharacterP");
    }
}

function repasswordChange() {
    multiBlock("password-verify", "username-verify", "securityquestion-verify");

    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;

    if (password.trim() == repassword.trim()) {
        doDisable();
        doBlock("password-verify");
        doGreen("equalP");
    } else {
        doEnabled();
        doBlock("password-verify");
        doRed("equalP");
    }
}

function secureQuest() {
    multiBlock("securityquestion-verify", "username-verify", "password-verify");

    var answer = document.getElementById("answer").value;
    var selectvalue = document.getElementById("valueofselectd").value;

    if (answer.length == 0) {
        doEnabled();
        doBlock("securityquestion-verify");
        doRed("blank");
    } else {
        doDisable();
        doBlock("securityquestion-verify");
        doGreen("blank");
    }

    if (selectvalue == "Choose your secure question") {
        doDisable();
        doBlock("securityquestion-verify");
        doRed("choose");

    } else {
        doEnabled();
        doBlock("securityquestion-verify");
        doGreen("choose");
    }
}

function Uppercasecontroll(value) {
    for (var i = 0; i < value.length; i++) {
        if (value.charAt(i) == value.charAt(i).toUpperCase()) {
            return true;
        }
    }
    return false;
}

function Lowercasecontroll(value) {
    for (var i = 0; i < value.length; i++) {
        if (value.charAt(i) == value.charAt(i).toLowerCase()) {
            return true;
        }
    }
    return false;

}

function multiBlock(show, hide1, hide2) {
    document.getElementById(show).style.display = "block";
    document.getElementById(hide1).style.display = "none";
    document.getElementById(hide2).style.display = "none";
}

function doBlock(div_id) {
    document.getElementById(div_id).display = "block";
}

function doGreen(id) {
    document.getElementById(id).style.color = "green";
}

function doRed(id) {
    document.getElementById(id).style.color = "red";
}

function doEnabled() {
    document.getElementById("register").disabled = false;
}

function doDisable() {
    document.getElementById("register").disabled = true;
}

function tiklandi() {
    console.log("butona tiklandi");
}