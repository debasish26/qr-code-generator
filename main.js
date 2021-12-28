console.log("hello world");


let qrcode = document.getElementById("qrcode");
let qrtext = document.getElementById("input");
let qrbtn = document.getElementById("generate_qr");

qrbtn.addEventListener("click" , ()=>{
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qrtext.value}";
    qrcode.src = url;



})
