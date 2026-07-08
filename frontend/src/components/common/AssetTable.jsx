import { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  IconButton,
  TextField,
  Box,
} from "@mui/material";

import { Edit, Delete } from "@mui/icons-material";
import { getAllAssets } from "../../services/assetService";

function AssetTable({ refreshKey }) {
  const [assets, setAssets] = useState([]);
  const [filteredAssets, setFilteredAssets] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
  loadAssets();
}, [refreshKey]);

  const loadAssets = async () => {
    try {
      const data = await getAllAssets();
      setAssets(data);
      setFilteredAssets(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const filtered = assets.filter(
      (asset) =>
        asset.assetName.toLowerCase().includes(search.toLowerCase()) ||
        asset.assetType.toLowerCase().includes(search.toLowerCase()) ||
        asset.ipAddress.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredAssets(filtered);
  }, [search, assets]);

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
    <Paper sx={{ p: 3, borderRadius: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Assets
        </Typography>

        <TextField
          label="Search Assets"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      <TableContainer>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Type</b></TableCell>
              <TableCell><b>IP Address</b></TableCell>
              <TableCell><b>Operating System</b></TableCell>
              <TableCell><b>Location</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell align="center"><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredAssets.map((asset) => (
              <TableRow key={asset.id} hover>

                <TableCell>{asset.assetName}</TableCell>

                <TableCell>{asset.assetType}</TableCell>

                <TableCell>{asset.ipAddress}</TableCell>

                <TableCell>{asset.operatingSystem}</TableCell>

                <TableCell>{asset.location}</TableCell>

                <TableCell>
                  <Chip
                    label={asset.status}
                    color={getStatusColor(asset.status)}
                  />
                </TableCell>

                <TableCell align="center">
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>

                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </Paper>
  );
}

export default AssetTable;