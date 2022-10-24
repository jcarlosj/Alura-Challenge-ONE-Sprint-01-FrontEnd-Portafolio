// Define los tipos de campo que se van a validar y su funcion evaludadora
const fieldValidators = {
    "input-name": ( input ) => validateInputName( input )
}

export function validateDataSet( input ) {
    const typeInput = input.dataset.type;

    console.log( typeInput );
    console.log( input.validity );

    // Verifica si el tipo de campo esta definido
    if( fieldValidators[ typeInput ] )
        fieldValidators[ typeInput ] ( input );     // Ejecuta la validacion sobre el campo definido

    // console.log( input.parentElement.children );

    // Verifica si el campo pasó la validación 
    if( input.validity.valid ) {
        input.classList.remove( 'invalid' );
        changeLabel( input );
    }
    else {
        input.classList.add( 'invalid' );
        changeLabel( input );
    }
}

function changeLabel( input ) {
    const els = input.parentElement.children;

    for( let el of els ) {
        if( el.nodeName == 'LABEL' ) {
            console.log( el );

            if( input.validity.valid ) {
                el.classList.remove( 'invalid' );
            }
            else {
                el.classList.add( 'invalid' );
            }
        }
    }
}

function validateInputName( input ) {
    const maximumCharacters = 5;
    const inputNameValue = input.value;

    let message = '';

    if( inputNameValue == '' )
        message = `El campo nombre es requerido`;
    else if( inputNameValue.length > maximumCharacters )
        message = `El campo nombre debe contener máximo ${ maximumCharacters } caracteres`;

    
    input.setCustomValidity( message );         // setCustomValidity: define el mensaje de validación personalizado para el elemento seleccionado con el mensaje especifico
    input.reportValidity();                     // Despliega mensaje de error en el tooltip por defecto del campo
    console.log( input.validationMessage );     // Muestra solo en mensaje de error actual

}