// clears from completely

function clear() {
      var from = document.getElementById("from");
      from.innerHTML = "";
}

// removes the last digit from the from div
function backup() {
  var from = document.getElementById("from");
  var current = from.innerHTML;
  current = current.substring(0, current.length-1);
  if (current=="") current = 0;
  from.innerHTML = current;
}

// convert does the converting action based on what is
// selected in the from and to type options and entered
// into the from div 
function convert(){
    var fromTypeIndex = document.getElementById("fromType").selectedIndex;
    var types = document.getElementById("fromType").options;
    var fromType = types[fromTypeIndex].text;

    var toTypeIndex = document.getElementById("toType").selectedIndex;
    var toType = types[toTypeIndex].text;

    var fromString = document.getElementById("from").innerHTML;
    var to = document.getElementById("to");

    switch(fromType) {
        case "Binary":
            switch(toType) {
                case "Binary":
                      to.innerHTML=fromString; // set the to to from as base is the same
                    break;
                case "Decimal":
                      to.innerHTML=parseInt(fromString, 2);
                    break;
                case "Hexadecimal":
                      to.innerHTML=parseInt(fromString, 2).toString(16);
                    break;
             }
            break;

        case "Decimal":
            var from = parseInt(fromString, 10);
            switch(toType) {
                case "Binary":
                      to.innerHTML=from.toString(2);
                    break;
                case "Decimal":
                    to.innerHTML=from;
                    break;
                case "Hexadecimal":
                    to.innerHTML=from.toString(16);
                    break;
             }
            break;
        case "Hexadecimal":
            switch(toType) {
                case "Binary":
                    to.innerHTML=parseInt(fromString, 16).toString(2);
                    break;
                case "Decimal":
                      to.innerHTML=parseInt(fromString, 16);
                    break;
                case "Hexadecimal":
                    to.innerHTML=fromString; // set the to to from as base is the same
                     
                    break;
             }
            break;
    }  
}

// Add the digit of the button to the end of the from
function addDigit(button) {
    var from = document.getElementById("from");
    if (from.innerHTML == "0")
        from.innerHTML=button.innerHTML;    
    else 
       from.innerHTML= from.innerHTML + button.innerHTML;
}

// Runs when user selects an item from the From Drop Down box
// makes the correct number keypad show and hides the others

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