import { createTheme } from "@mui/material/styles";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,

      primary: {
        main: "#00C853",
      },

      secondary: {
        main: "#2979FF",
      },

      error: {
        main: "#FF5252",
      },

      warning: {
        main: "#FFC107",
      },

      success: {
        main: "#00C853",
      },

      background:
        mode === "dark"
          ? {
              default: "#0D1117",
              paper: "#161B22",
            }
          : {
              default: "#F5F7FA",
              paper: "#FFFFFF",
            },
    },

    shape: {
      borderRadius: 16,
    },

    typography: {
      fontFamily: `"Inter", "Roboto", sans-serif`,

      h3: {
        fontWeight: 700,
      },

      h4: {
        fontWeight: 700,
      },

      h5: {
        fontWeight: 600,
      },

      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },

    components: {

      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 18,
            transition: "all .3s ease",
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            transition: "0.35s",
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            padding: "10px 22px",
            fontWeight: 600,
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            fontWeight: 600,
          },
        },
      },

      MuiTextField: {
        defaultProps: {
          variant: "outlined",
          size: "small",
        },
      },

      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor:
              mode === "dark"
                ? "#1C2128"
                : "#F3F4F6",
          },
        },
      },
    },
  });

export default getTheme;