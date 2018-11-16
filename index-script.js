function loadCircle() {
    console.log('!');

    var circleButton = document.getElementById('circle_button');
    var squareButton = document.getElementById('square_button');
    var rectangleButton = document.getElementById('rectangle_button');

    squareButton.classList.remove('active');
    rectangleButton.classList.remove('active');
    circleButton.classList.add('active');

    document.getElementById('calculator_viewer').src = './calculators/circle/circle-area-calculator.html';
}