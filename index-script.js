function loadCircle() {
    var circleButton = document.getElementById('circle_button');
    var squareButton = document.getElementById('square_button');
    var rectangleButton = document.getElementById('rectangle_button');
    var triangleButton = document.getElementById('triangle_button');

    triangleButton.classList.remove('active');
    squareButton.classList.remove('active');
    rectangleButton.classList.remove('active');
    circleButton.classList.add('active');

    document.getElementById('calculator_viewer').src = './calculators/circle/circle-area-calculator.html';
}

function loadSquare() {
    var circleButton = document.getElementById('circle_button');
    var squareButton = document.getElementById('square_button');
    var rectangleButton = document.getElementById('rectangle_button');
    var triangleButton = document.getElementById('triangle_button');

    triangleButton.classList.remove('active');
    squareButton.classList.add('active');
    rectangleButton.classList.remove('active');
    circleButton.classList.remove('active');

    document.getElementById('calculator_viewer').src = './calculators/square/square-area-calculator.html';
}

function loadRectangle() {
    var circleButton = document.getElementById('circle_button');
    var squareButton = document.getElementById('square_button');
    var rectangleButton = document.getElementById('rectangle_button');
    var triangleButton = document.getElementById('triangle_button');

    triangleButton.classList.remove('active');
    squareButton.classList.remove('active');
    rectangleButton.classList.add('active');
    circleButton.classList.remove('active');

    document.getElementById('calculator_viewer').src = './calculators/rectangle/rectangle-area-calculator.html';
}

function loadTriangle() {
    var circleButton = document.getElementById('circle_button');
    var squareButton = document.getElementById('square_button');
    var rectangleButton = document.getElementById('rectangle_button');
    var triangleButton = document.getElementById('triangle_button');

    squareButton.classList.remove('active');
    rectangleButton.classList.remove('active');
    circleButton.classList.remove('active');
    triangleButton.classList.add('active');

    document.getElementById('calculator_viewer').src = './calculators/triangle/triangle-area-calculator.html';
}