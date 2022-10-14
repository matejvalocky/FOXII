
(function(){
//If you want to include more images, add the link name and URL of the image in the array list below.
	let images_list = [
		{"url":"./img-preview-sw/ukazka-softveru-foxii1-min.png","name":"ukazka-softveru-foxii1-min.png","link":""},
		{"url":"./img-preview-sw/ukazka-softveru-foxii2-min.png","name":"ukazka-softveru-foxii2-min.png","link":""},
		{"url":"./img-preview-sw/ukazka-softveru-foxii3-min.png","name":"ukazka-softveru-foxii3-min.png","link":""},
		{"url":"./img-preview-sw/ukazka-softveru-foxii4-min.png","name":"ukazka-softveru-foxii4-min.png","link":""},
		{"url":"./img-preview-sw/ukazka-softveru-foxii5-min.png","name":"ukazka-softveru-foxii5-min.png","link":""}
	];

	let slider_id = document.querySelector("#hcg-slider-1");

	// append all images
	let dots_div = "";
	let images_div = "";
	for (let i = 0; i < images_list.length; i++) {
		// if no link without href="" tag
		let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
		images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:block"':'')+'>'+
						'<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
					 '</a>';
		dots_div += '<span class="hcg-slide-dot'+(i === 0 ? ' dot-active':'')+'" data-id="'+i+'"></span>';
	}
	slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
	slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;

	let slide_index = 0;

	let images = slider_id.querySelectorAll(".hcg-slides");
	let dots = slider_id.querySelectorAll(".hcg-slide-dot");
	function showSlides() {
		if (slide_index > images.length-1) {
			slide_index = 0;
		}
		if (slide_index < 0) {
			slide_index = images.length-1;
		}
		for (let i = 0; i < images.length; i++) {
			images[i].style.display = "none";
			dots[i].classList.remove("dot-active");
			if (i == slide_index) {
				images[i].style.display = "block";
				dots[i].classList.add("dot-active");
			}
		}
	}

	function dot_click(event) {
		slide_index = event.target.dataset.id;
		showSlides();
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener("click", dot_click, false);
	}
	setInterval(function(){
		slide_index++;
		showSlides();
	}, 5000);

})();
