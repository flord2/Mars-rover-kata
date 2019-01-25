// Rover Object Goes Here
// ======================
var rover = {
direction: 'N',
x: 0,
y: 0,
travelLog: []
}

var grid = {
x: 9,
y: 9
}

var theGrid = 
[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, obs, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, obs, 0],
[0, 0, 0, obs, 0, obs, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, obs, 0, 0, 0, 0, 0, 0, obs, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, obs, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, obs, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

var obs = [];

var str = 'fffbrlflbfrrrl';

// ======================
function turnLeft(rover) {
    switch(rover.direction) {
        case 'N':
            rover.direction = 'W';
            break;
        case 'W':
            rover.direction = 'S';
            break;
        case 'S':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'N';
            break;
    }
}
  
function turnRight(rover) {
    switch(rover.direction) {
        case 'N':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'S';
            break;
        case 'S':
            rover.direction = 'W';
            break;
        case 'W':
            rover.direction = 'N';
            break;
    }
}
  
function moveForward(rover) {
    if (rover.direction === 'N') {
        rover.y -= 1;
    } else if (rover.direction === 'S') {
        rover.y += 1;
    } else if (rover.direction === 'E') {
        rover.x += 1;
    } else if (rover.direction === 'W') {
        rover.x -= 1;
    } 
}

function moveBackward(rover) {
    if (rover.direction === 'N') {
        rover.y += 1;
    } else if (rover.direction === 'S') {
        rover.y -= 1;
    } else if (rover.direction === 'E') {
        rover.x -= 1;
    } else if (rover.direction === 'W') {
        rover.x += 1;
    } 
}

function listOfCommands(str, theGrid) {
    for(var i = 0; i < str.length; i++) {
        if (str[i] === 'f'){
            moveForward(rover);
        } else if (str[i] === 'r') {
            turnRight(rover);
        } else if (str[i] === 'l') {
            turnLeft(rover);
        } else if (str[i] === 'b') {
            moveBackward(rover);
        } else {
            console.log('The input is not valid.')
        }

        if ('f' || 'b') {
            rover.travelLog.push([rover.x, rover.y]);
        }

        while (rover.x > 8 || rover.x < 0 || rover.y < -8 ||rover.y > 0) {
            turnRight(rover);
            break;
        }
    }
    console.log('Current direction: ' + rover.direction);
}


console.log(rover.travelLog);

listOfCommands(str);