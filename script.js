document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const noPopup = document.getElementById("no-popup");
    const noOkayButton = document.getElementById("no-okay");
    const valentinePopup = document.getElementById("valentine-popup");
    const valentineContainer = document.getElementById("valentine-container");
    const muteButton = document.getElementById("mute-button");
    const backgroundMusic = document.getElementById("background-music");

    // Ensure the music plays when the page loads
    backgroundMusic.volume = 0.5;

    // Fix: Show the love letter when clicking "Yes"
    yesButton.addEventListener("click", function () {
        valentinePopup.style.display = "none";  // Hide the popup
        valentineContainer.style.display = "block";  // Show the love letter
        backgroundMusic.play(); // Ensure music starts playing when "Yes" is clicked
    });

    // Handle "No" Button - Show the "You can't say no" popup
    noButton.addEventListener("click", function () {
        noPopup.style.display = "block";
    });

    // Handle "Okay, fine!" button - Hide the "No" popup and go back to question
    noOkayButton.addEventListener("click", function () {
        noPopup.style.display = "none";
    });

    // Mute/Unmute Button
    muteButton.addEventListener("click", function () {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            muteButton.textContent = "🔊 Unmute";
        } else {
            backgroundMusic.pause();
            muteButton.textContent = "🔇 Mute";
        }
    });
});
