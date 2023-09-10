const slidesContainer = document.querySelector(".carousel-slides");
const slides = document.querySelectorAll(".carousel-slide");
const dotsContainer = document.querySelector(".carousel-dots");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentSlide = 0;

function showSlide(index) {
	slidesContainer.style.transform = `translateX(-${index * 100}%)`;
	currentSlide = index;
	updateDots();
}

function updateDots() {
	const dotElements = document.querySelectorAll(".carousel-dot");
	dotElements.forEach((dot, index) => {
		dot.classList.remove("active");
		if (index === currentSlide) {
			dot.classList.add("active");
		}
	});
}

function prevSlide() {
	if (currentSlide > 0) {
		showSlide(currentSlide - 1);
	}
}

function nextSlide() {
	if (currentSlide < slides.length - 1) {
		showSlide(currentSlide + 1);
	}
}

function createDots() {
	slides.forEach((_, index) => {
		const dot = document.createElement("span");
		dot.classList.add("carousel-dot");
		dot.addEventListener("click", () => showSlide(index));
		dotsContainer.appendChild(dot);
	});
	updateDots();
}

createDots();
showSlide(0);
