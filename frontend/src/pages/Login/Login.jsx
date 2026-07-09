import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import AppSnackbar from "../../components/common/AppSnackbar";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  const handleLogin = () => {
    if (login(username, password)) {
      navigate("/");
    } else {
      setSnackbar({
        open: true,
        message: "Invalid username or password",
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
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />

          <Button
            variant="contained"
            size="large"
            onClick={handleLogin}
          >
            Login
          </Button>

          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
          >
            Demo Credentials:
            <br />
            <b>Username:</b> admin
            <br />
            <b>Password:</b> admin123
          </Typography>
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