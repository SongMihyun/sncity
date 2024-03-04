
//nav바 메뉴 검색창 클릭이벤트
$(function(){
    $('.btnTop .depth_bg').hide();
    
    $('.btnTopSearchOpen').click(function(){
        $('.btnTopSearchOpen').hide();
        $('.btnTopSearchClose').show();
        $('.btnTop .depth_bg').show();
    });
    $('.btnTopSearchClose').click(function(){
        $('.btnTopSearchClose').hide();
        $('.btnTopSearchOpen').show();
        $('.btnTop .depth_bg').hide();
    });
});



// footer friendSite 메뉴 클릭이벤트
$(function(){
    $('.familySiteSelect>li').click(function(){
        let li=$(this);
        let li_name=li.attr('class')+"_list";
        let this_title=li.children('a').attr('title')
        console.log(this_title);
        if(this_title=='사이트(축소됨)'){
            $('footer div.on').removeClass('on');
            $('footer .familySiteSelect li').attr('title','사이트(축소됨)');
            $(li).children('a').attr('title','사이트(확장됨)');
            $(li).children('a').addClass('active');
            $('div.'+li_name).addClass('on');
        }else{
            $('footer div.on').removeClass('on');
            $(li).children('a').attr('title','사이트(축소됨)');
            $(li).children('a').removeClass('active');        };
    });

});

//<공통> 자동 슬라이드 (i,3000(인터벌시간),500(슬라이드시간))
// i >div.banner >div.slideContainer >div.bannerArea >ul.area >li>a>img(p)
function bannerSlide(i,j,k){
    const slideBanner=i.find('.area');
    const slideBannerList=slideBanner.children('li');
    const slideBannerList_first=slideBannerList.eq('0');
    const slideWidth=slideBannerList_first.width();
    const listCount=slideBannerList.length;
    idx=slideBanner.find('li:first').attr('title');
    let setIntervalId;
    
    i.find('.idx').html(idx+' / '+listCount);
    setIntervalId=setInterval(() =>{
        slideBanner.stop().animate({left:-(slideWidth)},k,function(){
            slideBanner.find('li:first').insertAfter(slideBanner.find('li:last'));
            slideBanner.css({left: 0})
            idx=slideBanner.find('li:first').attr('title');
            i.find('.idx').html(idx+' / '+listCount);
        })
    },j)

    const nextBtn=i.find('.next');
    const prevBtn=i.find('.prev');
    const pauseBtn=i.find('.pause');
    const playBtn=i.find('.play');
    nextBtn.click(function(){
        clearInterval(setIntervalId);
        rightBtn(k);
    });
    prevBtn.click(function(){
        clearInterval(setIntervalId);
        leftBtn(k);
    });
    pauseBtn.click(function(){
        clearInterval(setIntervalId)
        pauseBtn.addClass('blind');
        playBtn.removeClass('blind');
    });
    playBtn.click(function(){
        bannerSlide(i,j,k)
        playBtn.addClass('blind');
        pauseBtn.removeClass('blind');
    });
    function rightBtn(k){
        slideBanner.stop().animate({left:-(slideWidth)},k,function(){
            slideBanner.find('li:first').insertAfter(slideBanner.find('li:last'));
            slideBanner.css({left: 0})
            idx=slideBanner.find('li:first').attr('title');
            i.find('.idx').html(idx+' / '+listCount);
        })
    }
    function leftBtn(k){
        slideBanner.find('li:last').insertBefore(slideBanner.find('li:first'));
        slideBanner.css({left:-(slideWidth)}).stop().animate({left:0},k,function(){
            idx=slideBanner.find('li:first').attr('title');
            i.find('.idx').html(idx+' / '+listCount);
        })
       

        
    }
    i.find('.bannerArea').on('mouseover', function(){
        clearInterval(setIntervalId);
    });
    i.find('.slideBtn').on('mouseover', function(){
        clearInterval(setIntervalId);
    });
    i.find('.bannerArea',).on('mouseout', function(){
        bannerSlide(i,j,k);
    });
    i.find('.slideBtn').on('mouseout', function(){
        bannerSlide(i,j,k);
    });
    

    
}


// 슬라이드 컨트롤 버튼 설정
/* slideBanner,nextBtn,prevBtn,pauseBtn,playBtn.on('mouseover', function(){
    clearInterval(setIntervalId);
});

slideBanner,nextBtn,prevBtn,pauseBtn,playBtn.on('mouseout', function(){
    bannerSlide(i,j,k);
}); */

//버튼 컨트롤러

