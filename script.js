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
        body.classList.remove("sad-background");

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
        body.classList.add("sad-background");

        if (!hasInteracted) {
            sadMusic.play();
            hasInteracted = true;
        }
    });

    // NEW FEATURE: "Did you make a mistake?" Buttons
    document.getElementById("mistakeYes").addEventListener("click", function () {
        document.getElementById("noResponse").style.display = "none"; // Hide sad response
        document.getElementById("letterPage").style.display = "block"; // Show letter page

        // Stop sad music and start happy music
        sadMusic.pause();
        sadMusic.currentTime = 0;

        if (happyMusic.paused) {
            happyMusic.play();
        }
    });

    document.getElementById("mistakeNo").addEventListener("click", function () {
        // Hide "Did you make a mistake?" and show the cat with a gun page
        document.getElementById("mistakeQuestion").style.display = "none"; 
        document.getElementById("noResponse").style.display = "none"; // Hide previous sad page
        document.getElementById("gunPage").style.display = "block"; // Show new "cat with gun" page
        
        // Stop any currently playing music when "Cat with Gun" page appears
        happyMusic.pause();
        sadMusic.pause();
    });

    // New "Yes" button on Cat with Gun Page
    document.getElementById("gunYes").addEventListener("click", function () {
        document.getElementById("gunPage").style.display = "none"; // Hide the gun page
        document.getElementById("letterPage").style.display = "block"; // Show the letter page

        happyMusic.play();
    });
});