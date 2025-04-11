import Avatar from "@mui/material/Avatar";
import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";

const ProfilSection = () => {
    const {user} = useSelector((state)=>state.auth)
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

  const handleDeleteAvatar = () => {
    toast.success('Avatar deleted successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    
    // Add your actual avatar deletion logic here
    console.log("Avatar deleted");
  };

  return (
    <div className="relative w-full mt-24 flex flex-col gap-4 items-center justify-center bg-white pt-10 pb-6 px-6 rounded-md overflow-hidden">
      <ToastContainer />
      <Avatar
        sx={{ bgcolor: "#ba68c8", width: 100, height: 100 }}
        alt="Hope Bird"
        src={user.photo}
      />

      {/* User Info */}
      <div className="flex flex-col items-center gap-1">
        <h3 className="text-lg font-semibold">{user.full_name}</h3>
        <span className="text-sm">{user.rule}</span>
      </div>

      <div className="absolute top-6 left-6 w-8 h-8 bg-pink-500 rounded-full opacity-30"></div>
      <div className="absolute top-12 right-12 w-10 h-10 bg-blue-500 transform rotate-45 opacity-20"></div>
      <div className="absolute bottom-6 right-6 w-8 h-8 bg-yellow-500 opacity-25 rounded-md"></div>
      <div className="absolute bottom-10 left-10 w-10 h-10 bg-green-400 rounded-lg opacity-20"></div>
      <div className="absolute top-18 right-8 w-6 h-6 bg-purple rounded-full opacity-15"></div>
      <div className="absolute top-20 left-16 w-12 h-12 bg-red opacity-10"></div>
      <div className="absolute bottom-4 left-24 w-8 h-8 bg-indigo-400 opacity-25"></div>
      <div className="absolute top-24 right-16 w-6 h-6 bg-teal-500 rounded-md opacity-15"></div>
      <div className="absolute top-2 right-2 w-8 h-8 bg-orange-500 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-14 w-6 h-6 bg-pink-700 opacity-15"></div>
      <div className="absolute top-22 left-8 w-10 h-10 bg-amber-400 rounded-full opacity-20"></div>

      {/* Stats Section */}
      <div className="gap-2 justify-center items-center flex w-full max-w-xs text-center relative z-10">
        <div>
          <span className="block text-lg font-semibold">80</span>
          <span className="text-xs">Contributions</span>
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
          <span className="block text-lg font-semibold">78</span>
          <span className="text-xs">Donations</span>
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
          <span className="block text-lg font-semibold">2</span>
          <span className="text-xs">Volunteering</span>
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
          Change Avatar
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
          onClick={handleDeleteAvatar}
        >
          Delete Avatar
        </Button>
      </div>
    </div>
  );
};

export default ProfilSection;