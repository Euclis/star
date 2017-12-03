$(function(){

    // 滑动插件
    $('#fullpage').fullpage({
        anchors:['firstPage','secondPage','thirdPage','fourthPage'],
        menu:'#menu',
        afterLoad: function (anchorLink, index) {
            $('.section').removeClass('current');
            // 延时100毫秒执行
            setTimeout(function () {
                $('.section').eq(index - 1).addClass('current');
            }, 100);
        }
    })
    
    window.onload = function () {
        $.fn.fullpage.moveTo('firstPage', 0);
    }
    
    // 打开注册框
    $('#register').click(function () {
        $('.section').css({'opacity':'0.6'});
        $('.registerbox').css({'display':'block'});
    })
    // 关闭注册框
    $('.delete').click(function () {
        $('.section').css({'opacity':'1'});
        $('.registerbox').css({'display':'none'}).find('#ajaxForm i').removeClass();
        $('.registerbox input[type="text"]').val('');
        $('.registerbox input[type="password"]').val('');
    })
    // 用户名验证
    $('.name').blur(function () {
        var value = $(this).val();
        $.ajax({
            url:'register_name.php',
            type:'post',
            data:{name:value},
            success:function (data) {
                if (data == 'have') {
                    $('.name').next().removeClass().addClass('icon-remove-sign');
                }else{
                    $('.name').next().removeClass().addClass('icon-ok-sign');
                }
            },
            beforeSend:function () {
                if (value == '') {
                    $('.name').next().removeClass().addClass('icon-remove-sign');
                    return false;
                }
            }
        })
    })
    // 密码验证
    $('.pass').blur(function () {
        var value = $(this).val();
        if (value.length < 6) {
            $('.pass').next().removeClass().addClass('icon-remove-sign');
        }else{
            $('.pass').next().removeClass().addClass('icon-ok-sign');
        }
    })
    $('.repass').blur(function () {
        var value = $(this).val();
        if (value.length < 6) {
            $('.repass').next().removeClass().addClass('icon-remove-sign');
        }else if(value == $('.pass').val()){
            $('.repass').next().removeClass().addClass('icon-ok-sign');
        }else{
            $('.repass').next().removeClass().addClass('icon-remove-sign');
        }
    })
    // 电话号码验证
    $('.mobile').blur(function () {
        var value = $(this).val();
        var phoneReg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
        if (value == '') {
            $('.mobile').next().removeClass().addClass('icon-remove-sign');
        }else if (phoneReg.test(value)) {
            $('.mobile').next().removeClass().addClass('icon-ok-sign');
        }else{
            $('.mobile').next().removeClass().addClass('icon-remove-sign');
        }
    })
    // 验证码验证
    $('.code').blur(function () {
        var value = $(this).val();
        if (value == '') {
            $('.getcode').next().removeClass().addClass('icon-remove-sign');
        }else{
            $('.getcode').next().removeClass().addClass('icon-ok-sign');
        }
    })
    
});