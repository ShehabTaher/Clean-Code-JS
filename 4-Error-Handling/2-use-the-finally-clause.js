/* Use the `finally` clause */

let isLoading = true
try {
    await fetchArticales();
    isLoading = false
  } catch (e) {
    isLoading = false
    notifyErrorToUser(e);
    reportError(e);
  }finally{
    isLoading = false
  }
  