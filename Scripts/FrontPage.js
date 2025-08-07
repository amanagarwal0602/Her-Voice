    function openModal() {
      document.getElementById("loginModal").style.display = "flex";
    }

    window.onclick = function(event) {
      let modal = document.getElementById("loginModal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

    // Open login modal
function openModal() {
  document.getElementById("loginModal").style.display = "flex";
  document.getElementById("signupModal").style.display = "none";
}

// Open signup modal
function openSignup() {
  document.getElementById("signupModal").style.display = "flex";
  document.getElementById("loginModal").style.display = "none";
}

// Back to login modal
function switchToLogin() {
  document.getElementById("signupModal").style.display = "none";
  document.getElementById("loginModal").style.display = "flex";
}

// Close if clicked outside modal
window.onclick = function (event) {
  const loginModal = document.getElementById("loginModal");
  const signupModal = document.getElementById("signupModal");
  if (event.target === loginModal) loginModal.style.display = "none";
  if (event.target === signupModal) signupModal.style.display = "none";
};
