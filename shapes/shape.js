class Shape {
	getName() {
		return 'Shape';
	}

	getArea() {
		return null;
	}

	generateInput(title, elements) {
		var retArray = ['<div id="input_section">', '<p>', title, '</p>'];
		elements.map((value) => {
			retArray.push(value + '\n');
		});
		retArray.push('</div>');
		retArray.push('<div>', '<button>Clear</button>', '<button>Calculate</button>', '</div>');

		var returnValue = '';
		retArray.map((value) => {
			returnValue += value + '\n';
		});

		return returnValue;
	}
}
