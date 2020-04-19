class Triangle extends Shape {
	getName() {
		return 'Triangle';
	}

	getArea(width, height) {
		return (1 / 2) * width * height;
	}

	generateInput() {
		var styleArray = [
			'display: grid;',
			'grid-template-columns: max-content auto max-content;',
			'grid-template-rows: auto auto;',
			'gap: 0.5rem;',
		];

		var styleString = '';
		styleArray.map((value) => {
			styleString += value + '\n';
		});

		return super.generateInput(this.getName(), [
			'<div style="' + styleString + '">',
			'<p>Width: </p>',
			'<input type="number" step="0.01" id="width_input">',
			'<p>unit</p>',
			'<p>Height: </p>',
			'<input type="number" step="0.01" id="height_input">',
			'<p>unit</p>',
			'</div>',
		]);
	}
}
