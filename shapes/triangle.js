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
			'<p>units</p>',
			'<p>Height: </p>',
			'<input type="number" step="0.01" id="height_input">',
			'<p>units</p>',
			'</div>',
		]);
	}

	clearInputs() {
		document.getElementById('width_input').value = null;
		document.getElementById('height_input').value = null;
	}

	generateResultBox(results) {
		var calculationsArray = [
			'<span style="display: flex;">',
			'<span style="display: grid;grid-template-rows: max-content auto max-content;grid-template-columns: min-content;">',
			'<p>1</p>',
			'<hr>',
			'<p>2</p>',
			'</span>',
			'<p style="display: inline;vertical-align: middle;margin-top: auto;margin-bottom: auto;">&#8729;' +
				results.width +
				'&#8729;' +
				results.height +
				'</p>',
			'</span>',
		];

		return super.generateResultBox(this.getName(), calculationsArray, this.getArea(results.width, results.height));
	}

	getInputs() {
		var returnValue = {
			width: document.getElementById('width_input').value,
			height: document.getElementById('height_input').value,
		};

		return returnValue;
	}
}
