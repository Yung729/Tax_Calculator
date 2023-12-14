function calculate_Loan_StampDuty(){
    let rentalRate = parseInt(document.getElementById("rentalRate").value);
    var startDate = new Date(document.getElementById("startDate"));
    var endDate = new Date(document.getElementById("endDate"));

    var difference = endDate.getTime() - startDate.getTime();

    var dayDifference = difference/(1000*60*60*24);
    return dayDifference;
}

function init(){
    document.getElementById("demo").innerHTML = calculate_Loan_StampDuty;
}

init();