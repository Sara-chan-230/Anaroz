import { useState } from "react";
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ChatBubbleOutline as ChatIcon,
  Share as ShareIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
  Chip, 
} from "@mui/material";
import PostPopup from "./PostPopup";
import getPostTypeColor from "../../Utils/PostColor";


const Post = () => {
  const color = getPostTypeColor("news");
  const [open, setOpen] = useState(false);
  const [likes, setLikes] = useState(12);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: "100%",
          mb: 2,
          cursor: "pointer",
          boxShadow: "none",
          borderRadius: 2,
          position: "relative",
          overflow: "visible",
        }}
        onClick={handleOpen}
      >
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "#ba68c8" }}>H</Avatar>}
          title="Hope Bird"
          subheader="Two days ago"
        />

        <Chip
          label="disaster"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: {color},
            color: "#fff",
          }}
        />

        <CardContent sx={{padding : "20px"}}>
          <h3 className="tet-sm mb-2 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quisquam sapient</h3>
          <p className="text-xs leading-snug line-clamp-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi veritatis eaque aspernatur perferendis tenetur odio expedita vitae, sint minima doloremque quae a consectetur placeat voluptatem laudantium tempora quo porro amet!</p>
        </CardContent>
        <CardMedia
          component="img"
          height="300"
          image={require("../../Assets/Images/about/earthquake.webp")}
          alt="Post image"
        />
        <CardActions disableSpacing>
          <IconButton onClick={handleLike}>
            {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </IconButton>
          <Typography>{likes}</Typography>

          <IconButton sx={{ ml: 2 }}>
            <ChatIcon />
          </IconButton>
          <Typography>{comments.length}</Typography>

          <IconButton sx={{ ml: 2 }}>
            <ShareIcon />
          </IconButton>
          <Typography>5</Typography>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <PostPopup />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} startIcon={<CloseIcon />}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Post;
