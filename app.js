// other scripts are in scripts folder


window.onload = ()=>{
    // alert("welcome to the RT club");
    // console.log("letss gooooo")
}


function setCategory(selected = ''){
    localStorage.setItem("setCategory", selected);
    console.log(localStorage.getItem("setcategory"));
    // window.location.href = "./pages/products.html";
}