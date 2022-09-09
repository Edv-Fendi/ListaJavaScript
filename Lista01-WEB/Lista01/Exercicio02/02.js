const submit = document.getElementsByClassName("submit")[0];

submit.addEventListener("click", () => {
    const a1 = document.getElementById("Ferradura");

    const a1Value = parseFloat(a1.value);

    document.getElementById("resultado").innerHTML =
        "Resultado: " + a1Value * 4 + " Ferraduras";
});