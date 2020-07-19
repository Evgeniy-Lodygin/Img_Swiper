class ImgSwiper{
	constructor(id){
		this.swiper = $(id);
		this.swiperImg = this.swiper.find(".swiper-img");
		this.swiperBtn = this.swiper.find(".swiper-btn-link");
		this.firstPic = this.swiper.find(".swiper-img:first-child");
		this.prevHighlightBtn = this.swiper.find(".swiper-btn-link:first-child");
		this.slideshowBtn = this.swiper.find(".slideshowBtn");
		this.currentPictureLink = null;
		this.currentImgNum = 0;
		this.currentImgNumSlide = 0; //temp
		this.SetIntervalStart 		= 0;
		this.slideshowPeriod 		= 2;
		this.isSlideshowStart 		= false;
		this.showInit();
		this.highlightInit();
		this.createEvents();
	}
highlightInit(){
	this.prevHighlightBtn.addClass("highlight");
	}
showInit(){
	this.firstPic.addClass("b-show");
}
imgChange(event){
	event.preventDefault();
	this.currentPictureLink = $(event.currentTarget);
	this.currentImgNum = this.swiperBtn.index(this.currentPictureLink);
	this.swiperImg.filter(".b-show").removeClass("b-show");
	this.swiperImg.eq(this.currentImgNum).addClass("b-show");
	this.firstPic = this.swiperImg.eq(this.currentImgNum)
	this.swiperBtn.filter(".highlight").removeClass("highlight");
	this.currentPictureLink.addClass("highlight");
}
slideImg(event, shift){
	this.currentImgNumSlide = this.swiperImg.index(this.swiperImg.filter(".b-show"));

	if(this.currentImgNumSlide == this.swiperImg.length -1){ //last one element
		this.currentImgNumSlide = 0;
		this.swiperImg.eq(this.swiperImg.length -1).removeClass("b-show");
		this.swiperImg.eq(this.currentImgNumSlide).addClass("b-show");
		this.swiperBtn.eq(this.swiperImg.length -1).removeClass("highlight");
		this.swiperBtn.eq(this.currentImgNumSlide).addClass("highlight");
	}
	else{
		this.swiperImg.eq(this.currentImgNumSlide).removeClass("b-show");
		this.swiperImg.eq(this.currentImgNumSlide + shift).addClass("b-show");
		this.swiperBtn.eq(this.currentImgNumSlide).removeClass("highlight");
		this.swiperBtn.eq(this.currentImgNumSlide + shift).addClass("highlight");
	}
}
	slideshow(){
		if(this.isSlideshowStart){
			this.stopSlideshow();
		}
		else{
			this.slideshowBtn.text("stop");
			this.isSlideshowStart = true;
			this.SetIntervalStart = setInterval(() => {this.slideImg(null, 1)}, this.slideshowPeriod * 1000);//slideshow starts
		}
	}
	stopSlideshow(){
			this.slideshowBtn.text("start");
			this.isSlideshowStart = false;
			clearInterval(this.SetIntervalStart);
	}
	createEvents(){
		this.swiperBtn.click(this.imgChange.bind(this));
		this.slideshowBtn.click(this.slideshow.bind(this));
	}
}
let swipe = new ImgSwiper("#container-imgswiper");