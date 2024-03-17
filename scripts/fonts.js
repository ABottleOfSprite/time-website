document.addEventListener('DOMContentLoaded', function() {
  const fonts = ['Geist Mono', 'Fira Mono', 'Kode Mono', 'Monoton','Rubik Mono One']; // List of fonts
  let currentFontIndex = 0;

  // Function to update font of elements
  function updateElementsFont() {
    const element1 = document.querySelector('.element1');
    const element2 = document.querySelector('.element2');
    element1.style.fontFamily = fonts[currentFontIndex];
    element2.style.fontFamily = fonts[currentFontIndex];
  }

  // Function to change to the next font
  function changeFont() {
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    updateElementsFont();
  }

  // Trigger element to change font
  const fontTrigger = document.querySelector('.trigger');
  fontTrigger.addEventListener('click', changeFont);

  // Initialize font of elements
  updateElementsFont();
});