document.addEventListener("DOMContentLoaded", () => {
    const jokeBtn = document.getElementById("jokeBtn");
    const saveFavoriteBtn = document.getElementById("saveFavoriteBtn");
    const darkModeToggle = document.getElementById("darkModeToggle");

    jokeBtn.addEventListener("click", generateJoke);
    saveFavoriteBtn.addEventListener("click", saveFavoriteJoke);
    darkModeToggle.addEventListener("click", toggleDarkMode);

    // Initialize jokes
    generateJoke();
    displayStoredJoke('topRatedJoke', 'topRated');
    displayStoredJoke('jokeOfTheDay', 'jokeOfTheDay');

    // Dark Mode Initial Check
    updateDarkModePreferences();
});

function generateJoke() {
    // Fetches a random joke for the main button click
    fetchAndStoreJoke('randomJoke', 'joke', false); // The last parameter ensures the joke is not stored
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

function fetchAndStoreJoke(key, elementId, store = true) {
    const apiURL = 'https://v2.jokeapi.dev/joke/Any';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            let jokeText = '';
            if (data.type === 'single') {
                jokeText = data.joke;
            } else {
                jokeText = `${data.setup} ... ${data.delivery}`;
            }
            document.getElementById(elementId).innerText = jokeText;
            if (store) {
                // Store joke with timestamp
                localStorage.setItem(key, JSON.stringify({ joke: jokeText, timestamp: new Date().getTime() }));
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            document.getElementById(elementId).innerText = "Failed to fetch a new joke. Please try again later.";
        });
}

function displayStoredJoke(key, elementId) {
    const jokeData = localStorage.getItem(key);
    if (jokeData) {
        const { joke, timestamp } = JSON.parse(jokeData);
        const hoursPassed = (new Date().getTime() - timestamp) / (1000 * 60 * 60);
        if (hoursPassed < 24) {
            document.getElementById(elementId).innerText = joke;
            return;
        }
    }
    fetchAndStoreJoke(key, elementId);
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
