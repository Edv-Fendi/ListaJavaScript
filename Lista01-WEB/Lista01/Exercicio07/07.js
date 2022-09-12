const submit = document.getElementsByClassName("submit")[0];


submit.addEventListener("click", () => {

    const a1 = document.getElementById("dias");
    const a2 = document.getElementById("mes");

    const a1Value = parseFloat(a1.value);
    const a2Value = parseFloat(a2.value);

    if (a2Value === 1 ){
        result = a1Value;
    }else if (a2Value > 1) {
    result = (a2Value * 30) + a1Value
    }

    document.getElementById("resultado").innerHTML =
        "Passaram: " + (result) + "  dias do ano";

   
})