
	
	document.querySelector(".largeGrid").click(function(){											
    document.querySelector(this).querySelector('a').classList.add('active');
    document.querySelector('.smallGrid a').removeClass('active');
    
    document.querySelector('.product').classList.add('large').each(function(){											
		});						
		setTimeout(function(){
			document.querySelector('.info-large').show();	
		}, 200);
		setTimeout(function(){

			document.querySelector('.view_gallery').trigger("click");	
		}, 400);								
		
		return false;				
	});
	
	document.querySelector(".smallGrid").click(function(){		        
    document.querySelector(this).querySelector('a').classList.add('active');
    document.querySelector('.largeGrid a').removeClass('active');
    
		document.querySelector('div.product').removeClass('large');
		document.querySelector(".make3D").removeClass('animate');	
    document.querySelector('.info-large').fadeOut("fast");
		setTimeout(function(){								
				document.querySelector('div.flip-back').trigger("click");
		}, 400);
		return false;
	});		
	
	document.querySelector(".smallGrid").click(function(){
		document.querySelector('.product').removeClass('large');			
		return false;
	});
  
  document.querySelector('.colors-large a').click(function(){return false;});
	
	
	document.querySelector('.product').each(function(i, el){					

		// Lift card and show stats on Mouseover
		document.querySelector(el).querySelector('.make3D').hover(function(){
				document.querySelector(this).parent().css('z-index', "20");
				document.querySelector(this).classList.add('animate');
				document.querySelector(this).querySelector('div.carouselNext, div.carouselPrev').classList.add('visible');			
			 }, function(){
				document.querySelector(this).removeClass('animate');			
				document.querySelector(this).parent().css('z-index', "1");
				document.querySelector(this).querySelector('div.carouselNext, div.carouselPrev').removeClass('visible');
		});	
		
		// Flip card to the back side
		document.querySelector(el).querySelector('.view_gallery').click(function(){	
			
			document.querySelector(el).querySelector('div.carouselNext, div.carouselPrev').removeClass('visible');
			document.querySelector(el).querySelector('.make3D').classList.add('flip-10');			
			setTimeout(function(){					
			document.querySelector(el).querySelector('.make3D').removeClass('flip-10').classList.add('flip90').querySelector('div.shadow').show().fadeTo( 80 , 1, function(){
					document.querySelector(el).querySelector('.product-front, .product-front div.shadow').hide();															
				});
			}, 50);
			
			setTimeout(function(){
				document.querySelector(el).querySelector('.make3D').removeClass('flip90').classList.add('flip190');
				document.querySelector(el).querySelector('.product-back').show().querySelector('div.shadow').show().fadeTo( 90 , 0);
				setTimeout(function(){				
					document.querySelector(el).querySelector('.make3D').removeClass('flip190').classList.add('flip180').querySelector('div.shadow').hide();						
					setTimeout(function(){
						document.querySelector(el).querySelector('.make3D').css('transition', '100ms ease-out');			
						document.querySelector(el).querySelector('.cx, .cy').classList.add('s1');
						setTimeout(function(){document.querySelector(el).querySelector('.cx, .cy').classList.add('s2');}, 100);
						setTimeout(function(){document.querySelector(el).querySelector('.cx, .cy').classList.add('s3');}, 200);				
						document.querySelector(el).querySelector('div.carouselNext, div.carouselPrev').classList.add('visible');				
					}, 100);
				}, 100);			
			}, 150);			
		});			
		
		// Flip card back to the front side
		document.querySelector(el).querySelector('.flip-back').click(function(){		
			
			document.querySelector(el).querySelector('.make3D').removeClass('flip180').classList.add('flip190');
			setTimeout(function(){
				document.querySelector(el).querySelector('.make3D').removeClass('flip190').classList.add('flip90');
		
				document.querySelector(el).querySelector('.product-back div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
					document.querySelector(el).querySelector('.product-back, .product-back div.shadow').hide();
					document.querySelector(el).querySelector('.product-front, .product-front div.shadow').show();
				});
			}, 50);
			
			setTimeout(function(){
				document.querySelector(el).querySelector('.make3D').removeClass('flip90').classList.add('flip-10');
				document.querySelector(el).querySelector('.product-front div.shadow').show().fadeTo( 100 , 0);
				setTimeout(function(){						
					document.querySelector(el).querySelector('.product-front div.shadow').hide();
					document.querySelector(el).querySelector('.make3D').removeClass('flip-10').css('transition', '100ms ease-out');		
					document.querySelector(el).querySelector('.cx, .cy').removeClass('s1 s2 s3');			
				}, 100);			
			}, 150);			
			
		});				
	
		makeCarousel(el);
	});
	
	document.querySelector('.add-cart-large').each(function(i, el){
		document.querySelector(el).click(function(){
			var carousel = document.querySelector(this).parent().parent().querySelector(".carousel-container");
			var img = carousel.querySelector('img').eq(carousel.attr("rel"))[0];						
			var position = document.querySelector(img).offset();	

			var productName = document.querySelector(this).parent().querySelector('h4').get(0).innerHTML;				
	
			document.body.insertAdjacentHTML("beforeend",'<div class="floating-cart"></div>');		
			var cart = document.querySelector('div.floating-cart');		
			document.querySelector("<img src='"+img.src+"' class='floating-image-large' />").appendTo(cart);
			
			document.querySelector(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").classList.add('moveToCart');		
			setTimeout(function(){document.body.classList.add("MakeFloatingCart");}, 800);
			
			setTimeout(function(){
			document.querySelector('div.floating-cart').remove();
			document.body.removeClass("MakeFloatingCart");


			var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+img.src+"' alt='' /></div><span>"+productName+"</span><strong>$39</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			

			document.querySelector("#cart .empty").hide();			
			document.querySelector("#cart").insertAdjacentHTML("beforeend",cartItem);
			document.querySelector("#checkout").fadeIn(500);
			
			document.querySelector("#cart .cart-item").last()
				.classList.add("flash")
				.querySelector(".delete-item").click(function(){
					document.querySelector(this).parent().fadeOut(300, function(){
						document.querySelector(this).remove();
						if(document.querySelector("#cart .cart-item").size() == 0){
							document.querySelector("#cart .empty").fadeIn(500);
							document.querySelector("#checkout").fadeOut(500);
						}
					})
				});
 		    setTimeout(function(){
				document.querySelector("#cart .cart-item").last().removeClass("flash");
			}, 10 );
			
		}, 1000);
			
			
		});
	})
	
	/* ----  Image Gallery Carousel   ---- */
	function makeCarousel(el){
	
		
		var carousel = document.querySelector(el).querySelector('.carousel ul');
		var carouselSlideWidth = 315;
		var carouselWidth = 0;	
		var isAnimating = false;
		var currSlide = 0;
		document.querySelector(carousel).attr('rel', currSlide);
		
		// building the width of the casousel
		document.querySelector(carousel).querySelector('li').each(function(){
			carouselWidth += carouselSlideWidth;
		});
		document.querySelector(carousel).css('width', carouselWidth);
		
		// Load Next Image
		document.querySelector(el).querySelector('div.carouselNext').addEventListener('click', function(){
			var currentLeft = Math.abs(parseInt(document.querySelector(carousel).css("left")));
			var newLeft = currentLeft + carouselSlideWidth;
			if(newLeft == carouselWidth || isAnimating === true){return;}
			document.querySelector(carousel).css({'left': "-" + newLeft + "px",
								   "transition": "300ms ease-out"
								 });
			isAnimating = true;
			currSlide++;
			document.querySelector(carousel).attr('rel', currSlide);
			setTimeout(function(){isAnimating = false;}, 300);			
		});
		
		// Load Previous Image
		document.querySelector(el).querySelector('div.carouselPrev').addEventListener('click', function(){
			var currentLeft = Math.abs(parseInt(document.querySelector(carousel).css("left")));
			var newLeft = currentLeft - carouselSlideWidth;
			if(newLeft < 0  || isAnimating === true){return;}
			document.querySelector(carousel).css({'left': "-" + newLeft + "px",
								   "transition": "300ms ease-out"
								 });
			isAnimating = true;
			currSlide--;
			document.querySelector(carousel).attr('rel', currSlide);
			setTimeout(function(){isAnimating = false;}, 300);						
		});
	}
	
	document.querySelector('.sizes a span, .categories a span').each(function(i, el){
		document.querySelector(el).insertAdjacentHTML("beforeend",'<span class="x"></span><span class="y"></span>');
		
		document.querySelector(el).parent().addEventListener('click', function(){
			if(document.querySelector(this).classList.contains('checked')){				
				document.querySelector(el).querySelector('.y').removeClass('animate');	
				setTimeout(function(){
					document.querySelector(el).querySelector('.x').removeClass('animate');							
				}, 50);	
				document.querySelector(this).removeClass('checked');
				return false;
			}
			
			document.querySelector(el).querySelector('.x').classList.add('animate');		
			setTimeout(function(){
				document.querySelector(el).querySelector('.y').classList.add('animate');
			}, 100);	
			document.querySelector(this).classList.add('checked');
			return false;
		});
	});
	
	document.querySelector('.add_to_cart').click(function(){
		var productCard = document.querySelector(this).parent();
		var position = productCard.offset();
		var productImage = document.querySelector(productCard).querySelector('img').get(0).src;
		var productName = document.querySelector(productCard).querySelector('.product_name').get(0).innerHTML;				

		document.body.insertAdjacentHTML("beforeend",'<div class="floating-cart"></div>');		
		var cart = document.querySelector('div.floating-cart');		
		productCard.clone().appendTo(cart);
		document.querySelector(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").classList.add('moveToCart');		
		setTimeout(function(){document.body.classList.add("MakeFloatingCart");}, 800);
		setTimeout(function(){
			document.querySelector('div.floating-cart').remove();
			document.body.removeClass("MakeFloatingCart");


			var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>$39</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			

			document.querySelector("#cart .empty").hide();			
			document.querySelector("#cart").insertAdjacentHTML("beforeend",cartItem);
			document.querySelector("#checkout").fadeIn(500);
			
			document.querySelector("#cart .cart-item").last()
				.classList.add("flash")
				.querySelector(".delete-item").click(function(){
					document.querySelector(this).parent().fadeOut(300, function(){
						document.querySelector(this).remove();
						if(document.querySelector("#cart .cart-item").size() == 0){
							document.querySelector("#cart .empty").fadeIn(500);
							document.querySelector("#checkout").fadeOut(500);
						}
					})
				});
 		    setTimeout(function(){
				document.querySelector("#cart .cart-item").last().removeClass("flash");
			}, 10 );
			
		}, 1000);
	});
);