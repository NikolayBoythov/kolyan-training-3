
function myCustomFunction(a, b) {
    var c = calck(a, b);
    alert(c);
}
function calck(a, b) {
    return a + b;
}

function getSummOfNumbers()  {
    var summVal = parseInt(document.getElementById("val1").value) + parseInt(document.getElementById("val2").value);
    alert("Summ of " +
        document.getElementById("val1").value
        + " and " +
        document.getElementById("val2").value
        + " will be equal " +
         summVal
    )
}
