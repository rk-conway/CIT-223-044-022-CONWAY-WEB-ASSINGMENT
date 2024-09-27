
function cardClickEvent(){
    let allCards = document.querySelectorAll(".card");
    
    if(allCards && allCards.length>0){
        
        allCards.forEach((card)=>{
            card.addEventListener("click",()=>{
                window.location.href = "./pages/products.html";
            })
        })

    }
}

setTimeout(() => {
    cardClickEvent();
}, 0);