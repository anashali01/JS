// Hero Section Slider 
let items = document.querySelectorAll('.item')
let currentIndex = 0;
let next = document.getElementById('next');
let prev = document.getElementById("prev");
function removeActiveclass() {
    items.forEach(item => item.classList.remove('active'));
}
function showSlide(index) {
    removeActiveclass();
    items[index].classList.add('active');
}
next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
});
prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
});
let autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}, 4000);




// Cart Section Slider 
const scrollContainer = document.getElementById("cartRow");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

// Optional: set how much to scroll
const scrollAmount = 300;

scrollLeftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

scrollRightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});


