import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!search.trim()) return;

    navigate(`/assets?search=${encodeURIComponent(search)}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        px: 2,
        width: 380,
        borderRadius: 4,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <InputBase
        sx={{ flex: 1 }}
        placeholder="Search assets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <IconButton onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;