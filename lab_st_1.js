function calculateResult() {
    let n = document.getElementById("subjects").value;
    let total = 0;

    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(prompt("Enter marks for Subject " + i));
        total = total + marks;
    }

    let percentage = (total / 500)* 100;
    let result;

    if (percentage >= 85) {
        result = "First Class";
    } else if (percentage> 33 && percentage < 85) {
        result = "Second Class";
    } else {
        result = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Percentage: " + percentage.toFixed(2) + "<br>" +
        "Result: " + result;
}