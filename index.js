Vue.component('header-left',{
    template:'#header-left',
    props:{
        propMenu:null,
    },
    data:function(){
        return{
            icon:[{img:'home.png',word:'Home'},{img:'mail.png',word:'E-mail'},{img:'skype.png',word:'Skype'},{img:'Line.png',word:'Line'}],
            menu:this.propMenu,
        }
    },
    created:function(){
        for(var i=0;i<this.icon.length;i++){
            this.icon[i].img='images/icon/'+this.icon[i].img;
        }
    },
    methods:{
        foldMenu:function(){
            $('.header-left-one .menu').slideToggle();
        }
    }
})
Vue.component('content-product',{
    template:'#content-product',
    props:{
        postProductMsg:null,
        postScrollTop:String,
        postBodyWH:null,
    },
    data:{

    },
    created:function(){
        for(var i = 0; i<this.postProductMsg.length;i++){
            this.postProductMsg[i].img='images/'+this.postProductMsg[i].img;
        }
    },
    methods:{
        productHover:function(e){
            //alert(this.postBodyWH.w>540);
            if(this.postBodyWH.w>540){
                $('.content-one-box').hover(function(){
                    $(this).find('.content-one-box-text').stop(true,false).animate({width:'100%'},800);
                    $(this).find('.content-Img').stop(true,false).css({'transform':'scale(1.2)'});
                },function(){
                    $(this).find('.content-one-box-text').stop(true,false).animate({width:'60%'},800);
                    $(this).find('.content-Img').stop(true,false).css({'transform':'scale(1)'});
                })
            }
        },
    },
    computed:{
        animateInto:function(){
            if(this.postBodyWH.w>540){
                if(this.postScrollTop>450){
                    $('.content-one').css({'visibility':'visible'});
                    $('.content-one').addClass('animated flipInY');
                }
            }else{
                if(this.postScrollTop>960){
                    $('.content-one').css({'visibility':'visible'});
                    $('.content-one').addClass('animated flipInY');
                }
            }
        },
    },
})

Vue.component('mid-nav',{
    template:'#mid-nav',
    props:{
        propMenu:null,
        propRandomNews:null,
    },
    data:function(){
        return{
        midNavTitle:['ABOUT US','RANDOM NEWS','SEARCH','COMPANY']
        }
    },
    created:function(){
    },
})
var company = new Vue({
    el:'.company',
    data:{
        productMsg:[
        {date:'2016-11-23',textTitle:'您所擔心的『乳化劑』',textContent:'乳化劑門事件，純粹這三個字寫起來不好看',img:"product_001.jpg"},
        {date:'2016-08-30',textTitle:'高端化妝品中的胜肽',textContent:'專櫃小姐說這瓶六胜肽的抗皺能力出眾，可是電視上介紹的六胜肽卻說有神奇的美白效...',img:'product_002.jpg'},
        {date:'2016-07-18',textTitle:'保養品配方中湧現的超級食物風潮',textContent:'超級食物不在只是出現在你的奶昔冰品中，化妝品專櫃中也逐漸能找到超級食品的蹤跡...',img:'product_003.jpg'},
        {date:'2016-06-30',textTitle:'讓有效成分更有效的利用',textContent:'借重藥學經驗，合適的經皮膚吸收配方可讓活性成分的達陣率倍增',img:'product_004.jpg'}],
        menu:['回到首頁','關於我們','產品櫥窗','合作模式','訊息發布','聯絡我們'],
        randomNews:[{date:'2016-06-30',content:'讓有效成分更有效的利用'},{date:'2016-06-23',content:'保養品成分表中的海藻'},{date:'2016-04-12',content:'冰鎮保水又透明的花漾水晶軟...'}],
        hao:'hao',
        'scrollTop':'',
        animate:'animated',
        bodyWH:{w:0,h:0}, 
    },
    watch:{
        'scrollTop':function(newVal,oldVal){
            if(newVal>150 || oldVal>150){
                $('.top-btn').fadeIn();
            }else{
                $('.top-btn').fadeOut();
            }
        }
    },
    methods:{
        scroll:function(){
            this.scrollTop=window.scrollY;
        },
        moveTop:function(){
            $("html,body").stop(true,false).animate({scrollTop:0},1000);
        },
        rightButton1:function(e){
            $('.right-button:first').animate({right:0},800);
        },
        rightButton2:function(e){
            $('.right-button:last').animate({right:0},800);
        },
    },
    computed:{
        animateInto:function(){
            if(this.bodyWH.w>540){
                if(this.scrollTop>150){
                    $('.introduction').css({'visibility':'visible'});
                    $('.introduction').addClass('animated bounceInUp');
                };
                if(this.scrollTop>350){
                    $('.about-one').css({'visibility':'visible'});
                    $('.about-one').addClass('animated bounceInLeft');
                }
            }else{
                if(this.scrollTop>450){
                    $('.introduction').css({'visibility':'visible'});
                    $('.introduction').addClass('animated bounceInUp');
                };
                if(this.scrollTop>880){
                    $('.about-one').css({'visibility':'visible'});
                    $('.about-one').addClass('animated bounceInLeft');
                }
            }
        },
    },
    created:function(){
        var self=this;
        window.addEventListener('scroll',function(){
            self.scrollTop=window.scrollY;
        });
        document.body.addEventListener('mousemove',function(){
            var w = $('body').width();
            var h = $('body').height();
            self.bodyWH.w=w;
            self.bodyWH.h=h;
        });
    },
    mounted:function(){
        var w = $('body').width();
        var h = $('body').height();
        this.bodyWH.w=w;
        this.bodyWH.h=h;
    }
})
$(function(){
    $('body').click(function(evt) {
        //取得所點位置以上的所有className
        var getClassName = [];
        getClassName=$(evt.target).parents().map(function(){
            return this.className;
        }).get();
        getClassName = getClassName.toString();
        //alert(getClassName.indexOf('right-list')==-1);
        if(getClassName.indexOf('right-list')==-1){
                $('.right-button:first').stop(true,false).animate({right:"-250px"},800);
                $('.right-button:last').stop(true,false).animate({right:"-250px"},800);
        }
    });
    /*
    var w = $('body').width();
    var h = $('body').height(); 
    $('.window p:first').append(w);
    $('.window p:last').append(h);
    */
})

