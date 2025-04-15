import {
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  CircularProgress,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateHelpCall } from "../../../Redux/APICalls/helpCall";

const HelpForm = () => {
  const [situation, setSituation] = useState("");
  const [dangerLevel, setDangerLevel] = useState("");
  const [useCurrentLocation, setUseCurrentLocation] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [currentDate] = useState(new Date().toISOString().split("T")[0]);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const { isCreated, loading } = useSelector((state) => state.help);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (useCurrentLocation) {
      setIsLoadingLocation(true);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setIsLoadingLocation(false);
          },
          (error) => {
            console.error("Error getting location:", error);
            setUseCurrentLocation(false);
            geocodePostalCode();
            setIsLoadingLocation(false);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
        setUseCurrentLocation(false);
        setIsLoadingLocation(false);
      }
    } else {
      geocodePostalCode();
    }
  }, [useCurrentLocation]);

  const geocodePostalCode = () => {
    // Replace with actual logic if needed
    setLatitude(48.8566);
    setLongitude(2.3522);
    toast.info("Using default location.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (situation === "")
      return toast.error("The situation description is required.");
    if (dangerLevel === "") return toast.error("The danger level is required.");

    const helpCallData = {
      user_id: user._id,
      description: situation,
      degree_of_danger: dangerLevel,
      longitude,
      latitude,
      date: currentDate,
    };

    dispatch(CreateHelpCall(helpCallData));
  };

  useEffect(() => {
    if (isCreated) {
      toast.success("Help request submitted successfully!");
      setSituation("");
      setDangerLevel("");
    }
  }, [isCreated]);

  return (
    <form
      className="flex flex-col gap-3 py-8 w-[450px]"
      onSubmit={handleSubmit}
    >
      <ToastContainer theme="colored" position="top-center" />

      <TextField
        label="Situation Description"
        multiline
        rows={4}
        value={situation}
        onChange={(e) => setSituation(e.target.value)}
        required
      />

      <FormControl fullWidth required>
        <InputLabel>Danger Level</InputLabel>
        <Select
          value={dangerLevel}
          label="Danger Level"
          onChange={(e) => setDangerLevel(e.target.value)}
        >
          <MenuItem value="high">High</MenuItem>
          <MenuItem value="moderate">Medium</MenuItem>
          <MenuItem value="low">Low</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth required>
        <InputLabel>Use Current Location?</InputLabel>
        <Select
          value={useCurrentLocation ? "yes" : "no"}
          label="Use Current Location?"
          onChange={(e) => setUseCurrentLocation(e.target.value === "yes")}
        >
          <MenuItem value="yes">Yes</MenuItem>
          <MenuItem value="no">No (Use default location)</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Latitude"
        value={isLoadingLocation ? "" : latitude || "Not available"}
        disabled
        InputProps={{
          endAdornment: isLoadingLocation ? (
            <CircularProgress size={20} />
          ) : null,
        }}
      />

      <TextField
        label="Longitude"
        value={isLoadingLocation ? "" : longitude || "Not available"}
        disabled
        InputProps={{
          endAdornment: isLoadingLocation ? (
            <CircularProgress size={20} />
          ) : null,
        }}
      />

      <TextField label="Date" value={currentDate} disabled />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        disabled={isLoadingLocation || loading}
      >
        {!loading ? "Send Help Request" : <CircularProgress size={24} />}
      </Button>
    </form>
  );
};

export default HelpForm;
