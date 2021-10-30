


setInterval(() => {
    switch (randomNum(1, 2)) {
        case 1:
            document.getElementById('bot').src="../IMG/bot-right-green.gif";
            break;
    
        default:
            document.getElementById('bot').src="../IMG/bot-left-green.gif";
            break;
    }
}, 1 * 1000);


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
