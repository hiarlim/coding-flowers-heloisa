const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const surprise = document.getElementById("surprise");
const particles = document.getElementById("particles");

openBtn.addEventListener("click", () => {
  intro.style.transition = "opacity 1s ease, transform 1s ease";
  intro.style.opacity = "0";
  intro.style.transform = "scale(1.05)";

  setTimeout(() => {
    intro.classList.add("hidden");
    surprise.classList.remove("hidden");
    startParticles();
  }, 950);
});

function makeParticle() {
  const p = document.createElement("div");
  p.className = "particle";
  p.textContent = Math.random() > 0.35 ? "❤" : "✦";
  p.style.left = Math.random() * 100 + "vw";
  p.style.setProperty("--x", (Math.random() * 180 - 90) + "px");
  p.style.fontSize = (Math.random() * 15 + 12) + "px";
  p.style.animationDuration = (Math.random() * 3 + 4) + "s";
  particles.appendChild(p);
  setTimeout(() => p.remove(), 7500);
}

function startParticles() {
  for (let i = 0; i < 20; i++) {
    setTimeout(makeParticle, i * 120);
  }
  setInterval(makeParticle, 650);
}
