import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  MenuItem,
} from "@mui/material";

import {
  createAsset,
  updateAsset,
} from "../../services/assetService";

function AssetForm({
  open,
  handleClose,
  refreshAssets,
  editAsset,
}) {
  const emptyAsset = {
    id: "",
    assetName: "",
    assetType: "",
    ipAddress: "",
    operatingSystem: "",
    location: "",
    status: "Running",
  };

  const [asset, setAsset] = useState(emptyAsset);

  useEffect(() => {
    if (editAsset) {
      setAsset(editAsset);
    } else {
      setAsset(emptyAsset);
    }
  }, [editAsset, open]);

  const handleChange = (e) => {
    setAsset({
      ...asset,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (asset.id) {
        await updateAsset(asset.id, asset);
      } else {
        await createAsset(asset);
      }

      refreshAssets();

      handleClose();

      setAsset(emptyAsset);
    } catch (error) {
      console.error(error);
      alert("Operation failed.");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        {asset.id ? "Edit Asset" : "Add New Asset"}
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Asset Name"
              name="assetName"
              value={asset.assetName}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Asset Type"
              name="assetType"
              value={asset.assetType}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="IP Address"
              name="ipAddress"
              value={asset.ipAddress}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Operating System"
              name="operatingSystem"
              value={asset.operatingSystem}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={asset.location}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Status"
              name="status"
              value={asset.status}
              onChange={handleChange}
            >
              <MenuItem value="Running">Running</MenuItem>
              <MenuItem value="Healthy">Healthy</MenuItem>
              <MenuItem value="Warning">Warning</MenuItem>
              <MenuItem value="Critical">Critical</MenuItem>
            </TextField>
          </Grid>

        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          {asset.id ? "Update Asset" : "Save Asset"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AssetForm;