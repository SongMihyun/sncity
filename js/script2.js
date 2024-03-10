
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

// 2섹션 keywordList 슬라이드
const keywordListWrap=$('.keywordAreaWrap');
bannerSlide(keywordListWrap,1000,500);

// 2섹션 메인 슬라이드
const section2Main_left=$('.section2Main_left');
bannerSlide(section2Main_left,3000,500);

// 4섹션 noticeThumbSlider 슬라이드
const sec4Right=$('.sec4Right');
bannerSlide(sec4Right,2000,500);

// 5섹션 sec5Left 슬라이드
const sec5Left=$('.sec5Left');
bannerSlide(sec5Left,3000,1000);

// 5섹션 sec5Right 슬라이드
const sec5Right=$('.sec5Right');
bannerSlide(sec5Right,2000,500);





//<공통 형식> 자동 슬라이드 (i,3000(인터벌시간),500(슬라이드시간))
//(슬라이드) i >.bannerWrap >div.banner >div.slideContainer >div.bannerArea >ul.banner_Ul >li>a>img(p)
//(컨트롤버튼) i >.bannerWrap >div.slide_control >div.slideBtn >button.prev,.next
//()

function bannerSlide(i,j,k){
    let bannerWrap=i.find('.bannerWrap');
    let slideBanner=i.find('.banner_Ul');
    let slideBannerList=slideBanner.find('li');
    let slideBannerList_first=slideBanner.find('li:first');
    let slideBannerList_last=slideBanner.find('li:last');
    let slideWidth=slideBannerList_first.width();
    const listCount=slideBannerList.length;
    let idx=1;
    let setIntervalId;
    let auto=1;
    
    //컨트롤 버튼 클릭이벤트
    const prevBtn=i.find('.prev');
    const nextBtn=i.find('.next');
    const pauseBtn=i.find('.pause');
    const playBtn=i.find('.play');
    

//페이지 출력
i.find('.idx').html(idx+' / '+listCount);

   
   


    //다음화면으로 넘기기
    function next(){
        slideWidth=slideBannerList_first.width();
        slideBanner.stop().animate({left:-(slideWidth)},k,function(){
        slideBannerList_first.insertAfter(slideBannerList_last);
        slideBanner.css({left: 0});
        slideBannerList_first=slideBanner.find('li:first');
        slideBannerList_last=slideBanner.find('li:last');
        idx=slideBannerList_first.attr('role');
        
        i.find('.idx').html(idx+' / '+listCount);


    })
    }
    //이전으로 돌아가기
    function prev(){
        slideBannerList_last.insertBefore(slideBannerList_first);
        slideWidth=slideBannerList_last.width();
        slideBanner.css({left: -(slideWidth)});
        slideBanner.stop().animate({left:(0)},k,function(){
        slideBannerList_first=slideBanner.find('li:first');
        slideBannerList_last=slideBanner.find('li:last');
        idx=slideBannerList_first.attr('role');
        i.find('.idx').html(idx+' / '+listCount);
        })
    }
    function stop(){
        clearInterval(setIntervalId);
    }
    nextBtn.click(function(){
        next();
    });
    prevBtn.click(function(){
        prev();
    });
    pauseBtn.click(function(){
        pauseBtn.addClass('blind');
        playBtn.removeClass('blind');
       act0();
       stop();
        
    });

    playBtn.click(function(){
        pauseBtn.removeClass('blind');
        playBtn.addClass('blind');
        act1();
        play();
    });

    

    function act1(){auto=1;}
    function act0(){auto=0;}

    play();
    function play(){
        auto=1;
        bannerWrap.on('mouseover',act0);
        setIntervalId=setInterval(() =>{
       
         
        
        if(auto==1){
            next();   
            bannerWrap.on('mouseout',act1);
        }else{
            act0();
        }
        
        },j);
    }
    
  


}
