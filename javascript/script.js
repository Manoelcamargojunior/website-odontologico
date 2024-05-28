$(document).ready(function(){
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});



var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}

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



