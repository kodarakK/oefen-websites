const BrutoFormZuren = [
	"HCl",
	"HBrO" + '3'.sub(),
	"H" + "2".sub() + "CO" + "3".sub(),
	"HClO" + "3".sub(),
	"H" + "3".sub() + "PO" + "4".sub(),
	"HIO" + "3".sub(),
	"HNO" + "3".sub(),
	"H" + "2".sub() + "SO" + "4".sub(),
]

const BrutoFormZurenMakkelijker = [
	"HCl",
	"HBrO3",
	"H2CO3",
	"HClO3",
	"H3PO4",
	"HIO3",
	"HNO3",
	"H2SO4",
]

const TrivialeNaam = [
	"zoutzuur",
	"broomzuur",
	"koolzuur",
	"chloorzuur",
	"fosforzuur",
	"joodzuur",
	"salpeterzuur",
	"zwavelzuur",
]



function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

var x = randomNumber(0, 7)
document.getElementById("BrutoForm").innerHTML = TrivialeNaam[x]

function check() {
	let inputVal = document.getElementById("inputId").value;
	if (inputVal == BrutoFormZuren[x] || inputVal == BrutoFormZurenMakkelijker[x]) {
		alert("correct!")
		window.location.reload()
	} else {
		alert("incorrect!")
	}
}
function showAnswer() {
	document.getElementById("answer").innerHTML = BrutoFormZuren[x]
}