const template = document.createElement("template");
template.innerHTML = `
  <style>
  * {
    margin: 0px;
    padding: 0px;
  }
  
  .disable-select{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* SlideShow */
  .content-container {
    display: flex;
    flex-direction: column;
    margin: 80px auto 150px auto;
  }
  
  .slideshow {
    position: relative;
	  height: 100%;
    overflow: hidden;
    z-index: 3;
  }

  .next-container {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 50px;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.05);
    transition: 0.5s;
  }
  
  .next-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    opacity: 0.5;
    transition: 0.5s;
  }

  .next-container:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.5s;
  }

  .next-container:hover .next-icon {
    opacity: 1;
    transition: 0.5s;
  }

  .previous-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 50px;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.05);
    transition: 0.5s;
  }
  
  .previous-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    opacity: 0.5;
    transition: 0.5s;
  }
  
  .previous-container:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.5s;
  }
  
  .previous-container:hover .previous-icon {
    opacity: 1;
    transition: 0.5s;
  }

  .slides { display: flex; }

  .slide { transition: 0.8s; }

  .slide img{
    height: 100%;
    width: 100%;
  }

  .slider-option {
    display: flex;
    margin: 5px auto;
  }
  
  .slider-bar {
    width: 5px;
    height: 5px;
    border-radius: 100%;
    border: 2px solid #ffffff;
    margin: auto 10px;
  }

  .slider-bar:hover { cursor: pointer; }

  .slider-bar1 { background-color: #ffffff; }
  /* SlideShow */
  
  /* Details */
  .detail-container {
    background-color: white;
    padding: 15px;
    z-index: 2;
  }

  .title {
    font-family: sans-serif;
    font-size: 25px;
    padding-top: 10px;
  }

  .description {
    font-family: sans-serif;
    text-align: justify;
    font-size: 20px;
  }
  /* Details */  
  </style>

  <div class="content-container">
    <div class="slideshow">
      <div class="next-container"> <img class="next-icon disable-select" alt="next" /> </div>
      <div class="previous-container"> <img class="previous-icon disable-select" alt="previous" /> </div>
      <div class="slides"> 
        <div class="slide first-slide"> <img class="slide1" alt="slide1"/> </div> 
        <div class="slide"> <img class="slide2" alt="slide2"/> </div>
        <div class="slide"> <img class="slide3" alt="slide3"/> </div>
        <div class="slide"> <img class="slide4" alt="slide4"/> </div>
        <div class="slide"> <img class="slide5" alt="slide5"/> </div>
        <div class="slide"> <img class="slide6" alt="slide6"/> </div>
        <div class="slide"> <img class="slide7" alt="slide7"/> </div>
        <div class="slide"> <img class="slide8" alt="slide8"/> </div>
        <div class="slide"> <img class="slide9" alt="slide9"/> </div>
        <div class="slide"> <img class="slide10" alt="slide10"/> </div>
        <div class="slide"> <img class="slide11" alt="slide11"/> </div>
        <div class="slide"> <img class="slide12" alt="slide12"/> </div>
        <div class="slide"> <img class="slide13" alt="slide13"/> </div>
        <div class="slide"> <img class="slide14" alt="slide14"/> </div>
        <div class="slide"> <img class="slide15" alt="slide15"/> </div>
        <div class="slide"> <img class="slide16" alt="slide16"/> </div>
        <div class="slide"> <img class="slide17" alt="slide17"/> </div>
        <div class="slide"> <img class="slide18" alt="slide18"/> </div>
        <div class="slide"> <img class="slide19" alt="slide19"/> </div>
        <div class="slide"> <img class="slide20" alt="slide20"/> </div>
      </div>
    </div>
    
    <div class="slider-option">    
      <label class="slider-bar slider-bar1"></label>
      <label class="slider-bar slider-bar2"></label>
      <label class="slider-bar slider-bar3"></label>
      <label class="slider-bar slider-bar4"></label>
      <label class="slider-bar slider-bar5"></label>
      <label class="slider-bar slider-bar6"></label>
      <label class="slider-bar slider-bar7"></label>
      <label class="slider-bar slider-bar8"></label>
      <label class="slider-bar slider-bar9"></label>
      <label class="slider-bar slider-bar10"></label>
      <label class="slider-bar slider-bar11"></label>
      <label class="slider-bar slider-bar12"></label>
      <label class="slider-bar slider-bar13"></label>
      <label class="slider-bar slider-bar14"></label>
      <label class="slider-bar slider-bar15"></label>
      <label class="slider-bar slider-bar16"></label>
      <label class="slider-bar slider-bar17"></label>
      <label class="slider-bar slider-bar18"></label>
      <label class="slider-bar slider-bar19"></label>
      <label class="slider-bar slider-bar20"></label>
    </div>
  
    <div class="detail-container">
      <h1 class="title"></h1>
      <p class="description"></p>
    </div>
  </div>
`;

