const inputGreen = document.querySelector("#input-green");
const inputBlue = document.querySelector("#input-blue");
const inputPurple = document.querySelector("#input-purple");
const inputOrange = document.querySelector("#input-orange");

const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const purple = document.querySelector("#purple");
const orange = document.querySelector("#orange");
const all = document.querySelector("#all-point");

let greenValue = 0;
let blueValue = 0;
let purpleValue = 0;
let orangeValue = 0;

function calculateAll() {
    all.innerText = (greenValue + blueValue + purpleValue + orangeValue).toLocaleString('ko-KR');
}

function greenChestOn(event) {
    event.preventDefault();
    const point = 1;
    const num = inputGreen.value;
    const allPoint = point*num;
    if (num < 0) {
        alert("너무 작은 숫자입니다.");
        inputGreen.value = null;
    } else if (num > 100000000) {
        alert("너무 큰 숫자입니다.");
        inputGreen.value = null;
    } else{
        green.innerText = allPoint.toLocaleString('ko-KR');
        greenValue = allPoint;
        calculateAll()
    }
}

function blueChestOn(event) {
    event.preventDefault();
    const point = 10;
    const num = inputBlue.value;
    const allPoint = point*num;
    if (num < 0) {
        alert("너무 작은 숫자입니다.");
        inputBlue.value = null;
    } else if (num > 100000000) {
        alert("너무 큰 숫자입니다.");
        inputBlue.value = null;
    } else{
        blue.innerText = allPoint.toLocaleString('ko-KR');
        blueValue = allPoint;
        calculateAll()
    }
}

function purpleChestOn(event) {
    event.preventDefault();
    const point = 20;
    const num = inputPurple.value;
    const allPoint = point*num;
    if (num < 0) {
        alert("너무 작은 숫자입니다.");
        inputPurple.value = null;
    } else if (num > 100000000) {
        alert("너무 큰 숫자입니다.");
        inputPurple.value = null;
    } else{
        purple.innerText = allPoint.toLocaleString('ko-KR');
        purpleValue = allPoint;
        calculateAll()
    }
}

function orangeChestOn(event) {
    event.preventDefault();
    const point = 50;
    const num = inputOrange.value;
    const allPoint = point*num;
    if (num < 0) {
        alert("너무 작은 숫자입니다.");
        inputOrange.value = null;
    } else if (num > 100000000) {
        alert("너무 큰 숫자입니다.");
        inputOrange.value = null;
    } else{
        orange.innerText = allPoint.toLocaleString('ko-KR');
        orangeValue = allPoint;
        calculateAll()
    }
}

inputGreen.addEventListener("input", greenChestOn);
inputBlue.addEventListener("input", blueChestOn);
inputPurple.addEventListener("input", purpleChestOn);
inputOrange.addEventListener("input", orangeChestOn);
