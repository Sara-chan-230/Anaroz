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
} from "@mui/material";
import PostPopup from "./PostPopup";

const Post = () => {
  // State and handlers remain the same
  const [open, setOpen] = useState(false);
  const [likes, setLikes] = useState(12);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "John Doe",
      text: "Lorem ipsum sit amet consectetur adipisicing elit. Maiores",
      avatar: "J",
    },
    {
      id: 2,
      user: "Daniele joj",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores",
      avatar: "D",
    },
  ]);
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
          overflow: "visible", // Changed to visible for ribbon
        }}
        onClick={handleOpen}
      >
        {/* <div className="">NEWS</div> */}

        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "#ba68c8" }}>H</Avatar>}
          title="Hope Bird"
          subheader="Two days ago"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="300"
          image={require("../../../Assets/Images/about/earthquake.webp")}
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

      {/* Dialog remains unchanged */}
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
