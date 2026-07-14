import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import { useNavigate } from "react-router-dom";

import { login } from "../../services/authService";
import AppSnackbar from "../../components/common/AppSnackbar";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  const handleLogin = async () => {
    if (!username || !password) {
      setSnackbar({
        open: true,
        message: "Please enter username and password",
        severity: "warning",
      });
      return;
    }

    setLoading(true);

    const result = await login(username, password);

    setLoading(false);

    if (result.success) {
      setSnackbar({
        open: true,
        message: "Login Successful",
        severity: "success",
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 700);
    } else {
      setSnackbar({
        open: true,
        message: result.message,
        severity: "error",
      });
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          p: 5,
          borderRadius: 5,
        }}
      >
        <Stack spacing={3}>
          <SecurityIcon
            sx={{
              fontSize: 60,
              color: "primary.main",
              mx: "auto",
            }}
          />

          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
          >
            SentinelCore
          </Typography>

          <Typography
            align="center"
            color="text.secondary"
          >
            Security Operations Platform
          </Typography>

          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />

          <Button
            variant="contained"
            size="large"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress
                size={24}
                color="inherit"
              />
            ) : (
              "Login"
            )}
          </Button>
        </Stack>
      </Paper>

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        handleClose={() =>
          setSnackbar({
            ...snackbar,
            open: false,
          })
        }
      />
    </Container>
  );
}

export default Login;