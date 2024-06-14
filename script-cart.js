// Quantity inc/dec button JS
// Get all the quantity input elements
const quantityInputs = document.querySelectorAll('.pro-qty input');
// Get all the increment and decrement buttons
const incButtons = document.querySelectorAll('.pro-qty .inc');
const decButtons = document.querySelectorAll('.pro-qty .dec');

// Loop through each quantity input and add event listeners to the corresponding buttons
quantityInputs.forEach((quantityInput, index) => {
  let quantity = parseInt(quantityInput.value);

  // Increment button click event
  incButtons[index].addEventListener('click', () => {
    quantity++;
    quantityInput.value = quantity;
  });

  // Decrement button click event
  decButtons[index].addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityInput.value = quantity;
    }
  });
});