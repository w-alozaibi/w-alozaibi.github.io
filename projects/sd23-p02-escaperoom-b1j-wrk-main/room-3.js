const narrative1 = document.querySelector('.narrative-1');
const narrativeBtn = document.querySelector('.narrative-btn');
const vaseImg = document.querySelector('.vase');
const keyImg = document.querySelector('.key');
const keyText = document.querySelector('.key-text');
const doorOpen = document.querySelector('.door-open');
const doorLocked = document.querySelector('.door-locked');
const doorHallway = document.querySelector('.door-to-hallway');
// const doorMessage = document.querySelector('lock is locked');


let counter = 0;
let keyObtained = "none";


doorLocked.addEventListener('click' , levelUnlock)
function levelUnlock(){
    if (keyObtained == "obtained") {
    doorOpen.classList.toggle('hidden');
    doorLocked.classList.toggle('hidden');
    doorHallway.classList.toggle('hidden');    
    }else{
    // doorMessage.classList.toggle('hidden');
    }
   
    
}

narrativeBtn.addEventListener('click', clearFields);
function clearFields() {
    if (counter==0) {
        narrative1.innerHTML="You wake up in this dungeon and need to find a way to escape this castle and get back to the timemachine.";
        counter++;
    }else if(counter==1){
    narrative1.innerHTML="";
    narrativeBtn.innerHTML="";
    }   
}

vaseImg.addEventListener('click', showKey);
function showKey(){
keyImg.classList.toggle('hidden');
keyText.classList.toggle('hidden');
keyObtained = "obtained";
}

// doorMessage.addEventListener(click,showText)
// function showText(){
// doorMessage.classList.toggle('hidden');
// keyNone = "not obtained";
// }


// if (condition) {
    
// }else if (condition) {
    
// }




