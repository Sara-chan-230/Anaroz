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

const Post = ({ postData }) => {
  const color = getPostTypeColor(postData.type);
  const [open, setOpen] = useState(false);
  const [likes, setLikes] = useState(postData.liked_by.length || 0);
  const [liked, setLiked] = useState(false); // Optionally compare with user ID
  const [comments, setComments] = useState(postData.comments || []);

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
          avatar={
            <Avatar
              alt="organization"
              className="w-10 h-10 border-white"
            />
          }
          title="Hope Bird"
          subheader={new Date(postData.date).toLocaleDateString()}
        />

        <Chip
          label={postData.type}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: color,
            color: "#fff",
            textTransform: "capitalize",
          }}
        />

        <CardContent sx={{ padding: "20px" }}>
          <h3 className="text-sm mb-2 font-bold">{postData.title}</h3>
          <p className="text-xs leading-snug line-clamp-2">{postData.content}</p>
        </CardContent>

        <CardMedia
          component="img"
          height="300"
          image={postData.photo}
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
          <PostPopup post={postData} />
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