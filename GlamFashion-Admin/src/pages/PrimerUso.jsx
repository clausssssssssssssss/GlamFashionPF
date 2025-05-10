import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer tu petición a la API o validación
    console.log("Datos del formulario:", form);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Formulario */}
      <div className="md:w-1/2 w-full p-10 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-2 text-black">GLAMFASHION</h1>
        <h2 className="text-xl mb-6 font-semibold text-gray-700">Create Your Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link to="/login" className="underline text-black hover:text-gray-800">
            Log in
          </Link>
        </p>
      </div>

      {/* Imagen derecha */}
      <div className="md:w-1/2 hidden md:block">
        <img
          src="/path-to-your-image.jpg"
          alt="Fashion Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
