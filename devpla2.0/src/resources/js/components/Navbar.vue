<!-- ログイン画面　ヘッダーコンポーネント -->
<template>
	<nav class="navbar">
		<RouterLink class="navbar__brand" to="/">
			DevPla
		</RouterLink>
		<div class="navbar__menu">
			<div class="navbar__item">
				<button class="button">
					<i class="icon ion-md-add"></i>
						Submit a Dev
				</button>
			</div>
			<span class="navbar__item">
				UserName
			</span>
			<div class="navbar__item">
				<RouterLink class="button button--link" to="/login">
					Login / Register
				</RouterLink>
			</div>
		</div>
	</nav>
</template>
