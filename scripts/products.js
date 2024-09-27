window.onload = ()=>{
    categoryChecker();
    // fillCategories(fillProducts);
}


let allCategories = [
    {
        label: "gpu",
        imageUrl: '../images/gpu.jpg',
    },
    {
        label: "cpu",
        imageUrl: '../images/cpu.jpg',
    },
    {
        label: "monitor",
        imageUrl: '../images/monitor.jpg',
    },
    {
        label: "gear",
        imageUrl: '../images/headphones.jpg',
    },
];


function fillCategories(callback){
    let categoriesContainer = document.querySelector('.categories');
    
    if(categoriesContainer){
        let newCategories = ``;
        
        allCategories.forEach((cat)=>{
            // console.log(cat);
            
            newCategories += `
                <div class="cat-card" onclick="fillterProducts('${cat.label}')">
                    <div class="cat-image" style="background: url(${cat.imageUrl}) no-repeat center/cover;"></div>
                    <p class="cat-label">${cat.label}</p>
                </div>
            `;
        })
        
        categoriesContainer.innerHTML+= newCategories
        
    }

    callback();
}




const allProducts = [
    {
        label: "RTX 4090",
        price: "145,000",
        imageUrl: '../images/gpu.jpg',
        category: "gpu",
    },
    {
        label: "Ryzen 5600G",
        price: "35,000",
        imageUrl: '../images/cpu.jpg',
        category: "cpu",
    },
    {
        label: "LG UltraGear",
        price: "75,000",
        imageUrl: '../images/monitor.jpg',
        category: "monitor",
    },
    {
        label: "Oraimo",
        price: "6,000",
        imageUrl: '../images/headphones.jpg',
        category: "gear",
    },
    
];



function fillProducts(){
    const productsContainer = document.querySelector('.products');
    let newProducts = ``;
    
    if(productsContainer){
        
        productsContainer.innerHTML='';
        
        for(i=0;i<5;i++){
            allProducts.forEach((prod)=>{
                newProducts += `
                <div class="prod-card">
                <div class="prod-image" style="background: url(${prod.imageUrl}) no-repeat center/cover;"></div>
                <div class="prod-description">
                <p><b>${prod.label}</b></p>
                <p>price: ksh.${prod.price}</p>
                </div>
                <button class="buy">buy</button>
                </div>
                `;
            })
        }
        productsContainer.innerHTML+=newProducts;
        categoryHighlighter('all');
    }
}


function fillterProducts(targetCat = ''){
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';
    console.log(targetCat);
    
    if(productsContainer){
        
        let filteredProducts = ``;
        
        for(i=0;i<5;i++){
            allProducts.forEach((prod)=>{
                if(prod.category === targetCat){
                    filteredProducts += `
                    <div class="prod-card">
                    <div class="prod-image" style="background: url(${prod.imageUrl}) no-repeat center/cover;"></div>
                    <div class="prod-description">
                    <p><b>${prod.label}</b></p>
                    <p>price: ksh.${prod.price}</p>
                    </div>
                    <button class="buy">buy</button>
                    </div>
                    `;
                }
            })
        }
        
        productsContainer.innerHTML = filteredProducts;
        categoryHighlighter(targetCat);
    }
}


function categoryChecker(){
    if(localStorage.getItem("setCategory" === "all")){
        fillCategories(fillProducts);
        return;
    }
    if(localStorage.getItem("setCategory")){
        fillterProducts(localStorage.getItem("setCategory"));
        fillCategories(()=>{});
        categoryHighlighter(localStorage.getItem("setCategory"))
    }else{
        fillCategories(fillProducts);
    }
}


function categoryHighlighter(target = ''){
    let allCatCards = document.querySelectorAll('.cat-card');
    if(allCatCards){
        allCatCards.forEach((card,index)=>{
            console.log(index,"---",card.textContent);
            if(String(card.textContent).toLowerCase().includes(target)){
                card.classList.add('card-selected');
            }else{
                card.classList.remove('card-selected');
            }
        })
    }
}


setTimeout(() => {
    localStorage.removeItem("setCategory");
}, 100);
