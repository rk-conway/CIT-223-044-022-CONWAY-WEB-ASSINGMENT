window.onload = ()=>{
    // alert("welcome to the RT club");
    // console.log("letss gooooo")
}

// other scripts are in scripts folder

function setCategory(selected = ''){
    localStorage.setItem("setCategory", selected);
    console.log(localStorage.getItem("setcategory"));
    // window.location.href = "./pages/products.html";
}