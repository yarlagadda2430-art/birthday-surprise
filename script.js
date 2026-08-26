/* =========================================================
   HAPPY BIRTHDAY SOWMYA
   Complete JavaScript
========================================================= */


/* =========================================================
   1. MUSIC STATE
========================================================= */

let musicPlaying = false;


/* =========================================================
   2. ENTER SURPRISE
   Starts music and removes welcome screen
========================================================= */

function enterSurprise() {

    const welcomeScreen =
        document.getElementById("welcomeScreen");

    const music =
        document.getElementById("birthdayMusic");


    music.play()

        .then(() => {

            musicPlaying = true;

            console.log("Birthday music started.");

        })

        .catch((error) => {

            console.log(
                "Music could not start:",
                error
            );

        });


    welcomeScreen.style.display = "none";


    createConfetti(40);
}


/* =========================================================
   3. OPEN BIRTHDAY LETTER
========================================================= */

function openLetter() {

    const letter =
        document.getElementById("specialLetter");


    letter.style.display = "block";


    letter.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });


    createConfetti(20);
}


/* =========================================================
   4. REVEAL WHY YOU'RE SPECIAL CARD
========================================================= */

function revealReason(card) {

    const closedReason =
        card.querySelector(".closed-reason");

    const reasonMessage =
        card.querySelector(".reason-message");


    if (
        closedReason.style.display === "none"
    ) {

        return;

    }


    closedReason.style.display = "none";

    reasonMessage.style.display = "block";


    card.style.cursor = "default";


    createMiniHearts(card);
}


/* =========================================================
   5. MINI HEART EFFECT FOR CARDS
========================================================= */

function createMiniHearts(card) {

    const rect =
        card.getBoundingClientRect();


    const heartEmojis = [
        "❤️",
        "💕",
        "💖",
        "✨"
    ];


    for (
        let i = 0;
        i < 8;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.innerHTML =
            heartEmojis[
                Math.floor(
                    Math.random()
                    *
                    heartEmojis.length
                )
            ];


        heart.style.position = "fixed";

        heart.style.left =
            (
                rect.left
                +
                Math.random()
                *
                rect.width
            )
            +
            "px";


        heart.style.top =
            (
                rect.top
                +
                Math.random()
                *
                rect.height
            )
            +
            "px";


        heart.style.fontSize =
            (
                Math.random()
                *
                15
                +
                18
            )
            +
            "px";


        heart.style.pointerEvents =
            "none";


        heart.style.zIndex =
            "20000";


        heart.style.transition =
            "all 1.5s ease";


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.style.transform =
                "translateY(-100px)";

            heart.style.opacity =
                "0";

        }, 50);


        setTimeout(() => {

            heart.remove();

        }, 1600);

    }

}


/* =========================================================
   6. START FINAL COUNTDOWN
========================================================= */

let countdownRunning = false;


function startCountdown() {

    if (countdownRunning) {

        return;

    }


    countdownRunning = true;


    const countdown =
        document.getElementById("countdown");


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


    setTimeout(() => {

        countdown.innerHTML = "";

        countdownRunning = false;

    }, 4500);

}


/* =========================================================
   7. SHOW FINAL SURPRISE
========================================================= */

function showSurprise() {

    const surprise =
        document.getElementById("surprise");


    surprise.style.display = "flex";


    surprise.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });


    createConfetti(140);


    playMusic();

}


/* =========================================================
   8. CREATE CONFETTI
========================================================= */

function createConfetti(amount = 100) {

    const confettiEmojis = [

        "🎉",
        "🎊",
        "✨",
        "❤️",
        "💖",
        "💕",
        "🎈",
        "🌸"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(() => {

            const confetti =
                document.createElement("div");


            confetti.classList.add(
                "confetti"
            );


            confetti.innerHTML =
                confettiEmojis[
                    Math.floor(
                        Math.random()
                        *
                        confettiEmojis.length
                    )
                ];


            confetti.style.left =
                Math.random()
                *
                100
                +
                "vw";


            confetti.style.fontSize =
                (
                    Math.random()
                    *
                    22
                    +
                    18
                )
                +
                "px";


            confetti.style.animationDuration =
                (
                    Math.random()
                    *
                    2
                    +
                    3
                )
                +
                "s";


            document.body.appendChild(
                confetti
            );


            setTimeout(() => {

                confetti.remove();

            }, 5500);


        }, i * 25);

    }

}


/* =========================================================
   9. CREATE FLOATING HEART
========================================================= */

