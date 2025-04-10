import { useState } from "react";
import Box from "@mui/material/Box";
import { Divider, Avatar, IconButton, Button } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const AboutCampaign = (campaign) => {
  const [value, setValue] = useState("1");
  const [hasVolunteerApplications, setHasVolunteerApplications] =
    useState(true); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const volunteerApplications = hasVolunteerApplications
    ? [
        {
          id: 1,
          name: "Alex Johnson",
          phone: "+1 (555) 123-4567",
          email: "alex.johnson@example.com",
          avatar: "AJ",
          applicationDate: "2 days ago",
        },
        {
          id: 2,
          name: "Sarah Miller",
          phone: "+1 (555) 987-6543",
          email: "sarah.m@example.com",
          avatar: "SM",
          applicationDate: "1 week ago",
        },
        {
          id: 3,
          name: "Mohammed Ali",
          phone: "+1 (555) 456-7890",
          email: "m.ali@example.com",
          avatar: "MA",
          applicationDate: "3 weeks ago",
        },
      ]
    : [];

  return (
    <Box sx={{ width: 450, p: 3, borderRadius: 2, boxShadow: 1 }}>
      <div className="flex flex-col gap-4">
        <img
          className="rounded-lg w-full object-cover"
          src={require("../../../Assets/Images/about/earthquake.webp")}
          alt="Campaign"
        />

        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">
            Homes of Hope – Rebuilding Lives Together
          </h3>
          <div className="relative w-14 h-14 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="2"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#0866FF"
                strokeWidth="2"
                strokeDasharray="100 100"
                strokeDashoffset={100 - 80}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
            </svg>
            <span className="absolute text-sm font-semibold text-gray-700">
              80%
            </span>
          </div>
        </div>

        <div className="bg-lightBg w-full h-2 rounded-sm">
          <div className="bg-primaryLight w-[20%] h-full rounded-sm"></div>
        </div>
        <div className="bg-lightBg flex justify-around rounded-lg w-full p-2">
          <div className="flex flex-col justify-center items-center">
            <span className="text-xs text-zinc-400">Raised</span>
            <span className="text-sm">4.000$</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-xs text-zinc-400">Goal</span>
            <span className="text-sm">20.000$</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-xs text-zinc-400">Left</span>
            <span className="text-sm">16.000$</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-xs text-zinc-400">Donors</span>
            <span className="text-sm">16</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<EditIcon />}
            sx={{
              textTransform: "none",
              borderRadius: 1,
              px: 2,
              py: 1,
              boxShadow: "none",
            }}
          >
            Edit Campaign
          </Button>
          <IconButton
            color="primary"
            sx={{ border: "1px solid", borderColor: "primary.main" }}
          >
            <ShareIcon fontSize="small" />
          </IconButton>
        </div>

        <Divider />

        {/* Tabs */}
        <Box sx={{ width: "100%" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
                <Tab
                  label="Description"
                  value="1"
                  sx={{ textTransform: "none" }}
                />
                <Tab
                  label={`Volunteers (${volunteerApplications.length})`}
                  value="2"
                  sx={{ textTransform: "none" }}
                  disabled={!hasVolunteerApplications}
                />
              </TabList>
            </Box>

            <TabPanel value="1" sx={{ p: 0, pt: 2 }}>
              <p className="text-gray-700">
                Join our volunteer team to help rebuild homes for families
                affected by the earthquake. We need skilled and unskilled
                volunteers for various tasks including construction, cleaning,
                and community support. Your time and effort will make a real
                difference.
              </p>
            </TabPanel>

            <TabPanel value="2" sx={{ p: 0, pt: 2 }}>
              {hasVolunteerApplications ? (
                <div className="space-y-4">
                  {volunteerApplications.map((applicant) => (
                    <div
                      key={applicant.id}
                      className="flex flex-col gap-3 p-4 border border-gray rounded-md"
                    >
                      <div className="flex items-start gap-3">
                        <Avatar
                          sx={{
                            bgcolor: "primary.main",
                            width: 44,
                            height: 44,
                            fontSize: "0.875rem",
                            fontWeight: 600,
                          }}
                        >
                          {applicant.avatar}
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-900 text-base">
                                {applicant.name}
                              </h4>
                              <p className="text-xs text-gray-500 mt-0.5">
                                Applied {applicant.applicationDate}
                              </p>
                            </div>
                            <IconButton
                              size="small"
                              sx={{ color: "text.secondary" }}
                            >
                            </IconButton>
                          </div>

                          <div className="mt-3 space-y-2">
                            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                              <PhoneIcon fontSize="small" color="primary" />
                              <span className="text-sm text-gray-700">
                                {applicant.phone}
                              </span>
                              <IconButton
                                size="small"
                                sx={{ ml: "auto", p: 0.5 }}
                              >
                                <ContentCopyIcon fontSize="small" />
                              </IconButton>
                            </div>

                            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                              <EmailIcon fontSize="small" color="primary" />
                              <span className="text-sm text-gray-700">
                                {applicant.email}
                              </span>
                              <IconButton
                                size="small"
                                sx={{ ml: "auto", p: 0.5 }}
                              >
                                <ContentCopyIcon fontSize="small" />
                              </IconButton>
                            </div>
                          </div>
                        </div>
                      </div>

                      
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                  <PersonIcon fontSize="large" />
                  <p className="mt-2 text-center">
                    No volunteer applications yet
                  </p>
                  <p className="text-sm text-center mt-1">
                    No one has applied to volunteer for this campaign
                  </p>
                </div>
              )}
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </Box>
  );
};

export default AboutCampaign;
