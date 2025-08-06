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
