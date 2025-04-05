"use client";
import React, { useState, useEffect } from "react";

const EmailSub = () => {
  const [email, setEmail] = useState("");
  const [subState, setSubState] = useState(false);

  const handleEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("Email", email);
    try {
      const response = await fetch("",
        {
          method: "POST",
          body: formData,
        }
      );

      setSubState(true);
      setEmail("");

      const contentType = response.headers.get("Content-Type");
      let result;
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        result = await response.text();
      }
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (subState) {
      const timer = setTimeout(() => {
        setSubState(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [subState]);

  return (
    <div className="px-5 sm:px-20 flex justify-center items-center gap-5 min-h-[50vh]">
      <div className="flex justify-center items-center gap-5 flex-col">
        <h1 className="text-center text-3xl sm:text-4xl">
          Stay Updated with MetaSynk{" "}
          <span className="hidden sm:contents">
           
          </span>{" "}
        </h1>
        <p className="text-center">
          Subscribe to our newsletter and get exclusive insights on the latest innovations.
        </p>

        <form
          onSubmit={handleEmail}
          className="flex justify-between items-center gap-5 border-2 border-[rgb(94,236,255)]/60 rounded-full w-[100%] sm:w-[60%]"
        >
          <input
            type="email"
            name="email"
            placeholder="you@domain.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="tracking-wider bg-black text-xl placeholder:flex placeholder:items-center placeholder:justify-center w-[100%] border-0 outline-none ml-3"
          />
          <button
            type="submit"
            className="bg-white/60 hover:bg-white transition-all duration-100 text-black font-bold text-l tracking-wide rounded-3xl m-1 px-6 py-2"
          >
            Subscribe
          </button>
        </form>

        {subState && <p className="text-green-500">Subscription successful!</p>}
      </div>
    </div>
  );
};

export default EmailSub;