// other scripts are in scripts folder

window.onload = ()=>{
   checkIfNotified();
}


function setCategory(selected = ''){
    localStorage.setItem("setCategory", selected);
    console.log(localStorage.getItem("setcategory"));
    // window.location.href = "./pages/products.html";
}

function checkIfNotified(){
    if(localStorage.getItem("lecNotified")){
        console.log("you better give me an A for all this");
    }else{
        setTimeout(() => {
            alert("welcome to the RT club \n find a form by cliking 'build your PC'");
            localStorage.setItem("lecNotified",true)
        }, 3000);
    };
}