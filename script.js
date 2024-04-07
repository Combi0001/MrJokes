document.getElementById("jokeBtn").addEventListener("click", generateJoke);

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
