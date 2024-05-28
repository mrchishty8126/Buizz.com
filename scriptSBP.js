// JavaScript to trigger the modal to open after 5 seconds
window.addEventListener('load', (event) => {
  setTimeout(() => {
    var myModal = new bootstrap.Modal(document.getElementById('popUpForm'), {
      keyboard: false
    });
    myModal.show();
  }, 2000); // 5000 milliseconds = 5 seconds
});



// Like Button Business row Js
// Select the button by its class
const likeButton = document.querySelector('.like-btn');
// Add a click event listener to the button
likeButton.addEventListener('click', function () {
  // Select the image inside the button
  const heartImage = likeButton.querySelector('.business-svg-heart');

  // Check the current source of the image
  if (heartImage.src.includes('vend_heart_favourite_icon_blue.svg')) {
    // If it's the blue heart, change it to the red heart
    heartImage.src = '/dummy/SVGs/fill_redheart.svg';
  } else {
    // If it's the red heart, change it back to the blue heart (optional)
    heartImage.src = '/dummy/SVGs/vend_heart_favourite_icon_blue.svg';
  }
});

// Like Button Bottom Bar Js
// Select the button by its class
const likeBotButton = document.querySelector('.like-btn2');
likeBotButton.addEventListener('click', function () {
  const heart2Image = likeBotButton.querySelector('.bottom-svg-heart');
  if (heart2Image.src.includes('vend_heart_favourite_icon_blue.svg')) {
    heart2Image.src = '/dummy/SVGs/fill_redheart.svg';
  } else {
    heart2Image.src = '/dummy/SVGs/vend_heart_favourite_icon_blue.svg';
  }
});

// Page Scroll JS for bottom bar
window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > 599 && currentScroll > 0) {
    // Scroll Down
    document.getElementById("bottomBar").classList.add("show-bottom-bar");
  } else {
    // Scroll Up
    document.getElementById("bottomBar").classList.remove("show-bottom-bar");
  }
}, false);


// Dynamic Star Rating JS
$(':radio').change(function() {
  console.log('New rating: ' + this.value);
});




// Handle the login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  // Process form data here
  console.log('Name:', document.getElementById('nameInput').value);
  console.log('Phone:', document.getElementById('phoneInput').value);
  console.log('Email:', document.getElementById('emailInput').value);
  // Close the modal
  var loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
  loginModal.hide();
});



// Paragraph extend JS
function toggleReadMore(btn) {
  var paragraph = btn.parentNode.querySelector('.fixed-height-paragraph');
  if (paragraph.classList.contains("expanded")) {
    paragraph.classList.remove("expanded");
    btn.textContent = "Read more";
  } else {
    paragraph.classList.add("expanded");
    btn.textContent = "Read less";
  }
}


// Quantity inc/dec button JS
// Get the input element
const quantityInput = document.querySelector('.pro-qty input');
// Get the increment and decrement buttons
const incButton = document.querySelector('.pro-qty .inc');
const decButton = document.querySelector('.pro-qty .dec');
let quantity = 1;
// Increment button click event
incButton.addEventListener('click', () => {
  quantity++;
  quantityInput.value = quantity;
});
// Decrement button click event
decButton.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantityInput.value = quantity;
  }
});


// Quik View Image gallery JS
// JavaScript function to change the main product image
function changeImage(element) {
  // Get the 'src' attribute of the clicked thumbnail
  var newImageSrc = element.getAttribute('src');
  // Set the 'src' attribute of the main product image to the new image
  document.getElementById('main-image').setAttribute('src', newImageSrc);
}