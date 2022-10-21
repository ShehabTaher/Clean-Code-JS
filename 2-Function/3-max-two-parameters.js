/*  Two Parameters maximum */

function updateUserAddress({country,city,postalCode,street}){
    /* ... */
}
// Not Good
updateUserAddress('Egypt','Cairo','62621','5 st 27');

// Good
updateUserAddress({
    country: 'Egypt',
    postalCode:'62621',
    city: 'Cairo',
    street: '5 st 27'
})