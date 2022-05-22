const swiper = new Swiper(".landing-section .swiper", {
  loop: true,
  slidesPerView: 1,
  autoplay: true,

  // If we need pagination
  pagination: {
    el: ".landing-section .swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".landing-section .swiper-button-next",
    prevEl: ".landing-section .swiper-button-prev",
  },
});

const latestSwiper = new Swiper(".latest-news .swiper", {
  loop: false,
  slidesPerView: 1,
  autoplay: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// time handling function
function timeHandling() {
  const months = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  const days = [
    "السبت",
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
  ];
  const date = new Date();
  const day = date.getDate();
  const dayInWeek = date.getDay();
  const dayInWeekInWord = days[dayInWeek + 1];
  const month = date.getMonth();
  const monthInWord = months[month];
  const year = date.getFullYear();
  const hours = date.getHours();
  const hoursHandling = hours > 9 ? hours : "0" + hours;
  const minutes = date.getMinutes();
  const minutesHandling = minutes > 9 ? minutes : "0" + minutes;

  return {
    hours: hoursHandling,
    minutes: minutesHandling,
    dayInWeek: dayInWeekInWord,
    day: day,
    monthInWord: monthInWord,
    year: year,
  };
}

// time handling elements
const timeElement = document.querySelector(".landing-time .time");
const dayElement = document.querySelector(".landing-time .day");
const dateElement = document.querySelector(".landing-time .date");

timeElement.innerHTML = `${timeHandling().hours}:${timeHandling().minutes}`;
dayElement.innerHTML = `${timeHandling().dayInWeek}`;
dateElement.innerHTML = `${timeHandling().day} ${timeHandling().monthInWord} ${
  timeHandling().year
}م`;

// stats
const statsSection = document.querySelector(".stats");
const statsNum = document.querySelectorAll(".stats .stats-num");
let started = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= statsSection.offsetTop - 200) {
    if (!started) {
      statsNum.forEach((el) => startCount(el));
    }
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.count;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 10);
}

const topHeadEl = document.querySelector(".topheaddiv");
const navEl = document.querySelector(".nav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    topHeadEl.style.opacity = 0;
    navEl.style.top = 0;
  } else {
    topHeadEl.style.opacity = 1;
    navEl.style.top = "64px";
  }
});
