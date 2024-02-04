function loginAuthenticate() {

    let fcashiername = document.getElementById('cashiername').value
    let fcashierpin = document.getElementById('cashierpin').value 
    let lcashiername = localStorage.getItem('cashierName')
    let lcashierpin = localStorage.getItem('cashierPin')

    if(fcashiername === "Zila" && fcashierpin === "000000") {
        localStorage.setItem('currentCashier', fcashiername);
        window.location.replace("pos.html");
        alert("Hi Zila. You are now logged in.")
    } else if (fcashiername === "Hanapet" && fcashierpin === "000000") {
        localStorage.setItem('currentCashier', fcashiername);
        window.location.replace("pos.html");
        alert("Hi Hanapet .You are now logged in.");
    } else if (fcashiername === "Zia" && fcashierpin === "000000") {
        localStorage.setItem('currentCashier', fcashiername);
        window.location.replace("pos.html");
        alert("Hi Zia .You are now logged in.");
    } else if (fcashiername === "Nigu" && fcashierpin === "000000") {
        localStorage.setItem('currentCashier', fcashiername);
        window.location.replace("pos.html");
        alert("Hi Nigu .You are now logged in.");
    } else if (fcashiername === lcashiername && fcashierpin === lcashierpin) {
        localStorage.setItem('currentCashier', fcashiername);
        window.location.replace("pos.html");
        alert("Hi " + lcashiername +  ". You are now logged in..")
    } else if (fcashiername == ""){
        alert('Please Select Cashier!');
    } else if (fcashierpin == ""){
        alert('Please Enter Pin!');
    } else {
        alert('Wrong Pin number!');
        return;
    };

}

function addCashier() {
    let cashiername = document.getElementById('regcashiername').value;
    let cashierpin = document.getElementById('regcashierpin').value;

    localStorage.setItem('cashierName', cashiername);
    localStorage.setItem('cashierPin', cashierpin);
    localStorage.setItem('currentCashier', cashiername);

    let lcashiername = localStorage.getItem('cashierName');

    if (cashiername == '' || cashierpin == ''){
        alert('Please Enter Name or Pin!');
    } else {

    let cashierlist = document.getElementById('cashierlist');
    let creatediv = document.createElement('div');
    creatediv.className = " mb-2 col-md-6";
    let cashierbtn = document.createElement('button');
    cashierbtn.className = 'btn btn-dark';
    const cashierbtntext = document.createTextNode(lcashiername);
    cashierbtn.appendChild(cashierbtntext);
    cashierbtn.setAttribute('value', lcashiername);
    cashierbtn.setAttribute('onclick', 'dynamicCashier()',);
    creatediv.appendChild(cashierbtn);
    cashierlist.appendChild(creatediv);

    document.getElementById('regcashiername').value = "";
    document.getElementById('regcashierpin').value = ""; 
    };
}

function staticCashier1() {
    let currentuser = document.getElementById('staticcashier1').value;
    cashiername.value = staticcashier1.value;
    localStorage.setItem('currentCashier', currentuser);
}

function staticCashier2() {
    cashiername.value = staticcashier2.value;
    let currentuser = document.getElementById('staticcashier2').value;
    localStorage.setItem('currentCashier', currentuser);
}
function staticCashier3() {
    cashiername.value = staticcashier3.value;
    let currentuser = document.getElementById('staticcashier3').value;
    localStorage.setItem('currentCashier', currentuser);
}
function staticCashier4() {
    cashiername.value = staticcashier4.value;
    let currentuser = document.getElementById('staticcashier4').value;
    localStorage.setItem('currentCashier', currentuser);
}

function dynamicCashier() {
    let lcashiername = localStorage.getItem('cashierName');
    cashiername.value = lcashiername;
    localStorage.setItem('currentCashier', lcashiername);
    console.log(lcashiername);
    
}
