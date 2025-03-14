var mybtn = document.getElementById('mybtn');
window.onscroll = function(){scrollTop()};
function scrollTop(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybtn.style.display = 'block';
    }
    else{
        mybtn.style.display = 'none';
    }
}

function top_function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}