const submit = document.getElementsByClassName("submit")[0];


submit.addEventListener("click", () => {

    const a1 = document.getElementById("comb");

    const a1Value = parseFloat(a1.value);

    result = a1Value / 5.35

    document.getElementById("resultado").innerHTML =
        "Vai conseguir colocar: " + (result).toFixed(2) + " litros de combustivel";

   
})