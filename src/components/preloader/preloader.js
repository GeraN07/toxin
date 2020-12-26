document.body.onload = function(){
    if(document.getElementById('preloader')){
    setTimeout(function(){
        var preloader = document.getElementById('preloader')
        if(!preloader.classList.contains('ready')){
            preloader.classList.add('ready');
        }
    },1200);
    setTimeout(function(){
        var preloader = document.getElementById('preloader')
        if(!preloader.classList.contains('show')){
            preloader.classList.add('show');
        }
    },1700);
    setTimeout(function(){
    if(!preloader.classList.contains('done')){
        preloader.classList.add('done');
    }
    },3000);
}
}