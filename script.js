const typeText = document.querySelector('.typeText');
const typeDiv = document.querySelector('.type-div');

const leftScroll = document.querySelector('.prev-arrow');
const rightScroll = document.querySelector('.next-arrow');
const scrollContainer = document.querySelector('.project-container');
const dots = document.querySelectorAll('.dot');

const height = window.innerHeight;
let clickCount = 0;
let view = 0;

const textToBeTyped = [
  {
    text: 'VUE',
    color: '#3fb27f',
    image: './images/vuejs-logo-60.png',
  },
  {
    text: 'REACT',
    color: '#61dafb',
    image: './images/react-logo-60.png',
    rotate: true,
  },
  {
    text: 'CSS',
    color: '#4a90e2',
    image: './images/css3-logo-60.png',
  },
  {
    text: 'JAVASCRIPT',
    color: '#f7df1e',
    image: './images/javascript-logo-60.png',
  },
  {
    text: 'SQL',
    color: '#e58e00',
    image: './images/data-regular-60.png',
  },
  {
    text: 'NODE',
    color: '#90c53f',
    image: './images/nodejs-logo-60.png',
  },
];
let arrayIndex = 0;
let stringIndex = 0;
let isAdding = true;
let stopLoop = false;

function playAnim() {
  setTimeout(function () {
    typeText.innerText = textToBeTyped[arrayIndex].text.slice(0, stringIndex);
    typeText.style.cssText = `color:${textToBeTyped[arrayIndex].color}; display:flex;`;
    if (isAdding) {
      if (stringIndex > textToBeTyped[arrayIndex].text.length) {
        const img = document.createElement('img');
        img.src = textToBeTyped[arrayIndex].image;
        img.style.cssText = `opacity:0;transition:1s;position:absolute; top:110px; left: calc(50% - 15px); transform: translateX(-50%)`;
        typeDiv.append(img);
        setTimeout(() => {
          if (textToBeTyped[arrayIndex].rotate) {
            img.className = 'rotate';
          }
          img.style.opacity = `1`;
        }, 0);
        isAdding = false;
        if (!stopLoop) {
          setTimeout(function () {
            playAnim();
            img.style.opacity = `0`;
            setTimeout(() => {
              img.remove();
            }, 1000);
          }, 3500);
        }
        return;
      } else {
        stringIndex++;
      }
    } else {
      if (stringIndex === 0) {
        isAdding = true;
        if (arrayIndex === textToBeTyped.length - 2) {
          stopLoop = true;
        }
        arrayIndex++;
      } else {
        stringIndex--;
      }
    }
    playAnim();
  }, 120);
}
setTimeout(() => {
  playAnim();
}, 1000);

rightScroll.addEventListener('click', function (e) {
  clearInterval(interval);
  if (clickCount === 5) {
    scrollContainer.scroll({
      top: 0,
      left: 0,
    });
    clickCount = 0;
    dots[5].classList.remove('selected-dot');
    dots[0].classList.add('selected-dot');
  } else {
    const width = window.innerWidth;
    scrollContainer.scrollLeft += width;
    dots[clickCount].classList.remove('selected-dot');
    clickCount++;
    dots[clickCount].classList.add('selected-dot');
  }
});

leftScroll.addEventListener('click', function (e) {
  clearInterval(interval);
  if (clickCount === 0) {
    scrollContainer.scroll({
      top: 0,
      left: window.innerWidth * 6,
    });
    clickCount = 5;
    dots[0].classList.remove('selected-dot');
    dots[5].classList.add('selected-dot');
  } else {
    const width = window.innerWidth;
    scrollContainer.scrollLeft -= width;
    dots[clickCount].classList.remove('selected-dot');
    clickCount--;
    dots[clickCount].classList.add('selected-dot');
  }
});

const interval = setInterval(() => {
  if (clickCount === 5) {
    scrollContainer.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    clickCount = 0;
    dots[5].classList.remove('selected-dot');
    dots[0].classList.add('selected-dot');
  } else {
    const width = window.innerWidth;
    scrollContainer.scrollBy({
      top: 0,
      left: +width,
      behavior: 'smooth',
    });
    dots[clickCount].classList.remove('selected-dot');
    clickCount++;
    dots[clickCount].classList.add('selected-dot');
  }
}, 12000);

dots.forEach(function (el, index) {
  el.addEventListener('click', function (e) {
    clearInterval(interval);
    const width = window.innerWidth;
    scrollContainer.scrollTo({
      top: 0,
      left: width * index,
    });
    dots[clickCount].classList.remove('selected-dot');
    clickCount = index;
    dots[clickCount].classList.add('selected-dot');
  });
});

window.addEventListener('resize', function (e) {
  scrollContainer.scrollTo({
    top: 0,
    left: 0,
  });
  dots[clickCount].classList.remove('selected-dot');
  clickCount = 0;
  dots[clickCount].classList.add('selected-dot');
});

let scrollTimeout;

window.addEventListener('scroll', function (e) {
  clearTimeout(scrollTimeout);
  if (window.scrollY + 200 > height && window.scrollY < height * 2 - height / 1.2) {
    handleScroll(1);
  }
});

function handleScroll(type) {
  if (type == 1) {
    scrollTimeout = setTimeout(() => {
      clearTimeout(scrollTimeout);
      console.log('scrolls');
      document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    }, 300);
    view = 1;
  }
}