class SlideShowManual extends HTMLElement {
	constructor() {
		super();
		// Encapsulating the style of the slideshow
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));

		this.currentSlide = 1;
		const numberOfSlides = parseInt(this.getAttribute("numberOfSlides"));
		const slideWidth = parseInt(this.getAttribute("slideWidth"));
		const bgColor = parseInt(this.getAttribute("bgColor"));

		// Setting dynamic value and src img from set attribute
		this.shadowRoot.querySelector(".title").innerText = this.getAttribute("title");
		this.shadowRoot.querySelector(".description").innerText = this.getAttribute("description");
		this.shadowRoot.querySelector(".next-icon").src = this.getAttribute("nextIcon");
		this.shadowRoot.querySelector(".previous-icon").src = this.getAttribute("previousIcon");

		if (numberOfSlides >= 1) this.shadowRoot.querySelector(".slide1").src = this.getAttribute("slide01");
		if (numberOfSlides >= 2) this.shadowRoot.querySelector(".slide2").src = this.getAttribute("slide02");
		if (numberOfSlides >= 3) this.shadowRoot.querySelector(".slide3").src = this.getAttribute("slide03");
		if (numberOfSlides >= 4) this.shadowRoot.querySelector(".slide4").src = this.getAttribute("slide04");
		if (numberOfSlides >= 5) this.shadowRoot.querySelector(".slide5").src = this.getAttribute("slide05");
		if (numberOfSlides >= 6) this.shadowRoot.querySelector(".slide6").src = this.getAttribute("slide06");
		if (numberOfSlides >= 7) this.shadowRoot.querySelector(".slide7").src = this.getAttribute("slide07");
		if (numberOfSlides >= 8) this.shadowRoot.querySelector(".slide8").src = this.getAttribute("slide08");
		if (numberOfSlides >= 9) this.shadowRoot.querySelector(".slide9").src = this.getAttribute("slide09");
		if (numberOfSlides >= 10) this.shadowRoot.querySelector(".slide10").src = this.getAttribute("slide10");
		if (numberOfSlides >= 11) this.shadowRoot.querySelector(".slide11").src = this.getAttribute("slide11");
		if (numberOfSlides >= 12) this.shadowRoot.querySelector(".slide12").src = this.getAttribute("slide12");
		if (numberOfSlides >= 13) this.shadowRoot.querySelector(".slide13").src = this.getAttribute("slide13");
		if (numberOfSlides >= 14) this.shadowRoot.querySelector(".slide14").src = this.getAttribute("slide14");
		if (numberOfSlides >= 15) this.shadowRoot.querySelector(".slide15").src = this.getAttribute("slide15");
		if (numberOfSlides >= 16) this.shadowRoot.querySelector(".slide16").src = this.getAttribute("slide16");
		if (numberOfSlides >= 17) this.shadowRoot.querySelector(".slide17").src = this.getAttribute("slide17");
		if (numberOfSlides >= 18) this.shadowRoot.querySelector(".slide18").src = this.getAttribute("slide18");
		if (numberOfSlides >= 19) this.shadowRoot.querySelector(".slide19").src = this.getAttribute("slide19");
		if (numberOfSlides >= 20) this.shadowRoot.querySelector(".slide20").src = this.getAttribute("slide20");

		for (let i = 20; i > numberOfSlides; i--) this.shadowRoot.querySelector(`.slide${i}`).remove(); // Removing excess slide image
		for (let i = 20; i > numberOfSlides; i--) this.shadowRoot.querySelector(`.slider-bar${i}`).remove(); // Removing excess slider button

		// Styling
		const contentContainer = this.shadowRoot.querySelector(".content-container").style;
		contentContainer.width = `${slideWidth}px`;
		contentContainer.border = `10px solid rgb(${bgColor}, ${bgColor}, ${bgColor})`;
		contentContainer.backgroundColor = `rgb(${bgColor}, ${bgColor}, ${bgColor})`;
		this.shadowRoot.querySelector(".slideshow").style.width = `${slideWidth}px`;
		this.shadowRoot.querySelector(".slides").style.width = `${100 * numberOfSlides}%`;
		this.shadowRoot.querySelector(".slide").style.width = `${100 / numberOfSlides}%`;
	}

	ChangeSlide(slidePage) {
		const numberOfSlides = parseInt(this.getAttribute("numberOfSlides"));
		const firstSlide = this.shadowRoot.querySelector(".first-slide"); // Origin make to base the movement of the slide

		// Move only the slide from slide 1 to No. of slides
		if (1 <= slidePage && slidePage <= numberOfSlides) {
			firstSlide.style.marginLeft = `${-(slidePage - 1) * (100 / numberOfSlides)}%`; // Move the slides
			this.shadowRoot.querySelector(`.slider-bar${this.currentSlide}`).style.backgroundColor = "transparent"; // change previous selected button to transparent
			this.shadowRoot.querySelector(`.slider-bar${slidePage}`).style.backgroundColor = "#ffffff"; // change selected button to white
			this.currentSlide = slidePage; // update the currentSlide
		}
	}

	connectedCallback() {
		const numberOfSlides = parseInt(this.getAttribute("numberOfSlides"));
		if (numberOfSlides >= 1)
			this.shadowRoot.querySelector(".slider-bar1").addEventListener("click", () => this.ChangeSlide(1));
		if (numberOfSlides >= 2)
			this.shadowRoot.querySelector(".slider-bar2").addEventListener("click", () => this.ChangeSlide(2));
		if (numberOfSlides >= 3)
			this.shadowRoot.querySelector(".slider-bar3").addEventListener("click", () => this.ChangeSlide(3));
		if (numberOfSlides >= 4)
			this.shadowRoot.querySelector(".slider-bar4").addEventListener("click", () => this.ChangeSlide(4));
		if (numberOfSlides >= 5)
			this.shadowRoot.querySelector(".slider-bar5").addEventListener("click", () => this.ChangeSlide(5));
		if (numberOfSlides >= 6)
			this.shadowRoot.querySelector(".slider-bar6").addEventListener("click", () => this.ChangeSlide(6));
		if (numberOfSlides >= 7)
			this.shadowRoot.querySelector(".slider-bar7").addEventListener("click", () => this.ChangeSlide(7));
		if (numberOfSlides >= 8)
			this.shadowRoot.querySelector(".slider-bar8").addEventListener("click", () => this.ChangeSlide(8));
		if (numberOfSlides >= 9)
			this.shadowRoot.querySelector(".slider-bar9").addEventListener("click", () => this.ChangeSlide(9));
		if (numberOfSlides >= 10)
			this.shadowRoot.querySelector(".slider-bar10").addEventListener("click", () => this.ChangeSlide(10));
		if (numberOfSlides >= 11)
			this.shadowRoot.querySelector(".slider-bar11").addEventListener("click", () => this.ChangeSlide(11));
		if (numberOfSlides >= 12)
			this.shadowRoot.querySelector(".slider-bar12").addEventListener("click", () => this.ChangeSlide(12));
		if (numberOfSlides >= 13)
			this.shadowRoot.querySelector(".slider-bar13").addEventListener("click", () => this.ChangeSlide(13));
		if (numberOfSlides >= 14)
			this.shadowRoot.querySelector(".slider-bar14").addEventListener("click", () => this.ChangeSlide(14));
		if (numberOfSlides >= 15)
			this.shadowRoot.querySelector(".slider-bar15").addEventListener("click", () => this.ChangeSlide(15));
		if (numberOfSlides >= 16)
			this.shadowRoot.querySelector(".slider-bar16").addEventListener("click", () => this.ChangeSlide(16));
		if (numberOfSlides >= 17)
			this.shadowRoot.querySelector(".slider-bar17").addEventListener("click", () => this.ChangeSlide(17));
		if (numberOfSlides >= 18)
			this.shadowRoot.querySelector(".slider-bar18").addEventListener("click", () => this.ChangeSlide(18));
		if (numberOfSlides >= 19)
			this.shadowRoot.querySelector(".slider-bar19").addEventListener("click", () => this.ChangeSlide(19));
		if (numberOfSlides >= 20)
			this.shadowRoot.querySelector(".slider-bar20").addEventListener("click", () => this.ChangeSlide(20));
		this.shadowRoot.querySelector(".next-container").addEventListener("click", () => this.ChangeSlide(this.currentSlide + 1));
		this.shadowRoot
			.querySelector(".previous-container")
			.addEventListener("click", () => this.ChangeSlide(this.currentSlide - 1));
	}

	disconnectedCallback() {
		const numberOfSlides = parseInt(this.getAttribute("numberOfSlides"));
		if (numberOfSlides >= 1) this.shadowRoot.querySelector(".slider-bar1").removeEventListener();
		if (numberOfSlides >= 2) this.shadowRoot.querySelector(".slider-bar2").removeEventListener();
		if (numberOfSlides >= 3) this.shadowRoot.querySelector(".slider-bar3").removeEventListener();
		if (numberOfSlides >= 4) this.shadowRoot.querySelector(".slider-bar4").removeEventListener();
		if (numberOfSlides >= 5) this.shadowRoot.querySelector(".slider-bar5").removeEventListener();
		if (numberOfSlides >= 6) this.shadowRoot.querySelector(".slider-bar6").removeEventListener();
		if (numberOfSlides >= 7) this.shadowRoot.querySelector(".slider-bar7").removeEventListener();
		if (numberOfSlides >= 8) this.shadowRoot.querySelector(".slider-bar8").removeEventListener();
		if (numberOfSlides >= 9) this.shadowRoot.querySelector(".slider-bar9").removeEventListener();
		if (numberOfSlides >= 10) this.shadowRoot.querySelector(".slider-bar10").removeEventListener();
		if (numberOfSlides >= 11) this.shadowRoot.querySelector(".slider-bar11").removeEventListener();
		if (numberOfSlides >= 12) this.shadowRoot.querySelector(".slider-bar12").removeEventListener();
		if (numberOfSlides >= 13) this.shadowRoot.querySelector(".slider-bar13").removeEventListener();
		if (numberOfSlides >= 14) this.shadowRoot.querySelector(".slider-bar14").removeEventListener();
		if (numberOfSlides >= 15) this.shadowRoot.querySelector(".slider-bar15").removeEventListener();
		if (numberOfSlides >= 16) this.shadowRoot.querySelector(".slider-bar16").removeEventListener();
		if (numberOfSlides >= 17) this.shadowRoot.querySelector(".slider-bar17").removeEventListener();
		if (numberOfSlides >= 18) this.shadowRoot.querySelector(".slider-bar18").removeEventListener();
		if (numberOfSlides >= 19) this.shadowRoot.querySelector(".slider-bar19").removeEventListener();
		if (numberOfSlides >= 20) this.shadowRoot.querySelector(".slider-bar20").removeEventListener();
		this.shadowRoot.querySelector(".next-container").removeEventListener();
		this.shadowRoot.querySelector(".previous-container").removeEventListener();
	}
}

window.customElements.define("slide-show-manual", SlideShowManual);
