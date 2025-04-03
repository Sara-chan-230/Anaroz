import Popover from "@mui/material/Popover";
import { useState } from "react";
import { motion } from "framer-motion";

const Rate = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <div
        className={`absolute ${props.place}`}
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <div className="flex justify-center items-center relative w-fit">
          <div
            style={{ backgroundImage: `url(${props.image})` }}
            className="h-[80px] w-[80px] z-30 rounded-full bg-cover relative"
          ></div>
          {/* Animated Circles */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={open ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            className="w-[150px] h-[150px] absolute bg-indigo-100 rounded-full"
          ></motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={open ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className="w-[130px] h-[130px] absolute bg-indigo-200 rounded-full"
          ></motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={open ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            className="w-[100px] h-[100px] absolute bg-indigo-300 rounded-full"
          ></motion.div>
        </div>
      </div>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: "none" }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className="w-80 bg-zinc-700 text-white rounded-md flex flex-col justify-center gap-2 p-4">
          <q className="italic text-sm">{props.description}</q>
          <span className="text-xs text-gray">{props.author}</span>
        </div>
      </Popover>
    </>
  );
};

export default Rate;
