import { Avatar } from "@mui/material";

const PostItem = ({ post }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      

      <div className="flex ">
        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            style={{
              width: "50%",
              borderRadius: "8px",
              marginBottom: "12px",
            }}
          />
        )}
        <div className="p-4">
        <div
        style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}
      >
        <Avatar
          src={post.organization.logo}
          alt={post.organization.name}
          style={{ width: "40px", height: "40px", marginRight: "12px" }}
        />
        <div>
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>
            {post.organization.name}
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "12px", color: "#65676B" }}>
              12/03/4334
            </span>
            {/* Category label */}
            {post.category && (
              <span
                style={{
                  backgroundColor: "#e0f2fe",
                  color: "#0369a1",
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                {post.category}
              </span>
            )}
          </div>
        </div>
      </div>
        <p className="text-lg font-bold mb-4">{post.content}</p>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nostrum nulla doloremque fugiat magni sequi provident maiores saepe, tempore atque! Voluptatibus enim adipisci nisi incidunt molestias animi eveniet laudantium nulla.</p>
        </div>
      </div>

      {/* Post actions */}
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #ddd",
          paddingTop: "8px",
          color: "#65676B",
          fontSize: "14px",
        }}
      >
        <button
          style={{
            flex: 1,
            background: "none",
            border: "none",
            padding: "8px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          👍 Like
        </button>
        <button
          style={{
            flex: 1,
            background: "none",
            border: "none",
            padding: "8px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          💬 Comment
        </button>
        <button
          style={{
            flex: 1,
            background: "none",
            border: "none",
            padding: "8px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          ↗️ Share
        </button>
      </div>
    </div>
  );
};

export default PostItem;
