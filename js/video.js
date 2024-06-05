const video = document.getElementById('loopVideo');

// Add event listener to play the video when it's loaded
video.addEventListener('canplay', function() {
    video.play();
});

// If you want to pause the video after a specific time (e.g., 30 seconds)
setTimeout(function() {
    video.pause();
}, 30000); // 30,000 milliseconds = 30 seconds
