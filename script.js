let buttonReset = document.getElementById("buttonReset");
let level = document.getElementById("t1");
let t2 = document.getElementById("t2");
let boxes = document.getElementById("boxes");
let lives = document.getElementById("lives");
let winSound = document.getElementById('winSound');
let loseSound = document.getElementById('loseSound');

let currentLevel = 1;  //  المتغير الخاص بتحدد المستوي الحالي  
let l = 3;   // المتغير الخاص بتخزين عدد القلوب الحالية  
let treasureIndex = 0; //  المتغير الخاص بمعرفة ترتيب صندوق الكنز
let gameOver = false;  // متغير هنستخدمه لإيقاف اللعبة عند الخسارة 

// إنشاء الصناديق 
function generateBoxes(x) {
    t2.innerText = ''
    l = 3;
    boxes.innerHTML = '';
    lives.innerText = '💖'.repeat(3);
    level.innerText = `Level = ${currentLevel}`;
    treasureIndex = Math.floor(Math.random() * x);

    for(let i=0; i<x; i++){

    let box = document.createElement("img")
    box.src = "box_closed.png"
    box.dataset.index = i;
    box.classList.add("image");
    box.addEventListener('click', boxClick);

    boxes.appendChild(box);

  }
}

function boxClick(event) {
    if (gameOver == false){
    let b = event.currentTarget;
    let boxIndex = Number(b.dataset.index);

    if (boxIndex == treasureIndex) {
        b.src = 'win_box.png';
        t2.innerText = 'You won';
        winSound.play();

        setTimeout( () => {
            currentLevel++;
            generateBoxes(currentLevel + 1);
        }, 2000);


    } else {
        b.src = 'lose_box.png';
        l--;
        loseSound.play();
        lives.innerText = '💖'.repeat(l);
        if (l == 0) {
            gameOver = true;
            t2.innerText = 'You Lost';
        }    
    }}
    
}

buttonReset.addEventListener('click', () => {
    currentLevel = 1;
    generateBoxes(2);
    gameOver = false;
})


generateBoxes(2)

// الواجب مراجعة الدرس الاول والثاني

