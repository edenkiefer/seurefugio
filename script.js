var peapleHelped = 10000;

setInterval(function () {
    display = document.querySelector('#peapleHelped');
    peapleHelped += Math.floor(Math.random() * 101)
    display.textContent = peapleHelped;
}, 3000);

function changeContainer(container) {
    if (container == "home") {
        document.getElementById("home").style.display = "block";
        document.getElementById("help").style.display = "none";
        document.getElementById("contact").style.display = "none";
    }
    
    if (container == "help") {
        document.getElementById("help").style.display = "block";
        document.getElementById("home").style.display = "none";
        document.getElementById("contact").style.display = "none";
    }

    if (container == "contact") {
        document.getElementById("contact").style.display = "block";
        document.getElementById("home").style.display = "none";
        document.getElementById("help").style.display = "none";
    }
}