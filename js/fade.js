$(function(){
  //windowがスクロールされたときに実行する処理
  $(window).scroll(function(){
    $(".important_news").each(function(){
      //要素が画面上に表示されたかどうかを判定させる変数を定義
      var scroll=$(window).scrollTop();//画面トップからのスクロール量
      var blockPosition=$(this).offset().top;//画面トップから見たブロックの位置
      var windowHeight=$(window).height();//ウィンドウの高さ
      if(scroll > blockPosition - windowHeight + 100){
        $(this).addClass("blockIn");
      }
    });
    $(".scroll_block").each(function(){
      //要素が画面上に表示されたかどうかを判定させる変数を定義
      var scroll=$(window).scrollTop();//画面トップからのスクロール量
      var blockPosition=$(this).offset().top;//画面トップから見たブロックの位置
      var windowHeight=$(window).height();//ウィンドウの高さ
      if(scroll > blockPosition - windowHeight + 100){
        $(this).addClass("blockIn");
      }
    });
  });
});
