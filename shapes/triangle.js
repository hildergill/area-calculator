class Triangle extends Shape {
    getName() {
        return 'Triangle';
    }

    getArea(inputs) {
        return (inputs.height * inputs.width) / 2;
    }

    generateInputElements() {
        var inputElements = [
            '<p>Width: </p>',
            '<input type="number" id="width_input" step="0.001">',
            '<p>Height: </p>',
            '<input type="number" id="height_input" step="0.001">',
        ];

        return super.generateInputElements(this.getName(), inputElements, 2);
    }

    getInputs() {
        var returnValue = {
            width: Number.parseFloat(document.getElementById('width_input').value),
            height: Number.parseFloat(document.getElementById('height_input').value)
        }

        return returnValue;
    }

    clearInputs() {
        document.getElementById('width_input').value = null;
        document.getElementById('height_input').value = null;
    }

    generateResultElements(inputs, results) {
        var numberElementsStyle = 'margin-top: auto;margin-bottom: auto;';
        var elementsStyle = "display: flex;"

        var elements = [`<div style="${elementsStyle}">`,
            '<span class="fraction"><p>1</p><span id="fraction_line"></span><p>2</p></span>',
        `<p style="${numberElementsStyle}">‎‎ &#215; ${inputs.width} &#215; ${inputs.height}</p>`,
            `</div>`];

        return super.generateResultElements(this.getName(), elements, results);
    }

    getIcon() {
        var iconElements = [
            '<svg width="24" height="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">',
            '<path d="m11 23-.403-.0375-.851-.142-.853-.215-1.07-.367-1.34-.658-1.08-.719-.627-.502-1.02-1.01-.581-.717-.719-1.08-.658-1.34-.367-1.07-.215-.853-.136-.807-.0935-1.03v-.807l.0935-1.03.136-.807.215-.853.367-1.07.658-1.34.719-1.08.502-.627 1.01-1.02.717-.581 1.08-.719 1.34-.658 1.07-.367.853-.215.807-.136 1.03-.0935h.807l1.03.0935.807.136.853.215 1.07.367 1.34.658 1.08.719.627.502 1.02 1.01.581.717.719 1.08.658 1.34.367 1.07.215.853.136.807.0935 1.03v.807l-.0935 1.03-.136.807-.215.853-.367 1.07-.658 1.34-.719 1.08-.581.717-1.02 1.01-.627.502-1.08.719-1.34.658-1.07.367-.853.215-.807.136-1.03.0935-.986-.011zm-5.15-7.65.026-.042.629-4.87.0632-.941h.0896l.0662 1.21.563 4.66 1.02.0255.0832-.0832.659-6.3-.0712-.0717-.618.0268-.419 4.66-.0651 1.23h-.108l-.0547-.56-.644-5.24-.0863-.112h-.79l-.0526.0852-.665 5-.0611.686-.0732.118-.0421-.0422-.102-1.52-.376-4.3-.618-.0268-.0705.0717.625 6.27.0386.112h1.03zm7.93-.316v-.336l-1.39-.0447v-4.97l1.39-.0447v-.672h-3.63v.672l1.39.0447v4.97l-1.39.0447-.027.573.047.122 3.61-.0235zm2.49-.986.0224-1.32 1.84-.0495.508-.188.415-.286.308-.418.198-.493v-.941l-.204-.518-.286-.375-.375-.286-.518-.207-2.69-.00183-.0116 3.16-.0116 3.16.0442.116.741-.026zm.0215-2.11-.0232-.0603.024-2.19h1.7l.358.193.196.21.183.403v.672l-.183.403-.196.21-.358.193-1.68.0293z" />',
            '</svg>',
        ];

        var returnValue = '';
        iconElements.forEach((value) => { returnValue += value + '\n'; });

        return returnValue;
    }
}
