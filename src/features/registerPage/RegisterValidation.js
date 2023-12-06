const Validation = (values) => {
  let error = {};

  const email_pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const password_pattern =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

  if (values.name === "") {
    error.name = "Name is required";
  } else {
    error.name = "";
  }

  if (values.email === "") {
    error.email = "Email is required";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Invalid email";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password is required";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Invalid password";
  } else {
    error.password = "";
  }
  return error;
};

export default Validation;
