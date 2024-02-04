const audio = new Audio();
audio.src = "./assets/beep1.mp3";
audio.volume = .1;

const selectaudio = new Audio();
selectaudio.src = "./assets/beep1.mp3"
selectaudio.volume = 1;




const orderitemidarray = [];
const orderidarray = [];
const orderitemsarray = [];
const orderpricearray = [];
const orderarray = [];
const orderitemqty = [];

let i = 0;

function ordercart(itemid, itemname, itemprice){

    if(orderitemsarray.indexOf(itemname) > -1) {
        const itemindexnumber = orderitemsarray.indexOf(itemname);
        orderitemqty[itemindexnumber] =  orderitemqty[itemindexnumber] + 1;
        updateQty(orderidarray[itemindexnumber], 1);
    } else {

    orderidarray.push(i);

    orderitemidarray.push(itemid);
    orderitemsarray.push(itemname);
    orderpricearray.push(itemprice);
    orderarray.push(itemname, itemprice);
    orderitemqty.push(1);


    let ordersummary = document.getElementById('ordersummary');
    //Create LI tag
    const orderitemparent = document.createElement('li');

    const deductqtybtn = document.createElement('button');
    const addqtybtn = document.createElement('button');
    const deductqtybtntxt = document.createTextNode('-');
    const addqtybtntxt = document.createTextNode('+');
    deductqtybtn.setAttribute('onclick', 'updateQty('+i+', -1)');
    addqtybtn.setAttribute('onclick', 'updateQty('+i+', 1)');

    const qtyspan = document.createElement('span');
    qtyspan.className = 'px-3 fw-bold item'+ i;
    const qtytxt = document.createTextNode('1');

    deductqtybtn.className = 'btn btn-dark btn-sm circle';
    addqtybtn.className = 'btn btn-dark btn-sm circle';

    deductqtybtn.appendChild(deductqtybtntxt);
    addqtybtn.appendChild(addqtybtntxt);
    qtyspan.appendChild(qtytxt);
    orderitemparent.appendChild(deductqtybtn); 
    orderitemparent.appendChild(qtyspan);
    orderitemparent.appendChild(addqtybtn);
        
    const orderitem = document.createElement('span');
    orderitem.className = 'd-flex justify-content-between align-items-center text-center p-1';
    //Create span for red color
    const orderitempricespan = document.createElement('span');
    //Created item details to node
    const orderitemname = document.createTextNode(itemname);
    const orderitemprice = document.createTextNode(' P ' + itemprice);
    // Price color red
    orderitempricespan.className = 'text-dark';
    orderitempricespan.appendChild(orderitemprice);
    const deletebutton = document.createElement('button');
    const deletebuttontext = document.createTextNode('X');
    deletebutton.setAttribute('onclick', 'deleteItem('+i+', this)');
    deletebutton.appendChild(deletebuttontext);
    deletebutton.className = 'btn btn-danger btn-sm circle';
    //Append item to LI
    orderitem.appendChild(orderitemname);
    orderitem.appendChild(orderitempricespan);

    orderitem.appendChild(deletebutton);

    orderitemparent.appendChild(orderitem);

    //Append the LI tag to parent ordersummary
    ordersummary.appendChild(orderitemparent);

    i++;

    }

    totalitems(); 
    totalcost();

    validateCheckoutBtn();
};

function updateQty(orderid, val){
    const itemSpan = document.querySelector('.item' + orderid);
    itemSpan.innerText = parseInt(itemSpan.innerText) + val;

    const indexnum = orderidarray.indexOf(orderid);
    orderitemqty[indexnum] = parseInt(itemSpan.innerText);
    totalitems();
    totalcost();
    if (itemSpan.innerText == 0) {
        orderitemidarray.splice(indexnum, 1);
        orderidarray.splice(indexnum, 1);
        orderitemsarray.splice(indexnum, 1);
        orderpricearray.splice(indexnum, 1);
        orderitemqty.splice(indexnum, 1); 
        totalitems(); 
        totalcost();
        ordersummary.removeChild(itemSpan.parentElement);
        validateCheckoutBtn();
    }
};


function totalitems(){
    // document.getElementById('totalitems').innerText = orderitemsarray.length;
    if(orderitemqty.length) {
        document.getElementById('totalitems').innerText = orderitemqty.reduce((total, num) => { return total + num })
    } else {
        document.getElementById('totalitems').innerText = '0';
    }
    
};

function totalcost(){
    if(orderpricearray.length === 0){
        document.getElementById('totalcost').innerText = 0;
    } else {

        const totaltemparray = [];
        orderitemqty.map((quantity, index) => { totaltemparray.push(quantity * orderpricearray[index])})

        document.getElementById('totalcost').innerText = totaltemparray.reduce(sumarray).toFixed(2);
        document.getElementById('totalamt').value = totaltemparray.reduce(sumarray).toFixed(2);
        
        function sumarray(total, sum) {
        return total + sum;
        };
        
    }
};

function cartClear(){
    let ordersummary = document.getElementById('ordersummary');
    document.getElementById('totalamt').value = 0;
    ordersummary.innerHTML = '';
    orderitemsarray.length = 0;
    orderpricearray.length = 0;
    orderarray.length = 0;
    orderidarray.length = 0;
    orderitemqty.length = 0;
    i = 0;
    totalitems();
    totalcost();
    validateCheckoutBtn();
};

function deleteItem(orderid, button) {
    const indexnum = orderidarray.indexOf(orderid);
    orderitemidarray.splice(indexnum, 1);
    orderidarray.splice(indexnum, 1);
    orderitemsarray.splice(indexnum, 1);
    orderpricearray.splice(indexnum, 1);
    orderitemqty.splice(indexnum, 1);
    totalitems(); 
    totalcost();
    ordersummary.removeChild(button.parentElement.parentElement);
    validateCheckoutBtn();
};

function transactionNumber() {
    let transnum = Math.floor(Math.random() * 10000)
    document.getElementById('transnum').innerHTML = transnum;
    document.getElementById('modaltransnum').innerHTML = transnum;
    document.getElementById('receipttransnum').innerHTML = transnum;
};
transactionNumber();

function getCashier() {
    let currentcashier = localStorage.getItem('currentCashier')
    document.getElementById('cashier').innerHTML = currentcashier;
}
getCashier();

function validateCheckoutBtn() {
    document.getElementById('checkout').disabled = true;
    if(orderitemsarray.length > 0){
        document.getElementById('checkout').disabled = false;
    }
};

function cashierLogout() {
    alert("You are now logging out of the system!")
    window.location.assign("index.html");
    localStorage.setItem('currentCashier', '');
 }


