const shapeArray = [new Circle(), new Triangle()];
var shapeIndex = 0;

function loadShapeButtons() {
    var shapeButtonArray = document.getElementById('shape_button_array_box');

    shapeArray.map((value) => {
        shapeButtonArray.innerHTML += `<button>\n${value.getIcon()}\n<p>${value.getName()}</p>\n</button>`;
    });
}