const numForm = document.querySelector("#input-form");
const numInput = document.querySelector("#input-form input");
const resultSpan = document.querySelector("#calculate-result span");
let accumulationPoint = 0;

function countBonusPoint(n) {
    const plusPoint = (n/500)*260;
    accumulationPoint += plusPoint;
    loopChestCheck(plusPoint);
}

function loopChestCheck(plusPoint){
    if (plusPoint >= 260) {
        countBonusPoint(plusPoint);
    } else {
        resultSpan.innerText = parseInt(accumulationPoint);
        accumulationPoint = 0;
    }
}

function countChestPoint(event) {
    event.preventDefault();
    accumulationPoint = 0;
    const chestPoint = parseInt(numInput.value);
    const plusPoint = (chestPoint/500)*260;
    accumulationPoint += chestPoint+plusPoint;
    loopChestCheck(plusPoint);
}

numForm.addEventListener("submit", countChestPoint);
