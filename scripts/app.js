// Project Modal
const projectContainer = document.querySelector("#projects-container");

projectContainer.addEventListener("click", (event) => {
	target = event.target;

	switch (target.id) {
		case "aamir":
			console.log("Aamir Here");
			break;
	}
});

// Modal Creator

// Page swipe
let swiper1 = new Swiper(".swiper1", {
	effect: "coverflow",
	loop: true,
	grabCursor: false,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
		clickable: true,
	},
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
		clickable: true,
	},
});
