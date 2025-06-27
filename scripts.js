// Get DOM elements
const pinInput = document.querySelector('#pin-input');
const submitButton = document.querySelector('#submit-btn');

// Set valid PINs with their corresponding URLs
const pinUrls = {
    '16252': 'https://www.youtube.com/watch?v=ql9VWZ3KfQg',
    '02123': 'https://maps.app.goo.gl/semPDFJZtJReEVr68',
    '19987': 'https://open.spotify.com/intl-es/track/5iOSiVYNpBGzuGKk6QA6D7?si=1eeeb058bcc04494',
    '06110': 'https://maps.app.goo.gl/mMAHMmShsKUMLfjT8',
    '50021': 'https://maps.app.goo.gl/4nMho3sSYhug8hpj9',
    '31415': 'https://campus.uwiener.edu.pe/?login_success=1',
    '20204': 'https://sjaquer.vercel.asdasdapp/',
    '09090': 'https://open.spotify.com/intl-es/',
    '77701': 'https://campus.uwiener.edu.pe/?login_success=1',
    '12345': 'https://campus.uwiener.edu.pe/?login_success=1'
};

// Initially disable the button
submitButton.disabled = true;

// Create audio element for error sound
const errorSound = new Audio('https://www.soundjay.com/button/sounds/button-10.mp3');

// Add event listener for input changes
pinInput.addEventListener('input', function() {
    // Enable button only if input length is 4 digits
    if (this.value.length === 5) {
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

// Función para animar el placeholder
function animatePlaceholder() {
    const input = document.querySelector('.pin-input');
    const numbers = [
        "12345", "67890", "13579", "24680", "45678",
        "98732", "15963", "75395", "25814", "36987",
        "14725", "95175", "78932", "45698", "15935",
        "75319", "95135", "35791", "75395", "15753",
        "35714", "97531", "86420", "98765", "43210",
        "45673", "89012", "23456", "67891", "12348",
        "54329", "98761", "13574", "24685", "86425",
        "09283", "04650", "00293", "04756", "09384",
        "05000", "04500", "04000", "03500", "03000",
        "02500", "02000", "01500", "01000", "00900",
        "00800", "00700", "00600", "00500", "00400",
        "00300", "00200", "00100", "00010", "00000"
    ];
    let i = 0;
    let speed = 60; // Velocidad inicial más rápida
    
    input.placeholder = "";
    
    const animation = setInterval(() => {
        input.placeholder = numbers[i];
        i++;
        
        // Aumentar la velocidad gradualmente
        if (i > numbers.length / 2) {
            speed = 120; // Ralentizar un poco al final
        }
        
        if (i >= numbers.length) {
            clearInterval(animation);
            input.placeholder = "00000"; // Asegurar que termine en 0000
        }
    }, speed);
}


// Ejecutar la animación cuando la página carga
window.addEventListener('load', animatePlaceholder);

// Repetir la animación cuando el input pierde el foco y está vacío
document.querySelector('.pin-input').addEventListener('blur', function() {
    if (this.value === '') {
        animatePlaceholder();
    }
});