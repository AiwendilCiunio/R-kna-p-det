import calculate from "./calculate.js";
import resetFields from "./resetFields.js";

let calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", () => {
    calculate();
    resetFields();
})

