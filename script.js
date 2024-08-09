// Wait for the HTML document to be fully loaded and parsed
document.addEventListener('DOMContentLoaded', function () {
  
  // Select the button element with the ID 'toggleButton'
  const toggleButton = document.getElementById('toggleButton');
  
  // Add a click event listener to the button
  toggleButton.addEventListener('click', function () {
    
    // Get the current value of the 'aria-pressed' attribute
    // 'aria-pressed' indicates if the button is currently pressed or not
    const isPressed = toggleButton.getAttribute('aria-pressed') === 'true';
    
    // Toggle the value of 'aria-pressed'
    // If it was 'true', set it to 'false'
    toggleButton.setAttribute('aria-pressed', !isPressed);
    

    // If it was pressed, update text to 'Learn More'; otherwise, 'Learn Less'
    toggleButton.textContent = isPressed ? 'Learn More' : 'Learn Less';
  });
});
