import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const SettingSection = () => {
  const [sexe, setSexe] = useState("");

  const handleChange = (event) => {
    setSexe(event.target.value);
  };

  return (
    <div className="relative mt-24 bg-white py-10 px-8 rounded-md">
      <h2 className="text-2xl font-semibold  mb-6">
        Edit Your Profile
      </h2>
      <form className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <TextField
            fullWidth
            size="small"
            label="Full Name"
            variant="outlined"
          />
          <TextField
            fullWidth
            size="small"
            label="Age"
            type="number"
            variant="outlined"
          />
        </div>

        <TextField
          fullWidth
          label="Email"
          size="small"
          type="email"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Phone Number"
          size="small"
          type="tel"
          variant="outlined"
        />
        <TextField fullWidth label="Code Postal" size="small" variant="outlined" />
        <FormControl fullWidth size="small">
          <InputLabel>Sexe</InputLabel>
          <Select value={sexe} label="Sexe" onChange={handleChange}>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Skills (comma separated)"
          size="small"
          variant="outlined"
          placeholder="e.g., JavaScript, React, Node.js"
        />
        
        <Button
          variant="contained"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default SettingSection;
