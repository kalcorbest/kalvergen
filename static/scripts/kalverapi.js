window.onload = function () {
    document.getElementById("kalverjson").innerHTML = `{'kalver' : '0.${minor()}${patch()}${revision()}${download()}${randNumbers()}'}`;
}