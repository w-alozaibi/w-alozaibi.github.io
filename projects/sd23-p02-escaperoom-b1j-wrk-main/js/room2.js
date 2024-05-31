console.log("console");

let caveG = document.querySelector("img.cave-g");
let roomLink = document.querySelector("a.room-2-3-link");

caveG.addEventListener("click", function () {
    let answer = prompt("Purple, Yellow, White, Blue");
    if (answer == 8764) {
        alert("Correct, You are free");
        roomLink.removeAttribute("hidden");
    } else {
        alert("Wrong");
    }
});

