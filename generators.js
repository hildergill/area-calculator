function generateCommonBox(elements, id = null) {
	var returnValue = id !== null ? `<div class="common_box" id="${id}">` : '<div class="common_box">';
	elements.map((value) => {
		returnValue += value + '\n';
	});
	returnValue += '</div>';
	return returnValue;
}

function generateIconButton(icon, text, id = null, action = null) {
	var returnValue = `<button class="icon_button" id="${id}" onclick="${action}">`;

	returnValue += `\n${icon}\n<p>${text}</p>\n</button>`;
	return returnValue;
}

function generateIcon(name) {
	var returnValue = '';

	icons.map((value) => {
		if (name === value.name) {
			value.icon.map((element) => {
				returnValue += element;
			});
		}
	});

	return returnValue;
}
