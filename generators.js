function generateCommonBox(containerID, elementArray, id = null) {
    var commonBoxString = '';

    if (id !== null) commonBoxString += `<div class="common_box" id="${id}">`;
    else commonBoxString += '<div class="common_box">';

    elementArray.map((value) => { commonBoxString += value + '\n'; });
    commonBoxString += '</div>';

    var containerElement = document.getElementById(containerID);
    containerElement.innerHTML += commonBoxString;
}