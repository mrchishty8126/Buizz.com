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
    heartImage.src = 'SVGs/fill_redheart.svg';
  } else {
    // If it's the red heart, change it back to the blue heart (optional)
    heartImage.src = 'SVGs/vend_heart_favourite_icon_blue.svg';
  }
});
