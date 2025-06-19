//creat arrays to store message components
const subjects = ['Your code', 'Your new feature', 'Your latest commit', 'Your project'];
const verbs = ['will surely', 'is going to change', 'is destined to become', 'will absolutely redefine'];
const objects = ['the tech world.', 'your future.', 'the industry standard.', 'a legend.'];

//Generates a random element from an array
const generateMessage = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

//Generates a random message by combining components
const generateRandomMessage = () => {
    return generateMessage(subjects) + ' ' + generateMessage(verbs) + ' ' + generateMessage(objects);
};

//This function updates the message in the HTML element with id 'message'
const updateMessage = () => {
    const messageElement = document.getElementById('message');
    if (messageElement) {
        messageElement.textContent = generateRandomMessage();
    }
};

//Initialize event listeners and set the initial message
const initialize = () => {
    updateMessage(); // Set initial message

    const updateButton = document.getElementById('updateButton');
    if (updateButton) {
        updateButton.addEventListener('click', updateMessage); // Update message on button click
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') { // Update message on Enter key press
            updateMessage();
        }
    });
};

//run initilization after DOM is fully loaded
document.addEventListener('DOMContentLoaded', initialize);
