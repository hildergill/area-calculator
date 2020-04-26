const shapeArray = [new Circle(), new Triangle()];
var shapeIndex = 0;

function loadShapeButtons() {
    var shapeButtons = document.getElementById('shape_buttons_box');

    shapeArray.map((value) => {
        shapeButtons.innerHTML += `<button>\n${value.getIcon()}\n<p>${value.getName()}</p>\n</button>`;
    });
}