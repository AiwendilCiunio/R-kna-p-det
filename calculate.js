let result;
export default function calculate() {
    const firstNumber = document.getElementById("firstNumberField").value;
    const secondNumber = document.getElementById("secondNumberField").value;
    const dropdownMenu = document.getElementById("dropdownMenu").value;
    let resultField = document.getElementById("resultField");
    switch (dropdownMenu) {
        case "+":
            result = Number(firstNumber) + Number(secondNumber);
            break;
        case "-":
            result = Number(firstNumber) - Number(secondNumber);
            break;
        case "*":
            result = Number(firstNumber) * Number(secondNumber);
            break;
        case "/":
            if (Number(secondNumber) === 0) {
                result = "Error!";
            } else {
                result = Number(firstNumber) / Number(secondNumber);
            }
            break;
        default:
            result = "Invalid operator";

    }
    resultField.innerText = result;
}
