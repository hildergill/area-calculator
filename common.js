function isMobile() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return (height > width);
}

function generateCommonBox(containerID, elementArray, id = null) {
    var containerElement = document.getElementById(containerID);

    if (id !== null) elementArray.innerHTML += `<div class="common_box" id="${id}">`;
    else elementArray.innerHTML += '<div class="common_box">';

    elementArray.map((value) => { containerElement.innerHTML += value + '\n'; });
    elementArray.innerHTML += '</div>';
}