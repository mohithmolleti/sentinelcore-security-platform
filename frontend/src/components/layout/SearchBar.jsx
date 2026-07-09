import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        px: 2,
        width: 320,
        borderRadius: 10,
        bgcolor: "background.paper",
      }}
    >
      <InputBase
        sx={{ flex: 1 }}
        placeholder="Search assets..."
      />

      <IconButton>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;