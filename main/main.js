
$(window).scroll(function () { 
    if($(window).scrollTop() > 50 ){
        $('nav').addClass('header-active');
    }else {
        $('nav').removeClass('header-active');

    }
    
});


$('.facility').magnificPopup({
    delegate:'a',
    type : 'image',
    gallery:{
        enabled:true
    }
})