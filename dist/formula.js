function calculateLegalFee1() {
    let purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    let financeMargin = parseFloat(document.getElementById("financeMargin").value);
    let legalFee = Math.ceil(purchasePrice / 1000) * 1000;
    if (legalFee <= 500000) {
        legalFee = legalFee * 1.25 / 100;
    } else {
        legalFee = ((legalFee - 500000) * 1 / 100) + 500000 * 1.25 / 100;
    }

    return legalFee;
}

function calculateLegalFee2() {
    let purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    let financeMargin = parseFloat(document.getElementById("financeMargin").value);
    let legalFee = Math.ceil(purchasePrice / 1000) * 1000 * financeMargin / 100;
    if (legalFee <= 500000) {
        legalFee = legalFee * 1.25 / 100;
    } else {
        legalFee = ((legalFee - 500000) * 1 / 100) + 500000 * 1.25 / 100;
    }

    return legalFee;
}

function calculateStampDuty1() {
    let purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    let financeMargin = parseFloat(document.getElementById("financeMargin").value);
    let stampDuty = Math.ceil(purchasePrice / 1000) * 1000;
    if (stampDuty >= 100000) {
        if (101000 < stampDuty && stampDuty < 500000) {
            if (501000 < stampDuty && stampDuty < 1000000) {
                if (stampDuty > 1000000) {
                    stampDuty = 100000 * 1 / 100 + 500000 * 2 / 100 + 1000000 * 3 / 100 + (stampDuty - 1000000) * 4 / 100;
                } else {
                    stampDuty = 100000 * 1 / 100 + 500000 * 2 / 100 + (stampDuty - 500000) * 3 / 100;
                }
            } else {
                stampDuty = 100000 * 1 / 100 + (stampDuty - 100000) * 2 / 100;
            }
        } else {
            stampDuty = 0;
        }
    }

    return stampDuty;
}

function calculateStampDuty2() {
    let purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    let financeMargin = parseFloat(document.getElementById("financeMargin").value);
    let stampDuty = Math.ceil(purchasePrice / 1000) * 1000 * financeMargin / 100;
    if (stampDuty >= 100000) {
        if (101000 < stampDuty && stampDuty < 500000) {
            if (501000 < stampDuty && stampDuty < 1000000) {
                if (stampDuty > 1000000) {
                    stampDuty = 100000 * 1 / 100 + 500000 * 2 / 100 + 1000000 * 3 / 100 + (stampDuty - 1000000) * 4 / 100;
                } else {
                    stampDuty = 100000 * 1 / 100 + 500000 * 2 / 100 + (stampDuty - 500000) * 3 / 100;
                }
            } else {
                stampDuty = 100000 * 1 / 100 + (stampDuty - 100000) * 2 / 100;
            }
        } else {
            stampDuty = 0;
        }
    }

    return stampDuty;
}

function updateDOM() {
    document.getElementById("value1").innerHTML = calculateLegalFee1();
    document.getElementById("value2").innerHTML = calculateLegalFee2();
    document.getElementById("value3").innerHTML = calculateStampDuty1();
    document.getElementById("value4").innerHTML = calculateStampDuty2();
}

