/* Never Ignore caught errors */

try {
  somethingThatCanFail();
} catch (e) {
  console.log(e);
  notifyErrorToUser(e);
  reportError(e);
}
