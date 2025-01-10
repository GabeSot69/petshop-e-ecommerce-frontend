"use client";
import theme from "@/app/theme/theme";
import { useLogin } from "../../hooks/useLogin";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import { useState } from "react";

const FormBox = styled(Box)({
  marginTop: "150px",
  width: "425px",
  height: "450px",
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    login,
    loading,
    openAlert,
    alertMessage,
    alertSeverity,
    setOpenAlert,
  } = useLogin();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login({ email, password });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box display={"flex"} flexDirection={"row"} alignContent={"center"} justifyContent={"space-evenly"}>
      <FormBox>
        <Typography align="left" component="h2" variant="h6">
          <span style={{ color: "secondary" }}>Acesse sua conta</span>
        </Typography>
        <Typography
          align="left"
          color="textPrimary"
          component="p"
          mt={"5%"}
          variant="body1"
        >
          E-mail ou CPF/CNPJ
        </Typography>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          label="Senha"
          margin="normal"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button
          color="secondary"
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          sx={{
            mt: "10%",
          }}
          disabled={loading}
          fullWidth
        >
          Entrar
        </Button>
        <Snackbar
          open={openAlert}
          autoHideDuration={2200}
          onClose={() => setOpenAlert(false)}
        >
          <Alert onClose={() => setOpenAlert(false)} severity={alertSeverity}>
            {alertMessage}
          </Alert>
        </Snackbar>
      </FormBox>
    <Box marginTop={"150px"} width={"400px"}>
     <Typography
        align="left"
        color="secondary"
        component="p"
        mt={"5%"}
        variant="h4"
      >
        Criar uma conta é rapido, fácil e gratuito!
      </Typography>
      <Typography
        align="left"
        color="grey"
        component="p"
        mt={"5%"}
        variant="body1"
      >
        Com sua conta do Petz você tem acesso a ofertas exclusivas, pode criar e gerenciar
        sua Assinatura Petz, acompanhar seus pedidos e muito mais!

      </Typography>
      <Button variant="outlined" color="grey" size="400px">
        Criar conta
      </Button>
    </Box>
  </Box>
  );
};

export default LoginForm;