export function homeViewInit(){
        let flkty = new Flickity(".carousel", {
            setGallerySize: false,
            pageDots: false,
            initialIndex: 8 // set the initial index to the middle image.
          });
          let carousel = $(".carousel").flickity();
    
          $("body").on("mousewheel", function (event) {
            // use flickity methods to go previous or next depending on scroll direction
          
            if (event.deltaY == -1) {
              carousel.flickity("previous");
            }
          
            if (event.deltaY == 1) {
              carousel.flickity("next");
            }
          });
}