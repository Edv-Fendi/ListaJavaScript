const submit = document.getElementsByClassName("submit")[0];

submit.addEventListener("click", () => {
    const a1 = document.getElementById("name");
    const a2 = document.getElementById("age");

    const a2Value = parseFloat(a2.value);
    result = a2Value * 360;

    document.getElementById("resultado").innerHTML =
        a1.value + " voce possui: " + result + " dias de vida";
});