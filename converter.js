function changeFrom(event) {
    var newType = this.options[this.selectedIndex].text;
    var binaryButtons = document.getElementById("binaryButtons");
    var decimalButtons = document.getElementById("decimalButtons");
    var hexadecimalButtons = document.getElementById("hexadecimalButtons");
    if (newType == "Binary") {
        binaryButtons.style.display="inline";
        decimalButtons.style.display="none";
        hexadecimalButtons.style.display="none";
    }
    else {
        if (newType == "Hexadecimal") {
            binaryButtons.style.display="none";
            decimalButtons.style.display="none";
            hexadecimalButtons.style.display="inline";
        }
        else {
            if (newType == "Decimal") {
            binaryButtons.style.display="none";
            decimalButtons.style.display="inline";
            hexadecimalButtons.style.display="none";
            }
        }
    }
};