oportunities = 10;
let wordComplete;
function lives() {
    document.getElementById("lives").innerHTML=oportunities;
}
function aleatoryNumber(max) {
    return Math.floor(Math.random()*max);
}
function category(){
    let variable = Object.keys(miLista);
    cat = aleatoryNumber(variable.length);
    document.getElementById("category").innerHTML=variable[cat];
}
function click(){
    let buttons = document.getElementsByClassName("buttons")
    for (const button of buttons) {
        button.addEventListener("click",() => {
            check(button.value)
            win();
        })
    }
}
function word(){
    let category = document.getElementById("category").innerHTML
    let wordNumber = aleatoryNumber(miLista[category].length);
    wordComplete = miLista[category][wordNumber];
    let string = "";
    let patternL = /\w/;
    let patternS = /\s/;
    for (let i = 0; i < wordComplete.length; i++) {
        if (patternL.test(wordComplete[i])){
            string += "_"
        }else if(patternS.test(wordComplete[i])){
            string += " "
        }
    }
    let newP = document.getElementById("noWord");
    newP.textContent = string;
}
function check(checkValue){
    let noWord = document.getElementById("noWord");
    wordSplit = noWord.textContent.split("");
    restar = true;
    for (let i = 0; i < wordComplete.length; i++) {
        if(checkValue===wordComplete[i]){
            wordSplit[i]=checkValue;
            restar=false;
        }
        noWord.innerHTML = wordSplit.join("");
    }
    if(restar){
        oportunities--;
        lives();
    }
}
function win() {
    let noWord = document.getElementById("noWord").textContent;
    let isConcrete = !noWord.includes("_");
    if (oportunities>0) {
        if (isConcrete) {
            createDiv();
        }
    }else{
        createDiv();
    }
}
function createDiv() {
    let newDiv = document.createElement("div");
    let newX=document.createElement("button");
    let newImgX=document.createElement("img");
    newX.id="close";
    newImgX.src="src/img/close.png";
    newX.appendChild(newImgX);
    newX.addEventListener("click",closeAlert);
    newDiv.id="alert";
    newDiv.textContent="PULSA X PARA VOLVER A JUGAR";
    newDiv.appendChild(newX);
    document.body.appendChild(newDiv);
}
function closeAlert(){
    let div = document.getElementById("alert");
    document.body.removeChild(div);
    word();
    oportunities=10;
    lives();
}