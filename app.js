/* ====================================================================================================================
   00A. PRODUCT DATA — THE BRAND THOUGHTS ALTER THE CLOTHES, NOT THE PAGE STRUCTURE
   ==================================================================================================================== */

const PRODUCTS = {
    accessories: [
        { id: "a1", name: "Plum brushed scarf", price: 110, colour: "#761a31", expressive: 63, structured: 34, natural: 81 },
        { id: "a2", name: "Petrol cotton collar", price: 125, colour: "#123846", expressive: 38, structured: 65, natural: 88 },
        { id: "a3", name: "Muted violet cap", price: 95, colour: "#66516f", expressive: 57, structured: 58, natural: 70 },
        { id: "a4", name: "Cream soft-knit scarf", price: 105, colour: "#e9e2d6", expressive: 26, structured: 42, natural: 90 }
    ],
    top: [
        { id: "t1", name: "Petrol sueded sweatshirt", price: 235, colour: "#123846", expressive: 42, structured: 68, natural: 82 },
        { id: "t2", name: "Plum brushed-cotton top", price: 245, colour: "#761a31", expressive: 72, structured: 51, natural: 86 },
        { id: "t3", name: "Cream peached jersey", price: 220, colour: "#e9e2d6", expressive: 28, structured: 55, natural: 91 },
        { id: "t4", name: "Violet soft-structure knit", price: 255, colour: "#66516f", expressive: 61, structured: 64, natural: 78 }
    ],
    outer: [
        { id: "o1", name: "Petrol brushed overshirt", price: 590, colour: "#123846", expressive: 48, structured: 82, natural: 78 },
        { id: "o2", name: "Plum sueded jacket", price: 640, colour: "#761a31", expressive: 77, structured: 74, natural: 72 },
        { id: "o3", name: "Cream structured coat", price: 690, colour: "#e9e2d6", expressive: 38, structured: 84, natural: 85 },
        { id: "o4", name: "Violet cropped layer", price: 610, colour: "#66516f", expressive: 69, structured: 66, natural: 74 }
    ],
    bottom: [
        { id: "b1", name: "Petrol soft trouser", price: 285, colour: "#123846", expressive: 39, structured: 78, natural: 80 },
        { id: "b2", name: "Plum relaxed trouser", price: 295, colour: "#761a31", expressive: 70, structured: 54, natural: 82 },
        { id: "b3", name: "Cream brushed trouser", price: 290, colour: "#e9e2d6", expressive: 31, structured: 64, natural: 89 },
        { id: "b4", name: "Violet tapered trouser", price: 305, colour: "#66516f", expressive: 59, structured: 76, natural: 76 }
    ],
    shoes: [
        { id: "s1", name: "Cream low trainer", price: 225, colour: "#e9e2d6", expressive: 30, structured: 56, natural: 50 },
        { id: "s2", name: "Plum brushed shoe", price: 345, colour: "#761a31", expressive: 66, structured: 79, natural: 48 },
        { id: "s3", name: "Petrol technical shoe", price: 295, colour: "#123846", expressive: 48, structured: 77, natural: 42 },
        { id: "s4", name: "Violet soft runner", price: 275, colour: "#66516f", expressive: 58, structured: 47, natural: 55 }
    ],
    whole: [
        { id: "w1", name: "Petrol complete set", price: 790, colour: "#123846", expressive: 44, structured: 80, natural: 80 },
        { id: "w2", name: "Plum long silhouette", price: 825, colour: "#761a31", expressive: 81, structured: 60, natural: 78 },
        { id: "w3", name: "Cream quiet set", price: 775, colour: "#e9e2d6", expressive: 32, structured: 75, natural: 90 },
        { id: "w4", name: "Violet fluid set", price: 810, colour: "#66516f", expressive: 65, structured: 52, natural: 79 }
    ]
};

/* ====================================================================================================================
   01A. STATE
   ==================================================================================================================== */

const state = {
    character: "man",
    selected: {},
    currentZone: null,
    options: [],
    decisions: 0,
    history: [],
    profile: { expressive: 50, structured: 50, natural: 50 },
    notes: {
        colour: "open",
        adventure: 55,
        price: "style-first",
        material: "",
        environment: "not-deciding"
    }
};

/* ====================================================================================================================
   02A. REFERENCES
   ==================================================================================================================== */

