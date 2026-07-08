import { useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import AssetTable from "../../components/common/AssetTable";
import AssetForm from "../../components/forms/AssetForm";

function Assets() {
  const [open, setOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshAssets = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const handleAdd = () => {
    setSelectedAsset(null);
    setOpen(true);
  };

  const handleEdit = (asset) => {
    setSelectedAsset(asset);
    setOpen(true);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Asset Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAdd}
        >
          Add Asset
        </Button>
      </Box>

      <AssetTable
        refreshKey={refreshKey}
        onEdit={handleEdit}
      />

      <AssetForm
        open={open}
        handleClose={() => setOpen(false)}
        refreshAssets={refreshAssets}
        editAsset={selectedAsset}
      />
    </Container>
  );
}

export default Assets;