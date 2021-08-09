import React from "react";
import ReactDOM from "react-dom";
import { Formik } from "formik";
import "./styles.css";
import * as Yup from 'yup';


 const validationSchema = Yup.object({
	 firstName: Yup.string().max(5, 'Must be 15 characters or less').required('Required'),
	 lastName: Yup.string()
         .max(10, 'Must be 20 characters or less')
         .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
 });

const SignupForm = () => {
	return ( 
	<Formik initialValues={{ 
		firstName: "",
		lastName: "",
		email: "",
	}}
	validationSchema={validationSchema}
	onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
	}}>
	{(formik) => 
		<form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
		onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
	  {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
	  <label htmlFor="firstname">First Name</label>
      <input
        id="firstname"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
		onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
	  {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
	  <label htmlFor="lastname">Last Name</label>
      <input
        id="lastname"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
		onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
	  {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      <button type="submit" disabled={formik.isSubmitting}>Submit</button>
    </form>
	}
	</Formik>);
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
