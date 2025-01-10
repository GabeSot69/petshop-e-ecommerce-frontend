"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
//import { useAuth } from "../context/AuthProvider";
import { initialLoginState, LoginData } from "../types/Login";
import { AlertSeverity } from "../types/Signup";
import api from "../utils/api";

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<LoginData>(initialLoginState);

  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [alertSeverity, setAlertSeverity] = useState<AlertSeverity>("success");

  const router = useRouter();
  //const { setAuthStatus } = useAuth();

  const login = async (formData: LoginData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post("/login", formData);

      setData(response.data);
      setAlertMessage("Login realizado com sucesso!");
      setAlertSeverity("success");
      //setAuthStatus(true);
      setOpenAlert(true);

      setTimeout(() => {
        router.push(`/`);
      }, 2000);
    } catch (err) {
      setError("Erro ao logar com usuário");
      setAlertMessage("Erro ao logar com usuário");
      setAlertSeverity("error");
      setOpenAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    error,
    data,
    openAlert,
    alertMessage,
    alertSeverity,
    setOpenAlert,
  };
};