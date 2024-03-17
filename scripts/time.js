function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById('time');
  const timeCopyElement = document.getElementById('timeCopy');
  
  let hour = now.getHours().toString().padStart(2, '0');
  let minute = now.getMinutes().toString().padStart(2, '0');
  let second = now.getSeconds().toString().padStart(2, '0');
  let time = hour + ':' + minute + ':' + second;
  
  timeElement.textContent = time;
  timeCopyElement.textContent = time;
}

// Update time initially and then every second
updateTime();
setInterval(updateTime, 1000);

// Hover effect
const trigger = document.querySelector('.trigger');
trigger.addEventListener('mouseenter', function() {
  const element1 = document.getElementById('time');
  const element2 = document.getElementById('timeCopy');
  const timeUnits = document.getElementById('time-units');

  element1.style.fontSize = '210px';
  element2.style.fontSize = '230px';
  timeUnits.style.columngap = '150px';

});

trigger.addEventListener('mouseleave', function() {
  const element1 = document.getElementById('time');
  const element2 = document.getElementById('timeCopy');
  const timeUnits = document.getElementById('time-units');

  element1.style.fontSize = '200px';
  element2.style.fontSize = '200px';
  timeUnits.style.columngap = '120px';
}); 

