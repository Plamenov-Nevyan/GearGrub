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
    }
  })
}