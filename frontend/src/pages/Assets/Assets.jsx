import { useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import AssetTable from "../../components/common/AssetTable";
import AssetForm from "../../components/forms/AssetForm";

function Assets() {
  const [open, setOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshAssets = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" fontWeight="bold">
          Asset Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          Add Asset
        </Button>
      </Box>

      <AssetTable refreshKey={refreshKey} />

      <AssetForm
        open={open}
        handleClose={() => setOpen(false)}
        refreshAssets={refreshAssets}
      />
    </Container>
  );
}

export default Assets;