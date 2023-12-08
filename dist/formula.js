const purchasePriceInput = document.getElementsById("purchasePrice");
const financeMarginInput = document.getElementsById("financeMargin");

const legalFee1 = document.getElementsById("value1");
const legalFee2 = document.getElementsById("value2");
const stampDuty1 = document.getElementsById("value3");
const stampDuty2 = document.getElementsById("value4");

let purchasePrice = parseFloat(purchasePriceInput.value);
let financeMargin = parseFloat(financeMarginInput.value);

const calculateLegalFee1 = () => {
    const legalFee = Math.ceil(purchasePrice/1000)*1000;
        if(legalFee <= 500000){
            legalFee = legalFee * 1.25 / 100;
        }else{
            legalFee = ((legalFee - 500000) * 1 / 100) + 500000 * 1.25 / 100;
        }

    return legalFee; 
}

const calculateLegalFee2 = () => {
    const legalFee = Math.ceil(purchasePrice/1000)*1000 * financeMargin/100;
    if(legalFee <= 500000){
        legalFee = legalFee * 1.25 / 100;
    }else{
        legalFee = ((legalFee - 500000) * 1 / 100) + 500000 * 1.25 / 100;
    }

    return legalFee;
} 

const calculateStampDuty1 = () => {
    const stampDuty = Math.ceil(purchasePrice/1000)*1000;
    if(stampDuty>=100000){
        if(101000<stampDuty<500000){
            if (501000<stampDuty<1000000){
                if(stampDuty>1000000)
                    stampDuty = 100000*1/100 + 500000*2/100 + 1000000*3/100 + (stampDuty-1000000)*4/100;
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
    const stampDuty = Math.ceil(purchasePrice/1000)*1000 * financeMargin/100;
    if(stampDuty>=100000){
        if(101000<stampDuty<500000){
            if (501000<stampDuty<1000000){
                if(stampDuty>1000000)
                    stampDuty = 100000*1/100 + 500000*2/100 + 1000000*3/100 + (stampDuty-1000000)*4/100;
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