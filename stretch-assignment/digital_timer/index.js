// Add link to google font to document.head
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css?family=Orbitron:900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);
// Change font
document.body.style.backgroundColor = '#eee';
document.body.querySelector('*').style.fontFamily = "'Orbitron', sans-serif";
// Give width and initiate with 0 all digits except #colon
document.querySelectorAll('.digit:not(#colon)').forEach(element => {
    element.textContent = 0;
    element.style.width = '100px';
});
// Change font size and color of all digits
document.querySelectorAll('.digit').forEach(element => {
    element.style.fontSize = '120px';
    element.style.color = '#ddd';
});




let globalMsTens = 0;
let interval = 0;

const updateTimer = () => {
    globalMsTens += 1;    

    const secondTens = Math.floor(globalMsTens / 1000);
    const secondOnes = Math.floor((globalMsTens % 1000) / 100);
    const msHunreds = Math.floor(((globalMsTens % 10000) % 100) / 10);
    const msTens = ((globalMsTens % 10000) % 100) % 10;

    if (globalMsTens === 1000) {
        let digits = document.getElementsByClassName('digit');

        for (let i=0; i < digits.length; i++) {
            digits[i].style.color = 'red';
        }

        document.querySelector('#startBtn').disabled = false;
        clearInterval(interval);
    }

    document.getElementById('secondTens').textContent = secondTens;
    document.getElementById('secondOnes').textContent = secondOnes;
    document.getElementById('msHundreds').textContent = msHunreds;
    document.getElementById('msTens').textContent = msTens;
}

const startButtonClick = (e) => {
    globalMsTens = 0;
    interval = setInterval(updateTimer, 10);
    e.target.disabled = true;
}

const resetButtonClick = (e) => {
    globalMsTens = 0;

    // Stop setInterval method
    clearInterval(interval);

    // Reset digits
    document.getElementById('secondTens').textContent = '0';
    document.getElementById('secondOnes').textContent = '0';
    document.getElementById('msHundreds').textContent = '0';
    document.getElementById('msTens').textContent = '0';

    // Enable start button
    document.querySelector('#startBtn').disabled = false;
}

// Create buttons container 
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.alignContent = 'center';
buttonContainer.style.width = '100%';

// Create start button
const startButton = document.createElement('button');
startButton.id = 'startBtn';
startButton.textContent = 'Start';
startButton.addEventListener('click', startButtonClick);
startButton.style.fontSize = '24px';
startButton.style.width = '170px';
startButton.style.height = '50px';
// Append button to container
buttonContainer.appendChild(startButton);

// Create reset button
const resetButton = document.createElement('button');
resetButton.id = 'resetBtn';
resetButton.textContent = 'Reset';
resetButton.addEventListener('click', resetButtonClick);
resetButton.style.fontSize = '24px';
resetButton.style.width = '170px';
resetButton.style.height = '50px';
// Append button to container
buttonContainer.appendChild(resetButton);

const digitsContainer = document.querySelector('.digits');
digitsContainer.appendChild(buttonContainer);
// Style container
document.body.style.display = 'flex';
document.body.style.height = '100vh';
document.body.style.justifyContent = 'center';
document.body.style.alignContent = 'center';
digitsContainer.style.backgroundColor = '#333';
digitsContainer.style.width = '50%';
digitsContainer.style.height = '50vh';
digitsContainer.style.display = 'flex';
digitsContainer.style.flexWrap = 'wrap';
digitsContainer.style.justifyContent = 'center';
digitsContainer.style.alignContent = 'center';