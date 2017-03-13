var osc;
var freq;
var current;


var framesHistory = [];
var delayTime = 0;
var move = 0;
var diff = 1;
var mod = 1;

var moveRange = {
    base: 0,
    top: 120
};

var COLOR = {
    R: 0,
    G: 0,
    B: 0,
    BACKGROUND: {
        R: 136,
        G: 12,
        B: 43
    },
    STROKE: {
        R: 40,
        G: 100,
        B: 90
    }
};


/* Base Quad object */
var origin = {
    position: {
        leftUp: {
            x: 0,
            y: 0
        },
        rightUp: {
            x: 700,
            y: 200
        },
        leftDown: {
            x: 100,
            y: 500
        },
        rightDown: {
            x: 0,
            y: 0
        }
    }
};

/*
 * Mouse pressed event listener
 * Play the oscillator
 */
function mousePressed() {
    osc.start();
}

/*
 * Mouse released event listener
 * Stop the oscillator
 */
function mouseReleased() {
    osc.stop();
}

/*
 * Adjust colors of quad
 */
function setStyle() {

    /* Change quad COLOR each 5 frames */
    if (move % 5 == 2) {
        COLOR.R = random(255);
        COLOR.G = random(255);
        COLOR.B = random(255);
    }

    fill(COLOR.R, COLOR.G, COLOR.B);

}

/*
 * Set up and down limits to the movement counter
 */
function toogleMove() {

    if (move === moveRange.top) {
        mod = -1;
    } else if (move === moveRange.base) {
        mod = 1;
    }
    move += mod;

}

/*
 * Adjust the oscillator frequency to currect mouseX position
 */
function updateFreq() {
    osc.freq(mouseX + 60 + move);
}

function drawQuad() {

    if (delayTime < 30) {
        delayTime += 1;
        return;
    }

    updateFreq();
    toogleMove();
    strokeWeight(8);
    fill(COLOR.R, COLOR.G, COLOR.B);
    stroke(COLOR.STROKE.R, COLOR.STROKE.G, COLOR.STROKE.B);

    current = [
        /* Left up corner */
        mouseX - (60 + move),
        mouseY - (60 + move),

        /* Right up corner */
        origin.position.rightUp.x + move,
        origin.position.rightUp.y + move,

        /* Right down corner */
        mouseX + 60 + move,
        mouseY + 60 + move,

        /* Left down corner */
        origin.position.leftDown.x + move,
        origin.position.leftDown.y + move
    ];


    framesHistory.unshift(current);

    if (!mouseIsPressed) {

        strokeWeight(4);
        stroke(0, 0, 0);
        fill(COLOR.BACKGROUND.R, COLOR.BACKGROUND.G, COLOR.BACKGROUND.B);

        if (framesHistory.length) {
            var toErase = framesHistory.pop();

            quad(
                toErase[0],
                toErase[1],
                toErase[2],
                toErase[3],
                toErase[4],
                toErase[5],
                toErase[6],
                toErase[7]
            );
        }

    }

    quad(
        current[0],
        current[1],
        current[2],
        current[3],
        current[4],
        current[5],
        current[6],
        current[7]
    );

}

/*
 * Initialize settings
 */
function setup() {
    createCanvas(1200, 800);
    background(COLOR.BACKGROUND.R, COLOR.BACKGROUND.G, COLOR.BACKGROUND.B);
    strokeWeight(8);
    stroke(COLOR.STROKE.R, COLOR.STROKE.G, COLOR.STROKE.B);

    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.amp(0.5, 0.05);
}

console.log('before ths')
/*
 * Draw fps
 */
function draw() {
    setStyle(move);
    drawQuad();
}
