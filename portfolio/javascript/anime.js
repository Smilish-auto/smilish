// ==========================
// Typing Effect
// ==========================

const words = [
  "AI Systems",
  "AI Agents",
  "Business Automation",
  "Voice Assistants",
  "Smart Workflows"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing");

function type() {
  if (!typingText) return;

  const current = words[wordIndex];

  if (!deleting) {
    typingText.textContent = current.substring(0, letterIndex++);
  } else {
    typingText.textContent = current.substring(0, letterIndex--);
  }

  if (!deleting && letterIndex === current.length + 1) {
    deleting = true;
    setTimeout(type, 2000);
    return;
  }

  if (deleting && letterIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(type, deleting ? 100 : 150);
}

type();


// ==========================
// Animated Counters
// ==========================

 document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = parseInt(counter.dataset.target);

        function animateCounter() {

            let count = 0;

            function update() {

                const increment = Math.ceil(target / 80);

                count += increment;

                if (count > target) {
                    count = target;
                }

                counter.textContent = count;

                if (count < target) {
                    requestAnimationFrame(update);
                } else {
                    // Wait 2 seconds, then restart
                    setTimeout(animateCounter, 2000);
                }

            }

            update();
        }

        animateCounter();

    });

});


// ==========================
// Scroll Reveal
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

  reveals.forEach(el => {

    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {

      el.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealElements);

revealElements();


// ==========================
// Back To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {

    topBtn.style.display = "flex";

  } else {

    topBtn.style.display = "none";

  }

});

topBtn.onclick = () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

};