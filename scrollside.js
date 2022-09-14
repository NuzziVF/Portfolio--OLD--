let counter1 = 0;
let counter2 = 1;
let bool = true;

const sections = document.querySelectorAll("section");
const progress = document.querySelector(".progress h2");
const circles = document.querySelectorAll(".circle");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-list");

const progressCounter = () => {
  progress.textContent = `${counter2}/${sections.length}`;

  Array.from(circles).forEach((circle) => {
    circle.style.backgroundColor = "transparent";
  });
  document.querySelector(`.circle-${counter2}`).style.backgroundColor = "#ddd";
};

const pageController = () => {
  bool = true;
  if (counter1 === 4) {
    Array.from(sections).forEach((section) => {
      section.style.left = "0";
    });
    counter1 = 0;
    counter2 = 1;
    progressCounter();
    bool = false;
  }

  if (counter1 === -1) {
    Array.from(sections).forEach((section) => {
      if (section.classList[0] === "section-4") {
        return;
      }
      section.style.left = "-100vw";
    });
    counter1 = 3;
    counter2 = 4;
    progressCounter();
    bool = false;
  }
  progressCounter();
  return bool;
};

window.addEventListener("wheel", (e) => {
  const deltaY = e.deltaY > 0;
  if (deltaY) {
    counter1++;
    counter2++;
  } else {
    counter1--;
    counter2--;
  }
  pageController();
  progressCounter();

  bool &&
    (document.querySelector(
      `.section-${deltaY ? counter1 : counter2}`
    ).style.left = `${deltaY ? "-100vw" : "0  "}`);
  console.log(counter1, counter2);
});

document.querySelector(".right-btn").addEventListener("click", () => {
  counter1--;
  counter2--;
  pageController() &&
    (document.querySelector(`.section-${counter2}`).style.left = "0");
});

document.querySelector(".left-btn").addEventListener("click", () => {
  counter1++;
  counter2++;
  pageController() &&
    (document.querySelector(`.section-${counter1}`).style.left = "-100vw");
});

if (counter1 === 2) {
  document.querySelector(".section-1-paragraph2").style.visibility = "hidden";
}

menu.addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("change");
});

nav.addEventListener("click", () => {
  document.querySelector("section-1").style.left = "0";
});
