function tenancy_Days() {
    let startDate = new Date(document.getElementById("startDate").value);
    let endDate = new Date(document.getElementById("endDate").value);

    let difference = endDate.getTime() - startDate.getTime();

    let dayDifference = difference / (1000 * 60 * 60 * 24);

    if (dayDifference / 365 <= 1) {
        return 1;
    } else if (dayDifference / 365 > 3) {
        return 4;
    } else {
        return 2;
    }
}


function nearest250(remainder, quotient) {
    if (remainder > 75)
        return quotient + 1000;
    else if (remainder > 50)
        return quotient + 750;
    else if (remainder > 25)
        return quotient + 500;
    else if (remainder > 0)
        return quotient + 250;
    else
        return quotient;

}

function calculate_TenancyFee_Amount() {
    let rentalRate = parseFloat(document.getElementById("rentalRate").value);
    let remainder = (Math.ceil((rentalRate * 12 - 2400) / 100) * 100) % 1000;
    let quotient = Math.floor((rentalRate * 12 - 2400) / 1000) * 1000;
    let rate = tenancy_Days();
    var amount = nearest250(remainder, quotient);

    return amount / 250 * rate;
}

function updateTenancyDOM() {
    document.getElementById("result").innerHTML = calculate_TenancyFee_Amount();
}

function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function showTenancyTable() {
    var x = document.getElementById("tenancyRateContainer");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

