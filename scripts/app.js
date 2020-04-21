// Project Info

// Holds All Project Info
const projectInfo = {
	aamir: {
		name: "Modeling By Aamir",
		liveLink: "https://airhacker.github.io/ModelingByAamir/",
		codeLink: "https://github.com/Airhacker/ModelingByAamir",
		video: "./videos/aamir.mp4",
		projDesc:
			"Modeling Portfolio website for a client, with emphasis on responsive design and animations. The website utilizes the Javascript library GSAP for all the animation.",
	},
	tutor: {
		name: "Math Tutoring Experts",
		liveLink: "https://airhacker.github.io/Math-Tutoring-Experts/",
		codeLink: "https://github.com/Airhacker/Math-Tutoring-Experts",
		video: "./videos/tutor.mp4",
		projDesc:
			"Landing page website for a math tutoring center. The website utilizes CSS animations, particularly with SVG's and is responsive for all media types.",
	},
	mirror: {
		name: "MIRROR-MIRROR.",
		liveLink: "https://airhacker.github.io/MIRROR-MIRROR./",
		codeLink: "https://github.com/Airhacker/MIRROR-MIRROR.",
		video: "./videos/mirror.mp4",
		projDesc:
			"Mens outfit prototyping website. Uses THREE.js to provide a 3D model, in order to see how the outift selected by the user is visually going to look.",
	},
	travelly: {
		name: "Travelly",
		liveLink: "https://airhacker.github.io/Travelly/",
		codeLink: "https://github.com/Airhacker/Travelly",
		video: "./videos/travelly.mp4",
		projDesc:
			"Website for a travel agency, used as a landing page to direct customers to all the available services.",
	},
};

// Project Modal
const projectContainer = document.querySelector("#projects-container");

projectContainer.addEventListener("click", (event) => {
	target = event.target;

	switch (target.id) {
		case "aamir":
			projectModal(
				projectInfo.aamir.name,
				projectInfo.aamir.liveLink,
				projectInfo.aamir.codeLink,
				projectInfo.aamir.projDesc,
				projectInfo.aamir.video
			);
			break;
		case "tutor":
			projectModal(
				projectInfo.tutor.name,
				projectInfo.tutor.liveLink,
				projectInfo.tutor.codeLink,
				projectInfo.tutor.projDesc,
				projectInfo.tutor.video
			);
			break;
		case "mirror":
			projectModal(
				projectInfo.mirror.name,
				projectInfo.mirror.liveLink,
				projectInfo.mirror.codeLink,
				projectInfo.mirror.projDesc,
				projectInfo.mirror.video
			);
			break;
		case "travelly":
			projectModal(
				projectInfo.travelly.name,
				projectInfo.travelly.liveLink,
				projectInfo.travelly.codeLink,
				projectInfo.travelly.projDesc,
				projectInfo.travelly.video
			);
			break;
	}
});

// Modal Creator

let projModal = document.querySelector(".project-modal");
let projName = document.querySelector("#project-name");
let projVideo = document.querySelector("#project-video");
let projDesc = document.querySelector("#project-info");
let liveBtn = document.querySelector("#live-btn");
let codeBtn = document.querySelector("#code-btn");

function projectModal(name, liveLink, codeLink, projInfo, video) {
	// Modal General Settings
	projModal.style.display = "block";
	projModal.style.opacity = 1;
	// Name of Project
	projName.innerHTML = name;
	// Description for Project
	projDesc.innerHTML = projInfo;

	liveBtn.href = liveLink;
	codeBtn.href = codeLink;

	projVideo.src = video;

	console.log("I work");
}

// Modal CLose Button

const closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click", () => {
	projModal.style.display = "none";
});

// Page swipe ---------------------------------------------------------------
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
