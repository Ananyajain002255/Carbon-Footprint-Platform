function calculate() {

    let distance =
    parseFloat(document.getElementById("distance").value);

    let factor =
    parseFloat(document.getElementById("transport").value);

    if (isNaN(distance) || distance <= 0) {
        document.getElementById("result").innerHTML =
        "⚠ Please enter a valid distance.";
        return;
    }

    let emission = distance * factor;

    let message = "";

    if (emission < 5) {
        message = "🌱 Great! Your carbon footprint is low.";
    }
    else if (emission < 15) {
        message = "♻ Moderate carbon footprint. Try greener options.";
    }
    else {
        message = "⚠ High carbon footprint. Consider public transport.";
    }

    document.getElementById("result").innerHTML =
    "Estimated CO₂ Emission: <b>" +
    emission.toFixed(2) +
    " kg</b><br>" +
    message;
}
