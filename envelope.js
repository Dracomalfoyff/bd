const envelope = document.getElementById('envelope');
const flap = document.getElementById('flap');
const ribbon = document.getElementById('ribbon');
const message = document.getElementById('message');
const centerRibbon = document.getElementById('centerRibbon');
const overlayGif = document.getElementById('overlayGif'); // ✅ Updated: target GIF instead of video
const startBtn = document.getElementById('start-btn'); // ✅ Start button
const fullscreenVideo = document.getElementById('fullscreenVideo'); // ✅ Fullscreen video element

let opened = false;

// Envelope click: open and show message
envelope.addEventListener('click', () => {
  if (opened) return;

  // Fade out gif and ribbons
  centerRibbon.style.opacity = '0';
  overlayGif.style.opacity = '0'; // ✅ Hide gif
  ribbon.style.opacity = '0';

  // Open flap
  flap.style.transform = 'rotateX(-120deg)';

  // Show message
  message.style.opacity = '1';
  message.style.transform = 'translateY(0)';

  opened = true;
});

// Start button click: play fullscreen video
startBtn.addEventListener('click', () => {
  if (fullscreenVideo) {
    fullscreenVideo.style.visibility = 'visible';
    fullscreenVideo.style.opacity = '1';
    fullscreenVideo.style.pointerEvents = 'auto';

    fullscreenVideo.play().catch((err) => {
      console.error("Video playback failed:", err);
    });
  }
});
