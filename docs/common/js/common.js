//定義
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){
		$('#page_top').removeClass('down');
		$('#page_top').addClass('up');
	}else{
		if($('#page_top').hasClass('up')){
			$('#page_top').removeClass('up');
			$('#page_top').addClass('down');
		}
	}
}

//ページ読み込み後実行
$(function(){
  //スマホならコンテンツの順番入れ替え
  $(window).on("load resize", function () {
    if ($(window).width() <= 768) {
      $(function () {
        $("#exhibition").after(
          $("#calender"),
          $("#linkmenu1"),
          $("#pickup"),
          $("#infomation"),
          $("#linkmenu2")
        );
      });
    }
  });
  
  //スマホGナビ
    $('#nav-toggle').on('click', function() {
        $('header').toggleClass('open');
    });

  //メインビジュアルスライダー
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    infinite: true,
    arrows: true,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    prevArrow: '<div class="slick-prev pc"></div><span class="slick-prev_border pc"></span>',
    nextArrow: '<div class="slick-next pc"></div><span class="slick-next_border pc"></span>'
  });

  //新着情報スライダー
  $('.newinfo_slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    fade: false,
    infinite: true,
    arrows: false,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  
  $('.calender_month').slick({
    autoplay: false,
    infinite: false,
    fade: true,
    arrows: false
  });

  //カレンダースライダー
  $('.calender_img').slick({
    autoplay: false,
    infinite: false,
    arrows: true,
    fade: true,
    asNavFor: ".calender_month",
    prevArrow: '<div class="calender_prev"></div>',
    nextArrow: '<div class="calender_next"></div>'
  });

  //右下TOPリンク
  $(window).scroll(function () {
    PageTopAnime();
  });
  $(window).on('load', function () {
  PageTopAnime();
  });
  $('#page_top a').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 300);
    return false;
  });
});