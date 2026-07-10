import { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  TableContainer,
  Avatar,
  Box,
} from "@mui/material";

import { Computer } from "@mui/icons-material";

import { getAllAssets } from "../../services/assetService";

function RecentAssets() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    loadAssets();
  }, []);

  const loadAssets = async () => {
    try {
      const data = await getAllAssets();

      const latestAssets = [...data]
        .sort((a, b) => b.id - a.id)
        .slice(0, 5);

      setAssets(latestAssets);
    } catch (error) {
      console.error(error);
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "running":
      case "healthy":
        return "success";

      case "warning":
        return "warning";

      case "critical":
        return "error";

      default:
        return "default";
    }
  };

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 4,
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={2}
      >
        Recent Assets
      </Typography>

      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell><b>Asset</b></TableCell>
              <TableCell><b>Type</b></TableCell>
              <TableCell align="center"><b>Status</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {assets.map((asset) => (
              <TableRow
                key={asset.id}
                hover
                sx={{
                  "&:last-child td": {
                    borderBottom: 0,
                  },
                }}
              >
                <TableCell>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1.5}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "primary.main",
                        width: 34,
                        height: 34,
                      }}
                    >
                      <Computer fontSize="small" />
                    </Avatar>

                    <Typography fontWeight={600}>
                      {asset.assetName}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell>
                  {asset.assetType}
                </TableCell>

                <TableCell align="center">
                  <Chip
                    label={asset.status}
                    color={getStatusColor(asset.status)}
                    size="small"
                    sx={{
                      minWidth: 85,
                      fontWeight: "bold",
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default RecentAssets;