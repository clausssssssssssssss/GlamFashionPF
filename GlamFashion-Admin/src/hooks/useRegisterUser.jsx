import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useRegisterUser = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, password } = formData;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password.trim()
    ) {
      toast.error("Por favor, completa todos los campos.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:3001/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Error en la respuesta");

      const data = await response.json();
      toast.success("¡Usuario registrado con éxito!");
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Hubo un error al registrar. Intenta nuevamente.");
    }
  };

  return { formData, handleChange, handleSubmit };
};
