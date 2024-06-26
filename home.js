document.addEventListener('DOMContentLoaded', function() {
    // Get popup and close button elements
    var popup = document.getElementById('popup');
    var closeButton = document.getElementById('close-popup');
  
    // Function to open the popup
    function openPopup() {
      popup.style.display = 'block';
      document.body.classList.add('popup-open'); // Hide scrollbar when popup is open
    }
  
    // Function to close the popup
    function closePopup() {
      popup.style.display = 'none';
      document.body.classList.remove('popup-open'); // Show scrollbar when popup is closed
    }
  
    // Event listener to open the popup when "Others" link is clicked
    document.getElementById('others-link').addEventListener('click', function() {
      openPopup();
    });
  
    // Event listener to close the popup when close button is clicked
    closeButton.addEventListener('click', function() {
      closePopup();
    });
  
    // Event listener to close the popup when user clicks outside of it
    window.addEventListener('click', function(event) {
      if (event.target == popup) {
        closePopup();
      }
    });
  });
  

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
