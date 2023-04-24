function test() {
    alert("Salut, Andrei!");
}

function calcSum() {
        value1 =
          parseInt(document.mainForm.textbox1.value);
        value2 =
          parseInt(document.mainForm.textbox2.value);
        value3 =
            parseInt(document.mainForm.textbox3.value)
        sum = value1 + value2 + value3;
        document.mainForm.textBoxSum.value = sum;
        alert ("Suma este: " + sum);
}
