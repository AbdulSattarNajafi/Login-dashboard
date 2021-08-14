'use strict';

const imageContainer = document.querySelector('#image-content .main-imageContainer');
const formContent = document.querySelector('#form-content');
const cancelBtn = document.querySelector('.cancel-btn');
const circles = document.querySelectorAll('.pin-input');
const pinBtns = document.querySelectorAll('.number_btn');
const deleteBtn = document.querySelector('#detele_btn');
const clearBtn = document.querySelector('#clear_btn');


const userPin = 127804;
let userPasword = [];
let counter = 0;

pinBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    counter++;

    userPasword.push(btn.dataset.value);

    const checkPin = Number(userPasword.join(''));

    

    if(counter > 6) {
      clearPins();
    }
    
    activeCircle();

    if(userPasword.length === 6 && checkPin === userPin && counter === 6) {
      window.location.href = 'cards.html';
    }

  })
});

// active circles
function activeCircle() {
  userPasword.forEach(( _, i) => {
    circles[i].classList.add('active');
  });
}

// Event handler for deleting
deleteBtn.addEventListener('click', function(e) {
  e.preventDefault();

  counter--;
  userPasword.pop();
  circles.forEach(el => {
    el.classList.remove('active')
  });
  activeCircle();
});

// Event handler for clearing
clearBtn.addEventListener('click', clearPins)

// clearning
function clearPins() {
  userPasword = [];
  counter = 0;

  circles.forEach(el => {
    el.classList.remove('active')
  });
};


// Event handler for Cancel BTN
cancelBtn.addEventListener('click', () => {
  window.location.href = 'screen-saver.html';
});

// Event handler when the page realoads
window.addEventListener('load', pageLoads);

// load page
function pageLoads() {
  imageContainer.style.opacity = 1;
  imageContainer.style.transform = 'scale(1)';
  formContent.style.transform = 'translateX(0%)';
};

// Set back to normal
function setToNormal() {
  imageContainer.style.opacity = '.1';
  imageContainer.style.transform = 'scale(.4)';
  formContent.style.transform = 'translateX(100%)';
}