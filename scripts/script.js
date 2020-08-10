document.addEventListener('DocumentContentLoaded', () => {

    const grid = document.querySelector('.grid');
    let squares = Array.from(grid.querySelectorAll('div'));
    const width = 10;
    const height = 20;
    let currentPosition = 4;

    //The terminoes

    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];

    const zTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];

    const tTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];

    const oTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];

    const iTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];

    const theTerminoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    //Randomly selecting terminals

    let random = Math.floor(Math.random() * theTerminoes.length);
    let currentRotation = 0;
    let current = theTerminoes[random];

    //Function for drawing shapes

    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('block');
        });
    }

    //Function for undrawing shapes

    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('block');
        });
    }

    //Function to move the shape down

    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }

    //Function to move the shape to right side

    function moveRight() {
        undraw();
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1); 

        if (!isAtRightEdge) {
            currentPosition += 1;
        }
        if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
            currentPosition -= 1;
        }
        draw();
    }

    //Function to move the shape to left side

    function moveLeft() {
        undraw();
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0); 

        if (!isAtLeftEdge) {
            currentPosition -= 1;
        }
        if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
            currentPosition += 1;
        }
        draw();
    }

    //Function for rotating terminal

    function rotate() {
        undraw();
        currentRotation ++;

        if (currentRotation === current.length) {
            currentRotation = 0;
        }
        current = theTerminoes[random][currentRotation];
        draw();
    }
});