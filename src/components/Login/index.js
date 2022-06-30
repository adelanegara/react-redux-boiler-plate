import React from "react";
import { Formik, Form, Field, useField, ErrorMessage } from "formik";
import { object, string } from "yup";

const LoginValidation = object().shape({
  email: string().required("Required").email("Valid email required"),
  password: string().min(8, "Required").required("Required"),
});

const Input = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold" for={field.name}>
        {label}
      </label>
      <input
        className={`${
          meta.error && meta.touched ? "border-red-500" : ""
        } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-500 text-xs"
      />
    </div>
  );
};

const Login = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="h-screen flex items-center justify-center flex-col bg-gray-100">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginValidation}
      >
        {() => {
          return (
            <Form className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8">
              <Input name="email" label="Email" />;
              <Input name="password" label="Password" type="password" />
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
