/* Description: Custom JS file */
/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
  scrollFunction();
  scrollFunctionBTT(); // back to top button
};

window.onload = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").classList.add("top-nav-collapse");
  } else if (document.documentElement.scrollTop < 30) {
    document.getElementById("navbar").classList.remove("top-nav-collapse");
  }
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");
let navLink = document.querySelectorAll(".nav-link");
let dropdownToggle = document.querySelector(".dropdown-toggle");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", () => {
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
  });
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// Hover on desktop
function toggleDropdown(e) {
  const _d = e.target.closest(".dropdown");
  let _m = document.querySelector(".dropdown-menu", _d);

  setTimeout(
    function () {
      const shouldOpen = _d.matches(":hover");
      _m.classList.toggle("show", shouldOpen);
      _d.classList.toggle("show", shouldOpen);

      _d.setAttribute("aria-expanded", shouldOpen);
    },
    e.type === "mouseleave" ? 300 : 0
  );
}

// On hover
const dropdownCheck = document.querySelector(".dropdown");

if (dropdownCheck !== null) {
  document
    .querySelector(".dropdown")
    .addEventListener("mouseleave", toggleDropdown);
  document
    .querySelector(".dropdown")
    .addEventListener("mouseover", toggleDropdown);

  // On click
  document.querySelector(".dropdown").addEventListener("click", (e) => {
    const _d = e.target.closest(".dropdown");
    let _m = document.querySelector(".dropdown-menu", _d);
    if (_d.classList.contains("show")) {
      _m.classList.remove("show");
      _d.classList.remove("show");
    } else {
      _m.classList.add("show");
      _d.classList.add("show");
    }
  });
}

/////////////////////////// FORM PAGE STARTS
//////////////////////// menu link
const investmentMainBox = document.querySelectorAll(".investment-main-box");
const dropdownLink = document.querySelectorAll(".dropdown-link");
const catagoryItemBox = document.querySelectorAll(".catagory-item-box");
const iconLeft = document.querySelectorAll(".icon-left");
const mainLink = document.querySelectorAll(".main-link");
const formStepList = document.querySelectorAll(".form-stepper-list");
const menuBox = document.querySelector(".menu-box");
const advisorItems = document.querySelectorAll(".catagory-item-box-advisor");
const advisorDetails = document.querySelectorAll(".advisor-details");
const formStep = document.querySelectorAll('.form-step');

/////////////////////// ADVISOR ITEMS
advisorItems.forEach((advisorItem, i) => {
  advisorItem.addEventListener("click", () => {
    advisorDetails[i].classList.toggle("d-none");
    if (!advisorDetails[i - 1].classList.contains("d-none")) {
      advisorDetails[i - 1].classList.toggle("d-none");
    }
  });
});

//////////////////////// MAIN MENU
for (let i = 0; i < mainLink.length; i++) {
  mainLink[i].addEventListener("click", function () {
    for (let j = 0; j < mainLink.length; j++) {
      if (j === i) {
        mainLink[j].classList.toggle("active");
      } else {
        mainLink[j].classList.remove("active");
      }
    }
    
    // Close any open form step
    for (let j = 0; j < formStep.length; j++) {
      if (!formStep[j].classList.contains("d-none")) {
        formStep[j].classList.add("d-none");
        mainLink[j].parentElement.classList.remove("showDropdown");
        iconLeft[j].classList.remove("active");
        break;
      }
    }

    for (let j = 0; j < investmentMainBox.length; j++) {
      if (j === i) {
        investmentMainBox[j].classList.toggle("d-none");
        mainLink[j].parentElement.classList.toggle("showDropdown");
        iconLeft[j].classList.toggle("active");
      } else {
        investmentMainBox[j].classList.add("d-none");
        mainLink[j].parentElement.classList.remove("showDropdown");
        iconLeft[j].classList.remove("active");
      }
    }

    for (let j = i - 1; j >= 0; j--) {
      if (!investmentMainBox[j].classList.contains("d-none")) {
        investmentMainBox[j].classList.add("d-none");
        mainLink[j].parentElement.classList.remove("showDropdown");
        iconLeft[j].classList.remove("active");
        break;
      }
    }
  });
}

///////////////////////// NAVIGATION FORM 
const navigateToFormStep = (stepNumber) => {
  // Hiding all steps
  document.querySelectorAll(".form-step").forEach((formStep) => {
    formStep.classList.add("d-none");
  });

  // mark all the steps as unfinished
  formStepList.forEach((formStepLi) => {
    formStepLi.classList.remove("active", "completed");
  });

  // mark the current step : current li step
  const currLiStep = document.querySelector('li[step="' + stepNumber + '"]');
  currLiStep.classList.remove("completed");
  currLiStep.classList.add("active");
  // looping each li step : complete

  // form steps
  document.querySelector("#step-" + stepNumber).classList.remove("d-none");
  investmentMainBox.forEach((mainBox) => {
    mainBox.classList.add("d-none");
  });
};

