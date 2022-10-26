import { validateDataSet } from './validate.js';


const $fields = document.querySelectorAll( '.form-control' );

const validate = ( event, enabledButton ) => validateDataSet( event.target, enabledButton );

// console.log( $fields );
$fields.forEach( field => {
    // console.log( field.validity );

    field.addEventListener( 'blur', ( event ) => {
        validate( event, $fields );
    } );
    field.addEventListener( 'keyup', ( event ) => {
        validate( event, $fields );
    } );
});
