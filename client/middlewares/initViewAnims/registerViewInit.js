export function registerViewInit(){
    initToolTips()
    initAddMediaLinkBtnsAndInput()
    clearAllErrors()
    clearErrorsOnFocus()

    function initToolTips(){
        // find the tooltips for every media icon and attach mouse-enter and mouse-leave events to them allowing them to slide-in/out when the
        // user hovers over the icons
        $('.media-item').each(function(){
            let tooltip = $(this).find('.tooltip')
            let iconAndInput = $(this).find('.icon-and-input')
            let iconAndAddBtn = $(iconAndInput).find('.icon-and-add-btn')
            let icon = $(iconAndAddBtn).find('.media-icon')
            $(icon).mouseenter(function(){
                $(tooltip).slideDown("fast", function(){
                })
            })
            $(icon).mouseleave(function(){
                $(tooltip).slideUp("fast", function(){
    
                })
            })
        })
    }
    function initAddMediaLinkBtnsAndInput(){
        // to every add button next to media icon attach mouse enter, mouse leave and click events
        $('.media-item').each(function(){
            let iconAndInput = $(this).find('.icon-and-input')
            let inputAndLabel = $(iconAndInput).find('.label-and-input')
            let iconAndAddBtn = $(iconAndInput).find('.icon-and-add-btn')
            let addBtn = $(iconAndAddBtn).find('.add-link')
            $(addBtn).mouseenter(function(){
                $(this).animate({               // rotate clockwise when mouse is over the button
                    deg: 180
                },
                {
                    duration: 700,
                    step: function(now){
                        $(this).css({transform: `rotate(` + now + `deg)`})
                    }
                })
            })
        
            $(addBtn).mouseleave(function(){
                $(this).animate({     // rotate counter-clockwise when mouse leaves the the button
                    deg: -180
                },
                {
                    duration: 700,
                    step: function(now){
                        $(this).css({transform: `rotate(` + now + `deg)`})
                    }
                })
            })
        
            $(addBtn).click(function(){
                $('.zoomed').each(function(){       // Remove zoomed class for every social media input and label container that has it 
                        $(this).removeClass("zoomed") // and add outzoomed class to create an effect of sliding up and closing them 
                        $(this).addClass("outzoomed")
                        setTimeout(() => {
                            $(this).css({display: "none"})
                        }, 1000)
                })
                if($(inputAndLabel).hasClass("outzoomed")){
                    $(inputAndLabel).removeClass("outzoomed")        //for the label and input children of whichever media container we clicked on
                }                                                     // add class zoomed that allows it to slide down and show it's content
                $(inputAndLabel).addClass("zoomed").css({display: "block"})
                let closeBtn = $(inputAndLabel).find('.close-link-input').click(function(){    // clicking the close button adds class outzoomed
                    $(inputAndLabel).removeClass('zoomed').addClass('outzoomed')               // that hides this specific input and label container
                    setTimeout(() => {
                        $(inputAndLabel).css({display: "none"})
                    }, 1000)
                })
    
            })
        })
    }
    function clearAllErrors(){
        //Meant to clear all errors when user switches between register and login forms
        $('.user-data-input').each(function(){
            if($(this).hasClass('error')){
                $(this).removeClass('error')
                $(`#${$(this).attr('id')}-error`).slideUp('slow')
            }
        })
    }
    function clearErrorsOnFocus(){
        $('.user-data-input').each(function(){
            $(this).focus(function(){
                if($(this).hasClass('error')){
                    $(this).removeClass('error')
                    $(`#${$(this).attr('id')}-error`).slideUp('slow')
                }
            })
        })
    }
}
