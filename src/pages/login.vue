<template>
<div class="hello">
	<transition name="fade">
		<div v-show="isShow">
			<img src="../assets/login/logo.svg" width="83" height="83" alt="logo" class="logo" v-bind:class="{ rotate: isLoading }">
			<h2 class="title">{{ msg }}</h2>
		</div>
	</transition>
	<div class="form" v-bind:class="{ active: !isShow }">
		<div class="form-group">
			<label class="control-label">请输入用户名：</label>
			<input type="text" class="form-control" @focus="focus" @blur="blur" placeholder="邮箱/手机号码">
			<span class="clear" @click="clean">&times;</span>
		</div>
		<div class="form-group">
			<label class="control-label">请输入密码：</label>
			<input type="password" class="form-control" @focus="focus" @blur="blur" placeholder="密码">
			<span class="clear" @click="clean">&times;</span>
		</div>
		<button class="btn btn-primary" type="button" @click="login">登录</button>
	</div>
</div>
</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			msg: 'user login in',
			isShow: true,
			isLoading: false,
		}
	},
	// 在 `methods` 对象中定义方法
	methods: {
		focus: function (e) {
			this.isShow = false;
			var _target = $(e.target);
			if (_target.val() !== "") {
				_target.siblings(".clear").addClass("showClean");
			}
		},
		blur: function () {
			this.isShow = true
		},
		login: function () {
			this.isShow = true;
			this.isLoading = true;
			this.msg = "loading...";
			var _this = this;
			setTimeout(function () {
				_this.isLoading = false;
				_this.msg = "登录帐户/密码错误";
			}, 2000);
		},
		clean: function (e) {
			$(e.target).removeClass("showClean").parent(".form-group").find(".form-control").val("");
		}
	}
}
</script>
<style scoped lang='less'>
// 一些动画
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
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
