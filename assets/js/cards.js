'use strict';

const pageWrapper = document.querySelector('.ContainerMain .page-wrapper');
window.addEventListener('load', function() {
  pageWrapper.style.opacity = 1;
});

document.getElementById('footer_year').innerHTML = new Date().getFullYear();

// Toggling the Side menu
const menuToggleBtn = document.querySelector('.ToggleBtn');
const sideBar = document.querySelector('.SidebarWidth');
const sideMenu = document.querySelector('.SidebarWidth .sidebar');

menuToggleBtn.addEventListener('click', () => {
  sideBar.classList.toggle('SideberRemove');
});

sideMenu.addEventListener('mouseenter', () => {
  sideBar.classList.remove('SideberRemove')
});
sideMenu.addEventListener('mouseleave', () => {
  sideBar.classList.add('SideberRemove')
});


(function(){
  const cardsSlide = document.querySelector('.cards-result-slide');
  const orverlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('#close-slide');
  const tabsContents = document.querySelector('.cards-result-slide .tab-content');
  const slotContent = document.querySelector('#slot-info-tab'); 
  const slotBtn = document.querySelector('.nav-item .slot-info-tab');
  const playerContent = document.querySelector('#player-info-tab'); 
  const playerBtn = document.querySelector('.nav-item .player-info-tab');

  const cards = document.querySelectorAll('#cards-container .card')

  closeBtn.addEventListener('click', closeSlide);
  orverlay.addEventListener('click', closeSlide);
  tabsContents.addEventListener('click', closeSlide);

  function closeSlide() {
    cards.forEach(card => {
    card.classList.remove('active-card');
    });
    cardsSlide.classList.remove('show');
    cardsSlide.classList.add('hide');
    orverlay.style.display = 'none';
  };

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const currentCard = e.currentTarget;
      currentCard.classList.add('active-card')
      cardsSlide.classList.remove('hide');
      cardsSlide.classList.add('show');
      orverlay.style.display = 'block';
      window.scrollTo(0,0);
    })
  });

  slotBtn.addEventListener('click', () => {
    slotContent.style.display = 'block';
    playerContent.style.display = 'none';
    slotBtn.classList.add('active');
    playerBtn.classList.remove('active');
  });

  playerBtn.addEventListener('click', () => {
    slotContent.style.display = 'none';
    playerContent.style.display = 'block';
    slotBtn.classList.remove('active');
    playerBtn.classList.add('active');
  });
})();


//Graphs
new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  data: {
    labels: [" ", " ", " ", " ", " ", " ", " "],
    datasets: [
      {
        label: "%",
        backgroundColor: ["#8bb8ca3d", "#8bb8ca3d","#8bb8ca3d","#8bb8ca3d","#8bb8ca3d","#8bb8ca3d","#8BB8CA"],
        data: [50, 60, 80, 60, 50, 20, 100],
        borderWidth: 1,
        borderRadius: 14,
      }
    ]
  },
  options: {
    plugins: {
      legend: {display:false,
          labels: {display: false}
      },
  },
    scales: {
      y: {display: false},
      X: {display: false},
    }
  }
});
//Donut Chart
const options = {
  series: [83],
  chart: {
  height: 170,
  type: 'radialBar',
  offsetY: -10
},
plotOptions: {
  radialBar: {
    startAngle: -135,
    endAngle: 135,
    hollow: {
      margin: 5,
      size: '74%',
      background: 'transparent',
      image: undefined,
    },
    track: {
      background: '#B4B7BD',
      strokeWidth: '20px',
      margin: 5,
    },
    dataLabels: {
      name: {
        fontSize: '0px',
        color: undefined,
        offsetY: 0
      },
      value: {
        offsetY: -16,
        fontSize: '16px',
        color: 'var(--light-textTo-dark)',
        formatter: function (val) {
          return val + "%";
        }
      }
    }
  }
},
colors: ['#F6A704'],
fill: {
  type: 'gradient',
  gradient: {
    shade: 'dark',
    shadeIntensity: 0.15,
    inverseColors: false,
    opacityFrom: 1,
    opacityTo: 1,
    stops: [0, 50, 65, 91]
  },
},
stroke: {
  lineCap: 'round',
  width: 1,
},
};
const chart = new ApexCharts(document.querySelector("#donut-chart"), options);
chart.render();


function idleTimer() {
  let t;
  //window.onload = resetTimer;
  window.onmousemove = resetTimer; // catches mouse movements
  window.onmousedown = resetTimer; // catches mouse movements
  window.onclick = resetTimer;     // catches mouse clicks
  window.onscroll = resetTimer;    // catches scrolling
  window.onkeypress = resetTimer;  //catches keyboard actions

  function logout() {
      window.location.href = 'screen-saver.html';  //Adapt to actual logout script
  }

 function resetTimer() {
      clearTimeout(t);
      t = setTimeout(logout, 60000);  // time is in milliseconds (1000 is 1 second)
  }
}
idleTimer();
