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

const PostPopup = ({ post }) => {
  const [likes, setLikes] = useState(post.liked_by.length || 0);
  const [liked, setLiked] = useState(false); // Optionally initialize based on current user
  const [comments, setComments] = useState(post.comments || []);
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
      {/* Header */}
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
              {new Date(post.date).toLocaleDateString()}
            </Typography>
          </Box>
        </Box>
        <Chip label={post.type} color="secondary" size="small" />
      </Box>

      {/* Title & Content */}
      <Box sx={{ my: 3 }}>
        <h3 className="tet-sm mb-2 font-bold">{post.title}</h3>
        <p className="text-xs leading-snug line-clamp-2">{post.content}</p>
      </Box>

      {/* Image */}
      <Box sx={{ width: "100%", mt: 2, mb: 3 }}>
        <img
          style={{ width: "100%", borderRadius: 8 }}
          src={post.photo}
          alt="Post"
        />
      </Box>

      {/* Actions */}
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

      {/* Add Comment */}
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          InputProps={{ sx: { borderRadius: 4 } }}
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
            {comments.map((comment, index) => (
              <Box key={index} sx={{ display: "flex", gap: 2 }}>
                <Avatar sx={{ bgcolor: "#ba68c8" }}>
                  {comment.avatar || comment.user?.[0] || "?"}
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
    </div>
  );
};

export default PostPopup;
