import { useState } from "react";
import PostItem from "./OrgPostItem.js";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddNewPost from "./AddNewPost.js";


const PostPage = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const organizationPosts = [
    {
      id: 1,
      content:
        "We've successfully rescued 15 people from the flooded area in the northern district. Thanks to all volunteers!",
      category: "Rescue",
      image:
        "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      createdAt: "2023-06-15T09:30:00Z",
      organization: {
        id: 101,
        name: "Rescue Team Alpha",
        logo: "https://via.placeholder.com/150/007bff/ffffff?text=RT",
      },
    },
    {
      id: 2,
      content:
        "Urgent: We need medical supplies at our central camp. Anyone who can help, please contact us immediately.",
      category: "Emergency",
      createdAt: "2023-06-14T14:15:00Z",
      organization: {
        id: 101,
        name: "Rescue Team Alpha",
        logo: "https://via.placeholder.com/150/007bff/ffffff?text=RT",
      },
    },
    {
      id: 3,
      content:
        "Monthly volunteer meeting scheduled for June 20th at 5 PM. All team members are required to attend.",
      category: "Announcement",
      image:
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      createdAt: "2023-06-10T08:00:00Z",
      organization: {
        id: 101,
        name: "Rescue Team Alpha",
        logo: "https://via.placeholder.com/150/007bff/ffffff?text=RT",
      },
    },
    {
      id: 4,
      content:
        "Weather alert: Heavy rains expected in the region for the next 3 days. All field operations postponed.",
      category: "Alert",
      createdAt: "2023-06-08T16:45:00Z",
      organization: {
        id: 101,
        name: "Rescue Team Alpha",
        logo: "https://via.placeholder.com/150/007bff/ffffff?text=RT",
      },
    },
  ];
  return (
    <>
      <div className="organization-feed ml-[15%] mt-24 p-8 flex flex-col gap-8 ">
        <div className="w-full flex justify-between items-center ">
        <h3 className="text-lg font-semibold text-black">Your Posts</h3>
          <Button
            onClick={handleClickOpen}
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
                backgroundColor: "primary.dark",
              },
              textTransform: "none",
              px: 3,
              py: 1,
              borderRadius: "5px",
              fontWeight: 500,
            }}
          >
            New Post
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {organizationPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
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
          Create new Post
        </DialogTitle>
        <DialogContent>
          <AddNewPost
            close={() => {
              handleClose();
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PostPage;
