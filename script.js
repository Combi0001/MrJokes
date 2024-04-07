document.getElementById("jokeBtn").addEventListener("click", generateJoke);
document.getElementById("saveFavoriteBtn").addEventListener("click", saveFavoriteJoke);
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything.",
    "What do you get when you cross a snowman with a vampire? Frostbite.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    // Add more jokes here
];

let currentRating = 0; // Initializes the current joke's rating

function generateJoke() {
    const jokeIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("joke").innerText = jokes[jokeIndex];
    resetRating(); // Reset rating every time a new joke is generated
}

function saveFavoriteJoke() {
    const currentJoke = document.getElementById("joke").innerText;
    localStorage.setItem("favoriteJoke", currentJoke);
    alert("Joke saved as favorite!");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".container").classList.toggle("dark-mode");
}

// Rating system functionality
document.getElementById("thumbsUp").addEventListener("click", function() {
    updateRating(1);
});
document.getElementById("thumbsDown").addEventListener("click", function() {
    updateRating(-1);
});

function updateRating(change) {
    currentRating += change;
    document.getElementById("rating").innerText = currentRating;
}

function resetRating() {
    currentRating = 0;
    document.getElementById("rating").innerText = currentRating;
}

window.onload = function() {
    loadFavoriteJoke();
    // Check for dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Automatically switch to dark mode if preferred by the user's system
        document.body.classList.add("dark-mode");
        document.querySelector(".container").classList.add("dark-mode");
    }
};

function loadFavoriteJoke() {
    const favoriteJoke = localStorage.getItem("favoriteJoke");
    if (favoriteJoke) {
        document.getElementById("joke").innerText = favoriteJoke;
    } else {
        document.getElementById("joke").innerText = "No favorite joke saved. Generate and save one!";
    }
}
