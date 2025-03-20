import Avatar from "@mui/material/Avatar";

const Post = () => {
  return (
    <div className="rounded-md bg-white">
      <div className="flex justify-between items-center">
        <div className="p-4 rounded-md flex items-center gap-2">
          <div className="">
            <Avatar
              sx={{ bgcolor: "#ba68c8" }}
              alt="Hope Bird"
              src="../../../Assets/Images/about/girl.jpg"
            />
          </div>
          <div>
            <h4 className="text font-semibold">Hope Bird</h4>
            <p className="text-xs text-gray">Two days ago</p>
          </div>
        </div>
        <div className="px-4 py-1 rounded-full text-xs bg-secondary text-white m-4">
          News
        </div>
      </div>
      <div className="m-4">
        <p className="text-xs text-zinc-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nemo
          esse. Officiis quia ab obcaecati similique, dolorum temporibus
          nesciunt voluptatem quo ipsam volupta....
        </p>
      </div>
      <div className="w-full max-h-[400px] overflow-hidden relative">
        <img
          className="w-full h-full object-cover"
          src={require("../../../Assets/Images/blogs/newspapaer.webp")}
          alt="Post"
        />
      </div>
      <div className="flex justify gap-8 items-center px-4 py-3 ">
        <button className="flex items-center gap-2 text-gray-600 hover:text-red-500">
          <i className="bi bi-heart-fill"></i>
          <span className="text-sm">12</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
          <i className="bi bi-chat-left-text"></i>
          <span className="text-sm">8</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-green-500">
          <i className="bi bi-share"></i>
          <span className="text-sm">5</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
