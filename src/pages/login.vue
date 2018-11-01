<template>
<div class="hello">
	<transition name="scale">
		<div v-show="isShow">
			<img src="../assets/login/logo.svg" width="83" height="83" alt="logo" class="logo" v-bind:class="{ rotate: isLoading }">
			<h2 class="title">{{ msg }}</h2>
		</div>
	</transition>
	<!-- start 登录 -->
	<div class="form" v-bind:class="{ active: !isShow }" v-if="showLogin">
		<div class="form-group">
			<label class="control-label">请输入帐号：</label>
			<input type="text" class="form-control" @focus="focus" @blur="blur" placeholder="邮箱/手机号码" id="userName" autocomplete="off">
			<span class="clear" @click="clean">&times;</span>
		</div>
		<div class="form-group">
			<label class="control-label">请输入密码：</label>
			<input type="password" class="form-control" @focus="focus" @blur="blur" placeholder="密码" id="password" autocomplete="off">
			<span class="clear" @click="clean">&times;</span>
		</div>
		<div class="form-group"><button class="btn btn-primary" type="button" @click="login">登录</button></div>
		<div class="flex-box" style="padding-top:20px;">
			<div class="flex-item">
				<span @click="changePassword">重置密码</span>
			</div>
			<div class="flex-item text-right">
				<span @click="reg">注册</span>
			</div>
		</div>
	</div>
	<!-- end 登录 -->
	<!-- start 重置密码 -->
	<div class="form" v-bind:class="{ active: !isShow }" v-if="showChangePassword">
		<div class="form-group">
			<label class="control-label">请输入帐号：</label>
			<input type="text" class="form-control" @focus="focus" @blur="blur" placeholder="邮箱/手机号码" id="userName2" autocomplete="off">
			<span class="clear" @click="clean">&times;</span>
		</div>
		<div class="form-group">
			<div class="flex-box">
				<div class="flex-item"><input type="text" class="form-control" placeholder="验证码" id="yzm" autocomplete="off" @focus="focus" @blur="blur"></div>
				<div class="flex-item" style="padding-left:8px;"><button class="btn btn-success" type="button">获取验证码</button></div>
			</div>
		</div>
		<div class="form-group">
			<button class="btn btn-primary" type="button">确定</button></div>
		<div class="flex-box">
			<div class="flex-item">
				<span @click="cancel">取消</span>
			</div>
			<div class="flex-item text-right">

			</div>
		</div>
	</div>
	<!-- end 重置密码 -->
	<!-- start 注册 -->
	<div class="form" v-if="showReg">
		<div class="form-group">
			<label class="control-label">请输入帐号：</label>
			<input type="text" class="form-control" @focus="focus" @blur="blur" placeholder="邮箱/手机号码" id="userName2" autocomplete="off">
			<span class="clear" @click="clean">&times;</span>
		</div>
		<div class="form-group">
			<label class="control-label">请设置密码：</label>
			<input type="password" class="form-control" @focus="focus" @blur="blur" placeholder="邮箱/手机号码" id="password2" autocomplete="off">
			<span class="clear" @click="clean">&times;</span>
		</div>
		<div class="form-group">
			<div class="flex-box">
				<div class="flex-item"><input type="text" class="form-control" placeholder="验证码" id="yzm" autocomplete="off" @focus="focus" @blur="blur"></div>
				<div class="flex-item" style="padding-left:8px;"><button class="btn btn-success" type="button">获取验证码</button></div>
			</div>
		</div>
		<div class="form-group">
			<button class="btn btn-primary" type="button">注册</button></div>
		<div class="flex-box">
			<div class="flex-item">
				<span @click="cancel">取消</span>
			</div>
			<div class="flex-item text-right">

			</div>
		</div>
	</div>
	<!-- end 注册 -->
