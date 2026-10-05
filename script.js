// ===============================
// 🎂 BIRTHDAY WEBSITE CONTROLLER
// ===============================

// Main elements
const button = document.getElementById("surpriseButton");
const message = document.getElementById("surpriseMessage");
const wishSection = document.getElementById("wishSection");
const wishButton = document.getElementById("wishButton");
const flame = document.getElementById("flame");
const birthdayMusic = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");
const birthdayPage = document.querySelector(".birthday-page");

const introScreen = document.getElementById("introScreen");
const enterButton = document.getElementById("enterButton");

const memorySection = document.getElementById("memorySection");


// ===============================
// 🎬 CINEMATIC INTRO
// ===============================

enterButton.addEventListener("click", function () {

    introScreen.classList.add("intro-hide");

    setTimeout(function () {
        birthdayPage.classList.add("revealed");
    }, 700);

});


// ===============================
// 🎁 SURPRISE BUTTON
// ===============================

button.addEventListener("click", function () {

    // Prevent the sequence from running twice
    if (button.classList.contains("clicked")) {
        return;
    }

    button.classList.add("clicked");

    // Birthday message
    const birthdayText =
        "Happy Birthday! 🎉 You deserve a year filled with happiness, success, unforgettable memories, and plenty of reasons to smile. Life is going to throw some crazy moments at you, but I hope you keep that amazing spirit through all of them. And honestly… getting older is just leveling up, so congratulations on unlocking another year! 😂🎂 No matter where life takes us, I’m really glad to have you as a friend. Here’s to more laughs, more adventures, more ridiculous conversations, and a whole lot of good memories ahead.";

    message.classList.add("show");
    message.textContent = "";

    // Start music
    birthdayMusic.currentTime = 0;

    birthdayMusic.play().catch(function () {
        console.log("Music could not start automatically.");
    });

    musicButton.style.display = "inline-block";

    // Celebration effect
    birthdayPage.classList.add("celebrating");

if (typeof launchConfetti === "function") {
    launchConfetti();
}
    setTimeout(function () {
        birthdayPage.classList.remove("celebrating");
    }, 4000);


    // ===============================
    // ⌨️ TYPEWRITER EFFECT
    // ===============================

    let index = 0;

    function typeMessage() {

        if (index < birthdayText.length) {

            message.textContent += birthdayText[index];

            let typingSpeed = 30 + Math.random() * 40;

            if (birthdayText[index] === ",") {
                typingSpeed = 180;
            }

            if (birthdayText[index] === ".") {
                typingSpeed = 350;
            }

            if (birthdayText[index] === "…") {
                typingSpeed = 500;
            }

            index++;

            setTimeout(typeMessage, typingSpeed);

      } else {

    // Message finished
    revealMemorySection();

}

    }

    // Small pause before typing begins
    setTimeout(typeMessage, 300);

});


// ===============================
// 💭 REVEAL MEMORY SECTION
// ===============================



   function revealMemorySection() {

    memorySection.style.opacity = "1";
    memorySection.style.visibility = "visible";
    memorySection.style.transform = "translateY(0)";

    revealWishSection();

}

// ===============================
// 🎂 REVEAL WISH SECTION
// ===============================

function revealWishSection() {

    wishSection.style.display = "block";

}


// ===============================
// 🎵 MUSIC CONTROL
// ===============================

musicButton.addEventListener("click", function () {

    if (birthdayMusic.paused) {

        birthdayMusic.play();

        musicButton.textContent = "🔊 Pause Music";

    } else {

        birthdayMusic.pause();

        musicButton.textContent = "🔇 Play Music";

    }

});


// ===============================
// 📸 PHOTO VIEWER
// ===============================

const galleryImages = document.querySelectorAll(".gallery-item img");
const photoViewer = document.getElementById("photoViewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");

let currentPhotoIndex = 0;


// Open a photo
galleryImages.forEach(function (img, index) {

    img.addEventListener("click", function () {

        currentPhotoIndex = index;

        viewerImage.src = img.src;

        photoViewer.style.display = "flex";

    });

});


// Show selected photo
function showPhoto(index) {

    if (index < 0) {

        currentPhotoIndex = galleryImages.length - 1;

    } else if (index >= galleryImages.length) {

        currentPhotoIndex = 0;

    } else {

        currentPhotoIndex = index;

    }

    viewerImage.src = galleryImages[currentPhotoIndex].src;

}


// Previous photo
prevPhoto.addEventListener("click", function () {

    showPhoto(currentPhotoIndex - 1);

});


// Next photo
nextPhoto.addEventListener("click", function () {

    showPhoto(currentPhotoIndex + 1);

});


// Close photo viewer
closeViewer.addEventListener("click", function () {

    photoViewer.style.display = "none";

    viewerImage.src = "";

});


// ===============================
// 🎂 MAKE A WISH
// ===============================

wishButton.addEventListener("click", function () {

    // Prevent clicking again after the candle is blown out
    if (flame.classList.contains("blown-out")) {
        return;
    }

    // Blow out the flame
    flame.classList.add("blown-out");

    // Change button
    wishButton.disabled = true;
    wishButton.textContent = "💨 Candle Blown Out!";

});