const opening = document.querySelector("#opening");
const dressing = document.querySelector("#dressing");
const singleSelf = document.querySelector("#single-self");
const centralPerson = document.querySelector("#central-person");
const currentLook = document.querySelector("#current-look");
const fork = document.querySelector("#fork");
const choiceLeft = document.querySelector("#choice-left");
const choiceRight = document.querySelector("#choice-right");
const personLeft = document.querySelector("#person-left");
const personRight = document.querySelector("#person-right");
const layersLeft = document.querySelector("#layers-left");
const layersRight = document.querySelector("#layers-right");
const priceLeft = document.querySelector("#price-left");
const priceRight = document.querySelector("#price-right");
const studioLeft = document.querySelector("#studio-left");
const studioRight = document.querySelector("#studio-right");
const completion = document.querySelector("#completion");
const completionTotal = document.querySelector("#completion-total");
const dressingEyebrow = document.querySelector("#dressing-eyebrow");
const dressingTitle = document.querySelector("#dressing-title");
const dressingInstruction = document.querySelector("#dressing-instruction");
const notesDialog = document.querySelector("#notes-dialog");
const lookDialog = document.querySelector("#look-dialog");
const lookSummary = document.querySelector("#look-summary");
const wordmarkReaction = document.querySelector("#wordmark-reaction");

const FIGURES = {
    man: "assets/figure-man.png",
    woman: "assets/figure-woman.png",
    boy: "assets/figure-boy.png",
    girl: "assets/figure-girl.png"
};

const BRAND_COLOURS = ["#123846", "#761a31", "#66516f"];

/* ====================================================================================================================
   03A. REACTIVE WORDMARK
   The double-line word stays faint; small runs of colour move inside the channel.
   ==================================================================================================================== */

function reactWordmark(strength = 0.12) {
    const gaps = Array.from({ length: 8 }, (_, index) => {
        const filled = 18 + Math.floor(Math.random() * 72);
        const empty = 55 + Math.floor(Math.random() * 150);
        return index % 2 === 0 ? `${filled} ${empty}` : `${filled + 14} ${empty + 22}`;
    }).join(" ");

    wordmarkReaction.style.stroke = BRAND_COLOURS[Math.floor(Math.random() * BRAND_COLOURS.length)];
    wordmarkReaction.style.strokeDasharray = gaps;
    wordmarkReaction.style.strokeDashoffset = String(Math.floor(Math.random() * 420));
    wordmarkReaction.style.opacity = String(strength);
}

window.setInterval(() => reactWordmark(0.09 + Math.random() * 0.07), 4200);
reactWordmark(0.1);

/* ====================================================================================================================
   04A. OPENING
   ==================================================================================================================== */

document.querySelectorAll(".character").forEach((button) => {
    button.addEventListener("click", () => {
        state.character = button.dataset.character;
        setFigureSources();
        opening.classList.remove("is-active");
        dressing.classList.add("is-active");
        reactWordmark(0.18);
        renderCurrentLook();
    });
});

function setFigureSources() {
    const source = FIGURES[state.character];
    centralPerson.src = source;
    personLeft.src = source;
    personRight.src = source;
}

/* ====================================================================================================================
   05A. BODY NAVIGATION
   ==================================================================================================================== */

document.querySelectorAll("[data-zone]").forEach((control) => {
    const choose = () => openFork(control.dataset.zone);

    control.addEventListener("click", choose);
    control.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            choose();
        }
    });
});

/* ====================================================================================================================
   06A. STYLIST LOGIC
   One proposal recognises the developing profile; the other tests an adjacent possibility.
   ==================================================================================================================== */

function scoreProduct(product, direction) {
    const profileDistance =
        Math.abs(product.expressive - state.profile.expressive) +
        Math.abs(product.structured - state.profile.structured) +
        Math.abs(product.natural - state.profile.natural);

    const adventure = Number(state.notes.adventure);
    const challengeTarget = Math.min(100, state.profile.expressive + 12 + adventure * 0.18);

    const challengeDistance =
        Math.abs(product.expressive - challengeTarget) +
        Math.abs(product.structured - (100 - state.profile.structured * 0.25)) +
        Math.abs(product.natural - state.profile.natural);

    let score = direction === "recognise" ? -profileDistance : -challengeDistance;

    if (state.notes.environment === "prefer") score += product.natural * 0.18;
    if (state.notes.environment === "priority") score += product.natural * 0.42;

    const colourMap = {
        petrol: "#123846",
        plum: "#761a31",
        violet: "#66516f",
        quiet: "#e9e2d6"
    };

    if (colourMap[state.notes.colour] === product.colour) score += 38;
    if (state.history.some((choice) => choice.id === product.id)) score -= 400;

    return score;
}

function chooseOptions(zone) {
    const products = PRODUCTS[zone];
    const recognise = [...products].sort((a, b) => scoreProduct(b, "recognise") - scoreProduct(a, "recognise"))[0];
    const challenge = [...products]
        .filter((product) => product.id !== recognise.id)
        .sort((a, b) => scoreProduct(b, "challenge") - scoreProduct(a, "challenge"))[0];

    return Math.random() > 0.5 ? [recognise, challenge] : [challenge, recognise];
}

