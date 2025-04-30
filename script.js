const audio = document.getElementById('background-music');
const startContainer = document.getElementById('start-container');
const initialContainer = document.getElementById('initial-container');

// Function to start the app (play music and show the main content)
function startApp() {
  console.log("Play Music button clicked.");

  audio.play().then(() => {
    console.log("Audio is playing now.");
    startContainer.style.display = 'none';
    initialContainer.style.display = 'block';
  }).catch((error) => {
    console.log("Audio play failed:", error);
  });
}

// 'No' button avoidance logic
const noButton = document.getElementById("noButton");
const detectionRadius = 100;

document.addEventListener("mousemove", (e) => {
  if (!noButton) return;
  const rect = noButton.getBoundingClientRect();

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const btnX = rect.left + rect.width / 2;
  const btnY = rect.top + rect.height / 2;

  const dx = mouseX - btnX;
  const dy = mouseY - btnY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < detectionRadius) {
    const windowWidth = window.innerWidth - rect.width;
    const windowHeight = window.innerHeight - rect.height;

    const newX = Math.random() * windowWidth;
    const newY = Math.random() * windowHeight;

    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
  }
});

// Function to show the next page after user clicks "Yes"
function nextPage() {
  document.getElementById("initial-container").style.display = "none";
  document.getElementById("yes-container").style.display = "block";
}
