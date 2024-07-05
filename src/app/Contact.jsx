"use client";

import { useState } from "react";
import Shiny from "./Shiny";
import BTN from "./BTN";

const Contact = () => {
  const [result, setResult] = useState("Submit!");
  const [errors, setErrors] = useState({});

  const validateForm = (form) => {
    const newErrors = {};
    if (!form.name.value.trim()) newErrors.name = "Name is required.";
    if (!form.email.value.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email.value)) {
      newErrors.email = "Email address is invalid.";
    }
    return newErrors;
  };

  const sendForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const newErrors = validateForm(form);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setResult("Sending...");
    const formData = new FormData(form);
    formData.append("access_key", "4ade57e1-7ca0-4128-8e4a-595e06092a48");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Sent!");
      form.reset();
      setErrors({});
    } else {
      console.log("Error", data);
      setResult("Please try again.");
    }

    setTimeout(() => {
      setResult("Submit!");
    }, 2000);
  };
  return (
    <section className="flex-col flex items-center justify-center" id="contact">
      <h1 className="my-4 text-4xl md:text-5xl text-center">
        Ready to create something <Shiny>amazing</Shiny> together?
      </h1>
      <p className="my-4 text-lg leading-relaxed lg:text-2xl text-center">
        Let&apos;s talk about <Shiny>your</Shiny> next <Shiny>website</Shiny>!
      </p>
      <form
        onSubmit={sendForm}
        noValidate
        className="box-border flex h-min w-full flex-col items-center justify-center gap-2"
      >
        <div
          id="name-mail"
          className="m-2 flex w-3/4 flex-col items-stretch justify-between gap-2 lg:w-1/2 lg:flex-row lg:gap-5"
        >
          <div id="name w-full">
            <input
              className={`w-full rounded-lg border-4 placeholder-slate-500 bg-amber-100 p-2 text-white ${
                errors.name ? "border-red-500" : "border-yellow-500"
              } transition-all focus:border-4 focus:border-red-400 focus:outline-none`}
              name="name"
              placeholder="Name"
              type="text"
              autoComplete="on"
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>

          <div id="email" className="w-full">
            <input
              className={`w-full rounded-lg border-4 bg-amber-100 p-2 placeholder-slate-500 text-white ${
                errors.email ? "border-red-500" : "border-yellow-500"
              } transition-all focus:border-4 focus:border-red-400 focus:outline-none`}
              name="email"
              placeholder="Email"
              type="email"
              autoComplete="on"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
        </div>
        <div className="flex w-3/4 flex-col lg:w-1/2">
          <textarea
            className="placeholder-slate-500 rounded-lg border-4 border-yellow-500 bg-amber-100 p-2 text-white transition-all focus:border-4 focus:border-red-400 focus:outline-none"
            name="message"
            placeholder="Tell us about your project!"
            rows="5"
            cols="5"
          />
        </div>

        <div
          id="btnWrapper"
          className="flex w-1/2 justify-center lg:justify-end"
        >
          <div id="sbtn" className="flex w-3/4 items-end lg:w-1/5">
            <BTN text={result} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
