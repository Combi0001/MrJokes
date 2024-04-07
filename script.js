document.addEventListener("DOMContentLoaded", () => {
    // Button elements
    const jokeBtn = document.getElementById("jokeBtn");
    const saveFavoriteBtn = document.getElementById("saveFavoriteBtn");
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Event listeners
    jokeBtn.addEventListener("click", generateJoke);
    saveFavoriteBtn.addEventListener("click", saveFavoriteJoke);
    darkModeToggle.addEventListener("click", toggleDarkMode);

    // Load a joke initially and check/update dark mode status
    generateJoke();
    updateDarkModePreferences();
});

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything.",
    "What do you get when you cross a snowman with a vampire? Frostbite.",
    // Add more jokes here
];

function generateJoke() {
    const jokeIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("joke").innerText = jokes[jokeIndex];
}

function saveFavoriteJoke() {
    const currentJoke = document.getElementById("joke").innerText;
    localStorage.setItem("favoriteJoke", currentJoke);
    alert("Joke saved as favorite!");
}

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    document.getElementById("darkModeToggle").textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
}

function updateDarkModePreferences() {
    const userPrefersDark = localStorage.getItem('darkMode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle("dark-mode", userPrefersDark);
    document.getElementById("darkModeToggle").textContent = userPrefersDark ? '☀️' : '🌙';
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
