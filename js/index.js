const $buttons = document.querySelectorAll("button");

$buttons.forEach($button => $button.addEventListener("click", showButton));

function showButton(event) {
    const operator = event.target.textContent;
    const firstOperand = parseFloat(document.querySelector("#first").value)
    const secondOperand = parseFloat(document.querySelector("#second").value)

    const result = calculate(operator, firstOperand, secondOperand)

    document.querySelector("#operator").textContent = operator;
    document.querySelector("#result").textContent = result;
};

function calculate(operator, firstOperand, secondOperand) {
    let result = null

    if (operator === "+") {
        result = firstOperand + secondOperand
    } else if (operator === "-") {
        result = firstOperand - secondOperand
    } else if (operator === "x") {
        result = firstOperand * secondOperand
    } else if (operator === "/") {
        result = firstOperand / secondOperand
    }

    return result
}