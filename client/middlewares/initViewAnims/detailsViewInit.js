export async function detailsViewInit(ctx){
  $(document).ready(function(){
    if(ctx.isOwner){
        $('#delete-btn').on('click', function(e){
            let confirmDelete = confirm('Are you sure you want to delete this publication ?')
            if(confirmDelete){
                ctx.deletePublication(ctx.productId, ctx)
            }else {
                return
            }
        })

        $('#edit-btn').on('click', function(){
          ctx.page.redirect(`/edit/${ctx.productId}`)
        })
    }
    if(ctx.isLoggedIn && !ctx.isOwner){
      $('#add-to-cart-btn').on('click', function(){
        $('#slider-modal').css({'display' : 'flex'})
        $('#slider').slider({
          animate: 'fast',
          classes: {
            "ui-slider": "highlight"
          },
          max: Number(ctx.product.quantityAvailable),
          min: 1,
          orientation: "horizontal",
          value: 1,
          slide: function(e, ui){} 
        })
        $('#slider').on('slide', function(e, ui){
            $('#quantity-span').text(`${ui.value} units`)
            $('#price-calc-span').text(`${ctx.product.price * ui.value} $`)
        })
        // ctx.addProductToCart(ctx.product.id, ctx)
      })
      $('#remove-from-cart-btn').on('click', function(){
        ctx.removeProductFromCart(ctx.product.id, ctx)
      })
    }
  })
}