$( '.section' ).hide()

setTimeout(function() {
    $( function() {
        $( '.section' ).fadeIn()

        $( '.loader' ).fadeOut()

        $( '.sidenav' ).sidenav()
    
        $( '.count' ).each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now))
                }
            })
        })
    })
    
}, 1000)

