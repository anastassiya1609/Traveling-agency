function activateHeader(){
    const header = document.querySelector(".header");

    window.onscroll = () =>{
        if(window.scrollY > 100){
            header.classList.add("header_active");
        }else{
            header.classList.remove("header_active");
        }

    };
}
activateHeader();