function openFork(zone) {
    state.currentZone = zone;
    state.options = chooseOptions(zone);

    renderForkLayers(layersLeft, state.options[0], zone);
    renderForkLayers(layersRight, state.options[1], zone);

    priceLeft.textContent = `${formatMoney(calculateTotal(state.options[0], zone))} as shown`;
    priceRight.textContent = `${formatMoney(calculateTotal(state.options[1], zone))} as shown`;

    const studioIndex = state.decisions >= 2 ? studioRecommendation(state.options) : -1;
    studioLeft.hidden = studioIndex !== 0;
    studioRight.hidden = studioIndex !== 1;

    completion.hidden = true;
    singleSelf.classList.add("is-leaving");

    window.setTimeout(() => {
        singleSelf.hidden = true;
        fork.hidden = false;
        singleSelf.classList.remove("is-leaving");
    }, state.decisions === 0 ? 640 : 260);

    dressingEyebrow.textContent = state.decisions >= 2 ? "The studio has an opinion" : "Two possible selves";
    dressingTitle.textContent = "Which one should go back?";
    dressingInstruction.textContent = "Click the possibility you want to dismiss.";
    reactWordmark(0.18);
}

function studioRecommendation(options) {
    const scores = options.map((product) => scoreProduct(product, "challenge"));
    return scores[0] >= scores[1] ? 0 : 1;
}

/* ====================================================================================================================
   07A. DISMISSAL AND LEARNING
   ==================================================================================================================== */

choiceLeft.addEventListener("click", () => dismissChoice(0));
choiceRight.addEventListener("click", () => dismissChoice(1));

