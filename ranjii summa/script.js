function startQuiz() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
}

function checkAnswer(answer) {

    if (answer === "sivaranjani") {
        document.getElementById("page2").style.display = "none";
        document.getElementById("page3").style.display = "block";
    }
    else {
        alert("Wrong Answer 😅");
    }

}
function checkAnswer(answer) {

    if (answer === "sivaranjani") {

        document.getElementById("page2").style.display = "none";
        document.getElementById("page3").style.display = "block";

    } else {

        document.getElementById("page2").style.display = "none";
        document.getElementById("page4").style.display = "block";

    }

}