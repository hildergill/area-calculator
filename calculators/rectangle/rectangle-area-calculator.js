function calculateRectangleArea() {
    var length = parseFloat(document.getElementById('length_input').value);
    var width = parseFloat(document.getElementById('width_input').value);
    var area = length * width;

    var answerBox = document.getElementById('answer_box');
    answerBox.classList.add('answer_box');
    answerBox.innerHTML = '<p>' + length + '&times;' + width + ' = ' + area + ' unit<sup>2</sup></p>';

    console.log(area);
}