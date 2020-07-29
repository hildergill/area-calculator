class Circle extends Shape {
	getName() {
		return 'Circle';
	}

	getIcon() {
		return generateIcon('circle');
	}

	generateInput() {
		var elements = [document.createElement('p'), document.createElement('input')];

		elements[0].innerHTML = 'Radius: ';

		elements[1].type = 'number';
		elements[1].id = 'radius_input';
		elements[1].step = 0.001;

		return super.generateInput(this.getName(), elements, 1);
	}

	getInputs() {
		return {
			radius: Number.parseFloat(document.getElementById('radius_input').value),
		};
	}

	getArea(input) {
		return Math.PI * Math.pow(input.radius, 2);
	}

	generateOutputBox(inputs) {
		const inputElements = [document.createElement('p')];
		inputElements[0].innerHTML = `&pi; &times; ${inputs.radius}<sup>2</sup>`;
		return super.generateOutputBox(this.getIcon(), this.getName(), inputElements, this.getArea(inputs));
	}

	clearInputs() {
		document.getElementById('radius_input').value = null;
	}
}
