import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Chip } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ChatBubbleOutline as ChatIcon,
  Share as ShareIcon,
  Close as CloseIcon,
  Send as SendIcon,
} from "@mui/icons-material";


const Post = () => {
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
  const [newComment, setNewComment] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const addComment = () => {
    if (newComment.trim() !== "") {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          user: "You",
          text: newComment,
          avatar: "Y",
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <>
      {/* Post Card (Click to Open Popup) */}
      <Card
        sx={{
          maxWidth: "100%",
          mb: 2,
          cursor: "pointer",
          boxShadow: "none",
          borderRadius: 2,
          position: "relative",
        }}
        onClick={handleOpen}
      >
        {/* Folded Corner Ribbon */}
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: -20,
            width: "100px",
            height: "28px",
            backgroundColor: "#ba68c8",
            background: "linear-gradient(135deg, #ba68c8 0%, #8e44ad 100%)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.75rem",
            fontWeight: "bold",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            transform: "rotate(45deg)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
            zIndex: 1,
            "&:before": {
              content: '""',
              position: "absolute",
              left: "-15px",
              bottom: 0,
              width: 0,
              height: 0,
              borderRight: "15px solid #7d3c98",
              borderTop: "14px solid transparent",
              borderBottom: "14px solid transparent",
              filter: "brightness(0.8)",
            },
            "&:after": {
              content: '""',
              position: "absolute",
              right: "-15px",
              bottom: 0,
              width: 0,
              height: 0,
              borderLeft: "15px solid #7d3c98",
              borderTop: "14px solid transparent",
              borderBottom: "14px solid transparent",
              filter: "brightness(0.8)",
            },
            "& span": {
              textShadow: "0 1px 1px rgba(0,0,0,0.2)",
              transform: "translateX(2px)",
            },
          }}
        >
          <span>NEWS</span>
        </Box>

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#ba68c8" }} aria-label="user">
              H
            </Avatar>
          }
          title="Hope Bird"
          subheader="Two days ago"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            nemo esse.
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          height="300"
          image={require("../../../Assets/Images/about/earthquake.webp")}
          alt="Post image"
        />

        <CardActions disableSpacing>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              aria-label="like"
              onClick={(e) => {
                e.stopPropagation();
                toggleLike();
              }}
            >
              {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
            </IconButton>
            <Typography variant="body2">{likes}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 2 }}>
            <IconButton aria-label="comment">
              <ChatIcon />
            </IconButton>
            <Typography variant="body2">{comments.length}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 2 }}>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <Typography variant="body2">5</Typography>
          </Box>
        </CardActions>
      </Card>

      {/* Popup (MUI Dialog) */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: "none",
            border: "1px solid",
            borderColor: "divider",
            position: "relative",
            overflow: "hidden",
          },
        }}
      >
        <DialogContent sx={{ p: 3 }}>
          {/* Post Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap:1 }}>
              <Avatar sx={{ bgcolor: "#ba68c8" }}>H</Avatar>
              <Box>
                <Typography fontWeight="bold">
                  Hope Bird
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Two days ago
                </Typography>
              </Box>
            </Box>
            <Chip label="News" color="secondary" size="small" />
          </Box>
          {/* Post Content */}
          <Box sx={{ my: 3 }}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              nemo esse.
            </Typography>
          </Box>

          {/* Image */}
          <Box sx={{ width: "100%", mt: 2, mb: 3 }}>
            <img
              style={{ width: "100%", borderRadius: 8 }}
              src={require("../../../Assets/Images/about/earthquake.webp")}
              alt="Post"
            />
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: 3, alignItems: "center", py: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton onClick={toggleLike}>
                {liked ? (
                  <FavoriteIcon color="error" />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
              <Typography variant="body2">{likes}</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton>
                <ChatIcon />
              </IconButton>
              <Typography variant="body2">{comments.length}</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton>
                <ShareIcon />
              </IconButton>
              <Typography variant="body2">5</Typography>
            </Box>
          </Box>

          <Divider />

          {/* Comment Input */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 3 }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              InputProps={{
                sx: { borderRadius: 4 },
              }}
            />
            <IconButton
              color="primary"
              onClick={addComment}
              disabled={!newComment.trim()}
              sx={{
                bgcolor: "primary.main",
                color: "white",
                "&:hover": { bgcolor: "primary.dark" },
                "&:disabled": { bgcolor: "action.disabledBackground" },
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>

          {/* Comments Section */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Comments
            </Typography>

            {comments.length > 0 ? (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {comments.map((comment) => (
                  <Box key={comment.id} sx={{ display: "flex", gap: 2 }}>
                    <Avatar sx={{ bgcolor: "#ba68c8" }}>
                      {comment.avatar}
                    </Avatar>
                    <Box
                      sx={{
                        bgcolor: "action.hover",
                        p: 2,
                        borderRadius: 2,
                        flexGrow: 1,
                      }}
                    >
                      <Typography fontWeight="bold">{comment.user}</Typography>
                      <Typography variant="body2">{comment.text}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", py: 2 }}
              >
                No comments yet. Be the first to comment!
              </Typography>
            )}
          </Box>
        </DialogContent>

        {/* Close Button */}
        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={handleClose}
            startIcon={<CloseIcon />}
            sx={{ borderRadius: 4 }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Post;
