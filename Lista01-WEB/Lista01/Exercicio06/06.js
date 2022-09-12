const submit = document.getElementsByClassName("submit")[0];


submit.addEventListener("click", () => {

    const a1 = document.getElementById("restaurante");

    const a1Value = parseFloat(a1.value);

    result = a1Value * 12

    document.getElementById("resultado").innerHTML =
        "Vai pagar: " + (result).toFixed(2) + " Reais";

   
})