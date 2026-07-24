import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";

import {
  getAllUsers,
  deleteUser,
} from "../services/userService";

import DeleteIcon from "@mui/icons-material/Delete";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await getAllUsers();

    console.log("Users from API:", data);

    setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await deleteUser(id);
      loadUsers();
    } catch (error) {
      console.error(error);
      alert("Failed to delete user.");
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 8,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  console.log("Users State:", users);
  return (
    <Box p={3}>
      <Typography
        variant="h4"
        fontWeight={700}
        mb={3}
      >
        User Management
      </Typography>

      <Paper
        sx={{
          overflow: "hidden",
          borderRadius: 3,
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>ID</b>
              </TableCell>

              <TableCell>
                <b>Full Name</b>
              </TableCell>

              <TableCell>
                <b>Username</b>
              </TableCell>

              <TableCell>
                <b>Email</b>
              </TableCell>

              <TableCell>
                <b>Role</b>
              </TableCell>

              <TableCell>
                <b>Status</b>
              </TableCell>

              <TableCell align="center">
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>{user.id}</TableCell>

                <TableCell>{user.fullName}</TableCell>

                <TableCell>{user.username}</TableCell>

                <TableCell>{user.email}</TableCell>

                <TableCell>
                  <Chip
                    label={user.role}
                    color={
                      user.role === "ADMIN"
                        ? "error"
                        : user.role === "ANALYST"
                        ? "primary"
                        : "default"
                    }
                    size="small"
                  />
                </TableCell>

                <TableCell>
                  <Chip
                    label={user.enabled ? "Enabled" : "Disabled"}
                    color={
                      user.enabled
                        ? "success"
                        : "default"
                    }
                    size="small"
                  />
                </TableCell>

                <TableCell align="center">
                  <Tooltip title="Delete User">
                    <IconButton
                      color="error"
                      onClick={() =>
                        handleDelete(user.id)
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

export default Users;