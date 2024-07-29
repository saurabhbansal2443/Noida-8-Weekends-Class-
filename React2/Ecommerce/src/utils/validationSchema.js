import * as Yup from "yup";

let loginSchema = Yup.object().shape({
  email: Yup.string().required().email("Email Required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
});


export {loginSchema}