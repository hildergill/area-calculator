class Circle extends Shape {
	getName() {
		return 'Circle';
	}

	getArea(radius) {
		return Math.PI * Math.pow(radius, 2);
	}

	generateInput() {
		var styleArray = [
			'display: grid;',
			'grid-template-columns: max-content auto max-content;',
			'grid-template-rows: auto;',
			'gap: 0.5rem;',
		];

		var styleString = '';
		styleArray.map((value) => {
			styleString += value + '\n';
		});

		return super.generateInput(this.getName(), [
			'<div style="' + styleString + '">',
			'<p>Radius: </p>',
			'<input type="number" step="0.01" id="radius_input">',
			'<p>unit</p>',
			'</div>',
		]);
	}
}
