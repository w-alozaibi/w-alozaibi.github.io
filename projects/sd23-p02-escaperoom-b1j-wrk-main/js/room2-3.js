let hourglass = document.querySelector("img.hourglass-1")
hourglass.addEventListener("click", function () {
    alert("it needs a code to activate it");
    let code = prompt("what are these things carved on the trees");
    if (code == 11) {
        alert("time travel activated you go travel to the future");
        window.open("3-prison.html")
    } else {
        alert("this doesnt work")
    }
})
