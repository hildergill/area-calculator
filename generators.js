function generateCommonBox(elementArray, id = null) {
    var returnValue = '';

    if (id !== null) returnValue += `<div class="common_box" id="${id}">`;
    else returnValue += '<div class="common_box">';

    elementArray.map((value) => { returnValue += value + '\n'; });
    returnValue += '</div>';

    return returnValue;
}

function generateIconButton(icon, text, id = null) {
    var returnValue = '';

    if (id !== null) returnValue += `<button class="icon_button" id="${id}">`;
    else returnValue += '<button class="icon_button" >';
    returnValue += `${icon}\n<p>${text}</p>`;
    returnValue += '</div>';

    return returnValue;
}

function generateIcon(name) {
    var returnValue = ''
    icons.map((value) => {
        if (name == value.name) {
            value.iconElements.map((element) => {
                returnValue += element + '\n';
            });
        }
    });

    return returnValue;
}