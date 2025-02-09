document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("romantic-music");
    const muteBtn = document.getElementById("mute-btn");

    // Play music automatically
    audio.play().catch(error => console.log("Autoplay prevented:", error));

    muteBtn.addEventListener("click", () => {
        if (audio.muted) {
            audio.muted = false;
            muteBtn.textContent = "🎵 Mute";
        } else {
            audio.muted = true;
            muteBtn.textContent = "🔇 Unmute";
        }
    });
});