function dismissChoice(dismissedIndex) {
    const survivingIndex = dismissedIndex === 0 ? 1 : 0;
    const product = state.options[survivingIndex];
    const zone = state.currentZone;

    state.selected[zone] = product;
    state.decisions += 1;
    state.history.push(product);

    if (zone === "whole") {
        delete state.selected.top;
        delete state.selected.outer;
        delete state.selected.bottom;
    } else if (["top", "outer", "bottom"].includes(zone)) {
        delete state.selected.whole;
    }

    learnFrom(product);
    applyAtmosphere(product.colour);

    const dismissed = dismissedIndex === 0 ? choiceLeft : choiceRight;
    const surviving = survivingIndex === 0 ? choiceLeft : choiceRight;

    dismissed.animate(
        [
            { opacity: 1, transform: "translateX(0) scale(1)" },
            { opacity: 0, transform: `translateX(${dismissedIndex === 0 ? "-32px" : "32px"}) scale(0.97)` }
        ],
        { duration: 580, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" }
    );

    surviving.animate(
        [
            { transform: "translateX(0) scale(1)" },
            { transform: `translateX(${survivingIndex === 0 ? "46%" : "-46%"}) scale(1.02)` }
        ],
        { duration: 700, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" }
    );

    window.setTimeout(() => {
        fork.hidden = true;
        choiceLeft.getAnimations().forEach((animation) => animation.cancel());
        choiceRight.getAnimations().forEach((animation) => animation.cancel());

        renderCurrentLook();
        singleSelf.hidden = false;

        dressingEyebrow.textContent = state.decisions >= 3 ? "The studio is learning" : "A choice remains";
        dressingTitle.textContent = isComplete() ? "This self is taking shape." : "Where should we look next?";
        dressingInstruction.textContent = isComplete()
            ? "Take the look, keep exploring, or change any part of it."
            : "Choose another body area—or revisit the last.";

        if (isComplete()) showCompletion();
        reactWordmark(0.15);
    }, 720);
}

function learnFrom(product) {
    const learningRate = 0.24;
    state.profile.expressive += (product.expressive - state.profile.expressive) * learningRate;
    state.profile.structured += (product.structured - state.profile.structured) * learningRate;
    state.profile.natural += (product.natural - state.profile.natural) * learningRate;
}

/* ====================================================================================================================
   08A. RENDERING
   ==================================================================================================================== */

function renderCurrentLook() {
    currentLook.innerHTML = "";

    Object.entries(state.selected).forEach(([zone, product]) => {
        currentLook.append(createGarment(zone, product));
    });
}

function renderForkLayers(container, candidate, zone) {
    container.innerHTML = "";

    Object.entries(state.selected).forEach(([selectedZone, selectedProduct]) => {
        if (selectedZone !== zone && !(zone === "whole" && ["top", "outer", "bottom"].includes(selectedZone))) {
            container.append(createGarment(selectedZone, selectedProduct));
        }
    });

    container.append(createGarment(zone, candidate));
}

function createGarment(zone, product) {
    const garment = document.createElement("span");
    garment.className = `garment ${zone}`;
    garment.style.setProperty("--garment-colour", product.colour);
    garment.title = `${product.name}, ${formatMoney(product.price)}`;
    return garment;
}

function applyAtmosphere(colour) {
    document.documentElement.style.setProperty("--wash", hexToRgba(colour, 0.095));
}

function hexToRgba(hex, alpha) {
    const clean = hex.replace("#", "");
    const value = Number.parseInt(clean, 16);
    const red = (value >> 16) & 255;
    const green = (value >> 8) & 255;
    const blue = value & 255;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

/* ====================================================================================================================
   09A. TOTALS AND COMPLETION
   ==================================================================================================================== */

function calculateTotal(candidate = null, candidateZone = null) {
    const provisional = { ...state.selected };

    if (candidate && candidateZone) {
        provisional[candidateZone] = candidate;

        if (candidateZone === "whole") {
            delete provisional.top;
            delete provisional.outer;
            delete provisional.bottom;
        } else if (["top", "outer", "bottom"].includes(candidateZone)) {
            delete provisional.whole;
        }
    }

    return Object.values(provisional).reduce((total, product) => total + product.price, 0);
}

function formatMoney(value) {
    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        maximumFractionDigits: 0
    }).format(value);
}

function isComplete() {
    const hasCore = Boolean(state.selected.whole || (state.selected.top && state.selected.bottom));
    return hasCore && Boolean(state.selected.shoes);
}

function showCompletion() {
    completionTotal.textContent = `${formatMoney(calculateTotal())} as shown`;
    completion.hidden = false;
}

document.querySelector("#keep-exploring").addEventListener("click", () => {
    completion.hidden = true;
    dressingEyebrow.textContent = "Another possible self";
    dressingTitle.textContent = "Choose the part that should change.";
    dressingInstruction.textContent = "The studio will preserve what is already working.";
});

document.querySelector("#take-look").addEventListener("click", () => {
    renderLookSummary();
    lookDialog.showModal();
    document.querySelector("#look-count").textContent = String(Object.keys(state.selected).length);
});

/* ====================================================================================================================
   10A. STUDIO NOTES
   ==================================================================================================================== */

document.querySelector("#open-notes").addEventListener("click", () => notesDialog.showModal());

document.querySelector("#save-notes").addEventListener("click", () => {
    state.notes.colour = document.querySelector("#note-colour").value;
    state.notes.adventure = Number(document.querySelector("#note-adventure").value);
    state.notes.price = document.querySelector("#note-price").value;
    state.notes.material = document.querySelector("#note-material").value.trim();
    state.notes.environment = document.querySelector("#note-environment").value;

    dressingEyebrow.textContent = "The studio has your note";
    dressingTitle.textContent = "We will respond through the next choice.";
    dressingInstruction.textContent = "Nothing has been filtered out. The direction has simply changed.";
    reactWordmark(0.2);
});

/* ====================================================================================================================
   11A. LOOK PANEL AND RESET
   ==================================================================================================================== */

document.querySelector("#open-look").addEventListener("click", () => {
    renderLookSummary();
    lookDialog.showModal();
});

function renderLookSummary() {
    const entries = Object.entries(state.selected);
    lookSummary.innerHTML = "";

    if (entries.length === 0) {
        lookSummary.innerHTML = "<p>No look has been completed yet.</p>";
        return;
    }

    entries.forEach(([, product]) => {
        const row = document.createElement("div");
        row.className = "look-row";
        row.innerHTML = `<span>${product.name}</span><span>${formatMoney(product.price)}</span>`;
        lookSummary.append(row);
    });

    const total = document.createElement("div");
    total.className = "look-total";
    total.innerHTML = `<span>As shown</span><span>${formatMoney(calculateTotal())}</span>`;
    lookSummary.append(total);
}

document.querySelector("#reset").addEventListener("click", reset);
document.querySelector("#wordmark-reset").addEventListener("click", reset);

function reset() {
    state.character = "man";
    state.selected = {};
    state.currentZone = null;
    state.options = [];
    state.decisions = 0;
    state.history = [];
    state.profile = { expressive: 50, structured: 50, natural: 50 };

    currentLook.innerHTML = "";
    fork.hidden = true;
    singleSelf.hidden = false;
    completion.hidden = true;
    document.querySelector("#look-count").textContent = "0";

    document.documentElement.style.setProperty("--wash", "rgba(18, 56, 70, 0)");

    dressing.classList.remove("is-active");
    opening.classList.add("is-active");
    reactWordmark(0.1);
}
