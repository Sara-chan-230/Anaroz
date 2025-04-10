import { Button, Chip, Divider, CircularProgress } from "@mui/material";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  People,
  AttachMoney,
  Share,
  VolunteerActivism,
} from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Donate, Volunteer } from "../../Redux/APICalls/helpCall";

const CampaignPage = () => {
  const [amount, setAmount] = useState(null);
  const [open, setOpen] = useState(false);
  
  const {isDonate, isVolunteer, setLoadign} = useSelector((state)=>state.help);
  const {user} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAmount(null);
  };
  const { id } = useParams();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(amount === null) return toast.error("you Should spicify the amount");
    if(user.numberHopePieces < amount) return toast.error("Invalid Amout");
    dispatch(Donate({donationAmouth : amount, userDonated : user.id, campaignId : id}))
  }

  const handleVolunteer = ()=>{
    dispatch(Volunteer({userId : user.id, campaignId : id}))
  }



  return (
    <>
      <div className="flex flex-col">
        <ToastContainer theme="colored" position="top-center"/>
        <div className="mt-20 w-full pattern3 flex flex-col items-center bg-primaryLight min-h-[300px] pb-20 relative">
          <div className="w-full max-w-4xl px-6 py-20 text-center z-10">
            <h1 className="text-white text-3xl md:text-3xl font-bold mb-4">
              Flood Relief for Southern Morocco
            </h1>
            <p className="text-white/80 text-sm mb-8 max-w-2xl mx-auto">
              Every act of kindness creates ripples of change. Your support
              matters more than you know.
            </p>
            <Button
              variant="contained"
              onClick={handleClickOpen}
              sx={{
                background: "white",
                color: "black",
                fontWeight: "bold",
                boxShadow: "none",
                px: 2,
                py: 1,
                borderRadius: 1,
                "&:hover": {
                  background: "#f0f0f0",
                  transform: "translateY(-2px)",
                  boxShadow: 2,
                },
                transition: "all 0.2s ease",
              }}
            >
              Donate Now
            </Button>
          </div>

          {/* Absolute Positioned Donation Progress */}
          <div className=" absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-full max-w-4xl px-4">
            <div className="bg-blue-600 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6">
              {/* Progress Circle */}
              <div className="relative w-28 h-28 shrink-0">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeDasharray="100 100"
                    strokeDashoffset={100 - 60}
                    strokeLinecap="round"
                    transform="rotate(-90 18 18)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-white">60%</span>
                  <span className="text-sm text-white/90">Goal</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <div className="bg-white/10 hover:bg-white/15 p-4 rounded-lg flex items-center transition-all">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <People className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Donors</p>
                    <p className="text-xl font-bold text-white">1,248</p>
                  </div>
                </div>

                <div className="bg-white/10 hover:bg-white/15 p-4 rounded-lg flex items-center transition-all">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <VolunteerActivism className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Volunteers</p>
                    <p className="text-xl font-bold text-white">326</p>
                  </div>
                </div>

                <div className="bg-white/10 hover:bg-white/15 p-4 rounded-lg flex items-center transition-all">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <AttachMoney className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Raised</p>
                    <p className="text-xl font-bold text-white">24,560 HP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="mt-24 p-5 w-full">
          <div className="flex flex-col md:flex-row gap-8 px-4 lg:px-0 max-w-7xl mx-auto w-full relative">
            {/* Campaign Content - Left Side */}
            <div className="md:w-[70%]">
              <div className="flex flex-col gap-6 bg-white  p-6 ">
                {/* Campaign Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={require("../../Assets/Images/Logo/Sponsors/Doctors-without-borders.png")}
                      alt="Organization Avatar"
                      className="w-10 h-10 rounded-full border-2 border-gray-100"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Posted by:</span>
                      <span className="text-sm font-medium text-gray-700">
                        Moroccan Red Crescent
                      </span>
                    </div>
                  </div>
                </div>

                {/* Campaign Image */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    className="w-full h-auto max-h-[500px] object-cover"
                    src={require("../../Assets/Images/home/newsPaper.webp")}
                    alt="Flood relief efforts in Morocco"
                  />
                </div>

                <Chip
                  label="Disaster Relief"
                  className="font-medium px-3 py-1 text-sm w-fit bg-teal-100 text-teal-800 rounded-full"
                />

                {/* Campaign Description */}
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    In the wake of devastating floods that have affected the
                    southern regions of Morocco, many families have lost their
                    homes, and the community's infrastructure has been severely
                    damaged. This campaign aims to provide immediate relief,
                    including food, water, medicine, and temporary shelter,
                    while working on rebuilding efforts in the long term.
                  </p>
                </div>

                <Divider className="border-gray-100" />

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    onClick={handleClickOpen}
                    variant="contained"
                    size="large"
                    startIcon={<AttachMoney />}
                    className="font-semibold normal-case rounded-lg bg-teal-600 hover:bg-teal-700 w-full transition-colors"
                    disableElevation
                  >
                    Support the Cause
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Share />}
                    className="font-semibold normal-case rounded-lg border-gray-300 hover:bg-gray-50 w-full transition-colors"
                  >
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Combined Support Card - Right Side */}
            <div className="md:w-[30%] flex flex-col sticky top-6 h-fit">
              <div className="bg-white rounded-lg shadow-xl p-6 space-y-6">
                {/* Header */}
                <header className="text-center space-y-1">
                  <h3 className="font-bold text-2xl text-gray-900">
                    Join the Movement
                  </h3>
                  <p className="text-sm text-gray-500">
                    Make a difference today
                  </p>
                </header>

                {/* Donation Section */}
                <section className="p-5 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-full flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">
                      Fuel the Relief
                    </h4>
                  </div>

                  <p className="text-sm text-gray-700 mb-5">
                    Every contribution directly impacts families rebuilding
                    their lives after the disaster.
                  </p>

                  <div className="space-y-4">
                    <Button
                      fullWidth
                      variant="contained"
                      size="medium"
                      className="font-bold normal-case rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
                      disableElevation
                      onClick={handleClickOpen}
                    >
                      Donate Now
                    </Button>

                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-700">
                        Select your impact level:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { amount: 50, label: "Emergency Kit" },
                          { amount: 100, label: "Clean Water" },
                          { amount: 250, label: "Shelter Box" },
                          { amount: 500, label: "Family Support" },
                        ].map((option) => (
                          <button
                            key={option.amount}
                            onClick={(e) => {
                              handleClickOpen();
                              setAmount(option.amount);
                            }}
                            className="border-2 border-blue-100 hover:border-blue-300 p-3 rounded-lg transition-all"
                          >
                            <p className="font-bold text-blue-800">
                              {option.amount} HP
                            </p>
                            <p className="text-xs text-gray-600">
                              {option.label}
                            </p>
                          </button>
                        ))}
                      </div>
                      <Button
                        fullWidth
                        variant="outlined"
                        className="border-blue-300 text-blue-700 font-medium mt-2"
                        onClick={handleClickOpen}
                      >
                        Custom Amount
                      </Button>
                    </div>
                  </div>
                </section>

                {/* Volunteer Section */}
                <section className="p-5 bg-amber-50 rounded-lg border border-amber-100 ">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-100 rounded-full flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-amber-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">
                      Hands-On Help
                    </h4>
                  </div>

                  <p className="text-sm text-gray-700 mb-5">
                    Your time and skills can rebuild hope. Choose how you'd like
                    to contribute:
                  </p>

                  <div className="space-y-3">
                    <Button
                      fullWidth
                      variant="contained"
                      size="medium"
                      className="font-bold normal-case rounded-lg bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-colors"
                      disableElevation
                      onClick={()=>{handleVolunteer()}}
                    >
                      On-Site Volunteer
                    </Button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            fontSize: "1.25rem",
            fontWeight: 600,
            px: 3,
            pt: 3,
            pb: 1,
          }}
        >
          Add new Donation
        </DialogTitle>
        <DialogContent>
          <form onSubmit={(e)=>{handleSubmit(e)}} className="mt-5 w-[450px] flex flex-col gap-6">
            <TextField
              label="Number of Hope pieces"
              size="small"
              type="number"
              fullWidth
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
            <button className="w-full py-2 bg-primaryLight text-white rounded-md">
              {setLoadign? "Donate" : <CircularProgress />}
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CampaignPage;
