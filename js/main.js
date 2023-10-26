gsap.registerPlugin(ScrollTrigger)
// Mobile Menu Burger
function burgerMenu() {
	const menu = document.querySelector('#mobile-menu')
	const burger = document.querySelector('#burger')
	const body = document.querySelector('body')

	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		menu.classList.toggle('hidden')
		menu.classList.toggle('flex')
		body.classList.toggle('overflow-hidden')
	})

	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.add('hidden')
			menu.classList.remove('flex')
			burger.classList.remove('active')
			body.classList.remove('overflow-hidden')
		}
	})
}
burgerMenu()
// Fixed menu
// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedHeader() {
	const nav = document.querySelector('.header')

	// тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
	const breakpoint = 10
	if (window.scrollY >= breakpoint) {
		nav.classList.add('active')
	} else {
		nav.classList.remove('active')
	}
}
window.addEventListener('scroll', fixedHeader)

// Swiper
const swiper = new Swiper('.swiper', {
	// Responsive breakpoints
	loop: true,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		// when window width is >= 640px
		992: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	speed: 1500,
	autoplay: {
		delay: 0,
	},
})

// Accordion
function accordion() {
	const items = document.querySelectorAll('.accordion-trigger')
	items.forEach((item) => {
		item.addEventListener('click', () => {
			const parent = item.parentNode
			console.log(parent)
			if (parent.classList.contains('active')) {
				parent.classList.remove('active')
			} else {
				// Если нужно что-бы можно было раскрывать несколько просто закоментируй все что находится между Start и End

				// Start
				document
					.querySelectorAll('.accordion-item')
					.forEach((child) => child.classList.remove('active'))
				// End

				parent.classList.add('active')
			}
		})
	})
}
accordion()

// Counter
//  Num counter
function numCounter(selector, number, time, step) {
	const counter = document.querySelector(selector)

	let res = 0

	const allTime = Math.round(time / (number / step))

	let interval = setInterval(() => {
		res = res + step

		if (res === number) {
			clearInterval(interval)
		}
		counter.innerHTML = res
	}, allTime)
}

// ДАННАЯ ФУНКЦИЯ МОЖЕТ БЫТЬ ВЫЗВАННА НЕОГРАНИЧЕННОЕ КОЛИЧЕСВТО РАЗ

// Первый аргумент - селектор, куда будем выводить результат ( с . если класс и с # если id). ПРИМЕР: '.num1' или '#num1'
// Второй аргумент - конечное значение которое будет показано на странице
// Третий аргумент - время анмации (миллисекунды)
// Четвертый аргумен - шаг анимации ( например добавляем по 1 или по 10 или по 100)

// Play animation on scroll
// Проиграть анимацию при скролле
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// Вместо section-3 пишем тот класс секции, при скролле до которой хотим проиграть анимацию
		if (entry.target.classList.contains('section-statistic')) {
			numCounter('#num-1', 16, 2000, 1)
			numCounter('#num-2', 250, 2000, 5)
			numCounter('#num-3', 18, 2000, 1)
			numCounter('#num-4', 10, 2000, 1)
		}
	})
})
document.querySelectorAll('section').forEach((section) => {
	observer.observe(section)
})

// Gsap
// Hero
gsap.from('#title', { y: 20, alpha: 0, delay: 0.1 })
gsap.from('#subtitle', { y: 20, alpha: 0, delay: 0.3 })
gsap.from('#hero-btn', { x: -50, alpha: 0, delay: 0.3, duration: 0.5 })
gsap.from('#hero-avatars', { alpha: 0, delay: 0.5, duration: 1 })
gsap.from('#hero-card', { rotate: 15, duration: 1, skew: 10 })
gsap.from('#hero-svg', { alpha: 0, delay: 1 })

const laptopScreen = window.matchMedia('(min-width: 992px)')
laptopScreen.matches &&
	gsap.to('#hero-circle', {
		scrollTrigger: {
			trigger: '#hero-circle',
			start: '-200px top',
			scrub: 1,
		},
		x: 100,
		y: -250,
		opacity: 0.5,
		scale: 0.8,
		skewX: -20,
	}),
	gsap.to('#hero-card', {
		scrollTrigger: {
			trigger: '#hero-card',
			start: 'top top',
			scrub: 1,
		},
		skewX: 20,
	}),
	gsap.from('#offer-title', {
		scrollTrigger: {
			trigger: '#offer',
			start: 'top top',
			scrub: 1,
		},
		y: -120,
		opacity: 0,
	}),
	gsap.to('#card-1', {
		scrollTrigger: {
			trigger: '#cards-1',
			start: '-200px center',
			scrub: 1,
		},
		skewX: 20,
		y: 100,
	}),
	gsap.from('#card-2', {
		scrollTrigger: {
			trigger: '#cards-1',
			start: '-200px center',
			scrub: 1,
		},
		skewX: 30,
		y: -20,
	}),
	gsap.to('#card-3', {
		scrollTrigger: {
			trigger: '#cards-2',
			start: '-200px center',
			scrub: 1,
		},
		skewX: 20,
		y: 100,
	}),
	gsap.from('#card-4', {
		scrollTrigger: {
			trigger: '#cards-2',
			start: '-200px center',
			scrub: 1,
		},
		skewX: 30,
		y: -20,
	})
