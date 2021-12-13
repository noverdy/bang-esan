document.getElementById('invite-button').onclick = () => {
	window.open(
		'https://discord.com/api/oauth2/authorize?client_id=846364862204084274&permissions=2151148608&scope=bot'
	)
}

const logo = document.getElementById('logo')
var logoLock = false
logo.onclick = () => {
	if (!logoLock) {
		logoLock = true
		logo.classList.add('logo-active')
		setTimeout(() => {
			logo.classList.remove('logo-active')
			logoLock = false
		}, 1000)
	}
}

window.onscroll = () => {
	const navbar = document.getElementById('navbar')
	if (
		document.documentElement.scrollTop <
		document.getElementById('logo').offsetTop
	) {
		navbar.style.backdropFilter = 'none'
		navbar.style.backgroundColor = 'transparent'
	} else {
		navbar.style.backdropFilter = 'blur(10px)'
		navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
	}
}

const main = () => {
	const navbar = document.getElementById('navbar')
	const paddingVertical = 20
	document.querySelectorAll('.section').forEach((section) => {
		section.style.paddingTop = `calc(${navbar.offsetHeight}px + ${paddingVertical}px)`
		section.style.paddingBottom = `${paddingVertical}px`
		section.style.height = '100vh'
	})
}

main()