</div>
</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			msg: '后台管理登录',
			isShow: true, //是否显示logo
			isLoading: false, //是否给logo添加旋转的loading样式
			showLogin: true, //是否显示登录框
			showChangePassword: false, //是否显示重置密码表单
			showReg: false, //是否显示注册表单
		}
	},
	methods: { //用户名或者密码框获取焦点事件

		focus: function (e) {
			this.isShow = false;
			var _target = $(e.target);
			if (_target.val() !== "") {
				_target.siblings(".clear").addClass("showClean");
			}
		}, //密码框或者用户名文本框市区焦点事件
		blur: function (e) {
			this.isShow = true;
			var _this = this;
			if ($("#userName").val() == "" || $("#password").val() == "") {
				_this.msg = "请输入帐号和密码";
				return;
			}
			$(e.target).siblings(".clear").removeClass("showClean");
		}, //登录按钮点击事件
		login: function () {
			var _this = this;
			if ($("#userName").val() == "" || $("#password").val() == "") {
				_this.msg = "请输入帐号和密码";
				return;
			}
			_this.isShow = true;
			_this.isLoading = true;
			_this.msg = "loading...";
			setTimeout(function () {
				_this.isLoading = false;
				_this.msg = "登录帐户/密码错误";
			}, 2000);
			setTimeout(function () {
				_this.$router.push({
					path: "/tabs/home"
				});
			}, 5000);
		}, //清除用户名或者密码事件
		clean: function (e) {
			$(e.target).removeClass("showClean").parent(".form-group").find(".form-control").val("").focus();
		},
		changePassword: function () {
			this.showChangePassword = true;
			this.showLogin = false;
			this.msg = "重置密码";
		},
		reg: function () {
			this.showLogin = false;
			this.showReg = true;
			this.msg = "注册帐号";
		},
		cancel: function () {
			this.showChangePassword = false;
			this.showReg = false;
			this.showLogin = true;
			this.msg = "后台管理登录";
		}
	}
}
</script>
<style scoped lang='less'>
// 缩放动画
.scale-enter-active,
.scale-leave-active {
    transition: all 0.5s;
}
.scale-enter,
.scale-leave-to {
    opacity: 0;
    transform: scale(0);
}
@keyframes rotate {
    from {
        transform-origin: center;
        transform: rotate(0);
    }
    to {
        transform-origin: center;
        transform: rotate(360deg);
    }
}
.rotate {
    animation-name: rotate;
}
// end 一些动画
.hello {
    background: url("../assets/login/bg_top.jpg") left top / 100% auto no-repeat;
    padding-top: 50px;
    position: relative;
    &:after {
        content: "@测试公司 2018";
        position: absolute;
        bottom: 16px;
        opacity: 0.4;
        left: 50%;
        font-size: 12px;
        transform: translateX(-50%);
    }
    .logo {
        display: block;
        margin: 0 auto 8px;
        width: 79px;
        height: 79px;
        box-sizing: content-box;
        animation-iteration-count: infinite;
        animation-duration: 1s;
        animation-fill-mode: both;
    }
    .title {
        margin: 0 auto 15px;
        text-align: center;
        font-size: 20px;
        color: #000;
    }
    .form {
        background-color: #FFF;
        border-radius: 16px;
        box-shadow: 0 5px 30px rgba(0, 0, 0, .175);
        padding: 24px;
        position: absolute;
        left: 16px;
        right: 16px;
        top: 185px;
        transition: all 0.2s;
        transition-delay: 0.3s;
        &.active {
            transform: translateY(-135px);
        }
        .form-group {
            position: relative;
            .clear {
                position: absolute;
                width: 24px;
                height: 24px;
                background-color: #999;
                color: #FFF;
                text-align: center;
                line-height: 24px;
                right: 10px;
                bottom: 12px;
                border-radius: 100%;
                transition: transform 0.2s;
                transform: scale(0);
                &.showClean {
                    transform: scale(1);
                }
                &:active {
                    opacity: 0.7;
                }
            }
        }
    }
}
</style>
