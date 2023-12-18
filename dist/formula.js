

function calculate_SPA_LegalFee() {
    let purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    let legalFee;
    if (purchasePrice > 1000) {
        legalFee = Math.ceil(purchasePrice / 1000) * 1000;
    } else {
        legalFee = purchasePrice;
    }

    if (legalFee <= 500000) {
        legalFee = legalFee * 0.0125;
    } else {
        legalFee = ((legalFee - 500000) * 0.01) + 500000 * 0.0125;
    }


    return legalFee;
}

function calculate_Loan_LegalFee(mode) {
    let purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    let financeMargin = parseFloat(document.getElementById("financeMargin").value);
    let loanAmount = parseFloat(document.getElementById("loanAmount").value);

    let legalFee;
    let priceConverted;
    let marginConverted;

    if (mode == 1) {

        

        if (purchasePrice > 1000) {
            legalFee = Math.ceil(purchasePrice / 1000) * 1000 * financeMargin / 100;
        } else {
            legalFee = purchasePrice * financeMargin / 100;
            
        }

        priceConverted = purchasePrice * financeMargin / 100;

        if (legalFee <= 500000) {
            legalFee = legalFee * 0.0125;
        } else {
            legalFee = ((legalFee - 500000) * 0.01) + 500000 * 0.0125;
        }


        document.getElementById("loanAmount").value = priceConverted.toFixed(2);

    } else if (mode == 2) {

        if (loanAmount > 1000) {
            legalFee = Math.ceil(loanAmount / 1000) * 1000;
        } else {
            legalFee = loanAmount;
        }

        marginConverted = loanAmount / purchasePrice * 100;

        if (legalFee <= 500000) {
            legalFee = legalFee * 0.0125;
        } else {
            legalFee = ((legalFee - 500000) * 0.01) + 500000 * 0.0125;
        }

        document.getElementById("financeMargin").value = marginConverted;
    }


    return legalFee;
}

function calculate_SPA_StampDuty() {
    let purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    let stampDuty;
    if (purchasePrice > 1000) {
        stampDuty = Math.ceil(purchasePrice / 1000) * 1000;
    } else {
        stampDuty = purchasePrice;
    }

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

function calculate_Loan_StampDuty(mode) {
    let purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    let financeMargin = parseFloat(document.getElementById("financeMargin").value);
    let loanAmount = parseFloat(document.getElementById("loanAmount").value);

    let stampDuty;

    if (mode == 1) {
        if (purchasePrice > 1000) {
            stampDuty = Math.ceil(purchasePrice / 1000) * 1000 * financeMargin / 100;
        } else {
            stampDuty = purchasePrice * financeMargin / 100;
        }
        return stampDuty * 0.005;
    }
    else if (mode == 2) {

        return loanAmount * 0.005;

    }




}

function updateDOM() {
    document.getElementById("value1").innerHTML = calculate_SPA_LegalFee().toFixed(2);
    document.getElementById("value2").innerHTML = calculate_SPA_StampDuty().toFixed(2);
    document.getElementById("value3").innerHTML = calculate_Loan_LegalFee(1).toFixed(2);
    document.getElementById("value4").innerHTML = calculate_Loan_StampDuty(1).toFixed(2);
}

function updateDOMLoan() {
    document.getElementById("value1").innerHTML = calculate_SPA_LegalFee().toFixed(2);
    document.getElementById("value2").innerHTML = calculate_SPA_StampDuty().toFixed(2);
    document.getElementById("value3").innerHTML = calculate_Loan_LegalFee(2).toFixed(2);
    document.getElementById("value4").innerHTML = calculate_Loan_StampDuty(2).toFixed(2);
}

function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function showTable() {
    var x = document.getElementById("container");
    var y = document.getElementById("stampDutyContainer");
    var z = document.getElementById("stampDutyContainerzeropointFive");
    var a = document.getElementById("loanRateContainer");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
    }
}

function showStampdutyTable() {
    var x = document.getElementById("container");
    var y = document.getElementById("stampDutyContainer");
    var z = document.getElementById("stampDutyContainerzeropointFive");
    var a = document.getElementById("loanRateContainer");
    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
        a.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
    }
}

function showStampdutyzeroTable() {
    var x = document.getElementById("container");
    var y = document.getElementById("stampDutyContainer");
    var z = document.getElementById("stampDutyContainerzeropointFive");
    var a = document.getElementById("loanRateContainer");
    if (z.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
        a.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
    }
}

function showLoanLegalFeeTable() {
    var x = document.getElementById("container");
    var y = document.getElementById("stampDutyContainer");
    var z = document.getElementById("stampDutyContainerzeropointFive");
    var a = document.getElementById("loanRateContainer");
    if (a.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
    }
}





