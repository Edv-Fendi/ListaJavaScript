const submit = document.getElementsByClassName("submit")[0];


submit.addEventListener("click", () => {

    const a1 = document.getElementById("a1");
    const a2 = document.getElementById("a2");
    const a3 = document.getElementById("a3");

    const a1Value = parseFloat(a1.value);
    const a2Value = parseFloat(a2.value);
    const a3Value = parseFloat(a3.value);


    resultN1 = a1Value;
    resultN2 = a2Value * 2;
    resultN3 = a3Value * 3;

    resultMedia = (resultN1 + resultN2 + resultN3) / 3

    document.getElementById("resultado").innerHTML =
        "A média é de: " + (resultMedia).toFixed(2);


})