function calculateTriangleArea() {
    var height = parseFloat(document.getElementById('height_input').value);
    var width = parseFloat(document.getElementById('width_input').value);
    var area = (height * width)/2;

    var answerBox = document.getElementById('answer_box');
    answerBox.classList.add('answer_box');
    answerBox.innerHTML = '<p> <sup>1</sup>/<sub>2</sub> &times; ' + width + ' &times; ' + height + ' = ' + area + ' unit<sup>2</sup></p>';

    console.log(area);
}