import React, { useState } from "react";
import useForm from "react-hook-form";
import * as yup from "yup";
import "../login/Form.scss";

export default function Contact() {
  const schema = yup.object().shape({
    fname: yup.string().required("First name is required"),
    lname: yup.string().required("Last name is required"),
    phone: yup
      .string()
      .matches(
        /^\d{3}[-\s.]\d{3}[-\s.]\d{4}$/,
        "Valid phone number is required"
      ),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required")
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  function onSubmit(data) {
    setIsSubmitted(true); 
    console.log(data);
  }

  return (
    <div className="wrapper">
      <div className="form-container">
        <h2>Contact us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="fname">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="fname"
            placeholder="Your name.."
            ref={register({ required: true })}
          />
          {errors.fname && <p>{errors.fname.message}</p>}

          <label htmlFor="lname">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lname"
            placeholder="Your last name.."
            ref={register({ required: true })}
          />
          {errors.lname && <p>{errors.lname.message}</p>}

          <label htmlFor="phone">
            <b>Phone Name</b>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            ref={register({ required: true })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            ref={register({ required: true })}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <button type="submit">Submit</button>
          {isSubmitted && (
            <div className="success">
              <span>&#10004; Your message has been sent!</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
