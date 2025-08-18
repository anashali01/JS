const quiz = [
    {
        image: "Assets/Images/1.jpg",
        Question: "Who Is This ?",
        option1: "Armodillo Cocodillo",
        option2: "Bearorito Bananananitotito",
        option3: "Bobrini Zucchini",
        option4: "Bobrinito Kisiloni",
        answer: "Bobrini Zucchini",
    },
    {
        image: "Assets/Images/2.webp",
        Question: "Who Is This ?",
        option1: "Bombardini Gojo",
        option2: "li li li gojo lini",
        option3: "planito gojonito",
        option4: "almadito saturoti",
        answer: "Bombardini Gojo",
    },
    {
        image: "Assets/Images/3.webp",
        Question: "Who Is This ?",
        option1: "Coccodrilli Faerini",
        option2: "Bla bla ble ble blu blu blu",
        option3: "Dukaya",
        option4: "Grr Grr Baraboom",
        answer: "Grr Grr Baraboom",
    },
    {
        image: "Assets/Images/4.webp",
        Question: "Who Is This ?",
        option1: "Nothing",
        option2: "Everything",
        option3: "Nothing",
        option4: "Everything",
        answer: "Lag Lag Ngelag Woi",
    },
    {
        image: "Assets/Images/5.webp",
        Question: "Who Is This ?",
        option1: "Penguinelli Cactussini",
        option2: "Papa patata",
        option3: "Fu li ji",
        option4: "Penguino Cocosino",
        answer: "Penguinelli Cactussini",
    },
    {
        image: "Assets/Images/6.webp",
        Question: "Who Is This ?",
        option1: "Pippi Poppa Pippo Peppe",
        option2: "Rantasanta Chinaranta",
        option3: "Zip Zip Zip Zip Zip Zip Zip Zip",
        option4: "Rata cola mi cola",
        answer: "Zip Zip Zip Zip Zip Zip Zip Zip",
    },
];

let img = document.getElementById('images');
let question = document.getElementById('question');
let opt1 = document.getElementById('option-1');
let opt2 = document.getElementById('option-2');
let opt3 = document.getElementById('option-3');
let opt4 = document.getElementById('option-4');
let result = document.getElementById('result');
let option = document.querySelectorAll('.optionBtn');
let score = document.getElementById('score');
let answerd = false;
let selectedAnswer = null;
let idx = 0;
let currentScore = 0;
let timer = document.getElementById('timer');
let timeCount = 9;
function showData() {
    answerd = false;
    result.innerText = "";
    timeCount = 8;
    img.src = quiz[idx].image;
    question.textContent = quiz[idx].Question;
    opt1.textContent = quiz[idx].option1;
    opt2.textContent = quiz[idx].option2;
    opt3.textContent = quiz[idx].option3;
    opt4.textContent = quiz[idx].option4;
    idx = (idx + 1) % quiz.length;

    option.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('active');
    })
}

showData();
setInterval(showData, 9000);

setInterval(() => {
    timer.innerText = `Next in question in ${timeCount}`;
    timeCount--;
    if (timeCount == 0) timeCount = 8;

}, 1000)


option.forEach(btn => {
    btn.addEventListener('click', () => {
        selectedAnswer = btn.textContent;
    })
});

option.forEach(btn => {
    btn.addEventListener('click', () => {
        if (answerd) return;
        answerd = true;
        btn.classList.add('active');

        const correct = quiz[(idx - 1 + quiz.length) % quiz.length].answer;
        if (selectedAnswer === null) {
            result.innerText = "Please select an answer!";
        } else if (selectedAnswer === correct) {
            result.innerText = "✅ Correct Answer!";
            currentScore++;
            score.innerText = `Score : ${currentScore} / 6`;
        } else {
            result.innerText = "❌ Wrong Answer!";
        }

        option.forEach(button => button.disabled = true);
    })
})

