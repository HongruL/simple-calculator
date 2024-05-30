class Calculator {
    calculate(operator, firstOperand, secondOperand) {
        let result = null;

        if (operator === "+") {
            result = firstOperand + secondOperand
        } else if (operator === "-") {
            result = firstOperand - secondOperand
        } else if (operator === "x") {
            result = firstOperand * secondOperand
        } else if (operator === "/") {
            result = firstOperand / secondOperand
        }

        return result;
    }
}

const myCalc = new Calculator();
const $buttons = document.querySelectorAll('button[type="operator"]');

$buttons.forEach($button => $button.addEventListener("click", showButton));

function showButton(event) {
    const operator = event.target.textContent;

    document.querySelector("#operator").textContent = operator;
};

// make the calculation
const $goButton = document.querySelector("#go");

$goButton.addEventListener("click", () => {
    const firstOperand = parseFloat(document.querySelector("#first").value);
    const secondOperand = parseFloat(document.querySelector("#second").value);
    const result = myCalc.calculate(document.querySelector("#operator").textContent, firstOperand, secondOperand);

    document.querySelector("#result").textContent = result;
})

// clear the input fields
const $clearButton = document.querySelector("#clear");

$clearButton.addEventListener("click", () => {
    document.querySelector("#first").value = "";
    document.querySelector("#second").value = "";
    document.querySelector("#operator").textContent = "";
    document.querySelector("#result").textContent = "";
})