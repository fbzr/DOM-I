// Add link to google font to document.head
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css?family=Orbitron&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);
// Change font
document.body.style.fontFamily = "'Orbitron', sans-serif";
// Give width to digits except #colon
document.querySelectorAll('.digit:not(#colon)').forEach(element => {
    element.textContent = 0;
    element.style.width = '70px';
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

        document.querySelector('button').disabled = false;
        clearInterval(interval);
    }

    document.getElementById('secondTens').textContent = secondTens;
    document.getElementById('secondOnes').textContent = secondOnes;
    document.getElementById('msHundreds').textContent = msHunreds;
    document.getElementById('msTens').textContent = msTens;

}

const onButtonClick = (e) => {
    globalMsTens = 0;
    interval = setInterval(updateTimer, 10);
    e.target.disabled = true;
}

// Create start button
const buttonContainer = document.createElement('div');
buttonContainer.style.width = '100%';
const startButton = document.createElement('button');
startButton.textContent = 'Start';
startButton.addEventListener('click', onButtonClick);
startButton.style.width = '170px';
startButton.style.height = '50px';
buttonContainer.appendChild(startButton);
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.alignContent = 'center';

const digitsContainer = document.querySelector('.digits');
digitsContainer.appendChild(buttonContainer);
// Style container
document.body.style.display = 'flex';
document.body.style.height = '100vh';
document.body.style.justifyContent = 'center';
document.body.style.alignContent = 'center';
digitsContainer.style.backgroundColor = '#666';
digitsContainer.style.width = '50%';
digitsContainer.style.height = '50vh';
digitsContainer.style.display = 'flex';
digitsContainer.style.flexWrap = 'wrap';
digitsContainer.style.justifyContent = 'center';
digitsContainer.style.alignContent = 'center';
// document.querySelector('body').prepend(startButton);