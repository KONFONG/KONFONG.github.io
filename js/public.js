//开始：页面右侧联系客服
function erweima_show(_this){
	$(".rightIcon").css({"background":"#199ed8"});
	if($(_this).children('.hjs-rigBox-left').css('display')=='block'){
		$(_this).children('.hjs-rigBox-left').css({"background-color": "rgba(204, 204, 204,0.5)","display":"none"});
	}else{
		$('.hjs-rigBox-left').hide();
		$(_this).css({"background-color": "rgba(204, 204, 204,0.5)"});
		$(_this).children('.hjs-rigBox-left').css({"background-color": "rgba(204, 204, 204,0.5)","display":"block"});
	}
}

//头部顶部
var cFlag = true ;
function _show(){
	if( cFlag ){
		$('#qq-call ').show();
		cFlag =!cFlag ;
	}else {
		$('#qq-call ').hide();	
		cFlag =!cFlag ;
	}
}

//开始：回到顶部
$(window).scroll(function() {
	var ww = $(window).width();
	var st = $(window).scrollTop();
	if( ww > 600){
		if(st > 650) {$(".goTop").fadeIn(1500);} else {$(".goTop").fadeOut(1500);}
	}else {
		$(".goTop").hide();
	}
});

console.log( window.navigator.userAgent );
console.log( );
function up() { 
	var top = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
	
     _run = setInterval(function () {
		top = top - 80 ;
     	if( top > 0 ){
     		document.documentElement.scrollTop = document.body.scrollTop = top;
//   		console.log( top );
     	}else{
     		clearInterval(_run);
     		document.documentElement.scrollTop = document.body.scrollTop = 0;
     	}
  	},30)
}

//只有“确认”按钮的弹窗
//蓝色-正确提示
function _tip (msg , _url){
	if( _url == undefined ){
		var tipsBox = '<div id="tb" class="modal bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" data-backdrop="static"><div class="modal-dialog modal-sm" role="document"> <div class="modal-content well-lg text-center"><div class="modal-body">' + msg + '</div><a class="btn hjs-blueBtn" onclick="_close();">确定</a></div></div></div></div>'
	}else{
		var tipsBox = '<div id="tb" class="modal bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" data-backdrop="static"><div class="modal-dialog modal-sm" role="document"> <div class="modal-content well-lg text-center"><div class="modal-body">' + msg + '</div><a href="'+ _url +'" ' + 'class="btn hjs-blueBtn" onclick="_close();">确定</a></div></div></div></div>'
	}
	
	$('body').append(tipsBox);
	
	var bh = ( $(window).height() -$('div.modal-dialog').height() ) /2.5;
	$('#tb').modal();
	$('div.modal-dialog').css({"margin-top": bh });
	$('body').css({'padding-right':'0'});
	if(screen.width < 500 ){ $('#rgxy>div').css({"margin-top": '20%' }); }
}

function _tipError (msg,_url){
	if( _url == undefined ){
		var tipErrorBox = '<div id="tb" class="modal bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" data-backdrop="static"><div class="modal-dialog modal-sm" role="document"> <div class="modal-content well-lg text-center"><div class="modal-body">' + msg + '</div><a class="btn hjs-redBtn" onclick="_close();">确定</a></div></div></div></div>'
	}else{
		var tipErrorBox = '<div id="tb" class="modal bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" data-backdrop="static"><div class="modal-dialog modal-sm" role="document"> <div class="modal-content well-lg text-center"><div class="modal-body redText">' + msg + '</div><a class="btn hjs-redBtn" onclick="_close();">确定</a></div></div></div></div>'
	}
	$('body').append(tipErrorBox);
	
	var bh = ( $(window).height() -$('div.modal-dialog').height() ) /2.5;
	$('#tb').modal();
	$('div.modal-dialog').css({"margin-top": bh });
	$('body').css({'padding-right':'0'});
	if(screen.width < 500 ){ $('#rgxy>div').css({"margin-top": '20%' }); }
}

