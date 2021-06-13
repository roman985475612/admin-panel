$( '.section' ).hide()

setTimeout(function() {
    $( function() {
        $( '.section' ).fadeIn()

        $( '.loader' ).fadeOut()

        $( '.sidenav' ).sidenav()
    
        $( '.fixed-action-btn' ).floatingActionButton()

        $( '.modal' ).modal()

        $( 'select' ).formSelect()

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

        // Approve comment
        $( '.approve' ).on( 'click', function ( e ) {
            M.toast({html: toastHTML('Comment Approved')})
            e.preventDefault()
        } )

        $( '.deny' ).on( 'click', function ( e ) {
            M.toast({html: toastHTML('Comment Denied')})
            e.preventDefault()
        } )

        // Quick todos
        $( '#todo-form' ).on( 'submit', function ( e ) {
            e.preventDefault()
            let input = $( '#todo' )
            $( '.todos' ).append( getTodoItem( input.val() ) )
            input.val('')
            M.toast({html: 'Todo Added'}) 
        } )

        // Delete todos
        $( '.todos' ).on( 'click', '.delete', function ( e ) {
            e.preventDefault()
            $(this).parent().remove()
            M.toast({html: 'Todo Removed'}) 
        } )
    })
    
}, 1000)

function toastHTML(text) {
    return `<span>${text}</span><button class="btn-flat toast-action">Undo</button>`
}

function getTodoItem(text) {
    return `
    <li class="collection-item">
        ${text}
        <a href="#!" class="secondary-content delete">
            <i class="material-icons">close</i>
        </a>
    </li>`
}

ClassicEditor
    .create( document.querySelector( '.materialize-textarea' ) )
    .catch( error => {
        console.error( error );
    } );