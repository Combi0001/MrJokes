document.addEventListener("DOMContentLoaded", () => {
    const jokeBtn = document.getElementById("jokeBtn");
    const saveFavoriteBtn = document.getElementById("saveFavoriteBtn");
    const darkModeToggle = document.getElementById("darkModeToggle");

    jokeBtn.addEventListener("click", generateJoke);
    saveFavoriteBtn.addEventListener("click", saveFavoriteJoke);
    darkModeToggle.addEventListener("click", toggleDarkMode);

    // Load a joke initially
    generateJoke();

    // Check if the user prefers dark mode and apply it
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark-mode");
    }

    // Check for saved dark mode preference
    const userPrefersDark = localStorage.getItem('darkMode') === 'true';
    if (userPrefersDark) {
        document.body.classList.add("dark-mode");
    }
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

javascript

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    // Update the toggle button emoji based on the theme
    const toggleButton = document.getElementById("darkModeToggle");
    toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
    
    // Save the user's preference in localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
}

// This function sets the correct initial icon when the page loads
function updateToggleButtonIcon() {
    const isDarkModeStored = localStorage.getItem('darkMode') === 'true';
    // Apply the stored preference
    if (isDarkModeStored) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
    // Set the button icon based on the stored preference or default
    document.getElementById("darkModeToggle").textContent = isDarkModeStored ? '☀️' : '🌙';
}

// Event listener to update the icon correctly when the page loads
document.addEventListener("DOMContentLoaded", () => {
    updateToggleButtonIcon();
});
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
