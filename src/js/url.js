import {get} from "./api";
// export default {
// 	URL: 'http://39.108.37.60:8008/',//主服务器
// 	//      http://112.74.181.229:8001/  测试
// 	//		http://39.108.37.60:8008/   生产
// 	QIANDUODUO: 'http://39.108.37.60:8008',//乾多多返回接口
// 	MONEYNONE: 'https://register.moneymoremore.com/loan/toloanregisterbind.action ',//前往乾多多的开户接口
// 	//    	https://register.moneymoremore.com/loan/toloanregisterbind.action   正式
// 	//    	http://test.moneymoremore.com:88/main/loan/toloanregisterbind.action   测试

// 	ALIYUNCS: 'http://xinrongzhontian-p2p.oss-cn-shenzhen.aliyuncs.com/',//图片接收拼
// 	MONEYNTWO: 'https://auth.moneymoremore.com/loan/toloanauthorize.action',//前往乾多多的授权接口
// 	// 		https://auth.moneymoremore.com/loan/toloanauthorize.action 正式
// 	//      http://test.moneymoremore.com:88/main/loan/toloanauthorize.action   测试


// 	MONEYNTHREE: 'https://recharge.moneymoremore.com/loan/toloanrecharge.action',//前往乾多多的充值接口
// 	//      https://recharge.moneymoremore.com/loan/toloanrecharge.action     正式
// 	//      http://test.moneymoremore.com:88/main/loan/toloanrecharge.action   测试

// 	MONEYNFOUR: 'https://withdrawals.moneymoremore.com/loan/toloanwithdraws.action',//前往乾多多的提现接口
// 	//		https://withdrawals.moneymoremore.com/loan/toloanwithdraws.action  正式
// 	//      http://test.moneymoremore.com:88/main/loan/toloanwithdraws.action  测试

// 	MONEYNFIVE: 'https://transfer.moneymoremore.com/loan/loan.action',//前往乾多多的转账接口
// 	//    	https://transfer.moneymoremore.com/loan/loan.action   正式
// 	//		http://test.moneymoremore.com:88/main/loan/loan.action  测试
// 	QUERY_PASSWORD: 'message/security_find_password',//获取设置密码问题
// 	SECURITY_PASSWORD: 'message/security_set_password',//通过问题找回密码
// 	FREE_PASSWORD: "member/free_password",//修改免密码支付
// 	BANKCARD_NAME: 'member/bankcard_name',//获取银行卡名称
// 	CONTRACT: 'api/contract',//获取合同
// 	PROJECT_CONTRACT: 'api/project-contract/',//借款人合同
// 	QUESTION: 'message/security_question',//问答接口
// 	BACKCARD: 'common/backcard',//银行卡
// 	BANK_PROVINCE: 'common/bank_province',//省
// 	BANK_CITY: 'common/bank_city',//市
// 	URLSET: 'api/pc-loan-apply/',//借款接口(没登录)
// 	URLSETTWO: 'api/loan/',//借款接口（登录）
// 	URLPASSWORD: "member/reset_password",//修改密码接口
// 	URLYZM: "common/send_verify_code",//验证码接口
// 	INDEX_DATA: "member/index_data",//首页数据
// 	AGLOBAL_DATA: "aglobal_data",//全局数据
// 	PREPROJECT: 'api/preproject/',//标预告列表
// 	NEWPROJECT: 'api/newproject/',//新标速递列表
// 	TYBPROJECT: "api/tybproject",//体验标列表
// 	ARTIVLELISTONE: 'api/article/?article_type__type_name=行业资讯',//行业资讯列表
// 	ARTIVLELISTTWO: 'api/article/?article_type__type_name=站内公告',//站内公告列表
// 	ARTIVLELISTTHREE: "api/article/?article_type__type_name=政策法规",//法律法规
// 	ARTICLE: "api/article/",//行业资讯行情
// 	REGISTER: "member/register/",//注册接口
// 	LOGIN: "login/",//登录
// 	PROJECT_MAIN: "api/project-detail",//标详情加token
// 	PROJECT_DETAIL: "api/project_main",//标详情免token
// 	INVESTMENT_LIST: "investment/investment_list",//投资列表
// 	MY_INDEX_DATA: 'member/my_index_data',//我的页面
// 	ENCODEURL: "common/encodeurl",//乾多多后台encodeurl
// 	PAYRETURN: "pay/payreturn",//乾多多前端通知网址
// 	SIGNATURE: 'pay/signature',//乾多多秘钥
// 	MONEY_IN_OUT: "pay/money_in_out",//乾多多充值提现获取订单号
// 	PAYINVEST: 'pay/invest/',//投资的转账列表
// 	PAY_INVEST: 'pay/pay_invest',//支付的转账列表
// 	CONTRACT_INVESTMENT:'investment/contract_investment',//合同接口
// 	PAY_REPAY: 'pay/repay',//还款的正常转账列表
// 	ADPAY_REPAY: "pay/advance_repay",//获取提前还款转账列表
// 	ISSUE_DATAILS: "issue/issue_details",//回款计划
// 	MENBER_INFO: 'member/info/',//获取用户信息
// 	QUERY_BALANCE: 'pay/query_balance',//刷新余額
// 	MODIFY_NAME: 'member/modify_name',//修改姓名
// 	MY_LOAN: 'api/my-loan/',//还款计划(我的借款)
// 	MY_INVESTMENT: 'api/my-investment/',//回款计划   我的投资数据
// 	MY_RECOMMEND: 'api/recommendproject/',//推荐项目
// 	MODIFY_PASSWORD: 'member/modify_password/',//修改密码（传入手机号码旧密码新密码）
// 	MODIFY_MOBILE: 'member/modify_mobile',//修改手机号码
// 	MEMBER_ID_CARD: "member/member_id_card",//身份证验证接口
// 	SUGGESTION: 'message/suggestion',//意见反馈

// 	MY_PRE_INVESTMENT: "api/my-pre-investment/",//获取预投数据
// 	REPAY_AMOUNT: 'pay/get_repay_amount',//获取还款金额

// 	BANK_CARD: 'member/bank_card',//绑定银行卡
// 	INVESTMENT_STATISTICS: 'investment/invest_summary',//投资统计或我的账户中我的投资
// 	BORROW_STATISTICS: 'loan/loan_summary',//借款统计或我的账户中我的借款
// 	MEMBER_ACCOUNT: 'member/finance',//会员账户
// 	CANCEL_LOAN: "loan/cancel_loan",//撤销借款
// 	CANCEL_INVEST: "pay/cancel_invest",//撤销投资
// 	MEMBER_TYPE: 'api/member/',//交易账单刷选
// 	BROKER_BOMUS: 'member/broker_bonus',//邀请奖励
// 	CHECK_PROJECT: 'investment/check_project_password',//开锁密码

// }


// export default {
// 	QIANDUODUO       : function(paramobj){return get('api/', paramobj)},//乾多多返回接口
// 	CHECK_PROJECT    : function(paramobj){return get('investment/check_project_password', paramobj)},//邀请奖励
// 	BROKER_BOMUS     : function(paramobj){return get('member/broker_bonus', paramobj)},//开锁密码
// 	MY_INVESTMENT    : function(paramobj){return get('api/my-investment/', paramobj)},//回款计划   我的投资数据
// }