const images01 = [
	"../images/sagHouse/sagHouse/SagHouse01-Medium.png",
	"../images/sagHouse/sagHouse/SagHouse02-Medium.png",
	"../images/sagHouse/sagHouse/SagHouse03-Medium.png",
	"../images/sagHouse/sagHouse/SagHouse04-Medium.png",
	"../images/sagHouse/sagHouse/SagHouse05-Medium.png",
	"../images/sagHouse/sagHouse/SagHouse06-Medium.png",
	"../images/sagHouse/sagHouse/SagHouse07-Medium.png",
	"../images/sagHouse/sagHouse/SagHouse08-Medium.png",
	"../images/sagHouse/sagHouse/SagHouse09-Medium.png",
	"../images/sagHouse/sagHouse/SagHouse10-Medium.png",
];
const images02 = [
	"../images/sagHouse/cupDrop/CupDrop01-Medium.png",
	"../images/sagHouse/cupDrop/CupDrop02-Medium.png",
	"../images/sagHouse/cupDrop/CupDrop03-Medium.png",
	"../images/sagHouse/cupDrop/CupDrop04-Medium.png",
	"../images/sagHouse/cupDrop/CupDrop05-Medium.png",
];
const images03 = [
	"../images/sagHouse/piper/Piper01-Medium.png",
	"../images/sagHouse/piper/Piper02-Medium.png",
	"../images/sagHouse/piper/Piper03-Medium.png",
	"../images/sagHouse/piper/Piper04-Medium.png",
	"../images/sagHouse/piper/Piper05-Medium.png",
];
const images04 = [
	"../images/sagHouse/waterBird/WaterBird01-Medium.png",
	"../images/sagHouse/waterBird/WaterBird02-Medium.png",
	"../images/sagHouse/waterBird/WaterBird03-Medium.png",
	"../images/sagHouse/waterBird/WaterBird04-Medium.png",
	"../images/sagHouse/waterBird/WaterBird05-Medium.png",
];

const slideshow01 = document.getElementById("slideshow01");
const slideshow02 = document.getElementById("slideshow02");
const slideshow03 = document.getElementById("slideshow03");
const slideshow04 = document.getElementById("slideshow04");
let currentIndex01 = 0;
let currentIndex02 = 0;
let currentIndex03 = 0;
let currentIndex04 = 0;
// Add your image URLs here

function showNextImage() {
	currentIndex01 = (currentIndex01 + 1) % images01.length;
	const imageUrl01 = images01[currentIndex01];
	slideshow01.src = imageUrl01;

	currentIndex02 = (currentIndex02 + 1) % images02.length;
	const imageUrl02 = images02[currentIndex02];
	slideshow02.src = imageUrl02;

	currentIndex03 = (currentIndex03 + 1) % images03.length;
	const imageUrl03 = images03[currentIndex03];
	slideshow03.src = imageUrl03;

	currentIndex04 = (currentIndex04 + 1) % images04.length;
	const imageUrl04 = images04[currentIndex04];
	slideshow04.src = imageUrl04;
}

// Initial call to display the first image
showNextImage();

// Set an interval to display the next image every 1 second
setInterval(showNextImage, 2000);
