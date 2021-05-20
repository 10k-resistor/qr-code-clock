// JavaScript source code
var qrText = "no data"
var qrc;

// set timer
var myVar = setInterval(generateClock, 10000);

function generateQRCode(){
    qrc.clear(); // clear the code.
    qrc.makeCode(qrText); // make another code.
}

function generateClock(){
    var d = new Date();
    qrText = d.toLocaleTimeString('en-US');
    //console.log(qrText);
    document.getElementById("actualTime").innerHTML = qrText;

    generateQRCode();
}

function start(){
    console.log("start");
    qrc = new QRCode(document.getElementById("qrcode"), "no data");
    generateClock();

}
