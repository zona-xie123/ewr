$(function () {
    $('.service .service-con').each(function () {
        $(this).find($('h3')).click(function () {
            $(this).toggleClass('active')
            $(this).siblings($('.txt')).slideToggle();
        })

    });

    //錨點
    function scrollNav() {
        $('.anchor a').click(function () {

            //Animate
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 360
            }, 400);
            return false;
        });
      
    }

    //彈跳視窗
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    //輪播
    var menu = ['Step 1 ｜', 'Step 2 ｜', 'Step 3 ｜']
    var descripTitle = ['與理專討論理財需求', '即時接收專屬資產配置建議', '登入行動銀行App或個人網路銀行(行動版)確認交易內容']
    var descrip = ['由理專提供專業的理財諮詢服務，並透過系統傳送客製化的資產配置建議', '玉山行動銀行App推播通知，手機即時接收專屬投資規劃', '透過理財快易通功能輕鬆確認多筆交易內容與約定事項，資產調整一次到位']
    var mySwiper = new Swiper('.swiper-container', {
        // If we need pagination
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><h4>' + (menu[index]) + '</h4><p><span>' + (descripTitle[index]) + '</span>' + (descrip[index]) + '</p></div>';
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    //faq_down
    $('.faq .qa').each(function (i) {

        var _number = i;
        $(this).find('h3').click(function () {
            $(this).toggleClass('active-qa')
            $('.answer').eq(_number).slideToggle(200);
        });
    });
});