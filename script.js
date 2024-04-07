document.getElementById("jokeBtn").addEventListener("click", generateJoke);
// Listen for the "Enter" key press to generate a new joke
document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        generateJoke();
    }
});

document.getElementById("saveFavoriteBtn").addEventListener("click", saveFavoriteJoke);

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything.",
    "What do you get when you cross a snowman with a vampire? Frostbite.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    // Add more jokes here
];

function generateJoke() {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("joke").innerText = joke;
}

function saveFavoriteJoke() {
    const currentJoke = document.getElementById("joke").innerText;
    localStorage.setItem("favoriteJoke", currentJoke);
    alert("Joke saved as favorite!");
}

// Function to load the user's favorite joke from local storage
function loadFavoriteJoke() {
    const favoriteJoke = localStorage.getItem("favoriteJoke");
    if (favoriteJoke) {
        document.getElementById("joke").innerText = favoriteJoke;
    } else {
        document.getElementById("joke").innerText = "No favorite joke saved. Generate and save one!";
    }
}

window.onload = loadFavoriteJoke;
