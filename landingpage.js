function validate() {
    'use strict'
    let flag1 = false;
    let flag2 = false;
    let flag3 = false;
    let flag4 = false;
    let name = document.getElementById('fn').value;
    let url = document.getElementById('url').value;
    let email = document.getElementById('email').value;
    let phoneno = document.getElementById('phone').value;
    if (name == '') {
        document.getElementById('namep').innerText = '*Plese Enter Name';
        document.getElementById('namep').style.color = "red";
    } else {
        flag1 = true;
        document.getElementById('namep').innerText = '';
    }

    if (url == '') {
        document.getElementById('urlp').innerText = '*Plese Enter url';
        document.getElementById('urlp').style.color = "red";
    } else {
        flag2 = true
        document.getElementById('urlp').innerText = '';
    }

    if (email == '') {
        document.getElementById('emailp').innerText = '*Plese Enter Email';
        document.getElementById('emailp').style.color = "red";
    } else {
        flag3 = true
        document.getElementById('emailp').innerText = '';
    }

    if (phoneno == '') {
        document.getElementById('phonep').innerText = '*Plese Enter Phone No';
        document.getElementById('phonep').style.color = "red";
    } else {
        document.getElementById('phonep').innerText = '';
        if (String(phoneno).length != 10) {
            document.getElementById('phonep').innerText = '*phone no should be of 10 digit';
            document.getElementById('phonep').style.color = "red";
        } else {
            flag4 = true
            document.getElementById('phonep').innerText = '';
        }
    }
    if (flag1 && flag2 && flag3 && flag4){
        sendData();
    }
    document.getElementById("fn").value = "";
    document.getElementById('url').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
}
// send the data of form to admin via emailid
function sendData() {
    var name = document.getElementById("fn").value;
    var url = document.getElementById('url').value;
    var email = document.getElementById('email').value;
    var phoneno = document.getElementById('phone').value;
    var messageBody = "Name : " + name+"<br/> url : "+url+"<br/> Email : "+email+"<br/> Phone : "+phoneno;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "devanshukamb241004@gmail.com",
        Password: "820BFDECB333DEE1FB90477264981B37F743",
        To: 'devanshukamb241004@gmail.com',
        From: "devanshukamb241004@gmail.com",
        Subject: "landing page data",
        Body: messageBody
    }).then(
        message => alert(message)
    );
}