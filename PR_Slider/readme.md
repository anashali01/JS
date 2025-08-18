# 🏀 Nike Product Slider UI

![Nike Banner](./Assets/Images/1.jpg)

> ⚡ A sleek frontend Nike showcase built with HTML, Bootstrap 5, and vanilla JavaScript.  
> Features a **hero slider** and **horizontal scrollable cart** for showcasing new arrivals.

---

## 🔥 Live Preview

**[→ Click here to view live (if hosted)](#)**  
*(Replace `#` with your GitHub Pages / Netlify link)*

---

## 📦 Project Overview

| Section            | Description                                        |
|--------------------|----------------------------------------------------|
| 🎯 Hero Section    | Auto/manual image slider with promo banners        |
| 🛒 Cart Slider     | Horizontally scrollable cards with buttons         |
| 💡 Technologies    | HTML, CSS, Bootstrap 5, JS                         |
| 🎨 Design Focus    | Clean, modern, responsive Nike-style UI            |

---

## 🚀 Features

### 🎞️ Hero Section Slider
- ⬅️ ⏩ Slide navigation buttons
- Responsive on all screen sizes
- Poppins font for a sporty feel

### 🛒 Cart Scroll Section
- Horizontal scrolling product cards
- Smooth scroll with `scrollBy()` on button click
- Each product shows:
  - Product image
  - Title & subtitle
  - Price
  - Color options (small circles)
  - Cart icon button

---

## 💻 Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 🗂️ Folder Structure

Nike-Product-Slider/
├── index.html
├── README.md
├── Assets/
│ ├── css/
│ │ └── style.css
│ ├── js/
│ │ └── script.js
│ └── Images/
│ └── shoe1.png, shoe2.png, 1.jpg, 2.jpg, ...


## ⚙️ How the Cart Slider Works

```js
const container = document.getElementById('cartRow');
document.getElementById('scrollLeft').onclick = () => {
  container.scrollBy({ left: -300, behavior: 'smooth' });
};
document.getElementById('scrollRight').onclick = () => {
  container.scrollBy({ left: 300, behavior: 'smooth' });
};

📲 Responsive Layout

📱 Mobile
💻 Desktop
🖥️ Large screens

Built with Bootstrap's grid system for responsiveness.
🙌 Author
Developed by [Anashali]
💌 Let's build cool UIs together!