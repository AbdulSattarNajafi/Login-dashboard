'use strict';

// Daek Mode and Light Mode functionalities
const circleToggle = document.querySelector('#darkmode-toggle .circle');
const brandLogo = document.querySelector('.brand-logo');
const darkLogo = brandLogo.dataset.darklogo;
const lightLogo = brandLogo.dataset.lightlogo;

const backgroundImage = document.querySelector('.bg-image');
const darkImage = backgroundImage.dataset.darkimg;
const lightImage = backgroundImage.dataset.lightimg;


let lightMode = localStorage.getItem('lightMode');

// Enabling light Mode
const enabledLightMode = () => {
  document.body.classList.add('lightmode');
  localStorage.setItem('lightMode', 'enabled');
};

// Disabling Light Mode
const disabledLightMode = () => {
  document.body.classList.remove('lightmode');
  localStorage.setItem('lightMode', null)
}

// Checking if the window refreshed
if(lightMode === 'enabled') {
  enabledLightMode();
  circleToggle.classList.add('circle-move');
  brandLogo.src = `${lightLogo}`;
  backgroundImage.src = `${lightImage}`;
}


// const darkImg = backgroundImage.dataset.darkimg;
// const lightImg = backgroundImage.dataset.lightimg;

// Eventlistenr for the Toggle Button
circleToggle.addEventListener('click', () => {

  lightMode = localStorage.getItem('lightMode');

  if(lightMode !== 'enabled'){
    enabledLightMode();
    circleToggle.classList.add('circle-move');
    brandLogo.src = `${lightLogo}`;
    backgroundImage.src = `${lightImage}`;
  }else {
    disabledLightMode();
    circleToggle.classList.remove('circle-move');
    brandLogo.src = `${darkLogo}`;
    backgroundImage.src = `${darkImage}`;
  }

});



