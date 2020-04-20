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
			'<p>units</p>',
			'</div>',
		]);
	}

	clearInputs() {
		document.getElementById('radius_input').value = null;
	}

	generateResultBox(results) {
		var calculationsArray = ['<p>&#960;&#8729;', results.radius, '<sup>2</sup></p>'];
		return super.generateResultBox(this.getName(), calculationsArray, this.getArea(results.radius));
	}

	getInputs() {
		var returnValue = {
			radius: document.getElementById('radius_input').value,
		};

		return returnValue;
	}
}
