const NS = "http://www.w3.org/2000/svg";

function createSVG(attrs) {
    const svg = document.createElementNS(NS, "svg");
    for (const attr in attrs) {
        svg.setAttribute(attr, attrs[attr]);
    }
    return svg;
}

function createRECT(attrs) {
    const rect = document.createElementNS(NS, "rect");
    for (const attr in attrs) {
        rect.setAttribute(attr, attrs[attr]);
    }
    return rect;
}

function createWhiteKey(i) {
    return createRECT({
        x: 1 + i * 24,
        y: 1,
        width: 24,
        height: 168,
        fill: "white",
        stroke: "gray"
    });
}

function createBlackKey(i) {
    const offset = {
        0: 7, // A
        1: 4, // B
        3: 9, // D
        4: 5, // E
        6: 10 // G
    };
    return createRECT({
        x: 1 + i * 24 - offset[i % 7],
        y: 1,
        width: 14,
        height: 112,
        fill: "black",
        stroke: "gray"
    });
}

function createKeys() {
    const svg = createSVG({
        width: 1250,
        height: 170
    });
    // 88 keys: 52 white, 36 black
    for (let i = 0; i < 52; i++) {
        svg.appendChild(createWhiteKey(i));
        if (i == 0) { continue; }
        switch (i % 7) {
            case 0: // A
            case 1: // B
            case 3: // D
            case 4: // E
            case 6: // G
                svg.appendChild(createBlackKey(i));
        }
    }
    return svg;
}

function onload() {
    document.body.appendChild(createKeys());
}