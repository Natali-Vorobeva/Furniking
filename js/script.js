// let page = document.getElementsByClassName('main__switch-block')
// let themeButton = document.getElementsByClassName('_circleGray');
// themeButton.onclick = function () {
// 	page.getElementsByClassName.toggle('_circleGray');
// 	page.getElementsByClassName.toggle('_circle');
// };


// page.classList.remove('_circleGray');
// page.classList.add('_circle');
// function changeImage() {
// 	form.pic.src = form.imagename.value;
//  }
// function changeImage() {
// 	let temp = document.getElementById("pic1").src;
// 	document.getElementById("pic1").src = document.getElementById("pic2").src;
// 	document.getElementById("pic2").src = temp;
// }

// $(document).ready(function() {
// 	$('.homeNav__burger-4').click(function(event) {
// 		$('homeNav__burger-4,.homeNav__menu').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// });

function changeImage() {
    var temp = document.getElementById("pic1").src;
    document.getElementById("pic1").src = document.getElementById("pic2").src;
    document.getElementById("pic2").src = temp;
}




$(document).ready(function () {
	$('.homeNav__burger-4').click(function (event) {
		$('.homeNav__burger-4,.homeNav__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
let body = document.querySelector('body');
if (isMobile.any()) {
	body.classList.add('touch');
	let arrow = document.querySelectorAll('.arrow');
	for (i = 0; i < arrow.length; i++) {
		let thisLink = arrow[i].previousElementSibling;
		let subMenu = arrow[i].nextElementSibling;
		let thisArrow = arrow[i];

		thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function () {
			subMenu.classList.toggle('open');
			thisLink.classList.toggle('active');
		})
	}
} else {
	body.classList.add('mouse');
}