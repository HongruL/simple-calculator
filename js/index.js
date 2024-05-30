const $buttons = document.querySelectorAll("button");

$buttons.forEach($button => $button.addEventListener("click", showButton));

function showButton(event) {
    const operator = event.target.textContent;
    document.querySelector("#operator").textContent = operator;
};