/////////////////////////// personal details form popup
const personalFormBtns = document.querySelectorAll(".personal-btn");
const personalForModal = document.querySelectorAll(".modal");
const closePersonalForModal = document.querySelectorAll(".close-modal");
const modalOverlay = document.querySelector(".modal-overlay");
// const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
const personalPageBody = document.body;

personalFormBtns.forEach((personalBtn, index) => {
  personalBtn.addEventListener("click", () => {
    personalForModal[index].classList.remove("modal");
    closePersonalForModal[index].addEventListener("click", () => {
      personalForModal[index].classList.add("modal");
      modalOverlay.classList.add("hidden");
      personalPageBody.style.position = "static";
    });
    modalOverlay.classList.remove("hidden");
    personalPageBody.style.position = "fixed";
  });
});


////////////////////////// step number: btn-navigate-form-step
document
  .querySelectorAll(".btn-navigate-form-step")
  .forEach((formNavigationBtn, index) => {
    formNavigationBtn.addEventListener("click", () => {
      const stepNumber = Number.parseInt(
        formNavigationBtn.getAttribute("step-num")
      );
      navigateToFormStep(stepNumber);
      // mainLink[index].parentElement.classList.add("showDropdown");
    });
  });

/////////////////////// dropdown-link : to nevigate same form step on click
dropdownLink.forEach((formLink, i) => {
  formLink.addEventListener("click", () => {
    investmentMainBox.forEach((mainBox) => {
      mainBox.classList.add("d-none");
    });
    navigateToFormStep(i + 1);
  });
});

///////////////////////// step number: BTN PERSONAL FORM STEP
const navigatePersonalFormStep = (stepNumber) =>{
  // form steps
  document.querySelector("#profile-" + stepNumber).classList.remove("d-none");
  investmentMainBox.forEach((mainBox) => {
    mainBox.classList.add("d-none");
  });
}
document
  .querySelectorAll(".btn-personal-form-step")
  .forEach((formNavigationBtn, index) => {
    formNavigationBtn.addEventListener("click", () => {
      const stepNumber = Number.parseInt(
        formNavigationBtn.getAttribute("step-num")
      );
      navigatePersonalFormStep(stepNumber);
      mainLink[index].parentElement.classList.add("showDropdown");
    });
  });

//////////////////////////////  box form-link : to nevigate same form step on click
catagoryItemBox.forEach((formLink, i) => {
  formLink.addEventListener("click", () => {
    investmentMainBox.forEach((mainBox) => {
      mainBox.classList.add("d-none");
    });
    navigateToFormStep(i + 1);
  });
});

////////////////////////// FORM EXPLANATION MARK
const exclamationLabel = document.querySelectorAll(".requirement-label-icon");
exclamationLabel.forEach((labelIcon, i) => {
  labelIcon.addEventListener("click", () => {
    let hiddenText = document.querySelectorAll(".hidden-text");
    hiddenText[i].classList.remove("d-none");
  });
});
///////////////////////// CLOSE MESSAGE
const closeHiddenText = document.querySelectorAll(".hidden-text i");
closeHiddenText.forEach((closeIcon, i) => {
  closeIcon.addEventListener("click", () => {
    let hiddenText = document.querySelectorAll(".hidden-text");
    hiddenText[i].classList.add("d-none");
  });
});
/////////////////////////// FORM PAGE ENDS


/* Card Slider - Swiper */
var cardSlider = new Swiper(".populer-blog", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

/* Card Slider - Swiper */
var cardSlider = new Swiper(".latest-blog", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
});
// >>>> plan-swiper >>>
var planSwiper = new Swiper(".plan-swiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    679: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// >>>> mySwiper >>>
var Swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },

  breakpoints: {
    575: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}
// counter up
let counterEl = document.querySelectorAll(".count");
let counterSection = document.querySelector(".counter-section");

//  scroll animation for counter
let CounterObserver = new IntersectionObserver(
  (entries) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;
    let speed = 10;
    counterEl.forEach((counterVal) => {
      function UpdateCounter() {
        const targetNumber = +counterVal.dataset.target;
        const initialNumber = +counterVal.innerText;
        const increment = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counterVal.innerText = String(
            Math.ceil(initialNumber + increment)
          ).padStart(2, "0");
          setTimeout(UpdateCounter, 70);
        }
      }
      UpdateCounter();
    });
  },
  { root: null, threshold: 0.3 }
);
CounterObserver.observe(counterSection);

// For glitebox

const lightbox = GLightbox({
  selector: "#my-gallery",
  touchNavigation: true,
  loop: true,
  autoplayVideos: true,
});

///////////////////////// PROFILE PAGE PROFILE STARTS
document.querySelector('.main-link-profile').addEventListener('click',()=>{
  document.querySelector('.investment-main-box-profile').classList.toggle('d-none') ;
  document.querySelector('.menu-box').classList.add('d-none') ;
})