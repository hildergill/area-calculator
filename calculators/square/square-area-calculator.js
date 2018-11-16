function calculateSquareArea() {
    var length = parseFloat(document.getElementById('length_input').value);
    var area = length * length;

    var answerBox = document.getElementById('answer_box');
    answerBox.classList.add('answer_box');
    answerBox.innerHTML = '<p>' + length +'<sup>2</sup> = ' + area + ' unit<sup>2</sup></p>';

    console.log(area);
}