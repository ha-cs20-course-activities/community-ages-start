// COMMUNITY AGES ASSIGNMENT

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 500;

// Global Variables
let ages = [];
let max = 5000; // array values should be b/t 0 and max

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / ages.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < ages.length; i++) {
        // Calculate scaled bar height based on cnv.height and canvasMax
        let barHeight = ages[i] * (cnv.height / max);

        ctx.fillRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);
        ctx.strokeRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);        
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// MAIN MENU EVENTS

// DOM Elements
let outputEl = document.getElementById('output');

// Main Menu & Go Button
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu() {
    // Get value of menu select element
    let selection = document.getElementById('menu').value;

    // Take action based on menu selection
    if (selection == 'demographics') {
        outputEl.innerHTML = 'Demographics';
    } else if (selection == 'add-member') {
        outputEl.innerHTML = 'Add Member';
    } else if (selection == 'alien-abduction') {
        outputEl.innerHTML = 'Alien Abduction';
    } else if (selection == 'move-to-college') {
        outputEl.innerHTML = 'Move to College';
    } else if (selection == 'time-travel') {
        outputEl.innerHTML = 'Time Travel';
    } else if (selection == 'flu-epidemic') {
        outputEl.innerHTML = 'Flu Epidemic';
    }
}