// Handle Google Sign-In response
function handleGoogleCredentialResponse(response) {
  console.log("Google Token:", response.credential);

  // Send token to backend
  fetch('/auth/google', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ credential: response.credential })
  })
  .then(res => res.json())
  .then(data => {
    console.log('Google User:', data);
    // redirect or update UI
  })
  .catch(error => console.error('Google Login Error:', error));
}

// Facebook SDK init
window.fbAsyncInit = function () {
  FB.init({
    appId: 'YOUR_FACEBOOK_APP_ID', // Replace later
    cookie: true,
    xfbml: true,
    version: 'v20.0'
  });
};

// Facebook login callback
function checkLoginState() {
  FB.getLoginStatus(function (response) {
    if (response.status === 'connected') {
      FB.api('/me', { fields: 'name,email,picture' }, function (userData) {
        console.log('Facebook User:', userData);

        fetch('/auth/facebook', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
          console.log('Facebook Backend Response:', data);
        })
        .catch(err => console.error('Facebook Login Error:', err));
      });
    }
  });
}

function openModal() {
    document.getElementById("loginModal").style.display = "flex";
  }

  function showSignupForm(event) {
    event.preventDefault();
    document.getElementById("signupForm").style.display = "flex";
  }

  function showLoginPopup(event) {
    event.preventDefault();
    document.getElementById("loginPopup").style.display = "flex";
  }

  function closeLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
  }

  window.onclick = function(event) {
    let modal = document.getElementById("loginModal");
    let loginPopup = document.getElementById("loginPopup");
    
    if (event.target === modal) {
      modal.style.display = "none";
      document.getElementById("signupForm").style.display = "none";
    }

    if (event.target === loginPopup) {
      loginPopup.style.display = "none";
    }
  };