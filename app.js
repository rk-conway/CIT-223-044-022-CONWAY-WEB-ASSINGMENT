// other scripts are in scripts folder

window.onload = ()=>{
    setTimeout(() => {
        alert("welcome to the RT club \n find a form by cliking 'build your PC'");
    }, 3000);
}


function setCategory(selected = ''){
    localStorage.setItem("setCategory", selected);
    console.log(localStorage.getItem("setcategory"));
    // window.location.href = "./pages/products.html";
}

