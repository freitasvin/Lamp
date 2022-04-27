const image = document.getElementById('imagem');
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');



function isLampBroken() {
    return image.src.indexOf('quebrada') > -1;
}
function lampOn() {

    if (!isLampBroken()) {
        image.src = './images/ligada.jpg'
    }
}
function lampOff() {
    if (!isLampBroken()) {
        image.src = './images/desligada.jpg'
    }
}
function lampBreak() {
    image.src = './images/quebrada.jpg'

}



turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
image.addEventListener('mouseover', lampOn);
image.addEventListener('mouseleave', lampOff);
image.addEventListener('click', lampOn);
image.addEventListener('dblclick', lampBreak);

