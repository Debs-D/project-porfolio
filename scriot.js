"use strict";

const cards = document.querySelectorAll(".card-column div");
const boxes = document.querySelectorAll(".box");
const lines = document.querySelectorAll(".line");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Remove 'active' class from all cards
    cards.forEach((c) => c.classList.remove("active"));
    // Add 'active' class to the clicked card
    card.classList.add("active");
  });
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Remove active class from all boxes
    boxes.forEach((b) => b.classList.remove("active"));
    // Add active class to the clicked box
    box.classList.add("active");
  });
});

lines.forEach((line) => {
  line.addEventListener("click", () => {
    // Remove active class from all lines
    lines.forEach((l) => l.classList.remove("active"));
    // Add active class to the clicked line
    line.classList.add("active");
  });
});
// JavaScript for carousel navigation
const track = document.querySelector(".carousel-track");
const dots = document.querySelectorAll(".dot");
const totalSlides = document.querySelectorAll(".wrapper").length;

// Function to move carousel to the correct slide
function moveCarousel(index) {
  const offset = index * -312; // Move by 312px for each slide (adjust based on image size)
  track.style.transform = `translateX(${offset}px)`;
}

// Event listener for dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // Update carousel position
    moveCarousel(index);

    // Update active dot
    dots.forEach((dot) => dot.classList.remove("active"));
    dot.classList.add("active");
  });
});
