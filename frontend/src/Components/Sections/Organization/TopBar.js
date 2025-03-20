import React from 'react'

const TopBar = () => {
  return (
    <div className="w-full p-4 flex justify-between items-end border-b border-gray bg-lightBg">
      <div className="flex gap-1 justify-center items-center">
        <img
          className="w-[30px]" 
          src={require("../../../Assets/Images/Logo/fav.png")}
          alt=""
        />
        <span className="text-2xl">ANaroz</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button className="px-4 h-8 text-sm text-white rounded-md bg-secondary">
          New Post
        </button>
        <button className="px-4 h-8 text-sm text-white rounded-md bg-secondary">
          New Campaign
        </button>
        <div className="w-8 h-8 bg-lightGray rounded-full flex items-center justify-center">
          <i class="bi bi-bell-fill text-lg"></i>
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <img
            className="w-full h-full rounded-full"
            src={require("../../../Assets/Images/about/news.webp")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar
