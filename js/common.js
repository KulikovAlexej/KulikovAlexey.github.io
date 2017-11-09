$(function() {
	// управление видимостью navbar
	$('#hamburger').click(function(){
		var navbar = $('aside nav');
		$(this).toggleClass('open');

		if(navbar.is(':visible')){
			navbar.slideUp(300);
		}
		else{
			navbar.slideDown(300);
		}
		
	})

	// Валидация для элементов формы
	$('.card_number input').change(function(){
		validate(this, /\d{4}/)
	});

	$('.back input').change(function(){
		validate(this, /\d{3}/)
	});

	$('#card_owner').change(function(){
		validate(this, /\b[a-zA-Z]{2,}\s[a-zA-Z]{2,}\b/)
	})

	// Как только в инпуте набирается 4 символа, то фокус переходит на следующий инпут
	$('.card_number input').on('input', function () {
		$item = $(this);
		$index = $item.index();
		$value = $item.val();
		// console.log($index, $value.length)
		if($value.length > 3){
			if($index < 3){
				$(this).next().focus();
			}
			else{
				// console.log(123);
				$item.blur()
			}
		}
		

	});

	function validate(elem, pattern){
		var res = elem.value.search(pattern);
		if (res == -1) elem.className = "invalid"; 
		else elem.className = "valid";
	}
	// alert($(window).width())
});
