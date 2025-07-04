const previousOperationText = document.querySelector("#operacaovizu");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("button");

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    clear() {
        this.previousOperationText.innerText = "";
        this.currentOperationText.innerText = "";
    }

    appendNumber(number) {
        this.currentOperationText.innerText += number;
    }

    compute() {
        try {
            const result = eval(this.currentOperationText.innerText);
            this.previousOperationText.innerText = this.currentOperationText.innerText;
            this.currentOperationText.innerText = result;
        } catch (error) {
            this.currentOperationText.innerText = "Error";
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerText;
        if (value === "C") {
            previousOperationText.innerText = "";
            currentOperationText.innerText = "";
        } else if (value === "=") {
            try {
                const result = eval(currentOperationText.innerText);
                previousOperationText.innerText = currentOperationText.innerText;
                currentOperationText.innerText = result;
            } catch (error) {
                currentOperationText.innerText = "Error";
            }
        } else {
            currentOperationText.innerText += value;
        }
    });
}); 