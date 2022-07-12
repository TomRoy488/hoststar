console.log(1);
var glide = new Glide('.glide', {
    gap: 20,
    type: 'carousel',
    perView: 5,
    focusAt: "center",
    breakpoints: {
      1400 :{
        perView:5,
        gap:30,
      },
         1200: {
           perView: 3,
           gap: 10
         },

        768: {
          perView: 2,
          gap: 20
        },
        500:{
            perView: 1,
            
        }
      }
  })

  glide.mount()