/* function controlBtn(i,j,k){
    const slideBanner=i.find('.area');
    const slideBannerList=slideBanner.children('li');
    const slideWidth=slideBannerList.width();
    const listCount=slideBannerList.length;
    let idx=1;
    
} */





// 2섹션 인기검색어 슬라이드
const keyword=$('.keywordAreaWrap');
bannerSlide(keyword,3000,1000);


// 2섹션 메인 슬라이드
const section2Main_left=$('.section2Main .section2Main_left');
bannerSlide(section2Main_left,3000,500);

//section4 슬라이드
const sec4Right_noticeWrap=$('.sec4Right .noticeWrap');
bannerSlide(sec4Right_noticeWrap,2000,500);

//section5 슬라이드 -left
const sec5Left_eventListWrap=$('.section5 .sec5Left');
bannerSlide(sec5Left_eventListWrap,3000,1000);

//section5 슬라이드 -right
const sec5Right_snsZone=$('.section5 .sec5Right')
bannerSlide(sec5Right_snsZone,2000,500);












/* $('.slideBtn, .bannerArea').on('mouseover', function(){
    clearInterval(setIntervalId)
});
$('.slideBtn, .bannerArea').on('mouseout', function(){
    bannerSlide()
}); */

/* function rightBtn(){
    slideBanner.stop().animate({left:-(slideWidth)},500,function(){
        $('.bannerArea .area li:first').insertAfter('.bannerArea .area li:last');
        slideBanner.css({left: 0})
    })
} */




//3섹션 left 클릭이벤트
$(function(){
    $('.mainServiceArea>div').click(function(){
        let tab3=$(this).attr('class');
        var tab3_list=$('.mainServiceZone div.'+tab3+'_list');
        tab3_list.siblings().children('ul').removeClass('on');
        $(this).siblings().removeClass('ck');
        tab3_list.children('ul').addClass('on');
        $(this).addClass('ck');


    });
});

//4섹션 left 클릭이벤트
$(function(){
    $('.noticeArea>div').click(function(){
        let tab4=$(this).attr('class');
        var tab4_list=$('.listViewArea div.'+tab4+'_list');
        tab4_list.siblings().children('ul').removeClass('on');
        $(this).siblings().removeClass('ck');
        /* $('.listViewZone div.'+tab4_list+' ul').addClass('on'); */
        tab4_list.children('ul').addClass('on');
        $(this).addClass('ck');
    });
});

/* function rightBtn4(){
    slideBanner4.stop().animate({left:-(slideWidth4)},500,function(){
        $('.bannerArea4 .area4 li:first').insertAfter('.bannerArea4 .area4 li:last');
        slideBanner4.css({left: 0})
    })
}
function leftBtn4(){
    $('.bannerArea4 .area4 li:last').insertBefore('.bannerArea4 .area4 li:first');
    slideBanner4.css({left:-(slideWidth4)}).stop().animate({left:0},500)
}
$('.slideBtn4>.next').click(function(){
    rightBtn4()
});
$('.slideBtn4>.prev').click(function(){
    leftBtn4()
});
$('.slideBtn4>.pause').click(function(){
    clearInterval(setIntervalId4)
    $('.slideBtn4>.pause').addClass('blind');
    $('.slideBtn4>.play').removeClass('blind');
});
$('.slideBtn4>.play').click(function(){
    bannerSlide4()
    $('.slideBtn4>.play').addClass('blind');
    $('.slideBtn4>.pause').removeClass('blind');
});
 */





/* function rightBtn4(){
    slideBanner4.stop().animate({left:-(slideWidth4)},500,function(){
        $('.bannerArea4 .area4 li:first').insertAfter('.bannerArea4 .area4 li:last');
        slideBanner4.css({left: 0})
    })
}
$('.slideBtn4>.next').click(function(){
    rightBtn4()
});
function leftBtn4(){
    $('.bannerArea4 .area4 li:last').insertBefore('.bannerArea4 .area4 li:first');
    slideBanner4.css({left:-(slideWidth4)}).stop().animate({left:0},500)
}
$('.slideBtn4>.prev').click(function(){
    leftBtn4()
});
$('.slideBtn4>.pause').click(function(){
    clearInterval(setIntervalId4)
    $('.slideBtn4>.pause').addClass('blind');
    $('.slideBtn4>.play').removeClass('blind');
});
$('.slideBtn4>.play').click(function(){
    bannerSlide4()
    $('.slideBtn4>.play').addClass('blind');
    $('.slideBtn4>.pause').removeClass('blind');
});
 */













