window.onload = ()=>{
    fetchProducts();
}

function fetchProducts(){
    
    if(localStorage.getItem("basket")){
        let basket = JSON.parse(localStorage.getItem("basket"));
        
        if(basket.length > 0){
            fillProducts(basket);
            // console.log("basket has ",JSON.parse(localStorage.getItem("basket")));
        }else{
            document.querySelector('.products').innerHTML = `<p><i>no products bought yet...</i></p>`;
        }
        
    }else{
        document.querySelector('.products').innerHTML = `
        <p><i>no products bought yet...</i></p>
        `;
    }    
}


function fillProducts(basket){
    console.log("fetched from local ",basket)
    
    const productsContainer = document.querySelector('.products');
    let newProducts = ``;
    
    if(productsContainer){
        
        productsContainer.innerHTML='';
        
        basket.map((prod)=>{
            newProducts += `
            <div class="prod-card">
            <div class="prod-image" style="background: url(${prod.imageUrl}) no-repeat center/cover;"></div>
            <div class="prod-description">
            <p><b>${prod.label}</b></p>
            <p>price: ksh.${prod.price}</p>
            </div>
            <button class="buy" onclick="removeFromBasket('${prod.label}')">remove</button>
            </div>
            `;
        })
        
        productsContainer.innerHTML+=newProducts;
    }
}



function removeFromBasket(product){
    console.log("im called");
    
    if(localStorage.getItem("basket")){
        let basket = JSON.parse(localStorage.getItem("basket"));
        
        if(basket.length>0){
            let targetProduct = basket.find((prod)=>prod.label === product);
            let index = basket.indexOf(targetProduct);
            // console.log("target index",index);
            
            if (index !== -1) {
                basket.splice(index, 1);
                localStorage.setItem('basket',JSON.stringify(basket));
                fetchProducts();
                alert(`${product} removed from cart`);
            }
            
        }
        
        console.log("basket has ",JSON.parse(localStorage.getItem("basket")));
        
    } 
}



function clearBasket(){
    if(localStorage.getItem("basket")){
        localStorage.removeItem("basket");
        fetchProducts();        
    }
}