$(document).ready(function(){

	// Start Back to Top
		$(".btn-backtotops").hide();
		$(window).scroll(function(){
			let getscrolltop = $(this).scrollTop();
			// console.log(getscrolltop);

			if(getscrolltop >= 400){
				$(".btn-backtotops").fadeIn(1000);
			}else{
				$(".btn-backtotops").fadeOut(500);
			}
		})
	// End Back to Top

	// Start Header

		// Start nav

		// for button
		$(".navbuttons").click(function(){
			$(this).toggleClass("crossxs");
		});

		// for nav
		$(window).scroll(function(){
			let getscrolltop=$(this).scrollTop();
			console.log(getscrolltop);

			if(getscrolltop >= 200){
				$(".navbar").addClass("navmenus");
			}else{
				$(".navbar").removeClass("navmenus");
			}
		});

		// End nav

	// End Header

	// Start properties Section

	$(".propertylists").click(function(){

		// for active item

		$(this).addClass("activeitems").siblings().removeClass("activeitems");
		// $(this).addClass("activeitems");
		// $(this).siblings().removeClass("activeitems");


		// for filter

		let getattvalue = $(this).attr("data-filter");
		// console.log(getattvalue);

		if(getattvalue === "all"){
			$(".filters").show("slide",500);
		}else{

			$(".filters").hide();

			$(".filters").not("."+getattvalue).hide("slide",500);
			
			$(".filters").filter("."+getattvalue).show("slide",500);

		};


	});


	// For image overlay (or) lightbox2
	lightbox.option({
      showImageNumberLabel:false
    });

	// End properties Section


	// Start Adv Section

		$(window).scroll(function(){
			let getscrolltop = $(this).scrollTop();

			// console.log(getscrolltop);

			if(getscrolltop >= 900){
				$(".advimages").addClass("fromlefts");
				$(".advtexts").addClass("fromrights");
			}else{
				$(".advimages").removeClass("fromlefts");
				$(".advtexts").removeClass("fromrights");
			};


		});

	// End Adv Section

	// Start Footer Section
	const getyear = $("#getyear");
	const getfullyear = new Date().getUTCFullYear();
	getyear.text(getfullyear);
	// End Footer Section




});