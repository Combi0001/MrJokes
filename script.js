document.getElementById("jokeBtn").addEventListener("click", generateJoke);
document.getElementById("saveFavoriteBtn").addEventListener("click", saveFavoriteJoke);
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

document.getElementById("thumbsUp").addEventListener("click", () => updateRating(1));
document.getElementById("thumbsDown").addEventListener("click", () => updateRating(-1));

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything.",
    "What do you get when you cross a snowman with a vampire? Frostbite.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    // Add more jokes here
];

let currentRating = 0;

function generateJoke() {
    const jokeIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("joke").innerText = jokes[jokeIndex];
    resetRating();
}

function saveFavoriteJoke() {
    const currentJoke = document.getElementById("joke").innerText;
    localStorage.setItem("favoriteJoke", currentJoke);
    alert("Joke saved as favorite!");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function shareOnTwitter() {
    const joke = document.getElementById("joke").innerText;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(joke + " - via MrJokes.com")}`;
    window.open(url, '_blank');
}

function shareOnFacebook() {
    const joke = document.getElementById("joke").innerText;
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("MrJokes.com")}&quote=${encodeURIComponent(joke)}`;
    window.open(url, '_blank');
}

function updateRating(change) {
    currentRating += change;
    document.getElementById("rating").innerText = currentRating;
}

function resetRating() {
    currentRating = 0;
    document.getElementById("rating").innerText = currentRating;
}
