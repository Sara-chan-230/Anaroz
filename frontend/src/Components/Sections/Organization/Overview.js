import Campaign from "./Campaign";
import Donors from "./Rapport";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import BackupTableRoundedIcon from "@mui/icons-material/BackupTableRounded";
import Grid from "@mui/material/Grid";

const Overview = () => {
  const stats = [
    {
      icon: <AttachMoneyRoundedIcon className="text-white/90 w-8 h-8" />,
      value: "300.000 HP",
      label: "Total Donations",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: <GroupRoundedIcon className="text-white/90 w-8 h-8" />,
      value: "2.000",
      label: "Total Donors",
      color: "from-purple to-indigo-500",
    },
    {
      icon: <CampaignRoundedIcon className="text-white/90 w-8 h-8" />,
      value: "20",
      label: "Total Campaigns",
      color: "from-pink-400 to-pink-500",
    },
    {
      icon: <BackupTableRoundedIcon className="text-white/90 w-8 h-8" />,
      value: "40",
      label: "Total Posts",
      color: "from-emerald-400 to-teal-500",
    },
  ];

  return (
    <div className="flex flex-col gap-8 mt-28 ml-[15%]">
      <div className="flex px-6 gap-6 items-end">
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Your Campaigns</h3>
          </div>
          <div className="flex gap-3">
            <Campaign />
            <Campaign />
            <Campaign />
          </div>
        </div>
        <Donors />
      </div>

      <div className="flex flex-col gap-4 p-6">
        <h3 className="text-lg font-semibold">Performance Overview</h3>
        <Grid container spacing={2}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <div
                className={`relative h-full flex flex-col p-6 bg-gradient-to-br ${stat.color} rounded-md overflow-hidden text-white `}
              >
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/10 to-transparent"></div>

                <div className="relative z-10 space-y-2">
                  <div className="p-2 bg-white/10 rounded-full w-fit backdrop-blur-sm">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-sm opacity-90">{stat.label}</p>

                  <div className="absolute top-2 right-4 text-white/15 font-bold text-xl">
                    $
                  </div>
                  <div className="absolute bottom-4 left-4 text-white/10 font-bold text-lg">
                    $
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Overview;
