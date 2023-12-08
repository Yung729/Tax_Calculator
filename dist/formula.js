function calculate_SPA_LegalFee() {
    let purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    let legalFee = Math.ceil(purchasePrice / 1000) * 1000;
    if (legalFee <= 500000) {
        legalFee = legalFee * 1.25 / 100;
    } else {
        legalFee = ((legalFee - 500000) * 1 / 100) + 500000 * 1.25 / 100;
    }


    return legalFee;
}

function calculate_Loan_LegalFee() {
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

function calculate_SPA_StampDuty() {
    let purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    let stampDuty = Math.ceil(purchasePrice / 1000) * 1000;

    if (stampDuty >= 100000) {
        if (500000 < stampDuty && stampDuty <= 1000000) {
            stampDuty = 100000 * 0.01 + 400000 * 0.02 + (stampDuty - 500000) * 0.03;
        }
        else if (stampDuty > 1000000) {
            stampDuty = 100000 * 0.01 + 400000 * 0.02 + 500000 * 0.03 + (stampDuty - 1000000) * 0.04;
        } else {
            stampDuty = 100000 * 0.01 + (stampDuty - 100000) * 0.02;
        }
    } else {
        stampDuty = stampDuty * 0.01;
    }

    return stampDuty;

}

function calculate_Loan_StampDuty() {
    let purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    let financeMargin = parseFloat(document.getElementById("financeMargin").value);
    let stampDuty = Math.ceil(purchasePrice / 1000) * 1000 * financeMargin / 100;

    return stampDuty * 0.005;
}

function updateDOM() {
    document.getElementById("value1").innerHTML = calculate_SPA_LegalFee();
    document.getElementById("value2").innerHTML = calculate_SPA_StampDuty();
    document.getElementById("value3").innerHTML = calculate_Loan_LegalFee();
    document.getElementById("value4").innerHTML = calculate_Loan_StampDuty();
}

