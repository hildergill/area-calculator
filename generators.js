function generateCommonBox(elements, id = null) {
    var returnValue = (id !== null) ? `<div class="common_box" id="${id}">` : '<div class="common_box">';
    elements.map((value) => { returnValue += value + '\n'; });
    returnValue += '</div>';
    return returnValue;
}

function generateIconButton(icon, text, id = null) {
    var returnValue = (id !== null) ? `<div class="icon_button" id="${id}>"` : '<div class="icon_button">';
    returnValue += `\n${icon}\n<p>${text}</p>\n</div>`;
    return returnValue;
}