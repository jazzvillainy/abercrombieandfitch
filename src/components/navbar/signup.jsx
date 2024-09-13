import React, { useState } from "react";
import { Form, Link, NavLink, redirect, useActionData } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

function SignUp() {
  const data = useActionData();
  function BreadCrumbs() {
    location = useLocation;

    let currentLink = "";

    const crumbs = location.pathname
      .split("/")
      .filter((crumb) => {
        crumb !== " ";
      })
      .map((crumb) => {
        currentLink += `/${crumb}`;
      });

    return currentLink;
  }
  // const [FormInput, setFormInput] = useState({
  //   email: "",
  //   password: "",
  //   firstName: "",
  //   lastName: "",
  // });
  // const handleChange = (e) => {
  //   setFormInput({ ...FormInput, email: e.target.value });
  // };
  // const handleChange2 = (e) => {
  //   setFormInput({ ...FormInput, password: e.target.value });
  // };
  // const handleChange3 = (e) => {
  //   setFormInput({ ...FormInput, firstName: e.target.value });
  // };
  // const handleChange4 = (e) => {
  //   setFormInput({ ...FormInput, lastName: e.target.value });
  //   console.log(FormInput);
  // };

  return (
    <div className="w-full bg-white max-md:pt-28 h-[100dvh] px-10 pt-10 ">
      <button className="pb-10 scale-150">
        <IoArrowBackCircle />
      </button>

      <Form method="post" action="/signup">
        <div className="flex flex-col w-2/5 h-4/5 justify-between gap-6 min-w-full">
          <input
            className=" border-b-4 bg-transparent"
            placeholder="E-MAIL"
            name="email"
            type="text"
            required
          />
          <input
            className="border-b-4 bg-transparent"
            placeholder="PASSWORD"
            name="password"
            type="password"
            required
          />
          <input
            className="border-b-4 bg-transparent"
            placeholder="FIRSTNAME"
            name="firstName"
            type="text"
            required
            />
          <input
            className="border-b-4 bg-transparent"
            placeholder="LASTNAME"
            name="lastName"
            type="text"
            required
            />
          <label htmlFor="check">
            <input
              required
              id="check"
              name="check"
              placeholder="E-MAIL"
              type="checkbox"
              />
            have read and understand the Privacy and Cookies Policy
          </label>
            {data && data.error && <p className="bg-red-400">{data.error}</p>}
          <button
            type="submit"
            name="submit"
            className="rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
            focus:ring-indigo-500 md:w-2/5"
            >
            CREATE ACCOUNT
          </button>
        </div>
      </Form>
    </div>
  );
}

export default SignUp;

export const signUpAction = async ({ request }) => {
  console.log(request);

  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    password: data.get("password"),
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    terms: data.get("check"),
    submit: data.get("submit"),
  };
  console.log(submission);
  if (submission.password.length < 7) {
    return { error: "password must be over 7 chars long" };
  }
  if(submission.password === submission.password.toUpperCase()){
    
    return { error: "Passwords must be in lowercase" };
  }
  if (submission.password.length > 11) {
    return { error: "password must be under 11 chars long" };
  }
  if (!submission.email.includes("@")) {
    return { error: "invalid email address" };
  }
  
  return redirect("/");
};
