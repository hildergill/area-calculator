class Shape {
	getName() {
		return 'Shape';
	}

	getArea() {
		return null;
	}

	generateInput(title, elements) {
		var retArray = ['<div id="input_section">', '<p id="input_title">', title, '</p>'];
		elements.map((value) => {
			retArray.push(value + '\n');
		});
		retArray.push('<div>', '<button onclick="clearInputs();">Clear</button>', '<button>Calculate</button>', '</div>');
		retArray.push('</div>');

		var returnValue = '';
		retArray.map((value) => {
			returnValue += value + '\n';
		});

		return returnValue;
	}
}