//有两个按钮的弹窗
function yesOrNo (msg , urlName){
	var tipsBox = '<div id="tb" class="modal bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" data-backdrop="static"><div class="modal-dialog modal-sm" role="document"><div class="modal-content well-lg text-center"><div class="modal-body">' + msg + '</div>' + '<a class="btn hjs-blueBtn" style="margin-right:10px;" href=" '+ urlName + '">确定</a><a class="btn hjs-blueBtn" onclick="_close();">取消</a></div></div></div></div>'
	$('body').append(tipsBox);
	
	var bh = ( $(window).height() -$('div.modal-dialog').height() ) / 2.5 ;
	$('#tb').modal();
	$('div.modal-dialog').css({"margin-top": bh });
	$('body').css({'padding-right':'0'});
	if(screen.width < 500 ){ $('#rgxy>div').css({"margin-top": '20%' }); }
}
//关闭弹出层提示框
function _close (){
	var tb = document.getElementById("tb");
	$('.bs-example-modal-sm').modal('hide');
	if( $('tb') ){ tb.remove(); $("body #tb").remove(); }
}
		
//投资列表页面-筛选条件中的更多按钮
var moreFlag = true; 
function moreCondition ( t ){
	var tt = $(t).parent().siblings('.sel-area');
	var ul_h = $(t).parent().siblings('.sel-area').children('ul').height()
	if(moreFlag){
		tt.stop().animate({"height": ul_h+'px' });
		moreFlag = !moreFlag;
	}else{
		tt.stop().animate({"height": "45px"});
		moreFlag = !moreFlag;
	}
}

//获取验证码倒计时
var daojishi;
var time = 120;

function Timer(time,obj){
    var _this = this;
    this.time = time;

    this.cleanSendCode = function(){
        clearTimeout(_this.timer);
        _this.time = time;
        $(obj).css({
            'background': "#199ed8",
            'cursor': 'pointer'
        }).attr("disabled", false);
        $(obj).val("获取验证码");

    };
    this.send = function () {
        if(_this.time === time){
            _this.time --;
            $(obj).css({
                'background': "#bbb",
                'cursor': 'not-allowed'
            }).attr("disabled", true);
            _this.timer = setInterval(function(){
                _this.time-=1;
                if(_this.time === 0) {
                    _this.cleanSendCode();
                } else {
                    $(obj).val('重新发送(' + _this.time + ")");
                }
            }, 1000);
        }else{
            this.cleanSendCode();
        }
    }
}

function sendCode(_this) {
	if(time === 120) {
		time = 119;
		$(_this).css({
			'background': "#bbb",
			'cursor': 'not-allowed'
		}).attr("disabled", true);
		daojishi = setInterval(function() {
			time = time - 1;
			if(time === 0) {
				cleanSendCode(_this);
			} else {
				$(_this).val('重新发送(' + time + ")");
			}
		}, 1000);
	} else {
		cleanSendCode(_this)
	}
}

function cleanSendCode(_this) {
	clearTimeout(daojishi);
	time = 120;
	setTimeout(function() {
		$(_this).css({
			'background': "#199ed8",
			'cursor': 'pointer'
		}).attr("disabled", false);
		$(_this).val("获取验证码");
	}, 1800);
}

//按钮禁止 与 恢复
function stop_rest(_this) {
	if(_this.style.cursor == 'not-allowed') {
		$(_this).css({
			'background': "#199ed8",
			'cursor': 'pointer'
		}).attr("disabled", false);
		$(_this).val('立即提交');
	} else {
		$(_this).css({
			'background': "#bbb",
			'cursor': 'not-allowed'
		}).attr("disabled", true);
		$(_this).val('提交中...');
	}
}

// 兼容浏览器placeholder属性
$(function() {
	if(!placeholderSupport()) {
		$('[placeholder]').focus(function() {
			var input = $(this);
			if(input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if(input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur();
	};
})
function placeholderSupport() {
	return 'placeholder' in document.createElement('input');
}

//修改手机号码的按钮
function reset_phone (t){
	$('#hjs-phoneNum').attr("readonly", false).css({
		'background': "#fff",
		"color": "#000"
	});
	$(t).hide();
}

//自动消失信息提示框架
function fadeLayer ( msg ){
	var layerHtml = '<div id="tipsFade"><div class="tipsFade-text">'+ msg +'</div></div>' ;
	$('body').append(layerHtml);
	setTimeout(function() {
		$('#tipsFade').fadeOut().remove()
	}, 3000);
}

//fadeLayer ( '3秒后消失' );



