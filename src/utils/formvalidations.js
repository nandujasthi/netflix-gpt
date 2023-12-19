export const formValidation = (email, password) => {
  //   const isNamevalid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fullname);
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //   if (!isNamevalid) return "Name is Not Valid";
  if (!isEmailValid) return "Email ID is Not Valid";
  if (!isPasswordValid) return "Password is Not Valid";

  return null;
};
