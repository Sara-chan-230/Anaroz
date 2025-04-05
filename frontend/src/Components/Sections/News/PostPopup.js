import { Chip } from "@mui/material";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import {
  Send as SendIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ChatBubbleOutline as ChatIcon,
  Share as ShareIcon,
} from "@mui/icons-material";
import { useState } from "react";

const PostPopup = () => {
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
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar sx={{ bgcolor: "#ba68c8" }}>H</Avatar>
          <Box>
            <Typography fontWeight="bold">Hope Bird</Typography>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nemo
          esse.
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
            {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
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
                <Avatar sx={{ bgcolor: "#ba68c8" }}>{comment.avatar}</Avatar>
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
    </div>
  );
};

export default PostPopup;
