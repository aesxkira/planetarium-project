let current = 0;
let score = 0;

const questions = document.querySelectorAll(".question");

function answer(correct, btn) {

if (btn.classList.contains("done")) return;
btn.classList.add("done");

if (correct) {
btn.style.background = "green";
score++;
} else {
btn.style.background = "red";
}

setTimeout(() => {
questions[current].classList.remove("active");
current++;

if (current < questions.length) {
questions[current].classList.add("active");
} else {
document.getElementById("result").innerText =
"Final Score: " + score + "/" + questions.length;
}

}, 800);
}

function restartQuiz() {
current = 0;
score = 0;

document.getElementById("result").innerText = "";

document.querySelectorAll("button").forEach(b=>{
b.classList.remove("done");
b.style.background="";
});

questions.forEach(q=>q.classList.remove("active"));
questions[0].classList.add("active");
}