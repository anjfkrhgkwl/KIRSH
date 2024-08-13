

/*************** 클릭 이벤트 무시 ****************/
$(function () {


    $('a').click(function (event) {
        event.preventDefault();
        //클릭 이벤트 무시
        //preventDefault : 이벤트 무시
    });


    /**********  tabmenu  ***********/

    let tabMenu = $('.section02 .tab_menu li');
    let tabList = $('.section02 .tab_list_wrap');

    tabList.not('.on').hide();

    tabMenu.click(function () {
        let index = $(this).index();

        tabMenu.removeClass('on');
        tabList.removeClass('on');

        $(this).addClass('on');
        tabList.eq(index).addClass('on');
        tabList.hide();
        tabList.eq(index).show();
    })


    /*************** 움직이는 이미지 ******************/

    let aniItem = $('.ani_item');

    aniItem.click(function(){
        if(aniItem.css('transform') === 'rotate(25deg)') {
            alert('o')
        } else {
            alert('x')
            aniItem.animate({
                'transform' : 'rotate(-25deg)'
            }, 500)
        }
    });

});



