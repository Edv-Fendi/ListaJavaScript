const submit = document.getElementsByClassName("submit")[0];

submit.addEventListener("click", () => {
    const a1 = document.getElementById("paozinho");
    const a2 = document.getElementById("broa");

    console.log(a1);

    const a1Value = parseFloat(a1.value);
    const a2Value = parseFloat(a2.value);

    document.getElementById("pao").innerHTML =
        "Gasto em paozinhos: " + a1Value * 0.12 + " Reais";

    document.getElementById("broazinha").innerHTML =
        "Gasto em Broas: " + a2Value * 1.5 + " Reais";

    document.getElementById("resultado").innerHTML = `Resultado: ${(
    a1Value * 0.12 +
    a2Value * 1.5
  ).toFixed(2)} Reais`;
});