document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("valentine-popup");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const container = document.getElementById("valentine-container");
    const audio = document.getElementById("romantic-music");
    const muteBtn = document.getElementById("mute-btn");

    yesBtn.addEventListener("click", () => {
        popup.style.display = "none";
        container.style.display = "block";
        container.classList.add("open");

        audio.play().then(() => {
            muteBtn.style.display = "block"; 
        }).catch(error => console.log("Autoplay blocked"));
    });

    muteBtn.addEventListener("click", () => {
        audio.muted = !audio.muted;
        muteBtn.textContent = audio.muted ? "🔇 Unmute" : "🎵 Mute";
    });

    noBtn.addEventListener("mouseover", () => {
        noBtn.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
    });
});
