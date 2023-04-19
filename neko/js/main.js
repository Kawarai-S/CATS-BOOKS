// jsを記述する際はここに記載していく
// $(function(){
//   $('.slider').slick({
//     autoplay:true,
//     // dots: true,
//     infinite: true,
//     speed: 2000,
//     fade: true,
//     cssEase: 'linear',
//     arrows: false
//   });
// });
// slick有効にすると画像比率がおかしくなる！

// $(function() {
//   $('a:not([href^="#"]):not([target])').on('click', function(e){
//       e.preventDefault();
//       url = $(this).attr('href');
//       if (url !== '') {
//           $('body').addClass('is_remove');
//           setTimeout(function () {
//               window.location = url;
//           }, 500);
//       }
//       return false;
//   });
// });


$(function() {
  var $body   = $('body');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // メニューの開閉
  $btn.on( 'click', function() {
    if ( ! $body.hasClass( open ) ) {
      $body.addClass( open );
    } else {
      $body.removeClass( open );
    }
  });
  // 背景の除去
  $mask.on('click', function() {
    $body.removeClass( open );
  });
} );
