<style scoped lang='less'>
.hello {
    .my-resume {
        .flex-item {
            text-align: center;
            .flex-item {
                padding: 12px 16px;
            }
            .flex-item:active {
                background-color: #f8f8f9;
            }
            label {
                display: block;
                font-size: 12px;
            }
        }
    }
}
</style>

<template>
<div class="hello">
	<div class="content-box">
		<div class="panel">
			<div class="panel-hd">快速入口</div>
			<div class="panel-bd">
				<div class="flex-box my-resume">
					<div class="flex-item flex-box flex-box-vertical">
						<div class="flex-item"><img src="../../assets/home/icon_delivery_big.svg" alt="" height="140" width="72"><label>小标题</label></div>
						<div class="flex-item" style="flex:none;"><img src="../../assets/home/icon_file.svg" alt="" height="48" width="48"><label>小标题</label></div>
					</div>
					<div class="flex-item" style="flex-grow:2;">
						<div class="flex-box">
							<div class="flex-item"><img src="../../assets/home/icon_cogs.svg" alt="" height="48" width="48"><label>小标题</label></div>
							<div class="flex-item"><img src="../../assets/home/icon_user.svg" alt="" height="48" width="48"><label>小标题</label></div>
						</div>
						<div class="flex-box">
							<div class="flex-item"><img src="../../assets/home/icon_updown.svg" alt="" height="48" width="48"><label>小标题</label></div>
							<div class="flex-item"><img src="../../assets/home/icon_box.svg" alt="" height="48" width="48"><label>小标题</label></div>
						</div>
						<div class="flex-box">
							<div class="flex-item"><img src="../../assets/home/icon_file.svg" alt="" height="48" width="48"><label>小标题</label></div>
							<div class="flex-item"><img src="../../assets/home/icon_file.svg" alt="" height="48" width="48"><label>小标题</label></div>
						</div>
					</div>
				</div>
			</div>
			<div class="panel-ft">
				<div class="list list-link">
					<div class="list-bd">查看更多</div>
					<div class="list-ft"></div>
				</div>
			</div>
		</div>
		<div class="card text-center"><img src="../../assets/home/icon_add.svg" alt="" height="32" width="32"><br>添加项目</div>
		<div class="card text-center"><img src="../../assets/home/icon_add.svg" alt="" height="32" width="32"><br>添加项目</div>
		<div class="card text-center"><img src="../../assets/home/icon_add.svg" alt="" height="32" width="32"><br>添加项目</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			msg: '管理后台',
		}
	},
	methods: {}
}
</script>
