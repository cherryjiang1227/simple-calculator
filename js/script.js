const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("value");
        if (value) {
            display.value += value;
        }
    });
});

clear.addEventListener("click", () => {
    display.value = "";
});

equals.addEventListener("click", () => {
    try {
        const result = eval(display.value);

        if (!isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch {
        display.value = "Error";
    }
});