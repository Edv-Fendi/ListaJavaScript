const submit = document.getElementsByClassName("submit")[0];


submit.addEventListener("click", () => {

    const a1 = document.getElementById("tamP");
    const a2 = document.getElementById("tamM");
    const a3 = document.getElementById("tamG");

    const a1Value = parseFloat(a1.value);
    const a2Value = parseFloat(a2.value);
    const a3Value = parseFloat(a3.value);

    let result = (a1Value * 10) + (a2Value * 12) + (a3Value * 15)



    document.getElementById("resultado").innerHTML =
        "Foi comprado no total: " + (result) + "  Reais em camisetas";



})