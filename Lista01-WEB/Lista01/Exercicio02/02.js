const submit = document.getElementsByClassName("submit")[0];

submit.addEventListener("click", () => {
    const a1 = document.getElementById("Ferradura");

    const a1Value = parseFloat(a1.value);

    alert(`A soma é ${a1Value * 4}`);
});