import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useLoginUser = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = loginData;

    if (!email.trim() || !password.trim()) {
      toast.error("Por favor, completa ambos campos.");
      return;
    }

    fetch("http://4000/api/login", {
      method:'POST', 
      body: {email, password}
    })

    toast.success("Inicio de sesión exitoso.");
    navigate("/Dashboard");
  };

  return { loginData, handleChange, handleLogin };
};
