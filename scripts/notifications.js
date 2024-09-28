
function checkItemsInBasket(){
    let messageBubble = document.querySelector(".message-bubble");

    if(localStorage.getItem("basket") && messageBubble){
        let messages = JSON.parse(localStorage.getItem("basket")).length;

        messageBubble.textContent = String(messages);
    }
}

setTimeout(() => {
    checkItemsInBasket();
}, 200);