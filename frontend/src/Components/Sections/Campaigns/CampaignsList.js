import Campaign from "../../Cards/Campaign";
import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector, useDispatch } from "react-redux";
import { getCampaings } from "../../../Redux/APICalls/campaignsCall";

const CampaignsList = () => {
  const { campaigns } = useSelector((state) => state.campaigns);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [campaignRender, setCampaignRender] = useState([]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    filterCampaigns(event.target.value);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setFilter("all");
  };

  const filterCampaigns = (cat) => {
    const newArray = campaigns.filter((item) => {
      return item.category === cat;
    });
    if (cat === "all") {
      setCampaignRender(campaigns);
    } else {
      setCampaignRender(newArray);
    }
  };

  useEffect(() => {
    dispatch(getCampaings());
    setCampaignRender(campaigns);
  }, [campaigns]);
  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Campaigns
            </Typography>

            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <IconButton
                onClick={() => setShowFilters(!showFilters)}
                color={showFilters ? "primary" : "default"}
                aria-label="toggle filters"
              >
                <FilterListIcon />
              </IconButton>

              {(searchTerm || filter !== "all") && (
                <IconButton
                  onClick={clearFilters}
                  color="default"
                  aria-label="clear filters"
                >
                  <ClearIcon />
                </IconButton>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              mb: 2,
              width: "100%",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search campaigns..."
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: "background.default",
                  borderRadius: 1,
                },
              }}
            />

            {showFilters && (
              <FormControl fullWidth sx={{ minWidth: 200 }}>
                <InputLabel id="campaign-type-label">Filter</InputLabel>
                <Select
                  labelId="campaign-type-label"
                  value={filter}
                  onChange={handleFilterChange}
                  label="Filter"
                >
                  <MenuItem value="all">All campaigns</MenuItem>
                  <MenuItem value="education">📚 Education</MenuItem>
                  <MenuItem value="health">🏥 Health & Medical</MenuItem>
                  <MenuItem value="disaster">🚨 Disaster Relief</MenuItem>
                  <MenuItem value="environment">
                    🌿 Environment & Sustainability
                  </MenuItem>
                  <MenuItem value="food">🍲 Food & Hunger</MenuItem>
                  <MenuItem value="housing">🏠 Housing & Shelter</MenuItem>
                  <MenuItem value="animals">🐾 Animal Welfare</MenuItem>
                  <MenuItem value="human_rights">
                    ✊ Human Rights & Social Justice
                  </MenuItem>
                  <MenuItem value="community">
                    🤝 Community Development
                  </MenuItem>
                  <MenuItem value="arts">🎭 Arts & Culture</MenuItem>
                </Select>
              </FormControl>
            )}
          </Box>

          <Typography variant="body2" color="text.secondary">
            Showing results for: {filter === "all" ? "All campaigns" : filter}
            {searchTerm && ` matching "${searchTerm}"`}
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 4,
            rowGap: 8,
            width: "100%",
          }}
        >
          {campaignRender.map((cam, id) => {
            return <Campaign campaign={cam} key={id} />;
          })}
        </Box>
      </Container>
    </div>
  );
};

export default CampaignsList;
