const images01 = [
	"../images/bananaCube/bananaCube/BananaCube01-Medium.png",
	"../images/bananaCube/bananaCube/BananaCube02-Medium.png",
	"../images/bananaCube/bananaCube/BananaCube03-Medium.png",
	"../images/bananaCube/bananaCube/BananaCube04-Medium.png",
	"../images/bananaCube/bananaCube/BananaCube05-Medium.png",
];
const images02 = [
	"../images/bananaCube/bananaHunt/BananaHunt01-Medium.png",
	"../images/bananaCube/bananaHunt/BananaHunt02-Medium.png",
	"../images/bananaCube/bananaHunt/BananaHunt03-Medium.png",
	"../images/bananaCube/bananaHunt/BananaHunt04-Medium.png",
	"../images/bananaCube/bananaHunt/BananaHunt05-Medium.png",
	"../images/bananaCube/bananaHunt/BananaHunt06-Medium.png",
	"../images/bananaCube/bananaHunt/BananaHunt07-Medium.png",
	"../images/bananaCube/bananaHunt/BananaHunt08-Medium.png",
	"../images/bananaCube/bananaHunt/BananaHunt09-Medium.png",
	"../images/bananaCube/bananaHunt/BananaHunt10-Medium.png",
];
const images03 = [
	"../images/bananaCube/bananaHuntPro/BananaHuntPro01-Medium.png",
	"../images/bananaCube/bananaHuntPro/BananaHuntPro02-Medium.png",
	"../images/bananaCube/bananaHuntPro/BananaHuntPro03-Medium.png",
	"../images/bananaCube/bananaHuntPro/BananaHuntPro04-Medium.png",
	"../images/bananaCube/bananaHuntPro/BananaHuntPro05-Medium.png",
];
const images04 = [
	"../images/bananaCube/bananaRun/BananaRun01-Medium.png",
	"../images/bananaCube/bananaRun/BananaRun02-Medium.png",
	"../images/bananaCube/bananaRun/BananaRun03-Medium.png",
	"../images/bananaCube/bananaRun/BananaRun04-Medium.png",
	"../images/bananaCube/bananaRun/BananaRun05-Medium.png",
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
