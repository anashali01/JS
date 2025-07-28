const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
  },
  {
    text: "If you are working on something exciting, it will keep you motivated.",
    author: "Steve Jobs",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
];

let idx = 0;

let quotes_slide = document.getElementById("quote");
let author_slide = document.getElementById("author");

function showQuote() {
  quotes_slide.textContent = quotes[idx].text;
  author_slide.textContent = "-" + author[idx].author;
  idx = (idx + 1) % quotes.length;
}

showQuote();
setInterval(showQuote, 4000);
