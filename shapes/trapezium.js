class Trapezium extends Shape {
	getName() {
		return 'Trapezium';
	}

	getIcon() {
		return generateIcon('trapezium');
	}

	generateInput() {
		/*
		var elements = [
			'<p>Adjacent 1: </p>',
			'<input type="number" step="0.01" id="a_input">',
			'<p>Adjacent 2: </p>',
			'<input type="number" step="0.01" id="b_input">',
			'<p>Height: </p>',
			'<input type="number" step="0.01" id="height_input">',
		];
		*/

		var elements = [
			document.createElement('p'),
			document.createElement('input'),
			document.createElement('p'),
			document.createElement('input'),
			document.createElement('p'),
			document.createElement('input'),
		];

		elements[0].innerHTML = 'Adjacent 1: ';
		elements[2].innerHTML = 'Adjacent 2: ';
		elements[3].innerHTML = 'Height: ';

		elements[1].type = elements[3].type = elements[5].type = 'number';
		elements[1].step = elements[3].step = elements[5].step = 0.01;
		elements[1].id = 'a_input';
		elements[3].id = 'b_input';
		elements[5].id = 'height_input';

		return super.generateInput(this.getName(), elements, 3);
	}

	getInputs() {
		return {
			a: Number.parseFloat(document.getElementById('a_input').value),
			b: Number.parseFloat(document.getElementById('b_input').value),
			height: Number.parseFloat(document.getElementById('height_input').value),
		};
	}

	getArea(input) {
		return ((input.a + input.b) / 2) * input.height;
	}

	generateOutputBox(inputs) {
		var inputElements = [
			'<span style="display: grid;grid-template-columns: repeat(2, max-content);gap: 0.25rem">',
			'<span class="fraction">',
			`<p>(${inputs.a} + ${inputs.b})</p>`,
			'<span></span>',
			'<p>2</p>',
			'</span>',
			`<p style="margin-top: auto;margin-bottom: auto;"> &times; ${inputs.height}</p>`,
			'</span>',
		];

		return super.generateOutputBox(this.getIcon(), this.getName(), inputElements, this.getArea(inputs));
	}

	clearInputs() {
		document.getElementById('a_input').value = null;
		document.getElementById('b_input').value = null;
		document.getElementById('height_input').value = null;
	}
}
