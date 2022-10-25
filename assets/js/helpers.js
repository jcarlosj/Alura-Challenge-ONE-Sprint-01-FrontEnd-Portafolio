function changeFieldState( currentField ) {
    // Verifica si el campo pasó la validación 
    if( currentField.validity.valid )
        currentField.classList.remove( 'invalid' );        
    else    // o no
        currentField.classList.add( 'invalid' );
}

export function changeState( currentField ) {
    const siblings = currentField.parentElement.children;

    console.log( siblings );
    
    changeFieldState( currentField );

    for( let el of siblings ) {
        // Verifica si el campo pasó la validación
        if( currentField.validity.valid ) {  

            if( el.nodeName == 'LABEL' )
                el.classList.remove( 'invalid' );

            if( el.nodeName == 'SPAN' )
                el.classList.remove( 'invalid' );
        }
        else {      // o no
            if( el.nodeName == 'LABEL' )
                el.classList.add( 'invalid' );

            if( el.nodeName == 'SPAN' )
                el.classList.add( 'invalid' );
        }
    }
}

export function displayError( input, message ) {
    const els = input.parentElement.children;

    for( let el of els ) {
        if( el.nodeName == 'SPAN' ) {

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