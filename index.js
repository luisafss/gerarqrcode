const container=document.querySelector('.container'),
qrInput=container.querySelector('form input'),
generateBtn=container.querySelector('.form button'),
qrImg=container.querySelector('.qr-code .img');

generateBtn.addEventListener('click', ()=>{
    let qrValue=qrInput.qrValue;
    if(!qrValue){
        alert('Insira uma URL ou texto para gerar um Qr Code')
        return;
    }
generateBtn.inneText=
})
