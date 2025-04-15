// Get DOM elements
const pinInput = document.querySelector('#pin-input');
const submitButton = document.querySelector('#submit-btn');

// Set valid PINs with their corresponding URLs
const pinUrls = {
    '0000': 'https://sjaquer.vercel.app/',
    '1234': 'https://open.spotify.com/intl-es/',
    '4321': 'https://campus.uwiener.edu.pe/?login_success=1'
};

// Initially disable the button
submitButton.disabled = true;

// Create audio element for error sound
const errorSound = new Audio('https://www.soundjay.com/button/sounds/button-10.mp3');

// Add event listener for input changes
pinInput.addEventListener('input', function() {
    // Enable button only if input length is 4 digits
    if (this.value.length === 4) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

// Add event listener for button click
submitButton.addEventListener('click', function() {
    const enteredPin = pinInput.value;
    if (pinUrls.hasOwnProperty(enteredPin)) {
        window.location.href = pinUrls[enteredPin];
    } else {
        errorSound.play();
        pinInput.value = '';
        submitButton.disabled = true;
    }
});