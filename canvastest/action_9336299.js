function _App(){this.pageWrap=$(".main-container"),this.h=$(window).height(),this.w=$(window).width(),this.maxVolume=1,this.formalURL="hatustudio.com",this.cdnURL="http://cdn.szxgl.cn/haochezhu77/",this.openid=null,this.userName=null,this.userPhotoUrl=null,this.welcomeAudio=null,this.bgAudio=null,this.video2Audio=null,this.video3Audio=null,this.step=0,this.MovieCanvas=null,this.MovieInterval=null,this.MovieLooped=!0,this.MovieFrame=0,this.resizeTime=0,this.timeline_1=null,this.networkType=null,this.video1CanPlay=0,this.video2CanPlay=0,this.video3CanPlay=0,this.path={product:"http://show.szxgl.cn/haochezhu"},this.interface={savePhone:"/api/qixi/savePhone"}}var PageData={gender:null,opt1:null,opt2:null,house:null},ScreenSize={width:640,height:1050},MovieSize={width:1280,height:720},FrameSize={width:1280,height:720},acitveFrame={width:0,height:0},videoDisplay=0,playWidth=0,playHeight=0,cdStep=0,cdStep2=0,canvasVideo1=null;_App.prototype={init:function(){var a=this;a.loadMusic(),a.checkFormalEnv()&&(console.log("正式环境"),a.initWeChatShare()),a.styleInit(),a.resControl(),a.orientation(),a.action()},styleInit:function(){var a=this;if($(window).on("touchstart scroll",function(e){"phone"!=e.target.id&&e.preventDefault()}),a.openid=a.checkFormalEnv()?a.getSetCookie("_nb_openid_1"):"o5QXssxtEFWUmhWNZNQTC6UhG5iE",a.nickname=a.checkFormalEnv()?a.getSetCookie("_nb_nickname_1"):"板栗",a.headimgurl=a.checkFormalEnv()?a.getSetCookie("_nb_headimgurl_1"):"http://wx.qlogo.cn/mmopen/PuL9V9tH3YVzKkn2Dia5MvQQria1y4gNKNaw4f8cKMnwucSRHwIe8MIGCiau5ZpX8uB3pwgQX0qof3OJNjNUAlAsGDnHpRKRRV7/0",document.body.style.userSelect="none",document.body.style.mozUserSelect="none",document.body.style.webkitUserSelect="none",!a.isAndriod()){var h='<video id="video1" webkit-playsinline="true" preload="auto"><source src="http://cdn.szxgl.cn/haochezhu77/media/v2.mp4" type="video/mp4"> </video> <video id="video2" webkit-playsinline="true" preload="auto"> <source src="http://cdn.szxgl.cn/haochezhu77/media/v3.mp4" type="video/mp4"> </video>';$(".video-container").append(h),canvasVideo1=new CanvasVideoPlayer({videoSelector:"#video1",canvasSelector:"#videoCanvas",hideVideo:!0,audio:!0})}},resControl:function(){{var a=this,h=["love_con.png","love_border.png","loading_bg.jpg","success_box_bg.png","jh_btn.png","share_arrow.png","share_icon.png","rule_bg.png","share_btn.png","free_get_btn.png","rule_btn.png","input_bg.png","get_prize_title.png","get_prize.png","cd_btn.png","intro_3_word_4.png","intro_3_word_3.png","intro_3_word_2.png","intro_3_point.png","intro_3_map.png","intro_2_word_4.png","intro_2_click.png","intro_2_word_3.png","intro_2_word_2.png","light_bg.png","intro_1_phone_light.png","intro_1_word_4.png","intro_1_word_3.png","intro_1_word_2.png","intro_1_word_1.png","intro_1_car_cyc.png","intro_1_phone.png","intro_1_title.png","ste_2_word.png","step_2_choose_1.png","step_2_choose_2.png","step_2_word.png","step_1_word.png","poster1.jpg","play_icon.png","bg_1_h.jpg","bg_1_s.jpg","bg_1_s2.jpg"];new PreLoad(h,".progress",{prefix:a.checkFormalEnv()?a.cdnURL+"images/":"images/",progressInit:!1,vision:"1.0",events:{preLoadComplete:[function(){a.frameAnimation()}],preLoadProgress:[function(a){var h=Math.ceil(a/3);$(".loading-overlay .progress").height(h+"%"),$(".loading-overlay .progress-text").text(h+"%")}]}})}},action:function(){var a=this;a.checkFormalEnv()||(touch.on("body","hold doubletap",function(){}),touch.on("body","hold",function(){}),setTimeout(function(){},1e3)),$("#phone").on("focus",function(){a.isAndriod()&&$("body").css({width:acitveFrame.width,height:acitveFrame.height})}).on("blur",function(){a.isAndriod()&&$("body").css({width:"100%",height:"100%"})})},timeLine:function(){var a=this;$(".page-1 .play-btn,.page-1 .step-1-word").on("touchstart",function(){$(".page-1").find(".play-btn,.step-1-word,.video-masking").fadeOut(),a.MovieLooped=!1}),$(".page-1 .step-2-btn-1").on("touchstart",function(){a.step++,cdStep2=1,$(".page-1").find(".step-2-word,.step-2-btn-1,.step-2-btn-2,.logo").fadeOut(),$(".video-bg").fadeIn(),setTimeout(function(){$(".page-1").find(".intro-box").show(),$("#videoCanvas").hide(),a.introAnimation()},500)}),$(".page-1 .step-2-btn-2").on("touchstart",function(){cdStep=1,a.step++,$(".page-1").find(".step-2-word,.step-2-btn-1,.step-2-btn-2,.intro-box .get-prize,.intro-box,.video-bg,.logo").fadeOut(),a.isAndriod()?($(".video-masking").fadeOut(),a.video3CanPlay++):setTimeout(function(){$("#videoCanvas").show(),$(".video-masking").fadeOut(),a.IOSVideoPlan2()},500)}),$(".step-3-btn-1").on("touchstart",function(){1==cdStep2?(a.step++,$(".page-1 .intro-box,.page-1 .get-prize,.page-1 .logo").fadeOut(),$(".page-1 .get-prize-box,.video-bg").fadeIn(),$(".step-3-btn-1").fadeOut()):(a.step++,$(".get-prize").addClass("played"),$(".step-3-btn-1").fadeOut(),$(".video-bg").fadeIn(),$(".page-1").find(".intro-box").show(),a.introAnimation())}),$(".page-1 .get-prize").on("touchstart",function(){a.step++,$(".page-1 .intro-box,.page-1 .get-prize,.step-2-btn-2,.page-1 .logo").fadeOut(),$(".page-1 .get-prize-box,.video-bg").fadeIn()}),$(".page-1 .get-prize-box .go-btn").on("touchstart",function(){if(!$(this).hasClass("disabled")){$(this).addClass("disabled");var h=$("#phone").val(),c=/^[1][358][0-9]{9}/;if(!c.test(h))return $(this).removeClass("disabled"),a.showDialogTip("请正确输入手机号码"),!1;a.submitPhone(h)}}),$("#phone").focus(function(){"输入手机号码免费领取"==this.value&&$(this).val("")}),$("#phone").blur(function(){""==this.value&&$(this).val("输入手机号码免费领取")}),$(".rule-btn").on("touchstart",function(){$(".rule-box").fadeIn().addClass("shown")}),$(".rule-bg .close").on("touchstart",function(){$(".rule-box").fadeOut().removeClass("shown")}),$(".share-btn").on("touchstart",function(){$(".share-box").fadeIn()}),$(".share-box").on("touchstart",function(){$(this).fadeOut()}),$(".get-success-box .btn").on("touchstart",function(){location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.pingan.carowner"}),$(".get-success-box .success-box .close").on("touchstart",function(){$(".page-1 .get-success-box").hide(),$(".page-1 .get-prize-box").fadeIn()})},introAnimation:function(){function a(){h.timeline_1=new TimelineMax({delay:.5,repeat:0,onComplete:function(){1==cdStep2?$(".step-2-btn-2").fadeIn():$(".intro-box .get-prize").addClass("played").fadeIn(),$(".video-masking").fadeOut(),c.kill(),a.kill()}});var a=new TweenMax(y,1,{bezier:{type:"soft",values:[{autoAlpha:1},{autoAlpha:0},{autoAlpha:0},{autoAlpha:.5},{autoAlpha:0},{autoAlpha:0},{autoAlpha:1}]},repeat:100,delay:2.4,ease:Linear.easeNone}),c=new TweenMax(w,1,{opacity:1,y:10,yoyo:!0,repeat:100,delay:1.8,ease:Linear.easeNone});h.timeline_1.to(g,.8,{autoAlpha:1}).set(v,{y:30,autoAlpha:0}).to(v,.8,{y:0,autoAlpha:1}).to(y,.8,{y:0,autoAlpha:1}).set(A,{x:30,rotation:90,autoAlpha:0}).to(A,.5,{x:0,rotation:0,autoAlpha:1}).set(_,{x:30,rotation:90,autoAlpha:0}).to(_,.5,{x:0,rotation:0,autoAlpha:1}).set(b,{x:30,rotation:90,autoAlpha:0}).to(b,.5,{x:0,rotation:0,autoAlpha:1}).set(S,{x:30,rotation:90,autoAlpha:0}).to(S,.5,{x:0,rotation:0,autoAlpha:1}).to(y,.5,{autoAlpha:0},"+=1.5").to(w,.4,{autoAlpha:0}).to(v,.3,{x:30,autoAlpha:0}).to(S,.5,{x:30,autoAlpha:0}).to(b,.4,{x:30,autoAlpha:0}).to(_,.3,{x:30,autoAlpha:0}).to(A,.2,{x:30,autoAlpha:0}).set(z,{scale:.5,rotation:720,autoAlpha:0}).to(z,.5,{scale:1.1,rotation:0,autoAlpha:1}).to(z,.1,{scale:1,rotation:0,autoAlpha:1}).set(A,{x:0,y:0,scale:1.2,autoAlpha:0}).to(A,.5,{x:0,y:0,scale:1,autoAlpha:1}).set(M,{y:0,scale:1.2,autoAlpha:0}).to(M,.5,{y:0,scale:1,autoAlpha:1}).set(I,{y:0,scale:1.2,autoAlpha:0}).to(I,.5,{y:0,scale:1,autoAlpha:1}).set(C,{y:0,scale:1.2,autoAlpha:0}).to(C,.5,{y:0,scale:1,autoAlpha:1}).to(z,.5,{y:30,autoAlpha:0},"+=1.5").to(C,.5,{y:30,autoAlpha:0}).to(I,.4,{y:30,autoAlpha:0}).to(M,.3,{x:0,y:30,autoAlpha:0}).to(A,.2,{x:0,y:30,autoAlpha:0}).set(k,{y:-30,autoAlpha:0}).to(k,.5,{y:0,autoAlpha:1}).set(T,{y:-30,autoAlpha:0}).to(T,.5,{y:0,autoAlpha:1}).set(A,{y:30,autoAlpha:0}).to(A,.5,{y:0,autoAlpha:1}).set(F,{y:30,autoAlpha:0}).to(F,.5,{y:0,autoAlpha:1}).set(P,{y:30,autoAlpha:0}).to(P,.5,{y:0,autoAlpha:1}).set(E,{y:30,autoAlpha:0}).to(E,.5,{y:0,autoAlpha:1}).to(T,.5,{y:-30,autoAlpha:0},"+=1.5").to(k,.2,{y:30,autoAlpha:0}).to(E,.5,{y:30,autoAlpha:0}).to(P,.4,{y:30,autoAlpha:0}).to(F,.3,{y:30,autoAlpha:0}).to(A,.2,{y:30,autoAlpha:0}).to(L,.5,{autoAlpha:1},"+=0.5")}var h=this,c=$(".page-1 .intro-box"),g=($(".page-1 .logo"),c.find(".title")),v=c.find(".phone"),w=c.find(".phone-cyc"),y=c.find(".phone-light"),A=c.find(".word-1"),_=c.find(".word-2"),b=c.find(".word-3"),S=c.find(".word-4"),z=c.find(".click"),M=c.find(".word-5"),I=c.find(".word-6"),C=c.find(".word-7"),k=c.find(".map"),T=c.find(".map-point"),F=c.find(".word-8"),P=c.find(".word-9"),E=c.find(".word-10"),L=c.find(".get-prize");a(),h.timeline_1.progress(0).timeScale(0),TweenLite.to(h.timeline_1,1,{timeScale:1})},frameAnimation:function(){function a(){for(A=0,i=0;i<v.length;i++)"image"==v[i].type&&(y[v[i].name]=new Image,y[v[i].name].src=v[i].url,y[v[i].name].onload=function(){A++});var a=setInterval(function(){if(_<=Math.ceil(A/v.length*100)){_++;var g=Math.ceil(.67*_)+33;$(".loading-overlay .progress").height(g+"%"),$(".loading-overlay .progress-text").text(g+"%")}100==_&&(c.video1CanPlay=1,clearInterval(a),$(".loading-overlay").fadeOut(),$(".page-1").addClass("shown"),setTimeout(function(){$(".page-1 .guide").hide(),h(),c.timeLine()},2e3),console.log("前序序列帧加载完毕"))},20)}function h(){c.isAndriod()&&setTimeout(function(){c.Andriodframeplan1()},1e3),b=document.getElementById("welcomeCanvas"),S=b.getContext("2d"),S.clearRect(0,0,MovieSize.width,MovieSize.height);var a=setInterval(function(){0==c.MovieFrame&&(c.welcomeAudio.currentTime=0,c.welcomeAudio.play()),c.MovieFrame++,c.MovieFrame>(c.checkFormalEnv()?100:10)&&!z&&!c.isAndriod()&&(z=!0,$(".page-1 .play-btn,.page-1 .step-1-word").fadeIn()),c.MovieLooped||(clearInterval(a),c.welcomeAudio.pause(),$("#welcomeCanvas").remove(),c.isAndriod()?c.video2CanPlay++:c.IOSVideoPlan1()),c.MovieFrame>180&&(c.MovieFrame=0),S.drawImage(y["frame_"+c.MovieFrame],0,0,FrameSize.width,FrameSize.height,0,0,MovieSize.width,MovieSize.height)},100)}var c=this;if(c.step<1){c.step=1;for(var g=c.checkFormalEnv()?c.cdnURL+"images/":"images/",v=[],i=0;187>i;i++){var n;n=100>i?10>i?"00"+i:"0"+i:i;var w={name:"frame_"+i,type:"image",url:g+"1"+n+".jpg"};v.push(w)}var y={},A=0,_=0;a(),$(".video-container").show().find("#welcomeCanvas").show();var b,S,z=!1}},Andriodframeplan1:function(){function a(){for(A=0,i=0;i<v.length;i++)"image"==v[i].type&&(y[v[i].name]=new Image,y[v[i].name].src=v[i].url,y[v[i].name].onload=function(){A++});var a=setInterval(function(){_<=Math.ceil(A/v.length*100)&&(_++,$("#videoLoadProgress .progress").width(_+"%")),_>=50&&(c.video2CanPlay<1&&$(".page-1 .play-btn,.page-1 .step-1-word").fadeIn(),c.video2CanPlay=1),100==_&&(c.Andriodframeplan2(),clearInterval(a),console.log("主视频序列帧加载完毕"),setTimeout(function(){$("#videoLoadProgress").empty()},500))},20)}function h(){b=document.getElementById("videoCanvas"),S=b.getContext("2d"),S.clearRect(0,0,MovieSize.width,MovieSize.height);var a=setInterval(function(){M++,M>837&&(clearInterval(a),c.video2Audio.pause(),c.bgAudio.play(),$(".page-1 .video-masking").fadeIn(800),$(".page-1 .logo").fadeIn(800),setTimeout(function(){$(".page-1").find(".step-2-word").fadeIn()},800),setTimeout(function(){$(".page-1").find(".step-2-btn-1").fadeIn()},1600),setTimeout(function(){$(".page-1").find(".step-2-btn-2").fadeIn()},2400)),S.drawImage(y["frame_"+M],0,0,FrameSize.width,FrameSize.height,0,0,MovieSize.width,MovieSize.height)},100)}for(var c=this,g=c.checkFormalEnv()?c.cdnURL+"images/movie_2/":"images/movie_2/",v=[],i=0;837>i;i++){var n;n=100>i?10>i?"00"+i:"0"+i:i;var w={name:"frame_"+i,type:"image",url:g+"2"+n+".jpg"};v.push(w)}var y={},A=0,_=0;a(),console.log(y);var b,S,z=setInterval(function(){c.video2CanPlay>=2&&(clearInterval(z),c.video2Audio.play(),$(".video-container").show().find("#videoCanvas").show(),setTimeout(function(){h()},500))}),M=c.checkFormalEnv()?0:0},Andriodframeplan2:function(){function a(){for(A=0,i=0;i<v.length;i++)"image"==v[i].type&&(y[v[i].name]=new Image,y[v[i].name].src=v[i].url,y[v[i].name].onload=function(){A++});var a=setInterval(function(){_<=Math.ceil(A/v.length*100)&&_++,100==_&&(console.log("彩蛋序列帧加载完毕"),clearInterval(a),setTimeout(function(){},500))},20)}function h(){b=document.getElementById("videoCanvas"),S=b.getContext("2d"),S.clearRect(0,0,MovieSize.width,MovieSize.height);var a=setInterval(function(){M++,M>202&&(clearInterval(a),c.video3Audio.pause(),c.bgAudio.play(),$(".step-3-btn-1").fadeIn()),S.drawImage(y["frame_"+M],0,0,FrameSize.width,FrameSize.height,0,0,MovieSize.width,MovieSize.height)},100)}for(var c=this,g=c.checkFormalEnv()?c.cdnURL+"images/movie_3/":"images/movie_3/",v=[],i=0;202>i;i++){var n;n=100>i?10>i?"00"+i:"0"+i:i;var w={name:"frame_"+i,type:"image",url:g+"3"+n+".jpg"};v.push(w)}var y={},A=0,_=0;a(),console.log(y);var b,S,z=setInterval(function(){c.video3CanPlay>=1&&(clearInterval(z),c.video3Audio.play(),setTimeout(function(){h()},500))}),M=c.checkFormalEnv()?0:200},IOSVideoPlan1:function(){$(".video-container").show(),$("#videoCanvas").show(),canvasVideo1.play(),PageData.gender=1},IOSVideoPlan2:function(){var a=this;a.bgAudio.pause();var h=new CanvasVideoPlayer({videoSelector:"#video2",canvasSelector:"#videoCanvas",hideVideo:!0,audio:!0});$(".video-container").show(),h.play(),PageData.gender=2,MovieAction=!0},submitPhone:function(a){var h=this;h.rebuildJqAjax(h.interface.savePhone,{phone:a},{done:function(a){$(".page-1 .get-prize-box .go-btn").removeClass("disabled"),0==a.ret?($(".get-prize-box").fadeOut(),$(".get-success-box").fadeIn()):h.showDialogTip(a.msg)}})},initWeChatShare:function(){var a,h,c,g,v=this;a="http://show.szxgl.cn/pacx/qixi/index.html",h="一场暖心爱情故事，正在上演......",c="七夕防蒙圈，俘获女友芳心，爱她就送她安全",g="http://show.szxgl.cn/pacx/qixi/icon.jpg",$.ajax({type:"get",url:"http://show.szxgl.cn/wxapi/api/jsconfig?url="+encodeURIComponent(window.location.href),async:!0,dataType:"json",success:function(a){0==a.ret?wx.config({debug:!1,appId:a.appId,timestamp:a.timestamp,nonceStr:a.nonceStr,signature:a.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","translateVoice","startRecord","stopRecord","onRecordEnd","playVoice","pauseVoice","stopVoice","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"]}):alert("js授权失败："+a.msg)}}),wx.ready(function(){wx.getNetworkType({success:function(a){v.networkType=a.networkType}}),wx.onMenuShareAppMessage({title:c,desc:h,link:a,imgUrl:g,success:function(){_hmt.push(["_trackEvent","发给朋友","发给朋友success"])},cancel:function(){_hmt.push(["_trackEvent","发给朋友","发给朋友cancel"])},fail:function(){_hmt.push(["_trackEvent","发给朋友","发给朋友fail"])}}),wx.onMenuShareTimeline({title:c,link:a,imgUrl:g,success:function(){_hmt.push(["_trackEvent","分享到朋友圈","分享到朋友圈success"])},cancel:function(){_hmt.push(["_trackEvent","分享到朋友圈","分享到朋友圈cancel"])},fail:function(){_hmt.push(["_trackEvent","分享到朋友圈","分享到朋友圈fail"])}})})},loadMusic:function(){var a=this,h={preload:"auto",loop:"loop",volume:1};options_audio2={preload:"auto",loop:"loop",volume:1},a.welcomeAudio=new Audio,a.welcomeAudio.src=a.checkFormalEnv()?a.cdnURL+"media/1.mp3":"media/1.mp3";for(var c in h)h.hasOwnProperty(c)&&c in a.welcomeAudio&&(a.welcomeAudio[c]=h[c]);a.bgAudio=new Audio,a.bgAudio.src=a.checkFormalEnv()?a.cdnURL+"media/bg.mp3":"media/bg.mp3";for(var c in h)h.hasOwnProperty(c)&&c in a.bgAudio&&(a.bgAudio[c]=h[c]);a.video2Audio=new Audio,a.video2Audio.src=a.checkFormalEnv()?a.cdnURL+"media/2.mp3":"media/2.mp3";for(var c in options_audio2)options_audio2.hasOwnProperty(c)&&c in a.video2Audio&&(a.video2Audio[c]=options_audio2[c]);a.video3Audio=new Audio,a.video3Audio.src=a.checkFormalEnv()?a.cdnURL+"media/3.mp3":"media/3.mp3";for(var c in options_audio2)options_audio2.hasOwnProperty(c)&&c in a.video3Audio&&(a.video3Audio[c]=options_audio2[c])},showDialogTip:function(a,h){var c=this,g='<div class="page-container dialog-tips"><div class="tips-con"></div></div>';$(".dialog-tips").length<1&&$(".rotate-wrap").append(g),$(".dialog-tips .tips-con").html(a),$(".dialog-tips").addClass("shown"),c.Tipstimeout=setTimeout(function(){$(".dialog-tips").removeClass("shown")},h?h:2e3)},checkFormalEnv:function(){var a=this;return window.location.href.toLowerCase().indexOf(a.formalURL)>-1?!0:!1},rebuildJqAjax:function(a,h,c,g){var v=this;h.timestamp=(new Date).getTime(),v.checkFormalEnv()||(h.openid=v.openid),$.ajax({url:v.path.product+a,data:h,async:g,dataType:"json",type:"POST",timeout:9e4,success:function(re){console.log(a+" 接口请求成功"),c.done&&c.done(re)},error:function(re){console.log(a+" 接口报错"),c.fail&&c.fail(re)},complete:function(re){c.always&&c.always(re)}})},getSetCookie:function(a,h,c){if("undefined"==typeof h){var g=null;if(document.cookie&&""!=document.cookie)for(var v=document.cookie.split(";"),i=0;i<v.length;i++){var w=$.trim(v[i]);if(w.substring(0,a.length+1)==a+"="){g=decodeURIComponent(w.substring(a.length+1));break}}return g}c=c||{},null===h&&(h="",c=$.extend({},c),c.expires=-1);var y="";if(c.expires&&("number"==typeof c.expires||c.expires.toUTCString)){var A;"number"==typeof c.expires?(A=new Date,A.setTime(A.getTime()+24*c.expires*60*60*1e3)):A=c.expires,y="; expires="+A.toUTCString()}var _=c.path?"; path="+c.path:"",b=c.domain?"; domain="+c.domain:"",S=c.secure?"; secure":"";document.cookie=[a,"=",encodeURIComponent(h),y,_,b,S].join("")},getQueryString:function(a){var h=new RegExp("(^|&)"+a+"=([^&]*)(&|$)"),r=window.location.search.substr(1).match(h);return null!=r?unescape(r[2]):null},isAndriod:function(){var a=navigator.userAgent;return a.indexOf("Android")>-1||a.indexOf("Adr")>-1?!0:!1},orientation:function(){var a=this;a.setSize($(".rotate-wrap")),$(window).on("resize",function(){setTimeout(function(){a.setSize($(".rotate-wrap"))},200)})},setSize:function(a){var h=this,c=$("body"),g=parseInt(c.width()),v=parseInt(c.height()),w=0,y=0;v>g?(w=v,y=g,$(".share-arrow").addClass("left")):(w=g,y=v,$(".share-arrow").removeClass("left")),acitveFrame={width:w,height:y},playWidth=acitveFrame.height/MovieSize.height*MovieSize.width,playHeight=acitveFrame.width/MovieSize.width*MovieSize.height,a.css({width:w+"px",height:y+"px"});var A=y/508*1140;$(".video-bg img").css({"margin-left":-A/2+"px"}),setTimeout(function(){var a=$(".loading-overlay .progress-box");a.find(".progress").css("background-size",a.width()+"px "+a.height()+"px")},100),$(".video2-end img,.video3-end img").css({"margin-top":-(w/MovieSize.width*MovieSize.height)/2+"px"}),w/y>MovieSize.width/MovieSize.height?(videoDisplay=1,h.resizeTime<1&&$(".video-container canvas").each(function(i){h.isAndriod()||1!=i?$(this).attr({width:MovieSize.width,height:MovieSize.height}).get(0).style.WebkitTransform="scale("+acitveFrame.width/MovieSize.width+")":$(this).attr({width:MovieSize.width,height:MovieSize.height})}),$(".video-container video").attr({width:w,height:"auto"}),$(".video-container").css("margin-top",w/MovieSize.width*MovieSize.height/-2+"px"),$(".video-container").css("margin-left",w/-2+"px")):(videoDisplay=2,h.resizeTime<1&&$(".video-container canvas").each(function(i){h.isAndriod()||1!=i?$(this).attr({width:MovieSize.width,height:MovieSize.height}).get(0).style.WebkitTransform="scale("+acitveFrame.height/MovieSize.height+")":$(this).attr({width:MovieSize.width,height:MovieSize.height})}),$(".video-container video").attr({width:"auto",height:y}),$(".video-container").css("margin-top",y/-2+"px"),$(".video-container").css("margin-left",y/MovieSize.height*MovieSize.width/-2+"px")),h.resizeTime++}};var _App=new _App;_App.init();