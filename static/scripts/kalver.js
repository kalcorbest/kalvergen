window.onload = function() {
    document.getElementById("versionbutton").onclick = function showversion() {
        document.getElementById("version").innerHTML = `0.${minor()}${patch()}${revision()}${download()}`;
    }
}
