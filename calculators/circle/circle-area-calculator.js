function calculateCircleArea() {
    var radius = parseFloat(document.getElementById('radius_input').value);
    var area = Math.PI * radius * radius;

    var answerBox = document.getElementById('answer_box');
    answerBox.classList.add('answer_box');
    answerBox.innerHTML = '<p>&pi; * ('+ radius + ')<sup>2</sup> = ' + area + ' unit<sup>2</sup></p>';
}