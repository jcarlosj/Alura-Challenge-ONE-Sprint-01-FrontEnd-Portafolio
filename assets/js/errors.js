const typeErrors = [ 'valueMissing', 'typeMismatch', 'patternMismatch', 'customError' ];

const errorMessages = {
    'input-email': {
        valueMissing: 'El campo email no puede estar vacio',
        typeMismatch: 'El correo no es válido'
    }
}


export function showErrorMessage( typeInput, input ) {
    let message = '';

    console.group( `type: ${ typeInput }` );

    /** Itera todos los tipos de errores que hemos considerado */
    typeErrors.forEach( typeError => {
        // console.log( `${ typeError }: ${ input.validity[ typeError ] }` );                                              // Mostrará todos los tipos de errores y sus errores
        console.log( `${ input.validity[ typeError ] ? `${ typeError }: ${ input.validity[ typeError ] }` : '' }` );    // Mostrará solo los tipos de errores que contiene el elemento

        // Verifica si existe este tipo de error en el elemento input
        if( input.validity[ typeError ] )
            message = errorMessages[ typeInput ][ typeError ];

    });

    console.groupEnd();

    return message;
}