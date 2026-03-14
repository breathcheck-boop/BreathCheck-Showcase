const ASSET_VERSION = "v=20260314";

const slides = [
  {
    src: `./assets/module1/step1.webp?${ASSET_VERSION}`,
    caption: "Module 1, Step 1 of 6: Warm Start",
  },
  {
    src: `./assets/module1/step2.webp?${ASSET_VERSION}`,
    caption: "Module 1, Step 2 of 6: Learn: What Anxiety Is",
  },
  {
    src: `./assets/module1/step3.webp?${ASSET_VERSION}`,
    caption: "Module 1, Step 3 of 6: Learn: Anxiety Cycle",
  },
  {
    src: `./assets/module1/step4.webp?${ASSET_VERSION}`,
    caption: "Module 1, Step 4 of 6: Quick Check",
  },
  {
    src: `./assets/module1/step5.webp?${ASSET_VERSION}`,
    caption: "Module 1, Step 5 of 6: Core Activity: Mapping Anxiety Cycle",
  },
  {
    src: `./assets/module1/step6.webp?${ASSET_VERSION}`,
    caption: "Module 1, Step 6 of 6: Reflection / Summary",
  },
];

const slideImage = document.getElementById("slideImage");
const slideCaption = document.getElementById("slideCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsHost = document.getElementById("dots");

if (slideImage && slideCaption && prevBtn && nextBtn && dotsHost) {
  let current = 0;

  function render(index) {
    current = (index + slides.length) % slides.length;
    const active = slides[current];
    slideImage.src = active.src;
    slideCaption.textContent = active.caption;

    dotsHost.querySelectorAll(".dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });
  }

  function createDots() {
    slides.forEach((_slide, index) => {
      const dot = document.createElement("button");
      dot.className = "dot";
      dot.setAttribute("aria-label", `Show slide ${index + 1}`);
      dot.addEventListener("click", () => {
        render(index);
        resetAutoRotate();
      });
      dotsHost.appendChild(dot);
    });
  }

  createDots();
  render(0);

  prevBtn.addEventListener("click", () => {
    render(current - 1);
    resetAutoRotate();
  });

  nextBtn.addEventListener("click", () => {
    render(current + 1);
    resetAutoRotate();
  });

  let autoRotate = setInterval(() => render(current + 1), 5500);

  function resetAutoRotate() {
    clearInterval(autoRotate);
    autoRotate = setInterval(() => render(current + 1), 5500);
  }
}
