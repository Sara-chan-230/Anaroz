import NavSection from "../../Components/Sections/News/NavSection";
import Post from "../../Components/Cards/Post";
import RightBar from "../../Components/Sections/News/RightBar";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import Avatar from "@mui/material/Avatar";
import { useSelector , useDispatch} from "react-redux";
import { useState, useEffect } from "react";
import { getPosts } from "../../Redux/APICalls/postsCall";

const New = () => {
  const { posts } = useSelector((state) => state.posts);
  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [postsToRender, setPostsToRender] = useState(posts);
  const filterCampaigns = (cat) => {
    const newPosts = posts.filter((item) => {
      return item.category === cat;
    });
    setPostsToRender(newPosts);
  };
  useEffect(()=>{
    dispatch(getPosts());
  },[posts]);
  return (
    <div className="bg-lightBg grid relative w-screen">
      <NavSection />
      <main className="relative top-24">
        <div className="relative grid grid-cols-[20vw_auto_20vw] gap-x-8 px-8">
          <div className="sticky max-h-max top-20 ">
            <div className="bg-white p-4 rounded-md flex items-center gap-2">
              <div className="">
                <Avatar
                  sx={{ bgcolor: "#0866FF" }}
                  alt="Remy Sharp"
                  src="../../../Assets/Images/about/girl.jpg"
                />
              </div>
              <div>
                <h4 className="text font-semibold">Remy Sharp</h4>
                <p className="text-xs text-gray">Supporter</p>
              </div>
            </div>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "#FFFFFF",
                marginTop: "1rem",
                borderRadius: "0,5rem",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Main Menu
                </ListSubheader>
              }
            >
              <ListItemButton
                onClick={() => {
                  setPostsToRender(posts);
                }}
              >
                <ListItemIcon>
                  <HouseRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  filterCampaigns("news");
                }}
              >
                <ListItemIcon>
                  <NewspaperRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="News" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  filterCampaigns("memo");
                }}
              >
                <ListItemIcon>
                  <CampaignRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Memo" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  filterCampaigns("event");
                }}
              >
                <ListItemIcon>
                  <ColorLensRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="event" />
              </ListItemButton>
            </List>
          </div>
          <div className="space-y-8 pb-36">
            <Post />
            <Post />
            <Post />
          </div>
          <RightBar />
        </div>
      </main>
    </div>
  );
};

export default New;
