let slides = document.querySelectorAll('.slidesUnitWrapper');
slides = Array.from(slides);

console.log(slides);

totalSlides = slides.length -1;

cont = 0;

function nextSlide() {
	cont++;
	slides.forEach(function(el) {
		if(cont <= totalSlides) {
			el.style.transform = 'translateX(-' + cont + '00%)';
		} else {
			cont = 0;
			el.style.transform = 'translateX(-' + cont + '00%)';
		}
	})
};

function prevSlide() {
	cont--;
	slides.forEach(function(el) {
		if(cont >= 0) {
			el.style.transform = 'translateX(-' + cont + '00%)';
		} else {
			cont = totalSlides;
			el.style.transform = 'translateX(-' + cont + '00%)';
		}
	})
};

document.querySelector('#rightArrow').addEventListener('click', nextSlide);
document.querySelector('#leftArrow').addEventListener('click', prevSlide);

let automateSlides = setInterval(nextSlide, 5000);

let slidesHover = document.querySelector('.heroSliderContainer');

slidesHover.addEventListener('mouseover', function() {
	clearInterval(automateSlides);
	console.log('pause');
});

slidesHover.addEventListener('mouseleave', function() {
	automateSlides = setInterval(nextSlide, 5000);
	console.log('play');
});