// JavaScript source code
var qrText = "no data"
var qrc;
var interval = 1;
// set timer
var myVar = setInterval(generateClock, interval*1000);


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

function getIntervalValue() {  
    var getSelectedValue = document.querySelector( 
        'input[name="interval"]:checked'); 
              
    if(getSelectedValue != null) { 
        interval = getSelectedValue.value;
        console.log(getSelectedValue.value);

        clearInterval(myVar);
        myVar = setInterval(generateClock, interval*1000)
    } 
}  

function start(){
    console.log("start");
    qrc = new QRCode(document.getElementById("qrcode"), "no data");
    generateClock();

}
