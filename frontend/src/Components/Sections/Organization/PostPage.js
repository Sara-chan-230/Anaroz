import { useEffect, useState } from "react";
import PostItem from "./OrgPostItem.js";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddNewPost from "./AddNewPost.js";
import { useSelector, useDispatch } from "react-redux";
import { getPostsByOrganizationId } from "../../../Redux/APICalls/postsCall.js";

const PostPage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { org } = useSelector((state) => state.orgauth);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
      dispatch(getPostsByOrganizationId(org._id));
  }, [dispatch, org._id]);
  return (
    <>
      {
        posts? (
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
          {posts.map((poste) => (
            <PostItem key={poste.id} post={poste} />
          ))}
        </div>
      </div>
        ): (
           <div>unkhoue</div>
        )
      }
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
