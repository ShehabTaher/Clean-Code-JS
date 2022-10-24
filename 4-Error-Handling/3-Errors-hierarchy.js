/* Create your own errors hierarchy */

try {
  await fetchArticales();
} catch (e) {
    if (e instanceof ValidationError) {
      notifyErrorToUser(e.message)
    } else {
        notifyErrorToUser(e.message)
        reportError(e)
    }
    // if (e instanceof MissingFieldError) {
    //   notifyErrorToUser(e.field)
    // } else {
    //     notifyErrorToUser(e.message)
    //     reportError(e)
    // }

//   console.log(e.name); // 'Error'
//   notifyErrorToUser(e.message); // 'Impossible to connect to the database'
//   reportError(e.stack); // 'Error : hey \n   at fetchArticales:12:3'
}

function fetchArticales() {
  /* 
    Database operation ...
    */
  throw new Error("Impossible to connect to the database");
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
class MissingFieldError extends Error{
    constructor(field) {
        super(`${field} is missing`);
        this.name = "MissingFieldError";
        this.field = field;
      }
}