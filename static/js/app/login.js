$(document).ready(function () {     $('#login_form input').keydown(function (e) {        if (e.keyCode == 13)        {            $('#login_submit').click();        }    });    var check_weixin_login;    $('.btn-wechat').mouseover(function()    {    	if ($(this).find('img').length)    	{    		$(this).addClass('active');    	}    	else    	{    		var _this = $(this);            AWS.loading_mini($('.side-bar .img'), 'show');    		$.post(G_BASE_URL + '/weixin/login_qr_code/', function (result)    		{                _this.find('.img').append('<img class="hide" src="' + result + '" />');                    			if (_this.find('.img img').length)    			{    				_this.find('.img img').attr('src', result);    			}    			else    			{    				_this.find('.img').append('<img class="hide" src="' + result + '" />');                    alert('<img class="hide" src="' + result + '" />');                    setTimeout(function()                    {                        _this.find('.img img').show();                        $('#aw-loading-mini-box').detach();                    }, 1000);    			}    		}, 'json');    		$(this).addClass('active');    	}    	check_weixin_login = setInterval(function ()    	{			$.get(G_BASE_URL + '/account/ajax/weixin_login_process/', function (response) {				if (response.errno == 1)				{                    if ($('input[name="return_url"]').val())                    {                        window.location.url = $(input[name="return_url"]).val();                    }                    else                    {                        window.location.reload();                    }				}			}, 'json');		}, 1500);    });    $('.btn-wechat').mouseout(function()    {    	$(this).removeClass('active');    	clearInterval(check_weixin_login);    });    });