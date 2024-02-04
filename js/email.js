function sendMail() {
    // let sname = document.getElementById("name").value;
    // let remail = document.getElementById("email").value;
    // let smessage = document.getElementById("message").value;

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_1s7duto";
    const templateID = "template_2mu7dyh";

    // if (sname == "" || remail == "" || smessage == "") {
        emailjs
        .send(serviceID,templateID,params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            alert("Message sent successfully!");
            window.location.assign('login.html');
        })
        .catch((err) => console.log(err));
    // } else {
    //     alert("Please complete the fields!");
    // }
        

};

