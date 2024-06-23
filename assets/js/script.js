document.addEventListener("DOMContentLoaded", () => {
  // Initialize dark mode based on localStorage
  controller();

  // Event listener for dark mode toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("click", toggleDarkMode);

  // Initialize other functions
  startCounters();
});

// Check the current dark mode status from localStorage and apply it
function controller() {
  let darkCtrl = localStorage.getItem("darkmode");
  if (darkCtrl === "true") {
    applyDarkMode();
  } else {
    applyLightMode();
  }
}

// Apply dark mode styles
function applyDarkMode() {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
  localStorage.setItem("darkmode", "true");
  console.log("dark mode on");
  applySkillsDarkMode();
}
document.addEventListener("DOMContentLoaded", () => {
  // Function to hide the preloader
  function hidePreloader() {
    const loader = document.querySelector(".loader");
    const loaders = document.querySelector(".loaders");

    const content = document.querySelector(".content");
    loader.style.display = "none";
    loaders.style.zIndex = "unset";
    content.style.display = "block";
  }

  // Simulate a delay for demo purposes, remove in production
  setTimeout(hidePreloader, 2000);

  // For real-world usage, you might want to use the window's load event
  // window.addEventListener('load', hidePreloader);
});

// Apply light mode styles
function applyLightMode() {
  document.body.classList.remove("dark-mode");
  document.body.classList.add("light-mode");
  localStorage.setItem("darkmode", "false");
  console.log("light mode on");
  applySkillsLightMode();
}

// Toggle dark mode
function toggleDarkMode() {
  let darkCtrl = localStorage.getItem("darkmode");
  if (darkCtrl === "true") {
    applyLightMode();
  } else {
    applyDarkMode();
  }
}

// Apply dark mode styles to specific elements
function applySkillsDarkMode() {
  document.querySelector(".down").classList.add("dark-down");
  document.querySelector(".pj-item").classList.add("dark-pj-item");
  document.querySelector(".pj-item1").classList.add("dark-pj-item1");
  document.querySelector(".pj-item2").classList.add("dark-pj-item2");
  document.querySelector(".con").classList.add("dark-con");
  document.querySelector(".h33").classList.add("dark-h33");
  document.querySelector(".skills").classList.add("dark-skills");
  document.querySelector(".ex").classList.add("dark-ex");
  document.querySelector(".work").classList.add("dark-work");
  document.querySelector(".down1").classList.add("dark-down1");
  document.querySelector(".form").classList.add("dark-form");
  document.querySelector(".portfolio").classList.add("dark-portfolio");
  document.querySelector(".services").classList.add("dark-services");
}

// Apply light mode styles to specific elements
function applySkillsLightMode() {
  document.querySelector(".dark-down").classList.remove("dark-down");
  document.querySelector(".dark-pj-item").classList.remove("dark-pj-item");
  document.querySelector(".dark-pj-item1").classList.remove("dark-pj-item1");
  document.querySelector(".dark-pj-item2").classList.remove("dark-pj-item2");
  document.querySelector(".dark-con").classList.remove("dark-con");
  document.querySelector(".dark-h33").classList.remove("dark-h33");
  document.querySelector(".dark-skills").classList.remove("dark-skills");
  document.querySelector(".dark-ex").classList.remove("dark-ex");
  document.querySelector(".dark-work").classList.remove("dark-work");
  document.querySelector(".dark-down1").classList.remove("dark-down1");
  document.querySelector(".dark-form").classList.remove("dark-form");
  document.querySelector(".dark-portfolio").classList.remove("dark-portfolio");
  document.querySelector(".dark-services").classList.remove("dark-services");
}

// Start counters for experience, projects, etc.
function startCounters() {
  let yearCount = 0;
  let clCount = 0;
  let pjCount = 0;
  let cofCount = 0;

  setInterval(() => {
    yearCount = yearCount >= 4 ? 4 : yearCount + 1;
    document.getElementById("year").innerHTML = yearCount;
  }, 3000);

  setInterval(() => {
    clCount = clCount >= 50 ? 50 : clCount + 1;
    document.getElementById("cl").innerHTML = clCount;
  }, 3000);

  setInterval(() => {
    pjCount = pjCount >= 70 ? 70 : pjCount + 1;
    document.getElementById("pj").innerHTML = pjCount;
  }, 3000);

  setInterval(() => {
    cofCount = cofCount >= 40 ? 40 : cofCount + 1;
    document.getElementById("cof").innerHTML = cofCount;
  }, 3000);
}
const openNav = () => {
  document.getElementById("nav").style.width = "100%";
  document.getElementById("menu-btn").style.zIndex = "1";
  document.getElementById("menu-btn2").style.zIndex = "999";
  console.log("nav open");
};
const closeNav = () => {
  document.getElementById("nav").style.width = "0";
  document.getElementById("menu-btn").style.zIndex = "999";
  document.getElementById("menu-btn2").style.zIndex = "1";
  console.log("nav closed");
};
