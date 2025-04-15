import { TextField, InputAdornment } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import {CircularProgress} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateCampaign } from "../../../Redux/APICalls/campaignsCall";
import { toast, ToastContainer } from "react-toastify";

const AddNewCampaign = () => {
  const [category, setcategory] = useState("");
  const [title, settitle] = useState("");
  const [budjet, setbudjet] = useState(null);
  const [max_volunteers, setmax_volunteers] = useState(null);
  const [fileName, setFileName] = useState("");
  const [image, setImage] = useState(null);
  const [isVolunteering, setIsVolunteering] = useState(false);
  const [description, setdescription] = useState("");
  const dispatch = useDispatch;
  const { isCampaignCreated, loading } = useSelector(
    (state) => state.campaigns
  );
  const {org} = useSelector((state)=>state.orgauth);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(event.target.file[0]);
    if (file) {
      setFileName(file.name);
    }
  };

  const handleChange = (event) => {
    setcategory(event.target.value);
  };

  const handleToggle = () => {
    setIsVolunteering((prev) => !prev);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim()==="") return toast.error("the title is required");
    if(budjet === null) return toast.error("the Budjet is Required");
    if(description == "") return toast.error("the description is required");
    if(image == null) return toast.error("the Image is Required ")
    dispatch(
      CreateCampaign({category :  category, Title : title, budjet :  budjet, description:  description, cImage : image, max_volunteers :  max_volunteers, organisation_id : org._id })
    )
  };

  useEffect(() => {
  }, [isCampaignCreated]);
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="mt-5 w-[450px] flex flex-col gap-6"
    >
      <ToastContainer theme="colored" position="top-center" />
      <TextField
        label="Campaign Title"
        size="small"
        fullWidth
        value={title}
        onChange={(e) => {
          settitle(e.target.value);
        }}
      />
      <TextField
        value={budjet}
        onChange={(e) => {
          setbudjet(e.target.value);
        }}
        label="Campaign Budget"
        type="number"
        size="small"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img
                src={require("../../../Assets/Images/Logo/Hope-piece.png")}
                alt="hope icon"
                style={{ width: 18, height: 18 }}
              />
            </InputAdornment>
          ),
        }}
      />
      <FormControl fullWidth size="small">
        <InputLabel>category</InputLabel>
        <Select
          value={category}
          label="Category"
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="education">📚 Education</MenuItem>
          <MenuItem value="health">🏥 Health & Medical</MenuItem>
          <MenuItem value="disaster">🚨 Disaster Relief</MenuItem>
          <MenuItem value="environment">
            🌿 Environment & Sustainability
          </MenuItem>
          <MenuItem value="food">🍲 Food & Hunger</MenuItem>
          <MenuItem value="housing">🏠 Housing & Shelter</MenuItem>
          <MenuItem value="animals">🐾 Animal Welfare</MenuItem>
          <MenuItem value="rights">
            ✊ Human Rights & Social Justice
          </MenuItem>
          <MenuItem value="community">🤝 Community Development</MenuItem>
          <MenuItem value="arts">🎭 Arts & Culture</MenuItem>
        </Select>
      </FormControl>
      <div className="flex items-center justify-center gap-3">
        <TextField
          value={max_volunteers}
          onChange={(e) => {
            setmax_volunteers(e.target.value);
          }}
          label="Max Volunteers"
          type="number"
          size="small"
          fullWidth
          disabled={!isVolunteering}
        />
        <FormControlLabel
          control={<Switch checked={isVolunteering} onChange={handleToggle} />}
          label="Volunteering"
        />
      </div>
      <label className="h-56 bg-lightBg w-full flex flex-col items-center justify-center gap-4 cursor-pointer border-2 border-dashed border-gray p-6 rounded-lg hover:bg-slate-100 transition">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 fill-zinc-500"
            viewBox="0 0 24 24"
          >
            <path
              fill=""
              d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>

        <div className="text-center">
          <span className="text-zinc-500 font-medium">
            {fileName || "Click to upload image"}
          </span>
        </div>

        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>
      <TextField
        value={description}
        onChange={(e) => {
          setdescription(e.target.value);
        }}
        label="Description"
        fullWidth
        multiline
        rows={4}
      />

      <button className="w-full py-2 bg-primaryLight text-white rounded-md">
        {loading ? <CircularProgress /> : "Create Campaign"}
      </button>
    </form>
  );
};

export default AddNewCampaign;
