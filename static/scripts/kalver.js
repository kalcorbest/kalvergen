function randnum(min, max) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
}

function revision() {
    if (randnum(0, 2) == 0) {
        return "";
    }
    else {
        return ` R${randnum(0, 101)}`;
    }
}

function minor() {
    return randnum(1, 4);
}

function patch() {
    if (randnum(0, 2) == 0) {
        return `.${randnum(1, 8)}`;
    }
    else {
        let random_ascii = Math.floor((Math.random() * 25) + 97);
        let random_string = String.fromCharCode(random_ascii);
        return random_string.toUpperCase();
    }
}

window.onload = function() {
    document.getElementById("versionbutton").onclick = function showversion() {
        document.getElementById("version").innerHTML = `0.${minor()}${patch()}${revision()}`;
    }

}