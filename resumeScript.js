
var mirdit = document.getElementById("res-mirdit");
var andreas = document.getElementById("res-andreas");
var tormod = document.getElementById("res-tormod");
var ali = document.getElementById("res-ali")



function toggleContent1 () {
    if (mirdit.style.display === "none") {
        mirdit.style.display = "block";
        andreas.style.display = "none"
        tormod.style.display = "none"
        ali.style.display = "none"

    } else {
        mirdit.style.display = "none";
    }
}


function toggleContent2 () {
    if (andreas.style.display === "none") {
        andreas.style.display = "block";
        mirdit.style.display = "none";
        ali.style.display = "none";
        tormod.style.display = "none";

    } else {
        andreas.style.display = "none";
    }
}

function toggleContent3 () {
    if (ali.style.display === "none") {
        ali.style.display = "block";
        mirdit.style.display = "none";
        andreas.style.display = "none";
        tormod.style.display = "none";

    } else {
        ali.style.display = "none";
    }
}

function toggleContent4 () {
    if (tormod.style.display === "none") {
        tormod.style.display = "block";
        mirdit.style.display = "none";
        ali.style.display = "none";
        andreas.style.display = "none";

    } else {
        tormod.style.display = "none";
    }
}
