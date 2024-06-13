


window.onscroll = function(){
    scroll();
}

function scroll(){
    var btn = document.getElementById("btnTop");
    if(document.documentElement.scrollTop > 150){
        btn.style.display = "block";
    }else{
            btn.style.display = "none";
        }
    }


function backToTop (){
    document.documentElement.scrollTop = 0;
}