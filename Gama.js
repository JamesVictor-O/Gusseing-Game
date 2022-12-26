const cardArray=[
    {
        name: "fries",
        img:"pic.jpg/food1.jpg"
    },
     {
        name: "pizza",
        img:"pic.jpg/food2.jpg"
    },
    {
        name: "fries",
        img:"pic.jpg/food1.jpg"
    },
    {
        name: "pizza",
        img:"pic.jpg/food2.jpg"
    },
    {
        name: "fried rice",
        img:"pic.jpg/food5.jpg"
    },
    {
        name: "bag",
        img:"pic.jpg/product10.jpg"
    },
    {
        name: "fried rice",
        img:"pic.jpg/food5.jpg"
    },
    {
        name: "bag",
        img:"pic.jpg/product10.jpg"
    },
    {
        name: "bag",
        img:"pic.jpg/product10.jpg"
    },
    {
        name: "bag",
        img:"pic.jpg/product10.jpg"
    }
]
let Sort=cardArray.sort(()=>{
     return 0.5 - Math.random()
})

const Grid=document.querySelector("#grid");
const Score=document.querySelector("#result")
const Gusses=document.querySelector("#gusess")
const Mag=document.querySelector("#mag");
const Next=document.querySelector("#next");
const Button=document.querySelector("#btn")
let cardsChosen=[];
let storeCardId=[];
let cardWon=[];
let score=0;
let gusses=0;

 function createBoard(){
    for(let i=0;i <cardArray.length; i++){
        const card=document.createElement("img")
        card.setAttribute("src","pic.jpg/white.jpg");
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        Grid.appendChild(card)
    }
}
function checkMatch(){
    const cards=document.querySelectorAll("#grid img")
    const option1=storeCardId[0];
    const option2=storeCardId[1];
    if(storeCardId[0]===storeCardId[1]){
        alert("you have clicked thesame card")
        cards[option1].setAttribute("src", "pic.jpg/white.jpg");
        cards[option2].setAttribute("src", "pic.jpg/white.jpg");
        score--;
    }
    if(cardsChosen[0] === cardsChosen[1]){
        alert("just found a match")
    cards[option1].setAttribute("src", "pic.jpg/black.jpg");
    cards[option2].setAttribute("src", "pic.jpg/black.jpg");
    cards[option1].removeEventListener("click",flipCard);
    cards[option2].removeEventListener("click",flipCard);
    cardWon.push(cardsChosen)
    score++
    Score.innerHTML=score;
    }else{
        cards[option1].setAttribute("src", "pic.jpg/white.jpg");
        cards[option2].setAttribute("src", "pic.jpg/white.jpg");
    }
    cardsChosen=[];
    storeCardId=[];
    Gusses.innerHTML=gusses++;
    if(score === 2){
        Mag.innerHTML="Congratulations after " + gusses + " gusses you Won";
        Button.style.visibility="visible"
        Button.addEventListener("click", NextLevel)
    }
}
createBoard()
function flipCard(e){
  let cardId=this.getAttribute("data-id");
this.setAttribute("src", cardArray[cardId].img)
 const Name= cardArray[cardId].name
 storeCardId.push(cardId)
 cardsChosen.push(Name)
 if(cardsChosen.length === 2){
    
    setTimeout( checkMatch, 500)
 }
}
function NextLevel(){

}
