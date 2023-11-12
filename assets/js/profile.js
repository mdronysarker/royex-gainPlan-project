
// ///////////////////////// FORM PAGE-> PROFILE EDDIT FORM
const edditForm = document.querySelector(".form-eddit");
const profileModal = document.querySelector(".modal-profile");
const closeProfileModal = document.querySelector(".close-profile-modal i");
const modalOverlayProfie = document.querySelector(".modal-overlay-profile");
// const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
const bodyprofileBody = document.body;
edditForm.addEventListener("click", () => {
  console.log('you clicked the edditform')
profileModal.classList.remove("modal-profile");
closeProfileModal.addEventListener("click", () => {
      profileModal.classList.add("modal-profile");
      modalOverlayProfie.classList.add("hidden");
      bodyprofileBody.style.position = "static";
    });

    modalOverlayProfie.classList.remove("hidden");
    bodyprofileBody.style.position = "fixed";
  });
// ///////////////////////// PROFILE PAGE PROFILE ENDS