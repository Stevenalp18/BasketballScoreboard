let leftPointBox = document.getElementById('point1')
let rightPointBox = document.getElementById('point2')
let resultLeft = 0
let resultRight = 0

// Extra Credit
let scoreCardLeft = document.getElementById('scoreCard1')
let scoreCardRight = document.getElementById('scoreCard2')

function add1Left(){
    resultLeft += 1
    leftPointBox.textContent = resultLeft
    checkLeader()
}

function add2Left(){
    resultLeft += 2
    leftPointBox.textContent = resultLeft
    checkLeader()
}

function add3Left(){
    resultLeft += 3
    leftPointBox.textContent = resultLeft
    checkLeader()
}

function add1Right(){
    resultRight += 1
    rightPointBox.textContent = resultRight    
    checkLeader()
}

function add2Right(){
    resultRight += 2    
    rightPointBox.textContent = resultRight
    checkLeader()
}

function add3Right(){
    resultRight += 3    
    rightPointBox.textContent = resultRight
    checkLeader()
}

function reset(){
    resultLeft = 0
    resultRight = 0
    leftPointBox.textContent = resultLeft
    rightPointBox.textContent = resultRight
    scoreCardLeft.classList.remove('leader')
    scoreCardRight.classList.remove('leader')
}

function checkLeader(){    
    if(resultLeft > resultRight){
        scoreCardLeft.classList.add('leader')
        scoreCardRight.classList.remove('leader')
    }else if(resultRight > resultLeft){
        scoreCardRight.classList.add('leader')
        scoreCardLeft.classList.remove('leader')
    }else{
        
    }
}