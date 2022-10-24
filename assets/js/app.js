import { validateDataSet } from './validate.js';


const $fields = document.querySelectorAll( '.form-control' );

// console.log( $fields );
const validate = ( event ) => validateDataSet( event.target );

$fields.forEach( field => {
    field.addEventListener( 'blur', validate );
    field.addEventListener( 'keyup', validate );
});
