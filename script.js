let upd = document.getElementById("updatev")
let updh = document.getElementById("updateh")
let p = document.createElement("p")
let p1Text = document.createTextNode("Updated on :  12 Jan, 2024 Version : 1.9")
p.append(p1Text)
p.setAttribute('class','hidden-xs')
upd.appendChild(p)


let p2 = document.createElement("p")
let p2Text = document.createTextNode("Updated on : 12 Jan, 2024 Version 1.9")
p2.append(p2Text)
p2.setAttribute('class','visible-xs')
updh.appendChild(p2)
