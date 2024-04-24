function calculateDifference() {
    var city1 = document.getElementById("city1").value;
    var city2 = document.getElementById("city2").value;

    if (city1 === "" || city2 === "") {
        alert("Vennligst fyll ut begge feltene.");
        return;
    }

    var difference = Math.abs(city1.length - city2.length);

    document.getElementById("output").innerText = difference;
    document.getElementById("result").style.display = "block";
}