function createHeart() {

    const heart =
        document.createElement("div");


    const heartEmojis = [

        "❤️",
        "💕",
        "💖",
        "💗",
        "💝",
        "🌸"

    ];


    heart.classList.add("heart");


    heart.innerHTML =
        heartEmojis[
            Math.floor(
                Math.random()
                *
                heartEmojis.length
            )
        ];


    heart.style.left =
        Math.random()
        *
        100
        +
        "vw";


    heart.style.fontSize =
        (
            Math.random()
            *
            18
            +
            15
        )
        +
        "px";


    heart.style.animationDuration =
        (
            Math.random()
            *
            3
            +
            5
        )
        +
        "s";


    document.body.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 8500);

}


/* =========================================================
   10. CONTINUOUS FLOATING HEARTS
========================================================= */

setInterval(

    createHeart,

    900

);


/* =========================================================
   11. PLAY MUSIC
========================================================= */

function playMusic() {

    const music =
        document.getElementById(
            "birthdayMusic"
        );


    if (!music) {

        console.log(
            "Birthday music element not found."
        );

        return;

    }


    if (!musicPlaying) {

        music.play()

            .then(() => {

                musicPlaying = true;

            })

            .catch((error) => {

                console.log(
                    "Browser blocked music:",
                    error
                );

            });

    }

}


/* =========================================================
   12. PAUSE MUSIC
========================================================= */

function pauseMusic() {

    const music =
        document.getElementById(
            "birthdayMusic"
        );


    if (!music) {

        return;

    }


    music.pause();

    musicPlaying = false;

}


/* =========================================================
   13. MUSIC TOGGLE BUTTON
========================================================= */

function toggleMusic() {

    const music =
        document.getElementById(
            "birthdayMusic"
        );


    if (!music) {

        return;

    }


    if (
        musicPlaying
        &&
        !music.paused
    ) {

        pauseMusic();

    }

    else {

        music.play()

            .then(() => {

                musicPlaying = true;

            })

            .catch((error) => {

                console.log(
                    "Music could not play:",
                    error
                );

            });

    }

}


/* =========================================================
   14. FINAL SECRET MESSAGE
========================================================= */

function openSecret() {

    const secretMessage =
        document.getElementById(
            "secretMessage"
        );


    secretMessage.style.display =
        "block";


    secretMessage.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });


    createConfetti(100);


    createHeartBurst();

}


/* =========================================================
   15. HEART BURST FOR FINAL SECRET
========================================================= */

function createHeartBurst() {

    const heartEmojis = [

        "❤️",
        "💖",
        "💕",
        "💗",
        "✨"

    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.innerHTML =
            heartEmojis[
                Math.floor(
                    Math.random()
                    *
                    heartEmojis.length
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            "50%";


        heart.style.top =
            "50%";


        heart.style.fontSize =
            (
                Math.random()
                *
                20
                +
                20
            )
            +
            "px";


        heart.style.pointerEvents =
            "none";


        heart.style.zIndex =
            "20000";


        heart.style.transition =
            "all 2s ease-out";


        document.body.appendChild(
            heart
        );


        const x =
            (
                Math.random()
                -
                0.5
            )
            *
            window.innerWidth;


        const y =
            (
                Math.random()
                -
                0.5
            )
            *
            window.innerHeight;


        setTimeout(() => {

            heart.style.transform =
                `translate(${x}px, ${y}px)`;

            heart.style.opacity =
                "0";

        }, 50);


        setTimeout(() => {

            heart.remove();

        }, 2100);

    }

}


/* =========================================================
   16. TRY AUTOPLAY WHEN PAGE LOADS
========================================================= */

window.addEventListener(

    "load",

    () => {

        const music =
            document.getElementById(
                "birthdayMusic"
            );


        if (!music) {

            return;

        }


        music.volume = 0.7;


        music.play()

            .then(() => {

                musicPlaying = true;

                console.log(
                    "Autoplay started."
                );

            })

            .catch(() => {

                musicPlaying = false;

                console.log(
                    "Autoplay blocked. Tap To Begin will start music."
                );

            });

    }

);


/* =========================================================
   17. KEEP MUSIC STATE CORRECT
========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        const music =
            document.getElementById(
                "birthdayMusic"
            );


        if (!music) {

            return;

        }


        music.addEventListener(

            "play",

            () => {

                musicPlaying = true;

            }

        );


        music.addEventListener(

            "pause",

            () => {

                musicPlaying = false;

            }

        );


        music.addEventListener(

            "ended",

            () => {

                musicPlaying = false;

            }

        );

    }

);


/* =========================================================
   18. START SMALL HEART EFFECT AFTER PAGE LOAD
========================================================= */

window.addEventListener(

    "load",

    () => {

        setTimeout(() => {

            createHeart();

        }, 1000);


        setTimeout(() => {

            createHeart();

        }, 1800);


        setTimeout(() => {

            createHeart();

        }, 2600);

    }

);
