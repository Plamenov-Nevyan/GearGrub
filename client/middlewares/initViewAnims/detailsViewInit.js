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
        ctx.addProductToCart(ctx.product.id, ctx)
      })
      $('#remove-from-cart-btn').on('click', function(){
        ctx.removeProductFromCart(ctx.product.id, ctx)
      })
    }
  })
}