// Cursor Trail

document.addEventListener('DOMContentLoaded', function() {
  function createCursorTrail(event) {
    const text = document.createElement('span');
    text.classList.add('cursor-trail');
    text.textContent = Math.floor(Math.random() * 10); // Generate random number
    text.style.top = event.clientY + 'px';
    text.style.left = event.clientX + 'px';
    text.style.transform = 'rotate(' + Math.random() * 360 + 'deg)'; // Random rotation
    text.style.opacity = Math.random(); // Random opacity
    document.body.appendChild(text);
    // Trigger reflow to ensure transition
    void text.offsetWidth;
    text.style.opacity = '0';
    setTimeout(() => {
      text.style.opacity = '1';
      setTimeout(() => {
        text.style.opacity = '0';
        text.addEventListener('transitionend', () => {
          document.body.removeChild(text);
        });
      }, 1000); // Adjust duration of fade out
    }, 100); // Adjust delay before fading in
  }

  document.addEventListener('mousemove', createCursorTrail);
});

//Custom cursor

document.addEventListener('mousemove', function(event) {
  const cursor = document.querySelector('.custom-cursor');
  cursor.style.left = event.clientX + 'px';
  cursor.style.top = event.clientY + 'px';
});