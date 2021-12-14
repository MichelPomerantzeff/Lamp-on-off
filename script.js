const btnOnOff = document.getElementById('btnOnOff')
const lamp = document.getElementById('lamp')

function fixLamp() {
    lamp.src = './img/on.jpg' 
}

function isLampBroken() {
    return lamp.src.indexOf('broken') > -1
}

function lampOn() {
    if(!isLampBroken()) {
        lamp.src = './img/on.jpg'
        btnOnOff.textContent = 'Turn Off'
    }
}

function lampOff() {
    if(!isLampBroken()) {
        lamp.src = './img/off.jpg' 
        btnOnOff.textContent = 'Turn On'
    }
}

function lampBroken() {
    lamp.src = './img/broken.jpg'
    btnOnOff.textContent = 'Change bulb'
}

function turnOnOff() {
    if(btnOnOff.textContent == 'Turn On') {
        lampOn()
        btnOnOff.textContent = 'Turn Off'
    } else {
        lampOff()
        btnOnOff.textContent = 'Turn On'
    }
}

lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseout', lampOff)
btnOnOff.addEventListener('click', fixLamp)
btnOnOff.addEventListener('click', turnOnOff)
lamp.addEventListener('dblclick', lampBroken)