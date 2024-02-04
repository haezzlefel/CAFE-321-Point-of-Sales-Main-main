let mop;

function insertAmount(digit) {
    let paidamt = document.getElementById('paidamt');

    if(paidamt.value == 0 && digit == '0') {
        paidamt.value = 0;
    } 
    else if (paidamt.value.includes('.') === true && digit =='.') {
        paidamt.value = paidamt.value;
    }
    else {
        paidamt.value += digit;
    }
    confirmCheckout();
    calculateChange();
    mop = 'Cash';
};

function insertExactAmount() {
    let exactamt = document.getElementById('totalamt').value;
    paidamt.value = exactamt;
    confirmCheckout();
    calculateChange();
    mop = 'Cash';
};

function calculateChange() {
    let totalamt = parseFloat(document.getElementById('totalamt').value);
    let paidamt  = parseFloat(document.getElementById('paidamt').value);
    let change;

    change = paidamt - totalamt;

    document.getElementById('change').value = change.toFixed(2);
    
};

function clearAmount() {
    let change = document.getElementById('change');
    paidamt.value = '';
    change.value = '';
    confirmCheckout();
    mop = '';
};

function confirmCheckout() {
    let paidamt = parseFloat(document.getElementById('paidamt').value);
    let totalamt = parseFloat(document.getElementById('totalamt').value);
    document.getElementById('confirmamt').disabled = true;
    if (paidamt >= totalamt){
        document.getElementById('confirmamt').disabled = false;
    }
};

function gcashPayment() {
    let exactamt = document.getElementById('totalamt').value;
    paidamt.value = exactamt;
    mop = 'GCash';
    confirmCheckout();
    calculateChange();
};

function receiptDetails() {
    let cashiername = localStorage.getItem('cashierName');
    let totalamt = document.getElementById('totalamt').value;
    let paidamt = parseFloat(document.getElementById('paidamt').value);
    let change = document.getElementById('change').value;

    document.getElementById('rcashiername').innerHTML = cashiername;
    document.getElementById('receipttotalamt').innerHTML = totalamt;
    document.getElementById('receiptcashreceived').innerHTML = paidamt.toFixed(2);
    document.getElementById('receiptchange').innerHTML = change;
    document.getElementById('receiptmop').innerHTML = mop;
    
};
