window.addEventListener("beforeunload", function () {
    if (localStorage.getItem("count") !== null) {
        localStorage.setItem("count", (parseInt(localStorage.getItem("count")) - 1) + "");
    }
});

window.onload = function () {
    if (localStorage.getItem("count") === null) {
        localStorage.setItem("count", "1")
    } else {
        localStorage.setItem("count", (parseInt(localStorage.getItem("count")) + 1) + "");
    }
    document.getElementById("count").innerHTML = localStorage.getItem("count");
    window.addEventListener('storage', function (e) {
        if (localStorage.getItem("count") !== null) {
            document.getElementById("count").innerHTML = localStorage.getItem("count");
        }
        else {
            document.getElementById("count").innerHTML = "0";
        }
    });
}