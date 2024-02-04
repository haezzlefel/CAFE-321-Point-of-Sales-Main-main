(function () {
    'use strict'
  
   
var forms = document.querySelectorAll('.needs-validation')
  
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()







  const cashernamedisplay = document.getElementById('cashernamedisplay');
  const poscashername = document.getElementById('poscashername')
  const pindisplay = document.getElementById('pindisplay');
  const casher1name = document.getElementById('casher1');
  const casher2name = document.getElementById('casher2');
  const casher3name = document.getElementById('casher3');
  const casher4name = document.getElementById('casher4');
    


  function namedisplay() {
  var getcashername = document.getElementById('cashernamedisplay').value;
  localStorage.setItem('casher_name', getcashername);
  }
  



  function casher1() {
  
    cashernamedisplay.value = casher1name.value
    selectaudio.play()
  };

  function casher2() {
  
    cashernamedisplay.value = casher2name.value
    selectaudio.play()
  };

  function casher3() {
  
    cashernamedisplay.value = casher3name.value
    selectaudio.play()
  };

  function casher4() {
  
    cashernamedisplay.value = casher4name.value
    selectaudio.play()
  };



  function clearform() {
    cashernamedisplay.value = "";
    pindisplay.value = "";
    audio.play()
  }




  function pinpress(number1){

    console.log(pindisplay.length);
    if (pindisplay.value == 0 && number1 == '00') {
        pindisplay = '0.';
    } else if (pindisplay.value == 0 && number1 == '0') {
        pindisplayy = '0.';
    } else if (pindisplay.value == '' && number1 == '00') {
        pindisplay.value = '0';
    } else if (pindisplay.value.includes('.') === true && number1 =='.') {
        pindisplay.value = pindisplay.value;
    } else {
        pindisplay.value += number1;
    }

    if (pindisplay.value == '.') {
        pindisplay = '0.';
    };
  
    selectaudio.play()
};












const audio = new Audio();
audio.src = "./assets/beep.mp3";
audio.volume = .1;

const selectaudio = new Audio();
selectaudio.src = "./assets/beep2.mp3"
selectaudio.volume = 1;

window.history.forward();
function noBack() {
    window.history.forward();
}





function addcasher() {
    let namebuttoncon = document.getElementById('cashernamebuttoncon')
    let addcasherinput = document.getElementById('addcashername').value
    let addpininput = document.getElementById('addpin').value


    localStorage.setItem('new_casher', addcasherinput);
    localStorage.setItem('new_pin', addpininput);


    const nametext = localStorage.getItem('new_casher')

    const creatediv = document.createElement('div')
    const createcashernamebutton = document.createElement('button')
    const createname = document.createTextNode(nametext);

    namebuttoncon.appendChild(creatediv)
    creatediv.appendChild(createcashernamebutton)
    createcashernamebutton.appendChild(createname)
    creatediv.className = " mb-2 col-md-6"
    createcashernamebutton.className = 'btn btn-primary'
    createcashernamebutton.setAttribute('onclick', 'newcasher()',)
    createcashernamebutton.setAttribute('value', nametext)
    createcashernamebutton.setAttribute('id', nametext)
    
    
    document.getElementById('addcashername').value = "";
    document.getElementById('addpin').value = "";

    
}



function newcasher() {
   let loginnewcasher = document.getElementById(localStorage.getItem('new_casher')).value

   cashernamedisplay.value = loginnewcasher
   selectaudio.play()
}


function authentication() {

    const getname = localStorage.getItem('new_casher')
    const getpin = localStorage.getItem('new_pin')
    
    var pincode = document.getElementById('pindisplay').value;
    if(pincode === "000000"  && cashernamedisplay.value === "Hannah") {
        window.location.assign("mainpos.html");
        alert("Welcome Hannah. You are now logged in. Tap Ok to continue.")
    } else if (pincode === "000000"  && cashernamedisplay.value === "Hazila") {
        window.location.assign("mainpos.html");
        alert("Welcome Hazila. You are now logged in. Tap Ok to continue.")
    } else if (pincode === "123456"  && cashernamedisplay.value === "Zia") {
        window.location.assign("mainpos.html");
        alert("Welcome Zia. You are now logged in. Tap Ok to continue.")
    } else if (pincode === localStorage.getItem('new_pin')  && cashernamedisplay.value === "Inigo.") {
        window.location.assign("mainpos.html");
        alert("Welcome Inigo. You are now logged in. Tap Ok to continue.")
    } else if (pincode == getpin  && cashernamedisplay.value == getname) {
        window.location.assign("mainpos.html");
        alert("Welcome " + getname +  ". You are now logged in. Tap Ok to continue.")
    } else {
        alert('Wrong Pin Code. Try Again!');
        return;
    }

    namedisplay()
    noBack()
}

const contactsuppbtn =  document.getElementById('contactsuppbtn')
const contactformcon = document.getElementById('contactformcon')
const messageinput =  document.getElementById('messageinput')
const storeid = document.getElementById('storeidinput')




function showcontactform() {
  contactsuppbtn.style.display = 'none'
  contactformcon.style.display = 'block'
  selectaudio.play()
}

function verifyid() {
  const storeidinput =  document.getElementById('storeidinput').value
 

  if (storeidinput == "POS122") {
    document.getElementById('storenamedisplay').value = "Angel's Buger";
    document.getElementById('submitmessagebtn').disabled = false
    document.getElementById('messageinput').disabled = false;
    document.getElementById('storeidinput').value = '✔️';
    document.getElementById('verifyidbtn').innerHTML = 'Verified'
  } else if (storeidinput == "pos122") {
    document.getElementById('storenamedisplay').value = "Angel's Buger";
    document.getElementById('submitmessagebtn').disabled = false
    document.getElementById('messageinput').disabled = false;
    document.getElementById('storeidinput').value = '✔️';
    document.getElementById('verifyidbtn').innerHTML = 'Verified'
  } else {
    document.getElementById('storenamedisplay').value = "";
    document.getElementById('storeidinput').value = '❌';
    document.getElementById('submitmessagebtn').disabled = true
    document.getElementById('messageinput').disabled = true;
    document.getElementById('verifyidbtn').innerHTML = 'Failed. Try Again'
    document.getElementById('storeidinput').disabled = true
    document.getElementById('verifyidbtn').className = 'btn btn-sm btn-danger m-1'
    document.getElementById('verifyidbtn').setAttribute('onclick', 'tryagain()')

  }
  selectaudio.play()
}


function tryagain() {
  document.getElementById('storenamedisplay').value = "";
  document.getElementById('storeidinput').value = '';
  document.getElementById('storeidinput').disabled = false
  document.getElementById('verifyidbtn').innerHTML = 'Verify'
  document.getElementById('verifyidbtn').className = 'btn btn-sm btn-dark m-1'
  document.getElementById('verifyidbtn').setAttribute('onclick', 'verifyid()')


  selectaudio.play()
}

function closeform() {
  contactsuppbtn.style.display = 'block'
  contactformcon.style.display = 'none'
  document.getElementById('storeidinput').value = '';
  document.getElementById('messageinput').disabled = true;
  document.getElementById('submitmessagebtn').disabled = true
  document.getElementById('messageinput').value = '';
  selectaudio.play()
  tryagain()

}

