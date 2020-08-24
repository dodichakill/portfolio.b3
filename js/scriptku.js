// event pada saat link di klik
$('.page-scrool').on('click', function(e){
    
    // ambil isi href
    var tujuan = $(this).attr('href');
   // ambil elemen yg bersangkutan
    var elemenTujuan = $(tujuan);
    
    // pindah scroll
    $('body,html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    },1000, 'easeInOutExpo');
    
    e.preventDefault();
});


// parallax
// about
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');

})

$(window).scroll(function(){
    var wscroll = $(this).scrollTop();
    
    //jumbotron
    $('.jumbotron img').css({
        'transform' : `translate(0px, ${wscroll / 4.2}%)`
    });
    $('.jumbotron h1').css({
        'transform' : `translate(0px, ${wscroll / 2}%)`
    });
    $('.jumbotron p').css({
        'transform' : `translate(0px, ${wscroll / 1.2}%)`
    });

    // portfolio
    if(wscroll > $('.portfolio').offset().top - 255){
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            },250 * (i+1));
        });     
       
         
    };
});







