import { displayError } from './helpers.js';


const typeErrors = [ 'valueMissing', 'typeMismatch', 'patternMismatch', 'customError' ];

const errorMessages = {
    'input-email': {
        valueMissing: 'El campo email no puede estar vacio',
        typeMismatch: 'El correo no es válido'
    }
}

function getErrorMessage( typeInput, input ) {
    let message = '';

    console.group( `type: ${ typeInput }` );

    /** Itera todos los tipos de errores que hemos considerado */
    typeErrors.forEach( typeError => {
        // console.log( `${ typeError }: ${ input.validity[ typeError ] }` );                                              // Mostrará todos los tipos de errores y sus errores

        // Verifica si existe este tipo de error en el elemento input
        if( input.validity[ typeError ] ) {
            console.log( `${ input.validity[ typeError ] ? `${ typeError } : ${ input.validity[ typeError ] }` : '' }` );    // Mostrará solo los tipos de errores que contiene el elemento
            
            message = errorMessages[ typeInput ][ typeError ];      // Asigna el mensaje de error
        }

    });

    console.groupEnd();

    return message;
}

export function showError( typeInput, input ) {
    const message = getErrorMessage( typeInput, input );

    console.log( getErrorMessage( typeInput, input ) );
    displayError( input, message );


    // const els = input.parentElement.children;

    // for( let el of els ) {

    //     if( el.nodeName == 'SPAN' ) {
    //         console.log( el );

    //         // Verifica si el campo pasó la validación
    //         if( input.validity.valid ) {
    //             el.parentElement.querySelector( '.form-message' ).innerHTML = '';
    //         }
    //         else {  // o no
    //             el.parentElement.querySelector( '.form-message' ).innerHTML = getErrorMessage( typeInput, input );
    //         }
    //     }
    // }
}
