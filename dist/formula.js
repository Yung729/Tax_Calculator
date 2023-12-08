const purchasePriceInput = document.querySelector(".purchasePrice");
const financeMarginInput = document.querySelector(".financeMargin");

const legalFee1 = document.querySelector(".legalFee .value1");
const legalFee2 = document.querySelector(".legalFee .value2");
const stampDuty1 = document.querySelector(".stampDuty .value1");
const stampDuty2 = document.querySelector(".stampDuty .value2");

let purchasePrice = parseFloat(purchasePriceInput.value);
let financeMargin = parseFloat(financeMargin.value);

const calculateLegalFee1 = () =>{
    var legalFee = Math.ceil(purchasePrice/1000)*1000;
        if(legalFee <= 500000){
            legalFee = legalFee * 1.25 / 100;
        }else{
            legalFee = ((legalFee - 500000) * 1 / 100) + 500000 * 1.25 / 100;
        }

    return legalFee;
}; 

const calculateLegalFee2 = () =>{
    var legalFee = Math.ceil(purchasePrice/1000)*1000 * financeMargin/100;
    if(legalFee <= 500000){
        legalFee = legalFee * 1.25 / 100;
    }else{
        legalFee = ((legalFee - 500000) * 1 / 100) + 500000 * 1.25 / 100;
    }

    return legalFee;
}; 

const calculateStampDuty1 = () =>{
    var stampDuty = Math.ceil(purchasePrice/1000)*1000;
    if(stampDuty>=100000){
        if(101000<stampDuty<500000){
            if (501000<stampDuty<1000000){
                if(stampDuty>1000000)
                    stampDuty = 100000*1/100 + 500000*2/100 + (1000000)*3/100 + (stampDuty-1000000)*4/100;
                else
                    stampDuty = 100000*1/100 + 500000*2/100 + (stampDuty-500000)*3/100;   
            }else{
                stampDuty = 100000*1/100 + (stampDuty-100000)*2/100;
            }
        }else{
            stampDuty = 0;
        }
    }

    return stampDuty;
}

const calculateStampDuty2 = () => {
    var stampDuty = Math.ceil(purchasePrice/1000)*1000 * financeMargin/100;
    if(stampDuty>=100000){
        if(101000<stampDuty<500000){
            if (501000<stampDuty<1000000){
                if(stampDuty>1000000)
                    stampDuty = 100000*1/100 + 500000*2/100 + (1000000)*3/100 + (stampDuty-1000000)*4/100;
                else
                    stampDuty = 100000*1/100 + 500000*2/100 + (stampDuty-500000)*3/100;   
        }else{
            stampDuty = 100000*1/100 + (stampDuty - 100000)*2/100;
        }
        }else{
        stampDuty = 0;
        }
    }

    return stampDuty;
}

const init = () => {
    legalFee1.innerHTML = calculateLegalFee1();
    legalFee2.innerHTML = calculateLegalFee2();
    stampDuty1.innerHTML = calculateStampDuty1();
    stampDuty2.innerHTML = calculateStampDuty2();
}

init();