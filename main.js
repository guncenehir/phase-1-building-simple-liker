// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const artHearts = document.querySelectorAll(".like-glyph");

function likingCallback(e) {
  const heart = e.target;
  mimicServerCall("bogusUrl")
    .then(function () {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch(function (error) {
      const hiddenModal = document.getElementById("modal");
      hiddenModal.className = "";
      modal.innerText = error;
      setTimeout(() => (hiddenModal.className = "hidden"), 3000);
    });
}

for (const glyph of artHearts) {
  glyph.addEventListener("click", likingCallback);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
