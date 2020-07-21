$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});

// オプションを指定してSkipprの実行
$(".theTarget").skippr({
  // スライドショーの変化（"fade" or "slide"）
  transition : 'fade',
  // 変化にかかる時間（ミリ秒）
  speed : 1000,
  // easingの種類
  easing : 'easeOutQuart',
  // ナビゲーションの形（"block" or "bubble"）
  navType : 'block',
  // 子要素の種類（"div" or "img"）
  childrenElementType : 'div',
  // ナビゲーション矢印の表示（trueで表示）
  arrows : true,
  // スライドショーの自動再生（falseで自動再生なし）
  autoPlay : false,
  // 自動再生時のスライド切替間隔（ミリ秒）
  autoPlayDuration : 5000,
  // キーボードの矢印キーによるスライド送りの設定（trueで有効）
  keyboardOnAlways : true,
  // 1枚目のスライド表示時に戻る矢印を表示するかどうか [false]:矢印を隠さない [true]:矢印を隠す
  hidePrevious : false
});

$(function(){
  $('.main-img:nth-child(1)').on('click', function(){
    $('.main-img:nth-child(1)').slideUp();
  });

  $('.main-img:nth-child(2)').on('click', function(){
    $('.main-img:nth-child(2)').slideUp();
  });

  $('.main-img:nth-child(3)').on('click', function(){
    $('.main-img:nth-child(3)').slideUp();
  });

  $('.main-img:nth-child(4)').on('click', function(){
    $('.main-img:nth-child(4)').slideUp();
  });

  $('.main-img:nth-child(5)').on('click', function(){
    $('.main-img:nth-child(5)').slideUp();
  });

  $('.main-img:nth-child(6)').on('click', function(){
    $('.main-img:nth-child(6)').slideUp();
  });
});

$(function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});