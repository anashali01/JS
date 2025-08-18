const quotes = [
  {
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    image: "Assets/Image/1.webp"
  },
  {
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    image: "Assets/Image/2.webp"
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    image: "Assets/Image/3.jpg"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    image: "Assets/Image/4.avif"
  },
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
    image: "Assets/Image/5.jpeg"
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
   image: "Assets/Image/6.jpg"
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
   image: "Assets/Image/7.jpg"
  },
  {
    quote: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
   image: "Assets/Image/8.jpg"
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    image: "Assets/Image/9.jpg"
  },
  {
    quote: "Learning to write programs stretches your mind and helps you think better.",
    author: "Bill Gates",
    image: "Assets/Image/10.webp"
  }
];


let idx = 0;
let countDown = 10;
let quotes_slide = document.getElementById("quote");
let author_slide = document.getElementById("author");
let timer = document.getElementById("timer");
let img = document.getElementById("img");
let pageNumber = document.getElementById("num");
function showQuote() {
  quotes_slide.innerText = quotes[idx].quote;
  author_slide.innerText = "-" + quotes[idx].author;
  img.src = quotes[idx].image;
  idx = (idx + 1) % quotes.length;
  pageNumber.innerText = `${idx+1} 0f 10`;
}

showQuote();
setInterval(showQuote, 10000);

setInterval(() => {
  countDown--;
  if (countDown > 0) {
    timer.innerText = `The next quote in ${countDown}`;
  } else {
    timer.innerText = `The next quote in ${countDown}`;
    countDown = 10;
  }
}, 1000);
