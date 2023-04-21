// Start JQuery Section
$(document).ready(function(){

    // $('.magnific_img').magnificPopup({
    //     type: 'image',
    //     mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    //     gallery : {
    //         enabled : true,
    //     },
      
    //     zoom: {
    //       enabled: true, // By default it's false, so don't forget to enable it
      
    //       duration: 300,
    //       easing: 'linear', 
    //       opener: function(openerElement) {
    //         return openerElement.is('img') ? openerElement : openerElement.find('img');
    //       }
    //     }
      
    //   });
})

$(window).on('load', function() { // document ၏ အပြင်မှာရေးပေးရမည်
	$(".loading").delay(300).fadeOut(); 
	$("#preloader").delay(400).fadeOut("slow");

});
// End Jquery Section

new WOW().init();

let nigthmodebtn = document.querySelector("#nightmode");

nigthmodebtn.addEventListener("click",function(){
    // console.log("hello check");
    if(this.checked){
        console.log("checked");
        document.querySelector("#day").classList.remove("active");
        document.querySelector("#night").classList.add("active");
        document.body.style.setProperty("--global-color-white" , "#fff")
        document.body.style.setProperty("--global-color-black" , "#121212")
        // console.log(document.querySelector(":root"))
    }else {
        console.log("uncheck");
        document.querySelector("#day").classList.add("active");
        document.querySelector("#night").classList.remove("active");
        document.body.style.setProperty("--global-color-white","#121212")
        document.body.style.setProperty("--global-color-black","#fff")
    }
})