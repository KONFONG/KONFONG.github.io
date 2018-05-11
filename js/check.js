/*
1，数字   	isNaN
2，中文  	/[\u4E00-\u9FA5\uF900-\uFA2D]/;
3，小数	 	/^\d{1,10}(\.\d{1,2})?$/; 
4，银行卡   
5，身份证	/([0]{18}[x|y]?)|([1]{18}[x|y]?)/i;
6，手机		/^(1[3|4|5|7|8][0-9]\d{8})$/i;

*/
//中文
var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
//密码 
var expr4 = /^[a-zA-Z0-9_@]{1,}$/;
//手机号
var expr3 = /^(1[3|4|5|7|8][0-9]\d{8})$/i;
//身份证
var expr = /([0]{18}[x|y]?)|([1]{18}[x|y]?)/i;
//银行卡号
var expr22 = /^(\d{19})$/i; 
var expr2 = /^(\d{16})$/i;
//用户名
var expr1 = /[\:\.\,\/\(\)\[\]\{\}\<\>\$\/\*\%\#\$\&\^]/i;
	//验证真实姓名
	function check_name(a,b) { 
        if (!reg.test(a)) {
            is_true(b, '必须是中文！');
            return false;
        }
        if (a == "") {
            is_true(b, '真实姓名不能为空！');
            return false;
        }

        if (a.length >16 || a.length < 2) {
            is_true(b, '真实姓名长度不正确！');
            return false;
        }
        is_true(b, '', 1);
    }
	//验证手机号
    function check_mobile(a,b) {
        if (a == "") {
            is_true(b, '手机号码不能为空！&nbsp;&nbsp;');
            return false;
        }

        if (!expr3.test(a))
        {
            is_true(b, '手机号码不正确！&nbsp;&nbsp;');
            return false;
        }
        is_true(b, '', 1);
    }
	//验证身份证
    function check_idCardNo(a,b) {
        if (a == "") {
            is_true(b, '身份证不能为空！');
            return false;
        }
        if (a.length > 18 || a.length < 18) {
            is_true(b, '身份证长度不正确！');
            return false;
        }
        if (expr22.test(a)) {
            is_true(b, '输入有误！');
            return false;
        }
        is_true(b, '', 1);
    }
	//验证银行
    function check_bankcode(a,b) {
        if (a == "") {
            is_true(b, '银行不能为空！');
            return false;
        }
        is_true(b, '', 1);
    }
	//验证银行卡号
    function check_bankcardNo(a,b) {
        if (a == "") {
            is_true(b, '银行卡号不能为空！');
            return false;
        }
        if (isNaN(Number(a))) {
            is_true(b, '银行卡号只能是数字！');
            return false;
        }
        if (expr22.test(a) || expr2.test(a))
        {
            is_true(b, '', 1);
        } else {
            is_true(b, '银行卡号长度不正确！');
            return false;
        }
    }

	function check_phone(a,b) {
        if (a == "") {
            is_true(b, '手机号码不能为空！&nbsp;&nbsp;');
            return false;
        }

        if (!expr3.test(a))
        {
            is_true(b, '手机号码不正确！&nbsp;&nbsp;');
            return false;
        }
        is_true(b, '', 1);
    }
	function check_old_code(a,b) {
        if (a == "") {
            is_true(b, '手机验证码不能为空！&nbsp;&nbsp;');
            return false;
        }

        if (a.length != 6)
        {
            is_true(b, '手机验证码为6位数字！&nbsp;&nbsp;');
            return false;
        }

        is_true(b, '', 1);
    }	
    function check_new_code(a,b) {
        if (a == "") {
            is_true(b, '手机验证码不能为空！&nbsp;&nbsp;');
            return false;
        }

        if (a.length != 6)
        {
            is_true(b, '手机验证码为6位数字！&nbsp;&nbsp;');
            return false;
        }

        is_true(b, '', 1);
    }	
	//1
	function check_username(a,b) {  
        if (a == "") {
            is_true(b, '昵称不能为空！&nbsp;&nbsp;');
            return false;
        }
		if(a.replace(/[^\x00-\xff]/g,"**").length > 20 || a.replace(/[^\x00-\xff]/g,"**").length <3) {
			is_true(b, '昵称长度必须3-20位！&nbsp;&nbsp;');
            return false;
		}
        if (expr1.test(a)) {
            is_true(b, '只能输入汉字、字母、数字或下划线！&nbsp;&nbsp;');
            return false;
        }
        is_true(b, '', 1);
    }
	function check_pwd(a,b) {
        if (a == "") {
            is_true(b, '密码不能为空！&nbsp;&nbsp;');
            return false;
        }
        if (a.length > 32 || a.length < 6) {
            is_true(b, '密码长度必须6-32位！&nbsp;&nbsp;');
            return false;
        }
        if (!expr4.test(a)) {
            is_true(b, '密码只能是字母,数字或下划线！&nbsp;&nbsp;');
            return false;
        }
		is_true(b, '', 1);
    }
    function check_password(a,b,c,d) {
		//a pwd   b repwd c pwd d repwd
        if (a == "") {
            is_true(c, '密码不能为空！&nbsp;&nbsp;');
            return false;
        }
        if (a.length > 32 || a.length < 6) {
            is_true(c, '密码长度必须6-32位！&nbsp;&nbsp;');
            return false;
        }
        if (!expr4.test(a)) {
            is_true(c, '密码只能是字母,数字或下划线！&nbsp;&nbsp;');
            return false;
        }
		is_true(c, '', 1);
		if(b !=''){
		if (b == a) {
			is_true(d, '', 1);
		}else{
            is_true(d, '密码不一致！&nbsp;&nbsp;');
            return false;
		}  
		}  
    }
    function check_repassword(a,b,c,d) {
        if (a == "") {
            is_true(c, '确认密码不能为空！&nbsp;&nbsp;');
            return false;
        }

        if (a.length > 32 || a.length < 6) {
            is_true(c, '密码长度必须6-32位！&nbsp;&nbsp;');
            return false;
        }

        if (!expr4.test(a)) {
            is_true(c, '密码只能是字母,数字或下划线！&nbsp;&nbsp;');
            return false;
        }

        if (a != b) {
            is_true(c, '密码不一致！&nbsp;&nbsp;');
            return false;
        }

        is_true(c, '', 1);
    }
	//信息来源
	function check_source_id(a,b) {
		if (a == "") {
            is_true(b, '信息来源不能为空！&nbsp;&nbsp;');
            return false;
        }
		is_true(b, '', 1);
	}

	//1
	
		function check_role(a,b) {  
            if (a == "") {
                is_true(b, '请选择身份！');
                return false;
            }
            is_true(b, '', 1);
        }
        function check_enterpriseName(a,b) {
			if (!reg.test(a)) {
                is_true(b, '必须是中文！');
                return false;
            }
            if (a == "") {
                is_true(b, '企业名称不能为空！');
                return false;
            }

            if (a.length > 50 || a.length < 2) {
                is_true(b, '企业名称长度不正确！');
                return false;
            }           
            is_true(b, '', 1);
        }

        function check_bankLicense(a,b) {
            if (a == "") {
                is_true(b, '开户行许可证号不能为空！');
                return false;
            }

            if (a.length > 50 || a.length < 2) {
                is_true(b, '开户行许可证号长度不正确！');
                return false;
            }

            if (!a.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{2,50}$/)) {
                is_true(b, '只能输入汉字，字母，数字或者下划线！');
                return false;
            }
            is_true(b, '', 1);
        }

        function check_legal(a,b) {
            if (a == "") {
                is_true(b, '法人姓名不能为空！');
                return false;
            }

            if (a.length > 4 || a.length < 2) {
                is_true(b, '法人姓名长度不正确！');
                return false;
            }


            if (!reg.test(a)) {
                is_true(b, '必须是中文！');
                return false;
            }
            is_true(b, '', 1);
        }
        function check_legalIdCardNo(a,b) {
            if (a == "") {
                is_true(b, '法人身份证不能为空！');
                return false;
            }

            if (a.length > 18 || a.length < 18) {
                is_true(b, '法人身份证长度不正确！');
                return false;
            }

            if (expr.test(a)) {
                is_true(b, '输入有误！');
                return false;
            }

            is_true(b, '', 1);
        }

        function check_bankcode(a,b) {
            if (a == "") {
                is_true(b, '银行不能为空！');
                return false;
            }
            is_true(b, '', 1);
        }
        function check_cardNo(a,b) {
            var expr444 = /^(\d{4})$/i;
            if (a == "") {
                is_true(b, '企业对公账户不能为空！');
                return false;
            }
            if (isNaN(Number(a))) {
                is_true(b, '企业对公账户只能是数字！');
                return false;
            }
            if (expr444.test(a))
            {
                is_true(b, '', 1);
            } else {
                is_true(b, '请输入企业对公账户后四位！');
                return false;
            }

        }
        function check_contact(a,b) {
            if (a == "") {
                is_true(b, '企业联系人不能为空！');
                return false;
            }
            if (a.length > 50 || a.length < 2) {
                is_true(b, '企业联系人长度不正确！');
                return false;
            }
            if (!a.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{2,50}$/)) {
                is_true(b, '只能输入汉字，字母，数字或者下划线！');
                return false;
            }
            is_true(b, '', 1);
        }

        function check_contactPhone(a,b) {
            if (a == "") {
                is_true(b, '手机号码不能为空！&nbsp;&nbsp;');
                return false;
            }

            if (!expr3.test(a))
            {
                is_true(b, '手机号码不正确！&nbsp;&nbsp;');
                return false;
            }
            is_true(b, '', 1);
        }
        function check_unifiedCode(a,b) {
            

            if (a.length > 50 || a.length < 2) {
                is_true(b, '统一社会信用代码长度不正确！');
                return false;
            }

            if (!a.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{2,50}$/)) {
                is_true(b, '只能输入汉字，字母，数字或者下划线！');
                return false;
            }
            is_true(b, '', 1);
        } 
        function check_orgNo(a,b) {
           

            if (a.length > 50 || a.length < 2) {
                is_true(b, '组织机构代码长度不正确！');
                return false;
            }

            if (!a.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{2,50}$/)) {
                is_true(b, '只能输入汉字，字母，数字或者下划线！');
                return false;
            }
            is_true(b, '', 1);
        }
        function check_taxNo(a,b) {
           

            if (a.length > 50 || a.length < 2) {
               is_true(b, '税务登记号长度不正确！');
                return false;
            }

            if (!a.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{2,50}$/)) {
                is_true(b, '只能输入汉字，字母，数字或者下划线！');
                return false;
            }
            is_true(b, '', 1);
        }
        function check_businessLincense(a,b) {


			if (a.length > 50 || a.length < 2) {
                is_true(b, '营业执照编号长度不正确！');
                return false;
            }

            if (!a.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{2,50}$/)) {
				is_true(b, '只能输入汉字，字母，数字或者下划线！');
                return false;
            }
            is_true(b, '', 1);
        }
		function check_creditCode(a,b) {
            if (a == "") {
                is_true(b, '机构信用代码不能为空！');
                return false;
				}

            if (a.length > 50 || a.length < 2) {
                is_true(b, '机构信用代码长度不正确！');
                return false;
            }

            if (!a.match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{2,50}$/)) {
                is_true(b, '只能输入汉字，字母，数字或者下划线！');
                return false;
            }
            is_true(b,'', 1);
        }
		//1
	
	var iconSucceed = '<i class="iconfont icon">&#xe620;</i>'
    var iconFail = '<i class="iconfont icon" style="color:#ff6666;">&#xe63a;</i>'

    function succeed(msg) {
        layer.open({
            area: ['auto', 'auto'],
            shade: [0.6, '#000'],
            type: 1,
            skin: 'a', //样式类名
            anim: 2,
            shadeClose: true, //开启遮罩关闭
            title: '成功状态',
            content: iconSucceed + msg,
            closeBtn: 1,
            resize: false,
            fixed: true,
            move: false,
            scrollbar: false,
            btnAlign: 'c',
            btn: "确认"
        });
    }
	function checkname(a,b) { 
		if (a == "") {
			tip('真实姓名不能为空！',2);
            return false;
        }

        if (!reg.test(a)) {
			tip('真实姓名必须是中文！',2);
            return false;
        }
        
        if (a.length >16 || a.length < 2) {
			tip('真实姓名长度不正确！',2);
            return false;
        }
    }
	//验证手机号
    function checkmobile(a,b) {
        if (a == "") {
			tip('手机号码不能为空！&nbsp;&nbsp;',2);
            return false;
        }

        if (!expr3.test(a))
        {
			tip('手机号码不正确！&nbsp;&nbsp;',2);
            return false;
        }
    }

    function fail(msg) {
        layer.open({
            area: ['auto', 'auto'],
            shade: [0.6, '#000'],
            type: 1,
            skin: 'b', //样式类名
            anim: 2,
            shadeClose: true, //开启遮罩关闭
            title: '失败状态',
            content: iconFail + msg,
            closeBtn: 1,
            resize: false,
            fixed: true,
            move: false,
            btnAlign: 'c',
            scrollbar: false,
            btn: "确认"
        });
    }
    
	function is_true(id, res, type) {
        if (type == 1) {
            var color = '#199ED8';
        } else {
            var color = '#ff6666';
        }
        $(id).html(res);
        $(id).css('background-color', color);

    }
