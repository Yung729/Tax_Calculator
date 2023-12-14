function tenancy_Days(){
    let startDate = new Date(document.getElementById("startDate").value);
    let endDate = new Date(document.getElementById("endDate").value);

    let difference = endDate.getTime() - startDate.getTime();

    let dayDifference = difference/(1000*60*60*24);
    
    if(double(dayDifference/365)<=1)
        return 1;
    else if(double(dayDifference/365)>3)
        return 4;
    else
        return 2;
    
}

function calculate_StampDuty_Amount(){
    let rentalRate = parseInt(document.getElementById("rentalRate").value);
    let remainder = Math.ceil((rentalRate*12-2400)/10)%100;
    let quotient = Math.floor((rentalRate*12-2400)/1000)*1000;
    var amount;

    if(remainder>75)
        amount = quotient+1000;
    else if(remainder>50)
        amount = quotient+750;
    else if(remainder>25)
        amount = quotient+500;
    else if(remainder>0)
        amount = quotient+250;
    else
        amount = quotient;
    
    let stampDuty = amount/250 * tenancy_Days();
    return stampDuty;
}

function updateDOM(){
    document.getElementById("demo").innerHTML = tenancy_Days();
}



