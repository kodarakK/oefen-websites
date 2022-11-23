const BrutoFormZuren = [
	"HBr",
	"HCl",
	"HF",
	"HI",
	"H2S",
	"HBrO3",
	"H2CO3",
	"HClO3",
	"H3PO4",
	"HIO3",
	"HNO3",
	"H2SO4",
	"Br-",
	"Cl-",
	"F-",
	"I-",
	"HS-",
	"S2-",
	"BrO3-",
	"HCO3-",
	"CO32-",
	"ClO3-",
	"H2PO4-",
	"HPO42-",
	"PO43-",	
	"IO3-",
	"NO3-",
	"HSO2-",
	"SO42-"
]
/*
const SystematischeNaam = [
	"waterstofbromide",
	"waterstofchloride",
	"waterstoffluoride",
	"waterstofjodide",
	"waterstofsulfide",
	"waterstofbromaat",
	"waterstofcarbonaat",
	"waterstofchloraat",
	"waterstoffosfaat",
	"waterstofjodaat",
	"waterstofnitraat",
	"waterstofsulfaat",
	"bromide-ion",
	"chloride-ion",
	"fluoride-ion",
	"jodide-ion",
	"waterstofsulfide-ion",
	"sulfide-ion",
	"bromaation",
	"waterstofcarbonaation",
	"carbonaation",
	"chloraation",
	"diwaterstoffosfaation",
	"waterstoffosfaation",
	"fosfaation",
	"jodaation",
	"nitraation",
	"waterstofsulfaation",
	"sulfaation"
]*/
const SystematischeNaamHL = [
	"Waterstofbromide",
	"Waterstofchloride",
	"Waterstoffluoride",
	"Waterstofjodide",
	"Waterstofsulfide",
	"Waterstofbromaat",
	"Waterstofcarbonaat",
	"Waterstofchloraat",
	"Waterstoffosfaat",
	"Waterstofjodaat",
	"Waterstofnitraat",
	"Waterstofsulfaat",
	"Bromide-ion",
	"Chloride-ion",
	"Fluoride-ion",
	"Jodide-ion",
	"Waterstofsulfide-ion",
	"Sulfide-ion",
	"Bromaation",
	"Waterstofcarbonaation",
	"Carbonaation",
	"Chloraation",
	"Diwaterstoffosfaation",
	"Waterstoffosfaation",
	"Fosfaation",
	"Jodaation",
	"Nitraation",
	"Waterstofsulfaation",
	"Sulfaation"
]


function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

var x = randomNumber(0, 27)
document.getElementById("BrutoForm").innerHTML = SystematischeNaamHL[x]

function check() {
	let inputVal = document.getElementById("inputId").value;
	if (inputVal == BrutoFormZuren[x]) {
		alert("correct!")
		window.location.replace('https://chemieoefenapp.cg35.repl.co/omgekeerdebrutoformule.html');
	} else {
		alert("incorrect!")
	}
}
function showAnswer() {
	document.getElementById("answer").innerHTML = BrutoFormZuren[x]
}