$(function(){
  $('.model ul >li').click(function(){
    let n = $(this).index()+1;
    console.log(n);
    $('.model').before('<div class="c_img"><a href="#" title=""><img src="ad'+n+'.jpg"></a><i class="fa-solid fa-xmark"></i></div>');
    $('i.fa-xmark').click(function(){
      $('.c_img').hide();
    });
  });
});