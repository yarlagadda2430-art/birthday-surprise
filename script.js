function openLetter() {
    const letter = document.getElementById("specialLetter");

    letter.style.display = "block";

    letter.scrollIntoView({
        behavior: "smooth"
    });
}


function startCountdown() {
    const countdown = document.getElementById("countdown");

    countdown.innerHTML = "3";

    setTimeout(() => {
        countdown.innerHTML = "2";
    }, 1000);

    setTimeout(() => {
        countdown.innerHTML = "1";
    }, 2000);

    setTimeout(() => {
        countdown.innerHTML = "🎉";
        showSurprise();
    }, 3000);
}


function showSurprise() {
    const surprise = document.getElementById("surprise");

    surprise.style.display = "flex";

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();
    playMusic();
}


function createConfetti() {
    const emojis = [
        "🎉",
        "🎊",
        "✨",
        "❤️",
        "💖",
        "🎈"
    ];

    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement("div");

            confetti.classList.add("confetti");

            confetti.innerHTML =
                emojis[Math.floor(Math.random() * emojis.length)];

            confetti.style.left =
                Math.random() * 100 + "vw";

            confetti.style.fontSize =
                Math.random() * 20 + 20 + "px";

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 4000);

        }, i * 30);
    }
}


function createHeart() {
    const heart = document.createElement("div");

    const hearts = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💝"
    ];

    heart.classList.add("heart");

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}


setInterval(createHeart, 800);


let musicPlaying = false;


function playMusic() {
    const music =
        document.getElementById("birthdayMusic");

    if (!musicPlaying) {
        music.play()
            .then(() => {
                musicPlaying = true;
            })
            .catch((error) => {
                console.log("Music could not play:", error);
            });
    }
}


function toggleMusic() {
    const music =
        document.getElementById("birthdayMusic");

    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
    } else {
        music.play()
            .then(() => {
                musicPlaying = true;
            })
            .catch((error) => {
                console.log("Music could not play:", error);
            });
    }
}
