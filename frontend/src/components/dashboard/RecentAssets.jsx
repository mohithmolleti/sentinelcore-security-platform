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
} from "@mui/material";

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
        borderRadius: 5,
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
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Type</b></TableCell>
              <TableCell><b>Status</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {assets.map((asset) => (
              <TableRow key={asset.id} hover>

                <TableCell>
                  {asset.assetName}
                </TableCell>

                <TableCell>
                  {asset.assetType}
                </TableCell>

                <TableCell>
                  <Chip
                    label={asset.status}
                    color={getStatusColor(asset.status)}
                    size="small"
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