const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const heartsContainer = document.getElementById("hearts");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  createHearts();
  alert("Anjali ❤️ I don’t know about forever, but today I feel truly lucky to have you in my life love you  betu ❤️”");
});

function createHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0px";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
