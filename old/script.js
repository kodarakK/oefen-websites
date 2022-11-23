const BrutoFormZuren = [
	"HBr",
	"HCl",
	"HF",
	"HI",
	"H" + '2'.sub() + 'S',
	"HBrO" + '3'.sub(),
	"H" + "2".sub() + "CO" + "3".sub(),
	"HClO" + "3".sub(),
	"H" + "3".sub() + "PO" + "4".sub(),
	"HIO" + "3".sub(),
	"HNO" + "3".sub(),
	"H" + "2".sub() + "SO" + "4".sub(),
	"Br" + "-".sup(),
	"Cl" + "-".sup(),
	"F" + "-".sup(),
	"I" + "-".sup(),
	"HS" + "-".sup(),
	"S"+"2-".sup(),
	"BrO" + "3".sub() +"-".sup(),
	"HCO" + "3".sub() +"-".sup(),
	"CO" + "3".sub() +"2-".sup(),
	"ClO" + "3".sub() +"-".sup(),
	"H" + "2".sub() + "PO" + "4".sub() +"-".sup(),
	"H" + "PO" + "4".sub() + "2-".sup(),
	"PO" + "4".sub() +"3-".sup(),	
	"IO" + "3".sub() +"-".sup(),
	"NO" + "3".sub() + "-".sup(),
	"HSO" + "2".sub() +"-".sup(),
	"SO"+"4".sub() + "2-".sup()
]

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
]
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
document.getElementById("BrutoForm").innerHTML = BrutoFormZuren[x]

function check() {
	let inputVal = document.getElementById("inputId").value;
	if (inputVal == SystematischeNaam[x] || inputVal == SystematischeNaamHL[x]) {
		alert("correct!")
		window.location.reload()
	} else {
		alert("incorrect!")
	}
}
function showAnswer() {
	document.getElementById("answer").innerHTML = SystematischeNaam[x]
}


// dark mode

function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}