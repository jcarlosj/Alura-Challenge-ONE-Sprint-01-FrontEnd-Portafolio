import { showError } from './errors.js';
import { changeInput, changeLabel, displayError } from './helpers.js';


// Define los tipos de campo que se van a validar y su funcion evaludadora
const fieldValidators = {
    "input-name": ( input ) => validateMaximumCharacters( input, 5 ),
    "input-assunto": ( input ) => validateMaximumCharacters( input, 50 ),
    "textarea-mensagem": ( input ) => validateMaximumCharacters( input, 300 ),
}

export function validateDataSet( input ) {
    const typeInput = input.dataset.type;

    console.log( typeInput );
    console.log( input.validity );

    // Verifica si el tipo de campo esta definido
    if( fieldValidators[ typeInput ] )
        fieldValidators[ typeInput ] ( input );     // Ejecuta la validacion sobre el campo definido
    else {
        // console.log( input.parentElement.children );
        changeInput( input );
        changeLabel( input );
        showError( typeInput, input );
    }
}

function validateMaximumCharacters( input, maximumCharacters = 25 ) {
    const inputNameValue = input.value;

    let message = '';

    if( inputNameValue == '' )
        message = `El campo es requerido`;
    else if( inputNameValue.length > maximumCharacters )
        message = `El campo debe contener máximo ${ maximumCharacters } caracteres`;

    
    input.setCustomValidity( message );         // setCustomValidity: define el mensaje de validación personalizado para el elemento seleccionado con el mensaje especifico
    // input.reportValidity();                     // Despliega mensaje de error en el tooltip por defecto del campo
    console.log( input.validationMessage );     // Muestra solo en mensaje de error actual

    displayError( input, message );
}