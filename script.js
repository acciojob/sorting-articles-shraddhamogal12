//your JS code here. If required.
const bands=[
	"Anywhere But Here",
	"The Bled",
	"Counterparts",
	"The Devil Wears Prada",
	"The Midway State",
	"Norma Jean",
	"Oh,Sleeper",
	"An Old Dog",
	"Pierce the Veil",
	"The Plot in You",
	"Say Anything"
];
function strip(bandName) {
    return bandName.replace(/^(a |an |the )/i, "").trim();
}

// Step 2: Sort alphabetically
const sortedBands = bands.sort((a, b) => {
    return strip(a).localeCompare(strip(b));
});

// Step 3: Access the ul element
let ul = document.getElementById("band");

// Step 4: Display sorted articles
sortedBands.forEach((band) => {

    let li = document.createElement("li");

    li.textContent = band;

    ul.appendChild(li);

});