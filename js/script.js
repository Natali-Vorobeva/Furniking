// let page = document.getElementsByClassName('.main__switch-block')
// let themeButton = document.getElementsByClassName('_circleGray');
// themeButton.onclick = function () {
// 	page.getElementsByClassName.toggle('_circleGray');
// 	page.getElementsByClassName.toggle('_circle');
// };


// page.classList.remove('circleGray');
// page.classList.add('circle');
// function changeImage('main__switch-block') {
// 	form.pic.src = form.imagename.value;
//  }
// function changeImage() {
// 	var temp = document.getElementById("pic1").src;
// 	document.getElementById("pic1").src = document.getElementById("pic2").src;
// 	document.getElementById("pic2").src = temp;
// }

// $(document).ready(function() {
// 	$('.homeNav__burger-4').click(function(event) {
// 		$('homeNav__burger-4,.homeNav__menu').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// });
$(document).ready(function () {
	$('.homeNav__burger-4').click(function (event) {
		$('.homeNav__burger-4,.homeNav__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});