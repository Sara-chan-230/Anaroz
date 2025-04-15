import Avatar from "@mui/material/Avatar";
import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

const SettingsPage = () => {
  const {org} = useSelector((state)=>state.orgauth)
  const [orgInfo, setOrgInfo] = useState({
    name: org.name,
    phone: org.phone,
    email: org.email,
    description: org.description,
  });
  const VisuallyHiddenInput = styled("input")({
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <div className="flex  mt-24 ml-[15%] p-8 gap-4">
      <div className="relative w-[40%] border border-gray flex flex-col gap-4 items-center justify-center bg-white pt-10 pb-6 px-6 rounded-md overflow-hidden">
        <Avatar
          sx={{ bgcolor: "#ba68c8", width: 100, height: 100 }}
          alt="Hope Bird"
          src={org.logo}
        />

        {/* User Info */}
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-lg font-semibold">{org.name}</h3>
          <span className="text-sm">Organization</span>
        </div>

        {/* Stats Section */}
        <div className="gap-2 justify-center items-center flex w-full max-w-xs text-center relative z-10">
          <div>
            <span className="block text-lg font-semibold">5</span>

            <span className="text-xs"> Campaings</span>
          </div>
          <Divider orientation="vertical" flexItem />
          <div>
            <span className="block text-lg font-semibold">8</span>
            <span className="text-xs">Posts</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <Button
            component="label"
            variant="contained"
            className="bg-blue-600 text-white hover:bg-blue-700"
            startIcon={<CloudUploadIcon />}
          >
            Change Logo
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
          <Button
            variant="outlined"
            className="border-red-500 text-red-500 hover:bg-red-50"
            startIcon={<DeleteIcon />}
          >
            Delete Logo
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-[60%]  p-8 border border-gray rounded-md">
        <h2 className="text-2xl font-semibold ">Edit Your Profile</h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="grid gap-6"
        >
          <TextField
            fullWidth
            label="Name"
            size="small"
            variant="outlined"
            value={orgInfo.orgName}
            onChange={(e) => {
              setOrgInfo({ ...orgInfo, orgName: e.target.value });
            }}
          />
          <TextField
            fullWidth
            label="Phone Number"
            size="small"
            type="tel"
            variant="outlined"
            value={orgInfo.phone}
            onChange={(e) => {
              setOrgInfo({ ...orgInfo, phone: e.target.value });
            }}
          />
          <TextField
            fullWidth
            label="Email"
            size="small"
            type="email"
            variant="outlined"
            value={orgInfo.email}
            onChange={(e) => {
              setOrgInfo({ ...orgInfo, email: e.target.value });
            }}
          />

          <TextField
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={orgInfo.about}
            onChange={(e) => {
              setOrgInfo({ ...orgInfo, about: e.target.value });
            }}
          />

          <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
