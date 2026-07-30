/* ====================================================================================================================
   00A. REACTIVE WORDMARK
   The coloured fragments live only inside the channel between the two outline strokes.
   ==================================================================================================================== */

const wordmarkFillGroup = document.querySelector("#wordmark-fills");
const wordmarkColours = ["#0d3440", "#7b1729", "#5e3857", "#b5b5b0"];
const wordmarkSegments = [];

function createWordmarkSegments() {
    for (let index = 0; index < 14; index += 1) {
        const segment = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        segment.classList.add("wordmark-fill");
        segment.setAttribute("y", String(14 + Math.random() * 190));
        segment.setAttribute("height", String(18 + Math.random() * 62));
        wordmarkFillGroup.append(segment);
        wordmarkSegments.push(segment);
    }

    moveWordmarkSegments();
}

function moveWordmarkSegments() {
    wordmarkSegments.forEach((segment, index) => {
        const width = 22 + Math.random() * 85;
        const x = 30 + Math.random() * (1510 - width);
        const colour = wordmarkColours[Math.floor(Math.random() * wordmarkColours.length)];

        segment.setAttribute("x", String(x));
        segment.setAttribute("width", String(width));
        segment.setAttribute("fill", colour);
        segment.setAttribute("opacity", String(0.42 + Math.random() * 0.46));

        if (index % 3 === 0) {
            segment.setAttribute("y", String(18 + Math.random() * 182));
            segment.setAttribute("height", String(16 + Math.random() * 66));
        }
    });
}

createWordmarkSegments();
window.setInterval(moveWordmarkSegments, 2400);

/* ====================================================================================================================
   01A. PERSON SELECTION
   ==================================================================================================================== */

const figureOptions = [...document.querySelectorAll(".figure-option")];
const beginButton = document.querySelector("#begin-button");
const lookCount = document.querySelector("#look-count");
const lookDialogTitle = document.querySelector("#look-dialog-title");
const lookDialogCopy = document.querySelector("#look-dialog-copy");
let selectedPerson = null;

function selectPerson(button) {
    figureOptions.forEach((option) => option.classList.remove("is-selected"));
    button.classList.add("is-selected");

    selectedPerson = button.dataset.person;
    beginButton.textContent = `Begin with ${selectedPerson}`;
    lookCount.textContent = "1";
    lookDialogTitle.textContent = `${selectedPerson} selected.`;
    lookDialogCopy.textContent = "This page tests the brand and opening experience. The next build will restore the two-self styling fork around this chosen person.";
}

figureOptions.forEach((button) => {
    button.addEventListener("click", () => selectPerson(button));
});

beginButton.addEventListener("click", () => {
    if (!selectedPerson) {
        figureOptions[0].focus();
        return;
    }

    document.querySelector("#material-title").scrollIntoView({ behavior: "smooth", block: "start" });
});

/* ====================================================================================================================
   02A. GARMENT COLOUR STUDY
   ==================================================================================================================== */

const garmentStudy = document.querySelector("#garment-study");
const colourChips = [...document.querySelectorAll(".colour-chip")];

colourChips.forEach((chip) => {
    chip.addEventListener("click", () => {
        colourChips.forEach((button) => button.classList.remove("is-selected"));
        chip.classList.add("is-selected");
        garmentStudy.dataset.colour = chip.dataset.colour;
    });
});

/* ====================================================================================================================
   03A. DIALOGS
   ==================================================================================================================== */

const studioNotesDialog = document.querySelector("#studio-notes-dialog");
const lookDialog = document.querySelector("#look-dialog");
const brandBoardDialog = document.querySelector("#brand-board-dialog");

document.querySelector("#studio-notes-open").addEventListener("click", () => studioNotesDialog.showModal());
document.querySelector("#look-open").addEventListener("click", () => lookDialog.showModal());
document.querySelector("#brand-board-open").addEventListener("click", () => brandBoardDialog.showModal());
