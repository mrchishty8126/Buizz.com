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