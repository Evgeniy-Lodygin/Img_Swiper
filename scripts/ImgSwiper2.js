class ImgSwiper{
	constructor(id){
		this.swiper = $(id);
		this.swiperImg = this.swiper.find(".swiper-img");
		this.swiperBtn = this.swiper.find(".swiper-btn-link");
		this.firstPic = this.swiper.find(".swiper-img:first-child");
		this.prevHighlightBtn = this.swiper.find(".swiper-btn-link:first-child");
		this.currentPictureLink = null;
		this.previousImgNum = 0;
		this.currentImgNum = 0;
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
	this.firstPic.removeClass("b-show");
	this.swiperImg.eq(this.currentImgNum).addClass("b-show");
	this.firstPic = this.swiperImg.eq(this.currentImgNum)
	this.prevHighlightBtn.removeClass("highlight");
	this.currentPictureLink.addClass("highlight");
	this.prevHighlightBtn = this.currentPictureLink;
	this.previousImgNum = this.currentImgNum;
}
	createEvents(){
		this.swiperBtn.click(this.imgChange.bind(this));
	}
}
let swipe = new ImgSwiper("#container-imgswiper");