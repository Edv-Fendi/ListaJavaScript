const submit = document.getElementsByClassName("submit")[0];

submit.addEventListener("click", () => {
    const a1 = document.getElementById("x");
    const a2 = document.getElementById("y");

    const a1Value = parseFloat(a1.value);
    const a2Value = parseFloat(a2.value);

    document.getElementById("resultado").innerHTML =
        "Resultado:" + a1Value * a2Value;
});