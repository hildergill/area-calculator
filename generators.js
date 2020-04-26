function generateCommonBox(elements, id = null) {
    var returnValue = (id !== null) ? `<div class="common_box" id="${id}">` : '<div class="common_box">';
    elements.map((value) => { returnValue += value + '\n'; });
    returnValue += '</div>';

    return returnValue;
}