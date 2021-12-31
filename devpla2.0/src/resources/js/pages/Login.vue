<!-- ログイン周辺機能 -->
<template>
	<div class="container--small">
		<ul class="tab">
			<!-- Login挿入時、１を与える -->
			<li 
				class="tab__item"
				:class="{'tab__item--active': tab === 1 }"
				@click="tab = 1"
			>Login</li>
			<!-- Login挿入時、２を与える -->
			<li
				class="tab__item"
				:class="{'tab__item--active': tab === 2 }"
				@click="tab = 2"
			>Register</li>
		</ul>
		<!-- 下記部分が	tabの値になる(
				//ログ確認各コンテンツに移動) -->
		<!-- ログインページ -->
		<div class="panel" v-show="tab === 1">
			<form class="form" @submit.prevent="login">
				<label for="login-email">Email</label>
				<input type="text" class="form__item" id="login-email" v-model="loginForm.email">
				<label for="login-password">Password</label>
				<input type="password" class="form__item" id="login-password" v-model="loginForm.password">
				<div class="form__button">
					<button type="submit" class="button button--inverse">login</button>
				</div>
			</form>
		</div>
		<!-- 会員登録ページ -->
		<div class="panel" v-show="tab === 2">
			<form class="form" @submit.prevent="register">
				<label for="username">Name</label>
				<input type="text" class="form__item" id="username" v-model="registerForm.name">
				<label for="email">Email</label>
				<input type="text" class="form__item" id="email" v-model="registerForm.email">
				<label for="password">Password</label>
				<input type="password" class="form__item" id="password" v-model="registerForm.password">
				<label for="password-confirmation">Password (confirm)</label>
				<input type="password" class="form__item" id="password-confirmation" v-model="registerForm.password_confirmation">
				<div class="form__button">
					<button type="submit" class="button button--inverse">register</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				tab: 1,
				loginForm: {
					email: '',
					password: ''
				},
				registerForm: {
					name: '',
					email: '',
					password: '',
					password_confirmation: ''
				}
			}
		},
		methods: {
			login () {
				alert("ログインされました【テスト表示】")	
			},
			register () {
				alert("登録されました【テスト表示】")
			}
		}
	}
</script>
