const canvas = document.querySelector("canvas")
canvas.width = 1920
canvas.height = 1080
const ctx = canvas.getContext("2d")
ctx.font = "16px Consolas"
ctx.fillStyle = "#00ff00"

let lines = []
let current_line = ""
let clipboard = ""
let scroll = 0
let fontSize = 16

reserved_keys = [
    38,
    40,
    107,
    109
]

const WELCOME_STRING = `
╔══════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Welcome to moosipea\'s terminal site                                                                          ║
║                                                                                                              ║
║ You can use the \"help\" command to find                                                                       ║
║ a list of all available commands                                                                             ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════╝`

const HELP_STRING = `
help → usage: help(none); aliases: ?; desc: displays this menu
reload → usage: reload(none); aliases: r; desc: reloads the page
clear → usage: clear(none); aliases: cls; desc: clears the terminal
about → usage: about(none); aliases: n/a; desc: contact me!
color → usage: color(00ff00); aliases: n/a; desc: change the font color of the terminal
bgcolor → usage: bgcolor(000000); aliases: n/a; desc: change the background color of the terminal
datetime → usage: datetime(none); aliases: time; desc: display current date and time
rainbow → usage: rainbow(none); aliases: n/a; desc: rainbow mode!

You can use ↑↓ to scroll up and down and use KP_PLUS & KP_MINUS to change the font size
`

const ABOUT_STRING = `
Terminal site written in JS
Made by moosipea
YouTube: moosipea
Discord: moosipea#3809
E-mail: mattiasmcvolt@gmail.com
`

function reportWindowSize() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

window.onload = function() {
    window.onkeydown = function(key) {
        if(key.keyCode <= 127 && key.keyCode >= 32 && !(reserved_keys.includes(key.keyCode))) {
            current_line += String.fromCharCode(key.keyCode).toLowerCase()
            updateCurrentLine(current_line)
        } else if(key.keyCode == 13) {
            lines[lines.length - 1] = "> " + current_line
            processCommand(current_line.split(" "))
            drawLines(lines, fontSize)
        } else if(key.keyCode == 8) {
            current_line = current_line.slice(0, current_line.length - 1)
            updateCurrentLine(current_line)
        } else if(key.keyCode == 38) {
            scroll += 1
            drawLines(lines, fontSize)
        } else if(key.keyCode == 40) {
            scroll -= 1
            drawLines(lines, fontSize)
        } else if(key.keyCode == 86 && key.ctrlKey) {
            current_line += "lmao copy paste doesn't work"
        } else if(key.keyCode == 107) {
            fontSize += 1
            ctx.font = fontSize + "px Consolas"
            drawLines(lines, fontSize)
        } else if(key.keyCode == 109) {
            fontSize -= 1
            ctx.font = fontSize + "px Consolas"
            drawLines(lines, fontSize)
        }
    }
}

function processCommand(cmd) {
    operation = cmd[0]
    switch(operation) {
        case "help":
            addString(HELP_STRING)
            break

        case "reload":
        case "r":
            location.reload()
            break
        
        case "clear":
        case "cls":
            lines = []
            addString("\n\n>")
            drawLines(lines, fontSize)
            break

        case "about":
            addString(ABOUT_STRING)
            break

        case "color":
            ctx.fillStyle = "#"+cmd[1]
            break
        
        case "bgcolor":
            canvas.style.background = "#"+cmd[1]
            break
        
        case "exp":
            cmd.pop(0)
            expression = cmd.toString().replace(",", "")
            console.log(expression)
            addString(eval(expression).toString())
            break

        case "datetime":
        case "time":
            date = new Date()
            day = date.getDate().toString()
            month = (date.getMonth()+1).toString()
            year = date.getFullYear().toString()
            hours = date.getHours().toString()
            mins = date.getMinutes().toString()
            secs = date.getSeconds().toString()
            addString(day + "/" + month + "/" + year + " " + hours + ":" + mins + ":" + secs)
            break
        
        case "rainbow":
            canvas.style.background = "-webkit-linear-gradient(right, orange , yellow, green, cyan, blue, violet)"
            canvas.style.background = "-moz-linear-gradient(left, orange, yellow, green, cyan, blue, violet)"
            canvas.style.background = "-o-linear-gradient(left, orange, yellow, green, cyan, blue, violet)"
            canvas.style.background = "linear-gradient(to left, orange , yellow, green, cyan, blue, violet)"
            ctx.fillStyle = "#000000"
            console.log(canvas.style.background)
            break

        default:
            addString("Syntax error")
    }
    current_line = ""    
    if(cmd != "clear" && cmd != "cls") {
        addString("> ")
    }
}

function updateCurrentLine(newLine) {
    lines[lines.length - 1] = "> " + newLine
    drawLines(lines, fontSize)
}

function addString(string) {
    string_arr = string.split("\n")
    for (let i = 0; i < string_arr.length; i++) {
        lines.push(string_arr[i])
    }
}

function drawLines(lines, gap) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], 16, gap+(i+scroll)*gap)
    }
}

addString(WELCOME_STRING)
addString("\n\n>")
drawLines(lines, fontSize)