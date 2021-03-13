export const validEmail = (email) => {

  let valid = true;  // assume the email address is valid;

  // check format of email string via simple regular expression
  const validated = /\S+@\S+\.\S+/.test(email);

  return valid;

}
