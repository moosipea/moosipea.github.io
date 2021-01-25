var output = document.getElementById("output");
var input = document.getElementById("input");
var btn_convert = document.getElementById("btn_convert");
var outputString = "";
input.value = "Write or paste text here!"

function convertToUpDown() {
    if(input.value != "") {
        outputString = "";
        output.innerHTML = "";
        for (i = 0; i < input.value.length; i++) {
            if(i % 2 == 0) {
                outputString += input.value.charAt(i).toUpperCase();
            } else {
                outputString += input.value.charAt(i).toLowerCase();
            }
        }
        if(outputString.endsWith("?")) {
            outputString += "?!!????!?";
        } else if(outputString.endsWith("!")) {
            outputString += "!!11!!1!!";
        }
        console.log(outputString);
        output.innerHTML = outputString;
    }
}

// https://inspiredwebdev.com/copy-to-clipboard-with-javascript
function copyToClipboard() {
    const str = document.getElementById('output').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}