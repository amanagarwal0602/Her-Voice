// === Show Login Modal ===
// This function displays the login modal and hides the signup modal if open.
function openModal() {
  document.getElementById("loginModal").style.display = "flex";
  document.getElementById("signupModal").style.display = "none";
}

// === Show Signup Modal ===
// This function displays the signup modal and hides the login modal if open.
function openSignup() {
  document.getElementById("signupModal").style.display = "flex";
  document.getElementById("loginModal").style.display = "none";
}

// === Switch to Login Modal ===
// Called from the signup form to go back to login form.
function switchToLogin() {
  document.getElementById("signupModal").style.display = "none";
  document.getElementById("loginModal").style.display = "flex";
}

// === Close Modal on Outside Click ===
// This closes either modal if user clicks outside the modal content area.
window.onclick = function (event) {
  const loginModal = document.getElementById("loginModal");
  const signupModal = document.getElementById("signupModal");

  if (event.target === loginModal) loginModal.style.display = "none";
  if (event.target === signupModal) signupModal.style.display = "none";
};
