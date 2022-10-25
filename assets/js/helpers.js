export function changeInput( input ) {
    // Verifica si el campo pasó la validación 
    if( input.validity.valid )
        input.classList.remove( 'invalid' );        
    else    // o no
        input.classList.add( 'invalid' );
}

export function changeLabel( input ) {
    const els = input.parentElement.children;

    for( let el of els ) {
        if( el.nodeName == 'LABEL' ) {
            console.log( el );

            // Verifica si el campo pasó la validación
            if( input.validity.valid )
                el.classList.remove( 'invalid' );
            else    // o no
                el.classList.add( 'invalid' );

        }
    }
}

export function displayError( input, message ) {
    const els = input.parentElement.children;

    for( let el of els ) {
        if( el.nodeName == 'SPAN' ) {
            console.log( el );

            // Verifica si el campo pasó la validación
            if( input.validity.valid ) {
                el.classList.remove( 'invalid' );
            }
            else {  // o no
                el.classList.add( 'invalid' );
            }

            el.parentElement.querySelector( '.form-message' ).innerHTML = message;
        }
    }
}