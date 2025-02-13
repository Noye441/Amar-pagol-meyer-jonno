document.addEventListener("DOMContentLoaded", function () {
    let happyMusic = document.getElementById("bgMusic");
    let sadMusic = document.getElementById("sadMusic");
    let muteButton = document.getElementById("muteButton");
    let body = document.body;
    let hasInteracted = false;

    function toggleMusic(music) {
        if (music.paused) {
            music.play();
            muteButton.textContent = "🔊 Unmute";
        } else {
            music.pause();
            muteButton.textContent = "🔇 Mute";
        }
    }

    muteButton.addEventListener("click", function () {
        if (!happyMusic.paused) {
            toggleMusic(happyMusic);
        } else if (!sadMusic.paused) {
            toggleMusic(sadMusic);
        }
    });

    document.getElementById("yesButton").addEventListener("click", function () {
        document.getElementById("valentineQuestion").style.display = "none";
        document.getElementById("letterPage").style.display = "block";
        
        sadMusic.pause();
        sadMusic.currentTime = 0;
        body.classList.remove("sad-background"); // Keep original theme
        
        if (!hasInteracted) {
            happyMusic.play();
            hasInteracted = true;
        }
    });

    document.getElementById("noButton").addEventListener("click", function () {
        document.getElementById("valentineQuestion").style.display = "none";
        document.getElementById("noResponse").style.display = "block";
        
        happyMusic.pause();
        happyMusic.currentTime = 0;
        body.classList.add("sad-background"); // Switch to sad theme

        if (!hasInteracted) {
            sadMusic.play();
            hasInteracted = true;
        }
    });
});
