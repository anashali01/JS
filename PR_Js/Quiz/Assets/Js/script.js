const quiz = [
    {
        image: "Assets/Image/1.png",
        Question: "Which Programming Language Is This ?",
        option1: "Angular Js",
        option2: "React Js",
        option3: "Next Js",
        option4: "Animation Js",
        answer: "React Js",
    },
    {
        image: "Assets/Image/2.png",
        Question: "Which Programming Language Is This ?",
        option1: "Express Js",
        option2: "React Js",
        option3: "Next Js",
        option4: "Animation Js",
        answer: "Express Js",
    },
    {
        image: "Assets/Image/3.png",
        Question: "Which Programming Language Is This ?",
        option1: "Express Js",
        option2: "React Js",
        option3: "Next Js",
        option4: "Vue Js",
        answer: "Vue Js",
    },
    {
        image: "Assets/Image/4.png",
        Question: "Which Programming Language Is This ?",
        option1: "Dart",
        option2: "Ruby",
        option3: "Golang",
        option4: "C#",
        answer: "Ruby",
    },
    {
        image: "Assets/Image/5.png",
        Question: "Which Programming Language Is This ?",
        option1: "C++",
        option2: "Perl",
        option3: "Next Js",
        option4: "Dart",
        answer: "Dart",
    },
    {
        image: "Assets/Image/6.png",
        Question: "Which Programming Language Is This ?",
        option1: "Firefly",
        option2: "Angular Js",
        option3: "SQL",
        option4: "Swift",
        answer: "Swift",
    },
    {
        image: "Assets/Image/7.png",
        Question: "Which Programming Language Is This ?",
        option1: "Rust",
        option2: "Angular Js",
        option3: "SQL",
        option4: "Three Js",
        answer: "Rust",
    },
    {
        image: "Assets/Image/8.png",
        Question: "Which Programming Language Is This ?",
        option1: "Java",
        option2: "JavaScript",
        option3: "C++",
        option4: "Python",
        answer: "Python",
    },
    {
        image: "Assets/Image/9.png",
        Question: "Which Programming Language Is This ?",
        option1: "Golang",
        option2: "Dart",
        option3: "Ajax",
        option4: "Rust",
        answer: "Golang",
    },
    {
        image: "Assets/Image/10.png",
        Question: "Which Programming Language Is This ?",
        option1: "Postgre SQL",
        option2: "Perl",
        option3: "Splash",
        option4: "Thingo Bit",
        answer: "Postgre SQL",
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
let NumOfQues = document.getElementById('numofQ');
let answerd = false;
let selectedAnswer = null;
let idx = 0;
let currentScore = 0;
let timer = document.getElementById('timer');
let timeCount = 10;
let interval = null;
function showData() {
    answerd = false;
    result.innerText = "";
    timeCount = 10;

    img.src = quiz[idx].image;
    question.textContent = quiz[idx].Question;
    opt1.textContent = quiz[idx].option1;
    opt2.textContent = quiz[idx].option2;
    opt3.textContent = quiz[idx].option3;
    opt4.textContent = quiz[idx].option4;
    NumOfQues.innerText = `${idx + 1} of 10`;
    option.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('active');
    })
   idx++;
    if (idx > quiz.length) {
        clearInterval(interval);
        alert("Completed");
        return;
    }

}


showData();
interval = setInterval(showData, 10000);

setInterval(() => {

    timeCount--;
    if (timeCount > 0) {
        timer.innerText = `Next in question in ${timeCount}`;
    } else {
        timer.innerText = `Next in question in ${timeCount}`;
        timeCount = 10;
    }

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
            score.textContent = `Score : ${currentScore} / 10`;
            console.log(score);

        } else {
            result.innerText = "❌ Wrong Answer!";
        }

        option.forEach(button => button.disabled = true);
    })
})

