export function loginViewInit(){
    let images = [
        "https://images.unsplash.com/photo-1604068105030-06d82bb48fd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
         "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80", 
         "https://images.unsplash.com/photo-1542728187-587e857940e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
         "https://plus.unsplash.com/premium_photo-1658526934242-aa541776ca49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80", 
         "https://plus.unsplash.com/premium_photo-1661962647080-06f7aef525d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
         "https://images.unsplash.com/photo-1599388051349-0280d9f5bb22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", 
         "https://plus.unsplash.com/premium_photo-1676998430860-22766e72010d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
         "https://images.unsplash.com/photo-1527383418406-f85a3b146499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ];
        let i = 0;
        $(".forms-page").css("background-image", "url(" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $(".forms-page").fadeOut("slow", function () {
                $(this).css("background-image", "url(" + images[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 5000);
}