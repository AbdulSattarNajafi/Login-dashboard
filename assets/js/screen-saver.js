'use strict';

const liveFloorview = document.querySelector('#content-container .live-floorview');
const workstation = document.querySelector('#screen-saver .work-station');
const dateContainer = document.querySelector('#current_year');
const timeContainer = document.querySelector('#current_time');

// Effects when the page loads
window.addEventListener('load', function() {
  loadEffect();
});

window.addEventListener('click', PinPage);
window.addEventListener('keydown', PinPage);
window.addEventListener('scroll', PinPage);

function PinPage() {
  setBackToNoraml();
  setTimeout(function() {
    window.location.href = 'index.html';
  }, 400)
}


// page load effect
function loadEffect() {
  liveFloorview.style.transform = 'scale(1)';
  liveFloorview.style.opacity = '1';
  workstation.style.transform = 'translateX(0%)';
};

// Set back to normal
function setBackToNoraml() {
  liveFloorview.style.transform = 'scale(.4)';
  liveFloorview.style.opacity = '0';
  workstation.style.transform = 'translateX(100%)'
};

let date = new Date();

const options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};
  
const currentYear = new Intl.DateTimeFormat('en-US', options).format(date);
dateContainer.textContent = currentYear;

function displayTime() {
  const currentTime = new Intl.DateTimeFormat('en-us', {timeStyle: "short"}).format(Date.now());
  timeContainer.textContent = currentTime;
}
displayTime();

setInterval(displayTime, 1000);
