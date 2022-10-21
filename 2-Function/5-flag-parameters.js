/*  don't use flag parameters */

// Not Good
function updateUser(isPremium) {
  if (isPremium) {
    /* ... */
  } else {
    /* ... */
  }
}

// Good
function updatePremiumUser() {}
function updateFreemiumUser() {}
if (isPremium) {
  updatePremiumUser();
} else {
  updateFreemiumUser();
}

/*  Except for asingle operation */

function updateUser(isPremium) {
  something();
  /* 
    ...
     */
  if (isPremium) {
    sendUpdateConfirmationOnTelegram();
  } else {
    sendUpdateConfirmationByMail();
  }
}
